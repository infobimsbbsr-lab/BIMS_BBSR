import Recruiter from '../models/Recruiter.js';

// @desc    Get all recruiters
// @route   GET /api/recruiters
// @access  Public
const getRecruiters = async (req, res) => {
  try {
    const recruiters = await Recruiter.find({});
    res.json(recruiters);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Add a recruiter
// @route   POST /api/recruiters
// @access  Public (Should be protected in prod)
const createRecruiter = async (req, res) => {
  try {
    const recruiter = await Recruiter.create(req.body);
    res.status(201).json(recruiter);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export { getRecruiters, createRecruiter };