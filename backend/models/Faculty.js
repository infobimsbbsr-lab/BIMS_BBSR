import mongoose from 'mongoose';

const facultySchema = mongoose.Schema({
  name: { type: String, required: true },
  designation: { type: String, required: true }, // e.g., "Professor", "Asst. Professor"
  department: { type: String, required: true },
  qualification: { type: String, required: true },
  experience: { type: String }, // e.g., "15 Years"
  image: { type: String },
  specialization: [String], // e.g., ["Marketing", "Consumer Behavior"]
  email: { type: String }
}, { timestamps: true });

const Faculty = mongoose.model('Faculty', facultySchema);
export default Faculty;