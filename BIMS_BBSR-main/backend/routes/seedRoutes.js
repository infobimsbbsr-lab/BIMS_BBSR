import express from 'express';
import Course from '../models/Course.js';

const router = express.Router();

router.get('/seed-courses', async (req, res) => {
  try {
    await Course.deleteMany();
    
    const courses = [
      {
        title: 'Post Graduate Diploma in Management (PGDM)',
        code: 'PGDM',
        description: 'An industry-oriented program focusing on practical skills, case studies, and real-world business problem solving.',
        duration: '2 Years',
        eligibility: 'Graduation with 50% marks',
        seats: 120,
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop'
      },
      {
        title: 'PGDM (Artificial Intelligence and Data Science)',
        code: 'PGDM-AI',
        description: 'Specialized program combining management principles with AI and data science applications.',
        duration: '2 Years',
        eligibility: 'Graduation with 50% marks',
        seats: 60,
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop'
      },
      {
        title: 'PGDM (Finance, Marketing and Human Resource Management)',
        code: 'PGDM-FMH',
        description: 'Comprehensive program covering Finance, Marketing, and HR specializations.',
        duration: '2 Years',
        eligibility: 'Graduation with 50% marks',
        seats: 60,
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop'
      },
      {
        title: 'PGDM (Health Care and Hospital Management)',
        code: 'PGDM-HCH',
        description: 'Specialized program for healthcare sector focusing on hospital administration.',
        duration: '2 Years',
        eligibility: 'Graduation with 50% marks',
        seats: 60,
        image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=2070&auto=format&fit=crop'
      },
      {
        title: 'PGDM (Operations Management)',
        code: 'PGDM-OM',
        description: 'Focused program on operations, supply chain, and logistics management.',
        duration: '2 Years',
        eligibility: 'Graduation with 50% marks',
        seats: 60,
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop'
      }
    ];

    await Course.insertMany(courses);
    res.json({ message: 'Courses seeded successfully!', count: courses.length });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
