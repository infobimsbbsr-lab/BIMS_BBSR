// import React, { useState } from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import PageHeader from '../components/PageHeader';
// import { Send, CheckCircle, AlertCircle } from 'lucide-react';
// import axios from 'axios';

// const ApplyOnline = () => {
//   const [formData, setFormData] = useState({
//     courseApplied: 'MBA',
//     firstName: '',
//     lastName: '',
//     fatherName: '',
//     dob: '',
//     gender: 'Male',
//     category: 'General',
//     email: '',
//     phone: '',
//     address: '',
//     city: '',
//     state: '',
//     zipCode: '',
//     tenthBoard: '',
//     tenthPercentage: '',
//     twelfthBoard: '',
//     twelfthPercentage: '',
//     graduationDegree: '',
//     graduationPercentage: ''
//   });

//   const [status, setStatus] = useState({ type: '', message: '' });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setStatus({ type: '', message: '' });

//     try {
//       const response = await axios.post('/api/applications', formData);
//       setStatus({ type: 'success', message: response.data.message });
//       // Reset form
//       setFormData({
//         courseApplied: 'MBA',
//         firstName: '',
//         lastName: '',
//         fatherName: '',
//         dob: '',
//         gender: 'Male',
//         category: 'General',
//         email: '',
//         phone: '',
//         address: '',
//         city: '',
//         state: '',
//         zipCode: '',
//         tenthBoard: '',
//         tenthPercentage: '',
//         twelfthBoard: '',
//         twelfthPercentage: '',
//         graduationDegree: '',
//         graduationPercentage: ''
//       });
//       window.scrollTo(0, 0);
//     } catch (error) {
//       console.error(error);
//       setStatus({
//         type: 'error',
//         message: error.response?.data?.message || 'Something went wrong. Please try again.'
//       });
//       window.scrollTo(0, 0);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col">
//       <Navbar />
//       <PageHeader title="Apply Online" breadcrumb="Admission / Apply Online" />

//       <section className="py-16 max-w-5xl mx-auto px-4 w-full">
//         <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
//           <div className="bg-bims-blue text-white p-6 md:p-8">
//             <h2 className="text-2xl font-bold">Admission Application Form 2026-2028</h2>
//             <p className="text-blue-100 mt-2">Please fill in the details carefully. Fields marked with * are mandatory.</p>
//           </div>

//           <div className="p-6 md:p-10">
//             {status.message && (
//               <div className={`mb-8 p-4 rounded-lg flex items-center gap-3 ${status.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
//                 {status.type === 'success' ? <CheckCircle size={24} /> : <AlertCircle size={24} />}
//                 <p className="font-medium">{status.message}</p>
//               </div>
//             )}

//             <form onSubmit={handleSubmit} className="space-y-8">

//               {/* Section 1: Course Selection */}
//               <div>
//                 <h3 className="text-lg font-bold text-bims-blue border-b pb-2 mb-4">1. Program Selection</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div className="flex flex-col gap-2">
//                     <label className="text-sm font-semibold text-gray-700">Course Applied For *</label>
//                     <select
//                       name="courseApplied"
//                       value={formData.courseApplied}
//                       onChange={handleChange}
//                       className="border border-gray-300 rounded p-3 focus:outline-none focus:border-bims-blue bg-white"
//                       required
//                     >
//                       <option value="MBA">Master of Business Administration (MBA)</option>
//                       <option value="IMBA">Integrated MBA</option>
//                       <option value="BBA">BBA</option>
//                     </select>
//                   </div>
//                 </div>
//               </div>

//               {/* Section 2: Personal Details */}
//               <div>
//                 <h3 className="text-lg font-bold text-bims-blue border-b pb-2 mb-4">2. Personal Details</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div className="flex flex-col gap-2">
//                     <label className="text-sm font-semibold text-gray-700">First Name *</label>
//                     <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="border border-gray-300 rounded p-3 focus:outline-none focus:border-bims-blue" required />
//                   </div>
//                   <div className="flex flex-col gap-2">
//                     <label className="text-sm font-semibold text-gray-700">Last Name *</label>
//                     <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="border border-gray-300 rounded p-3 focus:outline-none focus:border-bims-blue" required />
//                   </div>
//                   <div className="flex flex-col gap-2">
//                     <label className="text-sm font-semibold text-gray-700">Father's Name *</label>
//                     <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} className="border border-gray-300 rounded p-3 focus:outline-none focus:border-bims-blue" required />
//                   </div>
//                   <div className="flex flex-col gap-2">
//                     <label className="text-sm font-semibold text-gray-700">Date of Birth *</label>
//                     <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="border border-gray-300 rounded p-3 focus:outline-none focus:border-bims-blue" required />
//                   </div>
//                   <div className="flex flex-col gap-2">
//                     <label className="text-sm font-semibold text-gray-700">Gender *</label>
//                     <select name="gender" value={formData.gender} onChange={handleChange} className="border border-gray-300 rounded p-3 focus:outline-none focus:border-bims-blue bg-white" required>
//                       <option value="Male">Male</option>
//                       <option value="Female">Female</option>
//                       <option value="Other">Other</option>
//                     </select>
//                   </div>
//                   <div className="flex flex-col gap-2">
//                     <label className="text-sm font-semibold text-gray-700">Category</label>
//                     <select name="category" value={formData.category} onChange={handleChange} className="border border-gray-300 rounded p-3 focus:outline-none focus:border-bims-blue bg-white">
//                       <option value="General">General</option>
//                       <option value="OBC">OBC</option>
//                       <option value="SC">SC</option>
//                       <option value="ST">ST</option>
//                     </select>
//                   </div>
//                 </div>
//               </div>

//               {/* Section 3: Contact Details */}
//               <div>
//                 <h3 className="text-lg font-bold text-bims-blue border-b pb-2 mb-4">3. Contact Information</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div className="flex flex-col gap-2">
//                     <label className="text-sm font-semibold text-gray-700">Email Address *</label>
//                     <input type="email" name="email" value={formData.email} onChange={handleChange} className="border border-gray-300 rounded p-3 focus:outline-none focus:border-bims-blue" required />
//                   </div>
//                   <div className="flex flex-col gap-2">
//                     <label className="text-sm font-semibold text-gray-700">Mobile Number *</label>
//                     <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="border border-gray-300 rounded p-3 focus:outline-none focus:border-bims-blue" required />
//                   </div>
//                   <div className="flex flex-col gap-2 md:col-span-2">
//                     <label className="text-sm font-semibold text-gray-700">Address *</label>
//                     <textarea name="address" value={formData.address} onChange={handleChange} rows="3" className="border border-gray-300 rounded p-3 focus:outline-none focus:border-bims-blue" required></textarea>
//                   </div>
//                   <div className="flex flex-col gap-2">
//                     <label className="text-sm font-semibold text-gray-700">City *</label>
//                     <input type="text" name="city" value={formData.city} onChange={handleChange} className="border border-gray-300 rounded p-3 focus:outline-none focus:border-bims-blue" required />
//                   </div>
//                   <div className="flex flex-col gap-2">
//                     <label className="text-sm font-semibold text-gray-700">State *</label>
//                     <input type="text" name="state" value={formData.state} onChange={handleChange} className="border border-gray-300 rounded p-3 focus:outline-none focus:border-bims-blue" required />
//                   </div>
//                   <div className="flex flex-col gap-2">
//                     <label className="text-sm font-semibold text-gray-700">Zip Code *</label>
//                     <input type="text" name="zipCode" value={formData.zipCode} onChange={handleChange} className="border border-gray-300 rounded p-3 focus:outline-none focus:border-bims-blue" required />
//                   </div>
//                 </div>
//               </div>

//               {/* Section 4: Academic Details */}
//               <div>
//                 <h3 className="text-lg font-bold text-bims-blue border-b pb-2 mb-4">4. Academic Background</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div className="flex flex-col gap-2">
//                     <label className="text-sm font-semibold text-gray-700">10th Board Name *</label>
//                     <input type="text" name="tenthBoard" value={formData.tenthBoard} onChange={handleChange} placeholder="e.g. CBSE, ICSE, BSE" className="border border-gray-300 rounded p-3 focus:outline-none focus:border-bims-blue" required />
//                   </div>
//                   <div className="flex flex-col gap-2">
//                     <label className="text-sm font-semibold text-gray-700">10th Percentage/CGPA *</label>
//                     <input type="text" name="tenthPercentage" value={formData.tenthPercentage} onChange={handleChange} className="border border-gray-300 rounded p-3 focus:outline-none focus:border-bims-blue" required />
//                   </div>
//                   <div className="flex flex-col gap-2">
//                     <label className="text-sm font-semibold text-gray-700">12th Board Name *</label>
//                     <input type="text" name="twelfthBoard" value={formData.twelfthBoard} onChange={handleChange} placeholder="e.g. CBSE, CHSE" className="border border-gray-300 rounded p-3 focus:outline-none focus:border-bims-blue" required />
//                   </div>
//                   <div className="flex flex-col gap-2">
//                     <label className="text-sm font-semibold text-gray-700">12th Percentage/CGPA *</label>
//                     <input type="text" name="twelfthPercentage" value={formData.twelfthPercentage} onChange={handleChange} className="border border-gray-300 rounded p-3 focus:outline-none focus:border-bims-blue" required />
//                   </div>
//                   <div className="flex flex-col gap-2">
//                     <label className="text-sm font-semibold text-gray-700">Graduation Degree (if applicable)</label>
//                     <input type="text" name="graduationDegree" value={formData.graduationDegree} onChange={handleChange} placeholder="e.g. B.Com, B.Tech, BBA" className="border border-gray-300 rounded p-3 focus:outline-none focus:border-bims-blue" />
//                   </div>
//                   <div className="flex flex-col gap-2">
//                     <label className="text-sm font-semibold text-gray-700">Graduation Percentage/CGPA</label>
//                     <input type="text" name="graduationPercentage" value={formData.graduationPercentage} onChange={handleChange} className="border border-gray-300 rounded p-3 focus:outline-none focus:border-bims-blue" />
//                   </div>
//                 </div>
//               </div>

//               {/* Submit Button */}
//               <div className="pt-6 border-t">
//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="w-full md:w-auto bg-bims-green hover:bg-green-600 text-white font-bold py-4 px-12 rounded shadow-lg transition transform hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
//                 >
//                   {isSubmitting ? 'Submitting...' : 'Submit Application'} <Send size={20} />
//                 </button>
//               </div>

//             </form>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default ApplyOnline;

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Send,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  FileText,
  GraduationCap,
  User,
  MapPin,
  BookOpen,
  ShieldCheck,
} from "lucide-react";
import axios from "axios";

const ApplyOnline = () => {
  const [formData, setFormData] = useState({
    courseApplied: "MBA",
    firstName: "",
    lastName: "",
    fatherName: "",
    dob: "",
    gender: "Male",
    category: "General",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    tenthBoard: "",
    tenthPercentage: "",
    twelfthBoard: "",
    twelfthPercentage: "",
    graduationDegree: "",
    graduationPercentage: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData({
      courseApplied: "MBA",
      firstName: "",
      lastName: "",
      fatherName: "",
      dob: "",
      gender: "Male",
      category: "General",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      tenthBoard: "",
      tenthPercentage: "",
      twelfthBoard: "",
      twelfthPercentage: "",
      graduationDegree: "",
      graduationPercentage: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    const emailData = {
      _subject: `New Online Application - ${formData.courseApplied}`,
      _template: "table",
      _captcha: "false",

      Course_Applied: formData.courseApplied,
      First_Name: formData.firstName,
      Last_Name: formData.lastName,
      Father_Name: formData.fatherName,
      Date_Of_Birth: formData.dob,
      Gender: formData.gender,
      Category: formData.category,
      Email: formData.email,
      Phone: formData.phone,
      Address: formData.address,
      City: formData.city,
      State: formData.state,
      Zip_Code: formData.zipCode,
      Tenth_Board: formData.tenthBoard,
      Tenth_Percentage: formData.tenthPercentage,
      Twelfth_Board: formData.twelfthBoard,
      Twelfth_Percentage: formData.twelfthPercentage,
      Graduation_Degree: formData.graduationDegree || "Not Applicable",
      Graduation_Percentage: formData.graduationPercentage || "Not Applicable",
    };

    try {
      await axios.post(
        "https://formsubmit.co/ajax/info.bimsbbsr@gmail.com",
        emailData
      );

      setStatus({
        type: "success",
        message:
          "Application submitted successfully. Our admission team will contact you shortly.",
      });

      resetForm();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      console.error(error);
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again after some time.",
      });
      window.scrollTo({ top: 0, behavior: "smooth" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-sm bg-slate-50 border border-slate-300 outline-none text-sm focus:border-slate-900 focus:bg-white transition";

  const labelClass =
    "text-[11px] uppercase font-bold tracking-wider text-slate-500 mb-1";

  return (
    <div className="min-h-screen bg-[#f1f5f9] text-slate-800 font-sans antialiased">
      <Navbar />

      {/* NOTICE BAR */}
      <div className="bg-amber-500 text-slate-950 font-bold text-xs md:text-sm py-2 px-4 border-b border-amber-600 flex items-center overflow-hidden">
        <span className="bg-slate-950 text-white px-2 py-0.5 rounded-sm text-[10px] uppercase tracking-wider mr-3 flex-shrink-0">
          Admissions Open
        </span>

        <marquee scrollamount="4">
          Applications are now open for MBA, IMBA and BBA programs. Submit your
          online application through the official BIMS admission portal.
        </marquee>
      </div>

      {/* HERO */}
      <section className="relative bg-[#0d1e3d] text-white border-b-8 border-amber-500 py-16 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 to-slate-950/70" />

        <div className="relative max-w-7xl mx-auto px-4 grid lg:grid-cols-[1fr_420px] gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-sm px-3 py-1.5 text-xs font-bold text-amber-400 mb-6 uppercase tracking-widest">
              <FileText size={14} /> Admission Portal 2026
            </div>

            <h1 className="text-3xl md:text-5xl font-serif font-bold leading-tight text-slate-100">
              Apply Online For <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200 font-sans font-black">
                BIMS Admissions
              </span>
            </h1>

            <p className="mt-5 text-base text-slate-300 max-w-xl leading-relaxed">
              Complete your online application process for MBA, IMBA and BBA
              programs. Submit your personal, contact and academic details to
              begin your admission journey.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10">
              {[
                ["MBA", "2 Years Program"],
                ["IMBA", "Integrated Degree"],
                ["BBA", "Business Studies"],
                ["Support", "Admission Desk"],
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

          <div className="bg-white text-slate-900 rounded-sm shadow-xl p-8 border-t-4 border-amber-500">
            <h2 className="text-xl font-serif font-bold text-slate-900">
              Admission Highlights
            </h2>

            <div className="space-y-4 mt-6">
              {[
                "Online Application Facility",
                "Admission Counseling Support",
                "Placement Assistance",
                "Experienced Faculty Members",
                "Modern Campus Infrastructure",
                "Industry-Oriented Curriculum",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-sm p-4"
                >
                  <CheckCircle size={18} className="text-emerald-600" />
                  <span className="font-semibold text-sm text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="py-20 max-w-6xl mx-auto px-4 w-full">
        {status.message && (
          <div
            className={`mb-8 p-4 rounded-sm flex items-center gap-3 border ${
              status.type === "success"
                ? "bg-green-50 text-green-800 border-green-200"
                : "bg-red-50 text-red-800 border-red-200"
            }`}
          >
            {status.type === "success" ? (
              <CheckCircle size={24} />
            ) : (
              <AlertCircle size={24} />
            )}
            <p className="font-bold text-sm">{status.message}</p>
          </div>
        )}

        <div className="bg-white rounded-sm shadow-xl overflow-hidden border border-slate-200">
          <div className="bg-[#0d1e3d] text-white p-6 md:p-8 border-b-4 border-amber-500">
            <h2 className="text-2xl font-serif font-bold">
              Admission Application Form 2026-2028
            </h2>
            <p className="text-slate-300 mt-2 text-sm">
              Please fill in the details carefully. Fields marked with * are
              mandatory.
            </p>
          </div>

          <div className="p-6 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Section 1 */}
              <div>
                <h3 className="flex items-center gap-2 text-lg font-serif font-bold text-slate-900 border-b border-slate-200 pb-3 mb-5">
                  <BookOpen className="text-amber-500" size={20} />
                  1. Program Selection
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label className={labelClass}>Course Applied For *</label>
                    <select
                      name="courseApplied"
                      value={formData.courseApplied}
                      onChange={handleChange}
                      className={inputClass}
                      required
                    >
                      <option value="MBA">
                        Master of Business Administration (MBA)
                      </option>
                      <option value="IMBA">Integrated MBA</option>
                      <option value="BBA">BBA</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Section 2 */}
              <div>
                <h3 className="flex items-center gap-2 text-lg font-serif font-bold text-slate-900 border-b border-slate-200 pb-3 mb-5">
                  <User className="text-amber-500" size={20} />
                  2. Personal Details
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label className={labelClass}>First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={inputClass}
                      required
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className={labelClass}>Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={inputClass}
                      required
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className={labelClass}>Father's Name *</label>
                    <input
                      type="text"
                      name="fatherName"
                      value={formData.fatherName}
                      onChange={handleChange}
                      className={inputClass}
                      required
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className={labelClass}>Date of Birth *</label>
                    <input
                      type="date"
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                      className={inputClass}
                      required
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className={labelClass}>Gender *</label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className={inputClass}
                      required
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="flex flex-col">
                    <label className={labelClass}>Category</label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="General">General</option>
                      <option value="OBC">OBC</option>
                      <option value="SC">SC</option>
                      <option value="ST">ST</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div>
                <h3 className="flex items-center gap-2 text-lg font-serif font-bold text-slate-900 border-b border-slate-200 pb-3 mb-5">
                  <MapPin className="text-amber-500" size={20} />
                  3. Contact Information
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label className={labelClass}>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClass}
                      required
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className={labelClass}>Mobile Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputClass}
                      required
                    />
                  </div>

                  <div className="flex flex-col md:col-span-2">
                    <label className={labelClass}>Address *</label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      rows="3"
                      className={inputClass}
                      required
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className={labelClass}>City *</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className={inputClass}
                      required
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className={labelClass}>State *</label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className={inputClass}
                      required
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className={labelClass}>Zip Code *</label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      className={inputClass}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Section 4 */}
              <div>
                <h3 className="flex items-center gap-2 text-lg font-serif font-bold text-slate-900 border-b border-slate-200 pb-3 mb-5">
                  <GraduationCap className="text-amber-500" size={20} />
                  4. Academic Background
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label className={labelClass}>10th Board Name *</label>
                    <input
                      type="text"
                      name="tenthBoard"
                      value={formData.tenthBoard}
                      onChange={handleChange}
                      placeholder="e.g. CBSE, ICSE, BSE"
                      className={inputClass}
                      required
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className={labelClass}>10th Percentage/CGPA *</label>
                    <input
                      type="text"
                      name="tenthPercentage"
                      value={formData.tenthPercentage}
                      onChange={handleChange}
                      className={inputClass}
                      required
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className={labelClass}>12th Board Name *</label>
                    <input
                      type="text"
                      name="twelfthBoard"
                      value={formData.twelfthBoard}
                      onChange={handleChange}
                      placeholder="e.g. CBSE, CHSE"
                      className={inputClass}
                      required
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className={labelClass}>
                      12th Percentage/CGPA *
                    </label>
                    <input
                      type="text"
                      name="twelfthPercentage"
                      value={formData.twelfthPercentage}
                      onChange={handleChange}
                      className={inputClass}
                      required
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className={labelClass}>
                      Graduation Degree if applicable
                    </label>
                    <input
                      type="text"
                      name="graduationDegree"
                      value={formData.graduationDegree}
                      onChange={handleChange}
                      placeholder="e.g. B.Com, B.Tech, BBA"
                      className={inputClass}
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className={labelClass}>
                      Graduation Percentage/CGPA
                    </label>
                    <input
                      type="text"
                      name="graduationPercentage"
                      value={formData.graduationPercentage}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>
              </div>

              {/* Declaration */}
              <div className="bg-amber-50 border border-amber-200 rounded-sm p-5 flex gap-3">
                <ShieldCheck
                  size={22}
                  className="text-amber-600 flex-shrink-0"
                />
                <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
                  I hereby declare that the information provided above is true
                  and correct to the best of my knowledge. I understand that the
                  college may verify the submitted details during the admission
                  process.
                </p>
              </div>

              {/* Submit */}
              <div className="pt-6 border-t border-slate-200">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto bg-[#0d1e3d] hover:bg-slate-900 text-white font-bold py-4 px-12 rounded-sm shadow-lg transition flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed uppercase tracking-widest text-xs border border-slate-800"
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                  <Send size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ApplyOnline;