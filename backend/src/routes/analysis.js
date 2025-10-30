import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import Analysis from '../models/Analysis.js';
import { fileURLToPath } from 'url';

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure uploads directory exists
const uploadsDir = path.join(__dirname, '..', '..', 'uploads');
if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir, { recursive: true });

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadsDir),
  filename: (req, file, cb) => {
    const timestamp = Date.now();
    const safeName = file.originalname
      .replace(/\s+/g, '_')
      .replace(/[^a-zA-Z0-9._-]/g, '');
    cb(null, `${timestamp}_${safeName}`);
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
  fileFilter: (req, file, cb) => {
    if (!file.mimetype.startsWith('image/')) return cb(new Error('Only image files are allowed'));
    cb(null, true);
  }
});

/**
 * POST /api/analysis
 * Accepts JSON or multipart/form-data with optional image
 */
router.post('/', upload.single('image'), async (req, res) => {
  try {
    console.log('--- Incoming Request ---');
    console.log('req.body:', req.body);
    console.log('req.file:', req.file);

    const {
      cropName = '',
      diseaseDetected = '',
      confidence = 0,
      severity = '',
      description = '',
      fertilizer,
      pesticide,
      organic
    } = req.body;

    // Corrected helper: parse JSON arrays safely
    const parseArrayField = (value) => {
      if (!value) return [];
      try {
        return typeof value === 'string' ? JSON.parse(value) : value;
      } catch (err) {
        console.warn('Failed to parse array field:', value);
        return [];
      }
    };

    const newAnalysis = new Analysis({
      cropName,
      diseaseDetected,
      confidence: Number(confidence),
      severity,
      description,
      fertilizer: parseArrayField(fertilizer),
      pesticide: parseArrayField(pesticide),
      organic: parseArrayField(organic),
      createdAt: new Date()
    });

    if (req.file) {
      newAnalysis.imagePath = `/uploads/${req.file.filename}`;
    }

    const saved = await newAnalysis.save();
    console.log('✅ Analysis saved:', saved);
    res.status(201).json(saved);
  } catch (err) {
    console.error('❌ Error saving analysis:', err);
    res.status(500).json({ error: err.message || 'Server error' });
  }
});

/**
 * GET /api/analysis
 * List recent analyses (optional ?limit=)
 */
router.get('/', async (req, res) => {
  try {
    const limit = Math.min(100, Number(req.query.limit) || 50);
    const rows = await Analysis.find()
      .sort({ createdAt: -1 })
      .limit(limit)
      .exec();
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * GET /api/analysis/:id
 * Fetch a single analysis by ID
 */
router.get('/:id', async (req, res) => {
  try {
    const doc = await Analysis.findById(req.params.id).exec();
    if (!doc) return res.status(404).json({ error: 'Not found' });
    res.json(doc);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * DELETE /api/analysis/:id
 * Delete analysis and associated image
 */
router.delete('/:id', async (req, res) => {
  try {
    const doc = await Analysis.findById(req.params.id).exec();
    if (!doc) return res.status(404).json({ error: 'Not found' });

    // Remove image file if exists
    if (doc.imagePath) {
      const filename = path.basename(doc.imagePath);
      const filePath = path.join(uploadsDir, filename);
      fs.unlink(filePath, (err) => {
        if (err && err.code !== 'ENOENT') console.warn('Failed to delete image file', err);
      });
    }

    await doc.deleteOne();
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
