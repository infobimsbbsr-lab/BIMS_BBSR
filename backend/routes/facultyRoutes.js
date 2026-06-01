import express from 'express';
import { getFaculty, createFaculty } from '../controllers/facultyController.js';

const router = express.Router();

router.route('/')
  .get(getFaculty)
  .post(createFaculty);

export default router;