
// import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import PageHeader from '../components/PageHeader';
// import { Check, FileText, Download, Phone } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const Admissions = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col">
//       <Navbar />
//       <PageHeader title="Admissions" breadcrumb="Admission" />

//       <section className="py-16 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
//         {/* Main Content */}
//         <div className="lg:col-span-2 space-y-10">
//           <div>
//             <h2 className="text-2xl font-bold text-bims-blue mb-4">Admission Process</h2>
//             <p className="text-gray-600 mb-6">
//               Admission to BIMS is based on merit and entrance test scores. We look for candidates who demonstrate leadership potential, academic excellence, and a drive to succeed.
//             </p>
            
//             <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
//               <h3 className="font-bold text-lg mb-4">Steps to Apply:</h3>
//               <ol className="relative border-l border-gray-200 ml-3 space-y-6">
//                 <li className="mb-10 ml-6">
//                   <span className="absolute flex items-center justify-center w-8 h-8 bg-bims-green rounded-full -left-4 ring-4 ring-white text-white font-bold text-sm">1</span>
//                   <h3 className="font-medium leading-tight text-gray-900">Check Eligibility</h3>
//                   <p className="text-sm text-gray-500">Ensure you meet the academic requirements (Graduation with 50% marks).</p>
//                 </li>
//                 <li className="mb-10 ml-6">
//                   <span className="absolute flex items-center justify-center w-8 h-8 bg-bims-green rounded-full -left-4 ring-4 ring-white text-white font-bold text-sm">2</span>
//                   <h3 className="font-medium leading-tight text-gray-900">Entrance Test</h3>
//                   <p className="text-sm text-gray-500">Valid score in OJEE / MAT / CAT / XAT / CMAT.</p>
//                 </li>
//                 <li className="mb-10 ml-6">
//                   <span className="absolute flex items-center justify-center w-8 h-8 bg-bims-green rounded-full -left-4 ring-4 ring-white text-white font-bold text-sm">3</span>
//                   <h3 className="font-medium leading-tight text-gray-900">Fill Application Form</h3>
//                   <p className="text-sm text-gray-500">
//                     <Link to="/apply" className="text-bims-blue font-semibold hover:underline">Apply online via our website</Link> or visit the campus.
//                   </p>
//                 </li>
//                 <li className="ml-6">
//                   <span className="absolute flex items-center justify-center w-8 h-8 bg-bims-green rounded-full -left-4 ring-4 ring-white text-white font-bold text-sm">4</span>
//                   <h3 className="font-medium leading-tight text-gray-900">GD & PI</h3>
//                   <p className="text-sm text-gray-500">Shortlisted candidates will be called for Group Discussion and Personal Interview.</p>
//                 </li>
//               </ol>
//             </div>
//           </div>

//           <div>
//              <h2 className="text-2xl font-bold text-bims-blue mb-4">Documents Required</h2>
//              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                {['10th & 12th Marksheets', 'Graduation Certificates', 'Entrance Test Score Card', 'College Leaving Certificate', 'Migration Certificate', '4 Passport Size Photos', 'Aadhar Card Copy', 'Caste Certificate (if applicable)'].map((doc, i) => (
//                  <li key={i} className="flex items-center gap-2 text-gray-700 bg-white p-3 rounded shadow-sm">
//                    <Check size={16} className="text-bims-green"/> {doc}
//                  </li>
//                ))}
//              </ul>
//           </div>
//         </div>

//         {/* Sidebar */}
//         <div className="space-y-6">
//           <div className="bg-bims-blue text-white p-6 rounded-lg shadow-lg">
//             <h3 className="text-xl font-bold mb-4">Downloads</h3>
//             <div className="space-y-3">
//               <a 
//                 href="/downloads/Admission_Brochure.html" 
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-full flex items-center justify-between bg-white/10 hover:bg-white/20 p-3 rounded transition text-white"
//               >
//                 <span>Admission Brochure</span>
//                 <Download size={18} />
//               </a>
//               <a 
//                 href="/downloads/Application_Form.html" 
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-full flex items-center justify-between bg-white/10 hover:bg-white/20 p-3 rounded transition text-white"
//               >
//                 <span>Application Form</span>
//                 <FileText size={18} />
//               </a>
//               <a 
//                 href="/downloads/Fee_Structure.html" 
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-full flex items-center justify-between bg-white/10 hover:bg-white/20 p-3 rounded transition text-white"
//               >
//                 <span>Fee Structure</span>
//                 <FileText size={18} />
//               </a>
//             </div>
//           </div>

//           <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
//             <h3 className="text-xl font-bold text-gray-800 mb-4">Need Help?</h3>
//             <p className="text-sm text-gray-600 mb-4">Contact our admission cell for guidance.</p>
//             <div className="flex items-center gap-3 text-bims-blue font-bold mb-2">
//               <Phone size={20} /> +91 70084 11323
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Admissions;

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  ChevronDown,
  Clock,
  Download,
  FileText,
  GraduationCap,
  Mail,
  Phone,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

const Admissions = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "MBA",
    qualification: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Processing admission inquiry...");

    const emailData = {
      _subject: `New Admission Inquiry - ${formData.course}`,
      _template: "table",
      _captcha: "false",
      Applicant_Name: formData.name,
      Applicant_Email: formData.email,
      Contact_Number: formData.phone,
      Selected_Course: formData.course,
      Qualification: formData.qualification,
      Message: formData.message || "Admission inquiry",
    };

    try {
      await axios.post(
        "https://formsubmit.co/ajax/info.bimsbbsr@gmail.com",
        emailData
      );

      setStatus("Admission inquiry submitted successfully.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        course: "MBA",
        qualification: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("Submission failed. Please try again later.");
    }
  };

  const steps = [
    {
      title: "Check Eligibility",
      text: "Verify academic eligibility according to the selected program.",
    },
    {
      title: "Submit Inquiry / Application",
      text: "Fill the online admission inquiry form or visit the campus admission desk.",
    },
    {
      title: "Document Verification",
      text: "Submit academic certificates, ID proof, photographs and required documents.",
    },
    {
      title: "Counseling & Confirmation",
      text: "Attend admission counseling and complete seat confirmation formalities.",
    },
  ];

  const documents = [
    "10th & 12th Marksheet",
    "Graduation Certificate",
    "Entrance Test Score Card",
    "College Leaving Certificate",
    "Migration Certificate",
    "4 Passport Size Photos",
    "Aadhar Card Copy",
    "Caste Certificate if applicable",
  ];

  return (
    <div className="min-h-screen bg-[#f1f5f9] text-slate-800 font-sans antialiased">
      <Navbar />

      {/* NOTICE BAR */}
      <div className="bg-amber-500 text-slate-950 font-bold text-xs md:text-sm py-2 px-4 shadow-sm border-b border-amber-600 relative z-30 flex items-center overflow-hidden">
        <span className="bg-slate-950 text-white px-2 py-0.5 rounded-sm text-[10px] uppercase tracking-wider mr-3 flex-shrink-0">
          Admission Notice
        </span>
        <marquee scrollamount="4">
          Admissions are open for MBA, PGDM and BBA programs. Submit your inquiry
          form to receive counseling support from the admissions desk.
        </marquee>
      </div>

      {/* HERO */}
      <section className="relative bg-[#0d1e3d] text-white border-b-8 border-amber-500 py-16 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 to-slate-950/70" />

        <div className="relative max-w-7xl mx-auto px-4 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-sm px-3 py-1.5 text-xs font-bold text-amber-400 mb-6 uppercase tracking-widest">
              <Award size={14} /> Admissions Open
            </div>

            <h1 className="text-3xl md:text-5xl font-serif font-bold leading-tight text-slate-100">
              Admission Process for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200 font-sans font-black">
                BIMS Academic Programs
              </span>
            </h1>

            <p className="mt-5 text-base text-slate-300 max-w-xl leading-relaxed">
              Apply for MBA, PGDM and BBA programs through the official
              admissions desk. Get eligibility, fee, course and counseling
              guidance from the academic team.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button
                onClick={() => scrollToSection("apply")}
                className="bg-amber-500 text-slate-950 px-6 py-3.5 rounded-sm font-bold hover:bg-amber-400 transition-colors shadow-md flex items-center gap-2 text-sm uppercase tracking-wider"
              >
                Apply Now <ArrowRight size={16} />
              </button>

              <button
                onClick={() => scrollToSection("process")}
                className="border border-slate-400/40 bg-white/5 px-6 py-3.5 rounded-sm font-bold hover:bg-white/10 transition-colors text-sm uppercase tracking-wider"
              >
                View Process
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10">
              {[
                ["Mode", "Online / Offline"],
                ["Courses", "MBA / PGDM / BBA"],
                ["Support", "Counseling Desk"],
                ["Status", "Open Now"],
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-slate-900/60 border border-slate-700/40 rounded-sm p-3.5"
                >
                  <h4 className="text-sm font-bold text-amber-400">
                    {item[0]}
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    {item[1]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* FORM */}
          <div
            id="apply"
            className="bg-white text-slate-900 rounded-sm shadow-xl p-6 md:p-8 border-t-4 border-amber-500 relative z-10 scroll-mt-24"
          >
            <h2 className="text-xl font-serif font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <FileText className="text-amber-500" size={20} />
              Admission Inquiry Form
            </h2>

            <p className="text-slate-500 text-xs mt-1 mb-6">
              Submit official admission inquiry details below.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-500 mb-1">
                  Applicant Full Name *
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter full name"
                  className="w-full px-3 py-2.5 rounded-sm bg-slate-50 border border-slate-300 outline-none text-sm focus:border-slate-900 focus:bg-white transition"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-500 mb-1">
                    Email Address *
                  </label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    type="email"
                    placeholder="name@example.com"
                    className="w-full px-3 py-2.5 rounded-sm bg-slate-50 border border-slate-300 outline-none text-sm focus:border-slate-900 focus:bg-white transition"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-500 mb-1">
                    Contact Number *
                  </label>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    type="tel"
                    placeholder="Mobile number"
                    className="w-full px-3 py-2.5 rounded-sm bg-slate-50 border border-slate-300 outline-none text-sm focus:border-slate-900 focus:bg-white transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-500 mb-1">
                  Select Program *
                </label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 rounded-sm bg-slate-50 border border-slate-300 outline-none text-sm focus:border-slate-900 focus:bg-white transition"
                >
                  <option value="MBA">Master of Business Administration</option>
                  <option value="PGDM">
                    Post Graduate Diploma in Management
                  </option>
                  <option value="BBA">
                    Bachelor of Business Administration
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-500 mb-1">
                  Qualification
                </label>
                <input
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleChange}
                  placeholder="Example: Graduation / 12th Passed"
                  className="w-full px-3 py-2.5 rounded-sm bg-slate-50 border border-slate-300 outline-none text-sm focus:border-slate-900 focus:bg-white transition"
                />
              </div>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your admission query"
                rows="3"
                className="w-full px-3 py-2.5 rounded-sm bg-slate-50 border border-slate-300 outline-none text-sm focus:border-slate-900 focus:bg-white transition resize-none"
              />

              <button
                type="submit"
                className="w-full bg-[#0d1e3d] text-white py-3.5 rounded-sm font-bold hover:bg-slate-900 transition-colors shadow-sm text-xs uppercase tracking-widest border border-slate-800"
              >
                Submit Admission Inquiry
              </button>

              {status && (
                <div className="mt-3 p-3 bg-amber-50 border border-amber-200 rounded-sm">
                  <p className="text-center text-xs font-bold text-slate-800">
                    {status}
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* PROFILE */}
      <section className="max-w-7xl mx-auto px-4 -mt-8 relative z-20">
        <div className="bg-white rounded-sm shadow-md border-x border-b border-slate-200 grid grid-cols-2 md:grid-cols-4 overflow-hidden divide-x divide-slate-100">
          {[
            ["MBA", "2 Years Program"],
            ["PGDM", "Industry Aligned"],
            ["BBA", "3 Years Degree"],
            ["Support", "Admission Cell"],
          ].map((item, i) => (
            <div key={i} className="p-5 text-center bg-white">
              <h3 className="text-base font-black text-slate-900 uppercase tracking-tight">
                {item[0]}
              </h3>
              <p className="text-xs font-semibold text-amber-600 mt-0.5">
                {item[1]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-600 font-extrabold uppercase text-xs tracking-widest">
            Admission Procedure
          </span>
          <h2 className="text-2xl md:text-3xl font-serif font-bold mt-1 text-slate-900">
            Step-by-step admission process
          </h2>
          <div className="w-12 h-1 bg-amber-500 mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-white rounded-sm p-6 border border-slate-200 shadow-xs relative"
            >
              <div className="w-11 h-11 rounded-sm bg-[#0d1e3d] text-amber-400 flex items-center justify-center font-black mb-5">
                {i + 1}
              </div>

              <h3 className="font-serif font-bold text-slate-900">
                {step.title}
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* DOCUMENTS + DOWNLOADS */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <span className="text-amber-600 font-extrabold uppercase text-xs tracking-widest">
              Required Documents
            </span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold mt-1 text-slate-900">
              Documents needed for admission verification
            </h2>

            <div className="grid md:grid-cols-2 gap-4 mt-8">
              {documents.map((doc, i) => (
                <div
                  key={i}
                  className="bg-slate-50 rounded-sm p-4 border border-slate-200 flex items-center gap-3"
                >
                  <CheckCircle2
                    size={16}
                    className="text-emerald-600 flex-shrink-0"
                  />
                  <span className="font-bold text-slate-700 text-xs uppercase tracking-wide">
                    {doc}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#0d1e3d] text-white rounded-sm p-7 border-t-4 border-amber-500 shadow-md">
            <h3 className="text-xl font-serif font-bold mb-5">Downloads</h3>

            <div className="space-y-3">
              <a
                href="/downloads/Admission_Brochure.html"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-white/10 hover:bg-white/15 p-3 rounded-sm text-sm font-bold"
              >
                Admission Brochure <Download size={17} />
              </a>

              <a
                href="/downloads/Application_Form.html"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-white/10 hover:bg-white/15 p-3 rounded-sm text-sm font-bold"
              >
                Application Form <FileText size={17} />
              </a>

              <a
                href="/downloads/Fee_Structure.html"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-white/10 hover:bg-white/15 p-3 rounded-sm text-sm font-bold"
              >
                Fee Structure <FileText size={17} />
              </a>
            </div>

            <div className="mt-6 pt-5 border-t border-white/10">
              <p className="text-xs text-slate-300 mb-3">
                Need admission help?
              </p>

              <a
                href="tel:+917008411323"
                className="flex items-center gap-3 text-amber-400 font-black"
              >
                <Phone size={19} /> +91 70084 11323
              </a>

              <a
                href="mailto:info.bimsbbsr@gmail.com"
                className="flex items-center gap-3 text-slate-300 font-bold text-sm mt-3"
              >
                <Mail size={17} /> info.bimsbbsr@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ELIGIBILITY */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-600 font-extrabold uppercase text-xs tracking-widest">
            Eligibility Criteria
          </span>
          <h2 className="text-2xl md:text-3xl font-serif font-bold mt-1 text-slate-900">
            Program-wise eligibility details
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <GraduationCap />,
              title: "MBA Admission",
              text: "Graduation in any discipline. Entrance score may be considered as per admission norms.",
            },
            {
              icon: <UserCheck />,
              title: "PGDM Admission",
              text: "Graduation with academic performance and counseling verification.",
            },
            {
              icon: <ShieldCheck />,
              title: "BBA Admission",
              text: "10+2 passed from a recognized board with required academic documents.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-sm p-8 border border-slate-200 shadow-xs"
            >
              <div className="w-12 h-12 rounded-sm bg-slate-100 text-[#0d1e3d] flex items-center justify-center mb-6 border border-slate-200">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-serif">
                {item.title}
              </h3>
              <p className="text-slate-600 mt-3 text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-amber-600 font-extrabold uppercase text-xs tracking-widest">
            Registry Information
          </span>
          <h2 className="text-2xl font-serif font-bold mt-1 text-slate-900">
            Frequently asked admission questions
          </h2>
        </div>

        <div className="space-y-3">
          {[
            {
              q: "How can I apply for admission?",
              a: "You can submit the online inquiry form or visit the BIMS admission desk for direct counseling.",
            },
            {
              q: "Is counseling support available?",
              a: "Yes, the admission team will guide you about eligibility, course details, documents and seat confirmation.",
            },
            {
              q: "Which documents are required?",
              a: "Basic academic certificates, identity proof, photographs, migration/college leaving certificate and applicable category documents are required.",
            },
          ].map((item, i) => (
            <details
              key={i}
              className="bg-white rounded-sm p-4 border border-slate-200 shadow-xs group"
            >
              <summary className="font-bold text-slate-900 text-sm cursor-pointer flex items-center justify-between list-none">
                {item.q}
                <ChevronDown
                  size={16}
                  className="text-slate-400 group-open:rotate-180 transition-transform"
                />
              </summary>
              <p className="text-slate-600 mt-3 text-xs leading-relaxed border-t border-slate-100 pt-3">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto bg-[#0d1e3d] border-b-8 border-amber-500 rounded-sm p-8 md:p-12 text-white grid lg:grid-cols-2 gap-8 items-center shadow-md">
          <div>
            <h2 className="text-xl md:text-3xl font-serif font-bold text-slate-100">
              Begin Your Admission Process Today
            </h2>
            <p className="text-slate-400 mt-2 text-xs max-w-md">
              Submit your inquiry and receive admission guidance from the BIMS
              academic counseling desk.
            </p>
          </div>

          <button
            onClick={() => scrollToSection("apply")}
            className="lg:ml-auto bg-amber-500 text-slate-950 px-6 py-3.5 rounded-sm font-bold hover:bg-amber-400 transition-colors shadow-md flex items-center gap-2 text-xs uppercase tracking-widest border border-amber-600"
          >
            Submit Inquiry <ArrowRight size={14} />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Admissions;