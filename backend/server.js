require('dotenv').config();
const {computeEmbedding}= require('./sentence');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const Data = require('./userModel');
const cosineSimilarity = require('compute-cosine-similarity');
const cron = require('node-cron');
const app = express();

// Configure CORS to allow requests from your frontend
const corsOptions = {
    origin: `${process.env.REACT_APP_FRONTEND_URL}`, // Replace with your frontend URL
    methods: ['GET', 'POST'], // Specify the methods you want to allow
    credentials: true,
};

app.use(cors(corsOptions)); // Use the CORS middleware with the specified options

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

let cachedQuestions = [];

const fetchQuestionsFromDB = async () => {
  try {
    cachedQuestions = await Data.find().sort({frequency:-1}).limit(7);
  } catch (error) {
    console.error('Error fetching questions:', error);
  }
};

cron.schedule('*/30 * * * *', () => fetchQuestionsFromDB());

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

app.post('/questions', async (req, res) => {
  // Check if cachedQuestions is empty
  if (cachedQuestions.length === 0) {
    try {
      console.log('questions fetched');
      await fetchQuestionsFromDB();
    } catch (error) {
      console.error('Error fetching questions from DB:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }
  console.log('Not fecthed');
  // Send the cached questions
  res.status(200).json(cachedQuestions);
});

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
