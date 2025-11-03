import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import analysisRouter from './routes/analysis.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// ✅ Allow requests from your Netlify or other frontend
app.use(cors({
  origin: [
    'https://your-frontend.netlify.app',
    'http://localhost:5173',
    'http://localhost:3000'
  ],
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// ✅ Serve uploaded files
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

// ✅ API routes
app.use('/api/analysis', analysisRouter);

// ✅ Health check route
app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

// ✅ MongoDB Connection
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/cropdb';

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB');
    const port = process.env.PORT || 5000;
    app.listen(port, () => console.log(`🚀 Server running on port ${port}`));
  })
  .catch(err => console.error('❌ MongoDB connection error:', err));
