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

// ✅ Robust Middlewares
app.use(cors({ origin: true, credentials: true })); // allow cross-origin requests
app.use(express.json({ limit: '10mb' })); // parse JSON bodies safely
app.use(express.urlencoded({ extended: true, limit: '10mb' })); // parse form data

// ✅ Serve uploaded images statically
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

// ✅ Basic logging for debugging
app.use((req, res, next) => {
  console.log(`➡️  ${req.method} ${req.url}`);
  console.log('Request Body:', req.body);
  next();
});

// ✅ API Routes
app.use('/api/analysis', analysisRouter);

// ✅ Health check route
app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

// ✅ MongoDB Connection
const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://ravisekharreddy5419_db_user:msdproject123@cluster0.qffzxow.mongodb.net/?appName=Cluster0';

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('✅ Connected to MongoDB at', MONGO_URI);
    const port = process.env.PORT || 5000;
    app.listen(port, () => console.log(`🚀 Server running on port ${port}`));
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
  });
