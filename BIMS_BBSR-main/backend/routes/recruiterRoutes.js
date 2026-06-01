import express from 'express';
import { getRecruiters, createRecruiter } from '../controllers/recruiterController.js';

const router = express.Router();

router.route('/')
  .get(getRecruiters)
  .post(createRecruiter);

export default router;