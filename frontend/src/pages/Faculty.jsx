import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import axios from 'axios';
import { Mail, GraduationCap } from 'lucide-react';

const Faculty = () => {
  const [faculty, setFaculty] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFaculty = async () => {
      try {
        const res = await axios.get('/api/faculty');
        setFaculty(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchFaculty();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <PageHeader title="Our Faculty" breadcrumb="Academics / Faculty" />

      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <p className="text-gray-600">
            Our faculty members are a blend of academic scholars and industry practitioners, dedicated to mentoring the next generation of leaders.
          </p>
        </div>

        {loading ? (
           <p className="text-center">Loading faculty...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {faculty.map((member) => (
              <div key={member._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:-translate-y-1 transition duration-300">
                <div className="h-64 bg-gray-200">
                  <img 
                    src={member.image || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} 
                    alt={member.name}
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-900">{member.name}</h3>
                  <p className="text-bims-green font-medium text-sm mb-2">{member.designation}</p>
                  <div className="space-y-2 mt-4">
                    <p className="text-xs text-gray-500 flex items-start gap-2">
                      <GraduationCap size={14} className="shrink-0 mt-0.5"/> 
                      {member.qualification}
                    </p>
                    {member.email && (
                      <p className="text-xs text-gray-500 flex items-center gap-2">
                        <Mail size={14} className="shrink-0"/> 
                        {member.email}
                      </p>
                    )}
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

export default Faculty;