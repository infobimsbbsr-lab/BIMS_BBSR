import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import { Check, FileText, Download, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Admissions = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <PageHeader title="Admissions" breadcrumb="Admission" />

      <section className="py-16 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-10">
          <div>
            <h2 className="text-2xl font-bold text-bims-blue mb-4">Admission Process</h2>
            <p className="text-gray-600 mb-6">
              Admission to BIMS is based on merit and entrance test scores. We look for candidates who demonstrate leadership potential, academic excellence, and a drive to succeed.
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-bold text-lg mb-4">Steps to Apply:</h3>
              <ol className="relative border-l border-gray-200 ml-3 space-y-6">
                <li className="mb-10 ml-6">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-bims-green rounded-full -left-4 ring-4 ring-white text-white font-bold text-sm">1</span>
                  <h3 className="font-medium leading-tight text-gray-900">Check Eligibility</h3>
                  <p className="text-sm text-gray-500">Ensure you meet the academic requirements (Graduation with 50% marks).</p>
                </li>
                <li className="mb-10 ml-6">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-bims-green rounded-full -left-4 ring-4 ring-white text-white font-bold text-sm">2</span>
                  <h3 className="font-medium leading-tight text-gray-900">Entrance Test</h3>
                  <p className="text-sm text-gray-500">Valid score in OJEE / MAT / CAT / XAT / CMAT.</p>
                </li>
                <li className="mb-10 ml-6">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-bims-green rounded-full -left-4 ring-4 ring-white text-white font-bold text-sm">3</span>
                  <h3 className="font-medium leading-tight text-gray-900">Fill Application Form</h3>
                  <p className="text-sm text-gray-500">
                    <Link to="/apply" className="text-bims-blue font-semibold hover:underline">Apply online via our website</Link> or visit the campus.
                  </p>
                </li>
                <li className="ml-6">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-bims-green rounded-full -left-4 ring-4 ring-white text-white font-bold text-sm">4</span>
                  <h3 className="font-medium leading-tight text-gray-900">GD & PI</h3>
                  <p className="text-sm text-gray-500">Shortlisted candidates will be called for Group Discussion and Personal Interview.</p>
                </li>
              </ol>
            </div>
          </div>

          <div>
             <h2 className="text-2xl font-bold text-bims-blue mb-4">Documents Required</h2>
             <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
               {['10th & 12th Marksheets', 'Graduation Certificates', 'Entrance Test Score Card', 'College Leaving Certificate', 'Migration Certificate', '4 Passport Size Photos', 'Aadhar Card Copy', 'Caste Certificate (if applicable)'].map((doc, i) => (
                 <li key={i} className="flex items-center gap-2 text-gray-700 bg-white p-3 rounded shadow-sm">
                   <Check size={16} className="text-bims-green"/> {doc}
                 </li>
               ))}
             </ul>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-bims-blue text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Downloads</h3>
            <div className="space-y-3">
              <a 
                href="/downloads/Admission_Brochure.html" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between bg-white/10 hover:bg-white/20 p-3 rounded transition text-white"
              >
                <span>Admission Brochure</span>
                <Download size={18} />
              </a>
              <a 
                href="/downloads/Application_Form.html" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between bg-white/10 hover:bg-white/20 p-3 rounded transition text-white"
              >
                <span>Application Form</span>
                <FileText size={18} />
              </a>
              <a 
                href="/downloads/Fee_Structure.html" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between bg-white/10 hover:bg-white/20 p-3 rounded transition text-white"
              >
                <span>Fee Structure</span>
                <FileText size={18} />
              </a>
            </div>
          </div>

          <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Need Help?</h3>
            <p className="text-sm text-gray-600 mb-4">Contact our admission cell for guidance.</p>
            <div className="flex items-center gap-3 text-bims-blue font-bold mb-2">
              <Phone size={20} /> +91 99999 88888
            </div>
             <div className="flex items-center gap-3 text-bims-blue font-bold">
              <Phone size={20} /> +91 77777 66666
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Admissions;