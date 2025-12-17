import mongoose from 'mongoose';

const inquirySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
    },
    phone: {
      type: String,
      required: [true, 'Please add a phone number'],
    },
    course: {
      type: String,
      required: [true, 'Please select a course'],
    },
    message: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Inquiry = mongoose.model('Inquiry', inquirySchema);

export default Inquiry;