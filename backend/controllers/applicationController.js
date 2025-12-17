import Application from '../models/Application.js';

// @desc    Submit a new admission application
// @route   POST /api/applications
// @access  Public
const submitApplication = async (req, res) => {
  try {
    const application = await Application.create(req.body);
    res.status(201).json({ 
      success: true, 
      message: 'Application submitted successfully! Your application ID is ' + application._id,
      data: application 
    });
  } catch (error) {
    res.status(400).json({ 
      success: false, 
      message: 'Failed to submit application. Please check all fields.', 
      error: error.message 
    });
  }
};

export { submitApplication };