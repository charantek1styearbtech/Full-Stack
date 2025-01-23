require('dotenv').config();
const {createClient}=require('redis');
const {computeEmbedding}= require('./sentence');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const Data = require('./userModel');
const cosineSimilarity = require('compute-cosine-similarity');
const cron = require('node-cron');
const app = express();

const port = process.env.PORT || 3000;

const corsOptions = {
    origin: process.env.REACT_APP_FRONTEND_URL,
    methods: ['GET', 'POST'],
    credentials: true,
};


const client = createClient({
  username: 'default',
  password: process.env.REACT_APP_REDIS_PASSWORD,
  socket: {
      host: process.env.REACT_APP_REDIS_HOST,
      port: process.env.REACT_APP_REDIS_PORT,
  },
});

app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));


client.connect()
  .then(() => {
      console.log('Connected to Redis');
  })
  .catch((err) => {
      console.error('Error connecting to Redis:', err);
  });
client.on('error', (err) => {
  console.error('Redis Client Error:', err);
});

client.on('end', () => {
  console.log('Redis connection closed');
});

const updateCache = async () => {
  try {
    const cachedQuestions = await Data.find().sort({frequency:-1}).limit(7);
    await client.del('TopQuestions');
    const stringified=JSON.stringify(cachedQuestions);
    await client.set('TopQuestions',stringified);
  } catch (error) {
    console.error('Error Updating Cache', error);
  }
};

cron.schedule('*/30 * * * *', () => updateCache());

app.post('/addtoDB', async (req, res) => {
  try {
    const { inputText, outputText } = req.body;
    if (!inputText) {
      return res.status(200).json({ message: 'No input provided' });
    }

    const embedding = await computeEmbedding(inputText);
    if (!embedding || !Array.isArray(embedding)) {
      throw new Error('Invalid embedding format');
    }

    const data = await Data.find();
    let bestMatch = null;
    let bestSimilarity = 0;
    const threshold = 0.8;

    for (const dt of data) {
      if (!dt.embedding || !Array.isArray(dt.embedding)) continue;
      
      try {
        const similarity = cosineSimilarity(embedding, dt.embedding);
        if (similarity > bestSimilarity) {
          bestSimilarity = similarity;
          bestMatch = dt;
        }
      } catch (error) {
        console.error('Error calculating similarity:', error);
        continue;
      }
    }

    if (bestMatch && bestSimilarity >= threshold) {
      bestMatch.frequency += 1;
      await bestMatch.save();
      return res.status(200).json({ 
        message: 'Question already exists, frequency updated', 
        data: bestMatch 
      });
    }

    const newData = new Data({
      message: inputText,
      reply: outputText,
      embedding: embedding,
      frequency: 1,
    });

    await newData.save();
    res.status(200).json({ 
      message: 'New question added successfully', 
      data: newData 
    });
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/questions',async (req, res) => {

  try{
    const cachedQuestions= await client.get('TopQuestions');
    if(cachedQuestions)
    {
      const parsedQuestions=JSON.parse(cachedQuestions);
      res.status(200).json(parsedQuestions);
    }
    else{
      console.log('No Questions found');
      res.status(404).send('No Question Found on Cache');
    }
  }
  catch(error)
  {
    console.log('Error Fetching');
    res.status(500).send('Internal Serevr Error');
  }
});

app.listen(port, () => {
  console.log('Server is running');
});
