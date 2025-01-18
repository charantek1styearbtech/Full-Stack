require('dotenv').config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

async function computeEmbedding(text) {
    try {
        // Use the embedding API key from environment variables
        const genAI = new GoogleGenerativeAI(process.env.REACT_APP_EMBEDDING_KEY);
        const model = genAI.getGenerativeModel({ model: "embedding-001" });
        
        const result = await model.embedContent(text);
        
        return result['embedding']['values'];
    } catch (error) {
        console.error('Error computing embedding:', error);
        throw error;
    }
}

module.exports = { computeEmbedding };