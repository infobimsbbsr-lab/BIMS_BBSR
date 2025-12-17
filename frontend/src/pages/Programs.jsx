import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import axios from 'axios';
import { Clock, CheckCircle, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const Programs = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get('/api/courses');
        setCourses(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <PageHeader title="Academic Programs" breadcrumb="Academics" />

      <section className="py-16 max-w-7xl mx-auto px-4">
        {loading ? (
          <p className="text-center">Loading programs...</p>
        ) : (
          <div className="space-y-12">
            {courses.map((course) => (
              <div key={course._id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
                <div className="md:w-1/3 h-64 md:h-auto">
                  <img 
                    src={course.image || "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"} 
                    alt={course.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 md:w-2/3 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-bims-green text-white text-xs font-bold px-2 py-1 rounded">{course.code || 'PG'}</span>
                    <span className="flex items-center text-gray-500 text-sm gap-1"><Clock size={14}/> {course.duration}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{course.title}</h3>
                  <p className="text-gray-600 mb-6">{course.description}</p>
                  
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 mb-6">
                    <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2"><CheckCircle size={16} className="text-bims-blue"/> Eligibility</h4>
                    <p className="text-sm text-gray-600">{course.eligibility}</p>
                  </div>

                  <div className="flex gap-4">
                    <Link to="/apply" className="bg-bims-blue text-white px-6 py-2 rounded font-medium hover:bg-blue-900 transition flex items-center justify-center">
                      Apply Now
                    </Link>
                    <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded font-medium hover:bg-gray-50 transition flex items-center gap-2">
                      <BookOpen size={16}/> Download Syllabus
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default Programs;