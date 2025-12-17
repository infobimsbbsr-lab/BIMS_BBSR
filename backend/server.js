import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';

import inquiryRoutes from './routes/inquiryRoutes.js';
import courseRoutes from './routes/courseRoutes.js';
import facultyRoutes from './routes/facultyRoutes.js';
import eventRoutes from './routes/eventRoutes.js';
import recruiterRoutes from './routes/recruiterRoutes.js';
import testimonialRoutes from './routes/testimonialRoutes.js';
import applicationRoutes from './routes/applicationRoutes.js';

dotenv.config();

// Connect to Database
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/inquiries', inquiryRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/faculty', facultyRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/recruiters', recruiterRoutes);
app.use('/api/testimonials', testimonialRoutes);
app.use('/api/applications', applicationRoutes);

app.get('/', (req, res) => {
  res.send('BIMS API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));