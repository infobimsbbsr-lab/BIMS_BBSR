import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

import Course from './models/Course.js';
import Faculty from './models/Faculty.js';
import Event from './models/Event.js';
import Recruiter from './models/Recruiter.js';
import Testimonial from './models/Testimonial.js';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    // Clear existing data
    await Course.deleteMany();
    await Faculty.deleteMany();
    await Event.deleteMany();
    await Recruiter.deleteMany();
    await Testimonial.deleteMany();

    // Sample Courses
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

    // Sample Faculty
    const faculty = [
      {
        name: 'Dr. Anjali Mishra',
        designation: 'Professor',
        department: 'Finance',
        qualification: 'Ph.D., MBA',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop'
      },
      {
        name: 'Prof. Rajesh Kumar',
        designation: 'Asst. Professor',
        department: 'Marketing',
        qualification: 'MBA, UGC-NET',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop'
      },
      {
        name: 'Dr. Sunita Das',
        designation: 'Associate Professor',
        department: 'HR',
        qualification: 'Ph.D.',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop'
      },
      {
        name: 'Mr. Amit Patra',
        designation: 'Lecturer',
        department: 'IT',
        qualification: 'MCA, M.Tech',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop'
      }
    ];

    // Sample Events/News
    const events = [
      {
        title: 'Admissions Open for 2026-2028 Batch',
        description: 'Applications are invited for the MBA program.',
        date: new Date(),
        category: 'News'
      },
      {
        title: 'Annual Tech Fest "Innovate 2024"',
        description: 'Join us for a day of innovation and technology.',
        date: new Date('2024-03-15'),
        category: 'Event'
      },
      {
        title: 'Guest Lecture by CEO of TechCorp',
        description: 'Industry insights on the future of AI in Business.',
        date: new Date('2024-02-20'),
        category: 'Seminar'
      }
    ];

    // Sample Recruiters with Fixed URLs
    const recruiters = [
      { name: 'TCS', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg' },
      { name: 'Infosys', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg' },
      { name: 'HDFC Bank', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/28/HDFC_Bank_Logo.svg' },
      { name: 'Deloitte', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg' },
      { name: 'Wipro', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg' },
      { name: 'ICICI Bank', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/12/ICICI_Bank_Logo.svg' },
      { name: 'Accenture', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg' },
      { name: 'Capgemini', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Capgemini_201x_logo.svg' }
    ];

    // Sample Testimonials
    const testimonials = [
      {
        name: 'Rahul Mohanty',
        role: 'Alumni',
        batch: '2020-22',
        company: 'Deloitte',
        message: 'BIMS gave me the platform to showcase my skills. The faculty support was immense.',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop'
      },
      {
        name: 'Priya Sharma',
        role: 'Student',
        batch: '2023-25',
        message: 'The campus infrastructure and library are world-class. Happy to be part of BIMS.',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop'
      },
      {
        name: 'Amit Verma',
        role: 'Alumni',
        batch: '2019-21',
        company: 'HDFC Bank',
        message: 'Placement cell worked hard to get us the best opportunities. I am grateful.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop'
      }
    ];

    await Course.insertMany(courses);
    await Faculty.insertMany(faculty);
    await Event.insertMany(events);
    await Recruiter.insertMany(recruiters);
    await Testimonial.insertMany(testimonials);

    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

importData();