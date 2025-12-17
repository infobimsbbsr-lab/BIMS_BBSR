import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import axios from 'axios';

const Placements = () => {
  const [recruiters, setRecruiters] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [recRes, testRes] = await Promise.all([
          axios.get('/api/recruiters'),
          axios.get('/api/testimonials')
        ]);
        setRecruiters(recRes.data);
        setTestimonials(testRes.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <PageHeader title="Placements" breadcrumb="Placement" />

      {/* Stats */}
      <section className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold text-bims-blue">100%</h3>
            <p className="text-gray-600">Placement Assistance</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-bims-blue">50+</h3>
            <p className="text-gray-600">Corporate Partners</p>
          </div>
           <div>
            <h3 className="text-4xl font-bold text-bims-blue">12 LPA</h3>
            <p className="text-gray-600">Highest Package</p>
          </div>
           <div>
            <h3 className="text-4xl font-bold text-bims-blue">4.5 LPA</h3>
            <p className="text-gray-600">Average Package</p>
          </div>
        </div>
      </section>

      {/* Recruiters Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Corporate Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {recruiters.map((rec) => (
            <div key={rec._id} className="bg-white p-6 rounded shadow-sm border border-gray-100 flex items-center justify-center hover:shadow-md transition h-24">
              {rec.logo ? (
                <img src={rec.logo} alt={rec.name} className="max-h-full max-w-full" />
              ) : (
                <span className="font-bold text-gray-400">{rec.name}</span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-bims-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Placement Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.filter(t => t.company).map((t) => (
              <div key={t._id} className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                     <img src={t.image || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} alt={t.name} className="w-full h-full object-cover"/>
                  </div>
                  <div>
                    <h4 className="font-bold">{t.name}</h4>
                    <p className="text-xs text-bims-green">Placed at {t.company}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-200 italic">"{t.message}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Placements;