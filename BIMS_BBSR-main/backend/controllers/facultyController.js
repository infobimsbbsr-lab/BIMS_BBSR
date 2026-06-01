import Faculty from '../models/Faculty.js';

// @desc    Get all faculty
// @route   GET /api/faculty
// @access  Public
const getFaculty = async (req, res) => {
  try {
    const faculty = await Faculty.find({});
    res.json(faculty);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create faculty profile
// @route   POST /api/faculty
// @access  Public (Should be protected in prod)
const createFaculty = async (req, res) => {
  try {
    const faculty = await Faculty.create(req.body);
    res.status(201).json(faculty);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export { getFaculty, createFaculty };