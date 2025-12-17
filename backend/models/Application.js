import mongoose from 'mongoose';

const applicationSchema = mongoose.Schema({
  // Course Details
  courseApplied: { type: String, required: true },
  
  // Personal Details
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  fatherName: { type: String, required: true },
  dob: { type: Date, required: true },
  gender: { type: String, required: true },
  category: { type: String, default: 'General' },

  // Contact Details
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipCode: { type: String, required: true },

  // Academic Details
  tenthBoard: { type: String, required: true },
  tenthPercentage: { type: String, required: true },
  twelfthBoard: { type: String, required: true },
  twelfthPercentage: { type: String, required: true },
  graduationDegree: { type: String, required: true },
  graduationPercentage: { type: String, required: true },

  status: { type: String, default: 'Pending' } // Pending, Approved, Rejected
}, { timestamps: true });

const Application = mongoose.model('Application', applicationSchema);
export default Application;