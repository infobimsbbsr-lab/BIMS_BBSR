import mongoose from 'mongoose';

const courseSchema = mongoose.Schema({
  title: { type: String, required: true },
  code: { type: String }, // e.g., "MBA-01"
  description: { type: String, required: true },
  duration: { type: String, required: true }, // e.g., "2 Years"
  eligibility: { type: String, required: true },
  seats: { type: Number },
  image: { type: String },
  curriculum: [String], // List of semesters or subjects
  fees: { type: String } // Optional fee structure summary
}, { timestamps: true });

const Course = mongoose.model('Course', courseSchema);
export default Course;