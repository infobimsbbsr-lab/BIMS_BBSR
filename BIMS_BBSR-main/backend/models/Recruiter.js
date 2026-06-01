import mongoose from 'mongoose';

const recruiterSchema = mongoose.Schema({
  name: { type: String, required: true },
  logo: { type: String, required: true }, // URL to logo
  website: { type: String },
  industry: { type: String }, // e.g., "IT", "Banking", "FMCG"
}, { timestamps: true });

const Recruiter = mongoose.model('Recruiter', recruiterSchema);
export default Recruiter;