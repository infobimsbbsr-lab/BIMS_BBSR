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
        title: 'Master of Business Administration (MBA)',
        code: 'MBA',
        description: 'A two-year full-time program designed to create business leaders. Specializations available in Finance, Marketing, HR, Operations, and IT.',
        duration: '2 Years',
        eligibility: 'Graduation with 50% marks + Entrance Score',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop'
      },
      {
        title: 'Integrated MBA (IMBA)',
        code: 'IMBA',
        description: 'A five-year integrated course for students after 12th standard, combining undergraduate and postgraduate management education.',
        duration: '5 Years',
        eligibility: '10+2 with 45% marks',
        image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop'
      },
      {
        title: 'Bachelor of Business Administration (BBA)',
        code: 'BBA',
        description: 'A foundational undergraduate program that provides a strong understanding of business principles and management practices.',
        duration: '3 Years',
        eligibility: '10+2 in any stream with 45% marks',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop'
      },
      {
        title: 'Executive MBA',
        code: 'EMBA',
        description: 'Designed for working professionals looking to upskill and accelerate their careers without taking a career break.',
        duration: '18 Months',
        eligibility: 'Graduation + 2 Years Work Experience',
        image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop'
      },
      {
        title: 'Post Graduate Diploma in Management (PGDM)',
        code: 'PGDM',
        description: 'An industry-oriented program focusing on practical skills, case studies, and real-world business problem solving.',
        duration: '2 Years',
        eligibility: 'Graduation with 50% marks',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop'
      },
      {
        title: 'Ph.D. in Management',
        code: 'PHD',
        description: 'A research-intensive program for aspiring academicians and researchers contributing to the field of management science.',
        duration: '3-5 Years',
        eligibility: 'Master\'s Degree with 55% marks',
        image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop'
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
        title: 'Admissions Open for 2024-26 Batch',
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