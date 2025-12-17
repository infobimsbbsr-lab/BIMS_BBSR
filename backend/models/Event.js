import mongoose from 'mongoose';

const eventSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  location: { type: String },
  category: { 
    type: String, 
    enum: ['News', 'Event', 'Seminar', 'Workshop', 'Admission'], 
    default: 'Event' 
  },
  image: { type: String },
}, { timestamps: true });

const Event = mongoose.model('Event', eventSchema);
export default Event;