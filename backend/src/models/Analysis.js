import mongoose from 'mongoose';

const treatmentSchema = new mongoose.Schema({
  type: { type: String, required: true }, // 'fertilizer', 'pesticide', or 'organic'
  name: { type: String, required: true },
  dosage: { type: String },
  application: { type: String },
  timing: { type: String },
}, { _id: false }); // _id false if you don't want Mongo to generate an _id for each subdoc

const analysisSchema = new mongoose.Schema({
  cropName: { type: String },
  diseaseDetected: { type: String },
  confidence: { type: Number },
  severity: { type: String },
  description: { type: String },
  fertilizer: { type: [treatmentSchema], default: [] },
  pesticide: { type: [treatmentSchema], default: [] },
  organic: { type: [treatmentSchema], default: [] },
  symptoms: { type: String },
  imagePath: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Analysis', analysisSchema);
