import Inquiry from '../models/inquiryModel.js';

// @desc    Create new inquiry
// @route   POST /api/inquiries
// @access  Public
const createInquiry = async (req, res) => {
  try {
    const { name, email, phone, course, message } = req.body;

    if (!name || !email || !phone || !course) {
      res.status(400);
      throw new Error('Please fill in all fields');
    }

    const inquiry = await Inquiry.create({
      name,
      email,
      phone,
      course,
      message,
    });

    res.status(201).json(inquiry);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Get all inquiries
// @route   GET /api/inquiries
// @access  Private (Simulated)
const getInquiries = async (req, res) => {
  try {
    const inquiries = await Inquiry.find({});
    res.status(200).json(inquiries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { createInquiry, getInquiries };