import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import analysisRouter from "./routes/analysis.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// ✅ Allow all CORS origins (so any device/frontend can access)
app.use(
  cors({
    origin: "*", // or specify ["https://your-frontend.netlify.app"]
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

// ✅ Middleware to parse JSON
app.use(express.json());

// ✅ Serve uploaded images (if any)
app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));

// ✅ API routes
app.use("/api/analysis", analysisRouter);

// ✅ Health check
app.get("/api/health", (req, res) => res.json({ status: "ok" }));

// ✅ MongoDB connection
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/cropdb";

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB at", MONGO_URI);
    const port = process.env.PORT || 5000;
    app.listen(port, () =>
      console.log(`🚀 Server running at http://localhost:${port}`)
    );
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  });
