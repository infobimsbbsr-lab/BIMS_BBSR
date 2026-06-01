import mongoose from 'mongoose';

const testimonialSchema = mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, default: 'Student' }, // "Student", "Alumni"
  batch: { type: String }, // e.g., "2021-23"
  company: { type: String }, // If Alumni, current company
  message: { type: String, required: true },
  image: { type: String },
}, { timestamps: true });

const Testimonial = mongoose.model('Testimonial', testimonialSchema);
export default Testimonial;