import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import { Target, Eye, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <PageHeader title="About BIMS" breadcrumb="About Us" />
      
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Legacy of Excellence</h2>
            <div className="prose text-gray-600 leading-relaxed space-y-4">
              <p>
                Bhubaneswar Institute of Management and Science (BIMS), a unit of Swastik Education & Charitable Trust (SECT), was established with a vision to create future-ready leaders. Located in the temple city of Bhubaneswar, BIMS has emerged as a premier business school in Eastern India.
              </p>
              <p>
                Our curriculum is rigorously designed to bridge the gap between academic theory and industry practice. With a focus on holistic development, we ensure our students are not just employable but capable of driving innovation in the corporate world.
              </p>
              <p>
                We offer a vibrant campus life, state-of-the-art infrastructure, and a learning environment that encourages curiosity and critical thinking.
              </p>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086&auto=format&fit=crop" 
              alt="BIMS Building" 
              className="rounded-lg shadow-xl w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg border-l-4 border-bims-green max-w-xs hidden md:block">
              <p className="text-lg font-bold text-bims-blue">20+ Years</p>
              <p className="text-sm text-gray-600">Of Educational Excellence & Industry Partnership</p>
            </div>
          </div>
        </div>

        {/* Vision Mission */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition border-t-4 border-bims-green">
            <Eye className="text-bims-blue mb-4" size={40} />
            <h3 className="text-xl font-bold mb-3">Our Vision</h3>
            <p className="text-gray-600 text-sm">To be a globally recognized center of excellence in management education, fostering ethical leadership and sustainable growth.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition border-t-4 border-bims-blue">
            <Target className="text-bims-green mb-4" size={40} />
            <h3 className="text-xl font-bold mb-3">Our Mission</h3>
            <p className="text-gray-600 text-sm">To empower students with conceptual knowledge, practical skills, and values to excel in a dynamic business environment.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition border-t-4 border-red-500">
            <Award className="text-red-500 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-3">Core Values</h3>
            <ul className="text-gray-600 text-sm space-y-2 list-disc pl-4">
              <li>Integrity & Ethics</li>
              <li>Innovation & Creativity</li>
              <li>Social Responsibility</li>
              <li>Academic Freedom</li>
            </ul>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;