
// import React, { useState, useEffect } from 'react';
// import Navbar from '../components/Navbar';
// import Hero from '../components/Hero';
// import Footer from '../components/Footer';
// import { BookOpen, Users, Trophy, Building2, ChevronRight, Calendar, ArrowRight, MapPin, Quote } from 'lucide-react';
// import axios from 'axios';

// const Home = () => {
//   // State for inquiry form
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     course: 'MBA',
//     message: ''
//   });
//   const [status, setStatus] = useState('');

//   // Data States
//   const [courses, setCourses] = useState([]);
//   const [events, setEvents] = useState([]);
//   const [recruiters, setRecruiters] = useState([]);
//   const [testimonials, setTestimonials] = useState([]);
//   const [faculty, setFaculty] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [resCourses, resEvents, resRecruiters, resTestimonials, resFaculty] = await Promise.all([
//            axios.get('/api/courses'),
//            axios.get('/api/events'),
//            axios.get('/api/recruiters'),
//            axios.get('/api/testimonials'),
//            axios.get('/api/faculty')
//         ]);
//         setCourses(resCourses.data);
//         setEvents(resEvents.data);
//         setRecruiters(resRecruiters.data);
//         setTestimonials(resTestimonials.data);
//         setFaculty(resFaculty.data);
//       } catch (err) {
//         console.error("Error fetching data:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus('Sending...');
//     try {
//       await axios.post('/api/inquiries', formData);
//       setStatus('Inquiry Sent Successfully!');
//       setFormData({ name: '', email: '', phone: '', course: 'MBA', message: '' });
//     } catch (error) {
//       console.error(error);
//       setStatus('Failed to send. Try again.');
//     }
//   };

//   const features = [
//     { icon: <BookOpen size={32} />, title: "Academic Excellence", desc: "Industry-aligned curriculum tailored for modern business challenges." },
//     { icon: <Users size={32} />, title: "Expert Faculty", desc: "Learn from Ph.D. holders and industry veterans." },
//     { icon: <Trophy size={32} />, title: "Top Placements", desc: "Consistent track record with top MNCs and corporates." },
//     { icon: <Building2 size={32} />, title: "Modern Campus", desc: "State-of-the-art infrastructure in the heart of Bhubaneswar." },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col">
//       <Navbar />
//       <Hero news={events.filter(e => e.category === 'News')} />

//       {/* About Section */}
//       <section className="py-20 px-4 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//         <div className="relative">
//           <div className="absolute -top-4 -left-4 w-24 h-24 bg-bims-green rounded-tl-3xl opacity-20"></div>
//           <img 
//             src="/images/college.jpeg" 
//             alt="BIMS College Building" 
//             className="rounded-lg shadow-xl relative z-10 w-full"
//           />
//           <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-bims-blue rounded-br-3xl opacity-20"></div>
//         </div>
//         <div>
//           <h4 className="text-bims-green font-bold uppercase tracking-wider mb-2">Welcome to BIMS</h4>
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Empowering Minds, <br/>Transforming Lives</h2>
//           <p className="text-gray-600 mb-6 leading-relaxed">
//             At Bhubaneswar Institute of Management and Science, we believe in holistic development. Modeled after leading global institutions, we provide an environment that fosters critical thinking, innovation, and leadership.
//           </p>
//           <ul className="space-y-3 mb-8">
//             {['Industry Integrated Curriculum', '100% Placement Assistance', 'Soft Skills Development'].map((item, i) => (
//               <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
//                 <span className="w-5 h-5 rounded-full bg-bims-green/20 flex items-center justify-center text-bims-green text-xs">✓</span>
//                 {item}
//               </li>
//             ))}
//           </ul>
//           <button className="bg-bims-blue text-white px-6 py-3 rounded font-semibold hover:bg-blue-900 transition flex items-center gap-2">
//             Read More <ArrowRight size={18}/>
//           </button>
//         </div>
//       </section>

//       {/* Why Choose BIMS (Features) */}
//       <section className="bg-bims-blue py-20 text-white clip-path-slant pb-32">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl font-bold mb-4">Why Choose BIMS?</h2>
//             <div className="w-20 h-1 bg-bims-green mx-auto"></div>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {features.map((feat, idx) => (
//               <div key={idx} className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/10 hover:-translate-y-2 transition duration-300">
//                 <div className="text-bims-green mb-4">{feat.icon}</div>
//                 <h3 className="text-xl font-bold mb-2">{feat.title}</h3>
//                 <p className="text-gray-300 text-sm">{feat.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Courses Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="text-center mb-12">
//             <h4 className="text-bims-green font-bold uppercase tracking-wider mb-2">Academic Programs</h4>
//             <h2 className="text-3xl font-bold text-gray-900">Our Courses</h2>
//             <div className="w-20 h-1 bg-bims-green mx-auto mt-4"></div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {courses.length > 0 ? courses.map((course) => (
//               <div key={course._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex flex-col h-full">
//                 <div className="h-48 bg-gray-200 relative">
//                    <img 
//                       src={course.image || "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop"} 
//                       alt={course.title}
//                       className="w-full h-full object-cover"
//                    />
//                    <div className="absolute top-4 right-4 bg-bims-green text-white text-xs font-bold px-2 py-1 rounded">
//                      {course.duration}
//                    </div>
//                    {course.seats && (
//                      <div className="absolute top-4 left-4 bg-bims-blue text-white text-xs font-bold px-2 py-1 rounded">
//                        {course.seats} Seats
//                      </div>
//                    )}
//                 </div>
//                 <div className="p-6 flex flex-col flex-grow">
//                   <h3 className="text-xl font-bold text-gray-800 mb-2">{course.title}</h3>
//                   <p className="text-sm text-gray-500 mb-4">{course.code}</p>
//                   {course.seats && (
//                     <div className="mb-4">
//                       <span className="bg-green-100 text-green-800 text-sm font-bold px-3 py-1 rounded-full">
//                         {course.seats} Seats Available
//                       </span>
//                     </div>
//                   )}
//                   <p className="text-gray-600 text-sm mb-6 flex-grow line-clamp-3">{course.description}</p>

//                   <div className="border-t border-gray-100 pt-4 mt-auto">
//                     <p className="text-xs text-gray-500 mb-2"><strong>Eligibility:</strong> {course.eligibility}</p>
//                     <button className="w-full mt-2 border border-bims-blue text-bims-blue font-semibold py-2 rounded hover:bg-bims-blue hover:text-white transition">
//                       View Syllabus
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             )) : (
//               <p className="text-center col-span-3 text-gray-500">Loading courses...</p>
//             )}
//           </div>
//         </div>
//       </section>

//       {/* Events & Inquiry Section (Split) */}
//       <section className="max-w-7xl mx-auto px-4 py-20 relative z-20">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

//           {/* News & Notices */}
//           <div className="lg:col-span-2 bg-white rounded-lg shadow-xl p-8">
//             <div className="flex justify-between items-center mb-6">
//               <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
//                 <Calendar className="text-bims-green"/> Recent Notices & Events
//               </h3>
//               <a href="#" className="text-bims-blue font-semibold text-sm hover:underline">View All</a>
//             </div>
//             <div className="space-y-4">
//               {events.length > 0 ? events.slice(0, 5).map((event) => (
//                 <div key={event._id} className="flex items-start gap-4 p-4 border-b border-gray-100 hover:bg-gray-50 transition group">
//                   <div className="bg-gray-100 text-gray-600 rounded px-3 py-2 text-center min-w-[70px] group-hover:bg-bims-blue group-hover:text-white transition">
//                     <span className="block text-xs font-bold">{new Date(event.date).toLocaleDateString('en-US', { month: 'short' }).toUpperCase()}</span>
//                     <span className="block text-sm font-bold">{new Date(event.date).getDate()}</span>
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-gray-800 hover:text-bims-blue cursor-pointer transition">{event.title}</h4>
//                     <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded mt-1 inline-block">{event.category}</span>
//                     <p className="text-xs text-bims-green font-medium mt-1 cursor-pointer flex items-center gap-1">Read Details <ChevronRight size={12}/></p>
//                   </div>
//                 </div>
//               )) : (
//                 <p className="text-gray-500">No recent notices.</p>
//               )}
//             </div>
//           </div>

//           {/* Inquiry Form */}
//           <div className="bg-bims-green rounded-lg shadow-xl p-8 text-white h-fit">
//             <h3 className="text-2xl font-bold mb-2">Quick Inquiry</h3>
//             <p className="text-green-50 text-sm mb-6">Request information about admissions.</p>

//             <form onSubmit={handleSubmit} className="space-y-4">
//               <input 
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 type="text" 
//                 placeholder="Full Name" 
//                 className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 placeholder-white/70 text-white focus:outline-none focus:bg-white/20"
//                 required
//               />
//               <input 
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 type="email" 
//                 placeholder="Email Address" 
//                 className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 placeholder-white/70 text-white focus:outline-none focus:bg-white/20"
//                 required
//               />
//               <input 
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 type="tel" 
//                 placeholder="Phone Number" 
//                 className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 placeholder-white/70 text-white focus:outline-none focus:bg-white/20"
//                 required
//               />
//               <select 
//                 name="course"
//                 value={formData.course}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white focus:outline-none focus:bg-white/20 [&>option]:text-black"
//               >
//                 <option value="MBA">MBA (General)</option>
//                 <option value="MBA-Finance">MBA (Finance)</option>
//                 <option value="BBA">BBA</option>
//               </select>
//               <button type="submit" className="w-full bg-white text-bims-darkGreen font-bold py-3 rounded hover:bg-gray-100 transition shadow-lg">
//                 Submit Inquiry
//               </button>
//               {status && <p className="text-sm text-center font-semibold mt-2">{status}</p>}
//             </form>
//           </div>

//         </div>
//       </section>

//       {/* Leadership & Faculty Section */}
//       {faculty.length > 0 && (
//         <section className="py-20 bg-gray-50">
//           <div className="max-w-7xl mx-auto px-4">
//             {/* Leadership */}
//             <div className="text-center mb-12">
//                <h2 className="text-3xl font-bold text-gray-900">Our Leadership</h2>
//                <div className="w-20 h-1 bg-bims-blue mx-auto mt-4"></div>
//             </div>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto mb-16">
//               <div className="bg-gradient-to-br from-bims-blue to-blue-900 rounded-xl shadow-2xl p-8 text-center transform hover:scale-105 transition">
//                 <div className="w-40 h-40 mx-auto bg-white rounded-full mb-4 overflow-hidden border-4 border-white shadow-lg">
//                   <img 
//                     src="/images/court.jpeg" 
//                     alt="Swadhishree Pradhan" 
//                     className="w-full h-full object-cover object-top"
//                   />
//                 </div>
//                 <h3 className="font-bold text-xl text-white mb-1">Swadhishree Pradhan</h3>
//                 <p className="text-bims-green text-base font-semibold">Secretary</p>
//               </div>
//               <div className="bg-gradient-to-br from-bims-blue to-blue-900 rounded-xl shadow-2xl p-8 text-center transform hover:scale-105 transition">
//                 <div className="w-40 h-40 mx-auto bg-white rounded-full mb-4 overflow-hidden border-4 border-white shadow-lg">
//                   <img 
//                     src="/images/chairman.jpeg" 
//                     alt="Akash Mohapatra" 
//                     className="w-full h-full object-cover object-top"
//                   />
//                 </div>
//                 <h3 className="font-bold text-xl text-white mb-1">Akash Mohapatra</h3>
//                 <p className="text-bims-green text-base font-semibold">Chairman</p>
//               </div>
//             </div>

//             {/* Faculty */}
//             <div className="text-center mb-12">
//                <h2 className="text-3xl font-bold text-gray-900">Distinguished Faculty</h2>
//                <div className="w-20 h-1 bg-bims-green mx-auto mt-4"></div>
//             </div>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//               {faculty.slice(0, 4).map((fac) => (
//                 <div key={fac._id} className="bg-white rounded-lg shadow p-4 text-center hover:shadow-lg transition">
//                   <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full mb-4 overflow-hidden">
//                     <img 
//                       src={fac.image || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} 
//                       alt={fac.name} 
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <h3 className="font-bold text-lg text-gray-800">{fac.name}</h3>
//                   <p className="text-bims-green text-sm font-medium">{fac.designation}</p>
//                   <p className="text-gray-500 text-xs mt-1">{fac.qualification}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}

//       {/* Recruiters Section with Infinite Scroll */}
//       <section className="py-16 bg-white overflow-hidden">
//         <div className="max-w-7xl mx-auto px-4">
//            <div className="text-center mb-10">
//             <h3 className="text-2xl font-bold text-gray-800">Our Top Recruiters</h3>
//           </div>

//           <div className="relative w-full overflow-hidden">
//             <div className="flex w-[200%] animate-scroll">
//               {/* First Copy */}
//               <div className="flex w-1/2 justify-around items-center px-4">
//                 {recruiters.length > 0 ? recruiters.map((recruiter) => (
//                   <div key={`rec-${recruiter._id}`} className="w-40 h-20 flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 transition duration-300 px-4">
//                     {recruiter.logo ? (
//                       <img src={recruiter.logo} alt={recruiter.name} className="max-w-full max-h-full object-contain" />
//                     ) : (
//                       <span className="font-bold text-gray-400 text-lg">{recruiter.name}</span>
//                     )}
//                   </div>
//                 )) : [1,2,3,4].map(i => <div key={i} className="w-32 h-12 bg-gray-100 rounded"></div>)}
//               </div>

//               {/* Duplicate Copy for Seamless Loop */}
//               <div className="flex w-1/2 justify-around items-center px-4">
//                 {recruiters.length > 0 ? recruiters.map((recruiter) => (
//                   <div key={`rec-dup-${recruiter._id}`} className="w-40 h-20 flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 transition duration-300 px-4">
//                     {recruiter.logo ? (
//                       <img src={recruiter.logo} alt={recruiter.name} className="max-w-full max-h-full object-contain" />
//                     ) : (
//                       <span className="font-bold text-gray-400 text-lg">{recruiter.name}</span>
//                     )}
//                   </div>
//                 )) : [1,2,3,4].map(i => <div key={i} className="w-32 h-12 bg-gray-100 rounded"></div>)}
//               </div>
//             </div>
//           </div>

//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="py-20 bg-bims-blue text-white">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl font-bold">Student Voices</h2>
//              <div className="w-20 h-1 bg-bims-green mx-auto mt-4"></div>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {testimonials.length > 0 ? testimonials.map((t) => (
//               <div key={t._id} className="bg-white/10 backdrop-blur p-8 rounded-lg border border-white/10 relative">
//                 <Quote className="absolute top-4 right-4 text-bims-green opacity-50" size={40} />
//                 <p className="text-gray-200 italic mb-6">"{t.message}"</p>
//                 <div className="flex items-center gap-4">
//                    <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
//                      {t.image && <img src={t.image} alt={t.name} className="w-full h-full object-cover" />}
//                    </div>
//                    <div>
//                      <h4 className="font-bold text-white">{t.name}</h4>
//                      <p className="text-xs text-bims-green">{t.role} {t.batch && `(${t.batch})`}</p>
//                      {t.company && <p className="text-xs text-gray-400">Placed at {t.company}</p>}
//                    </div>
//                 </div>
//               </div>
//             )) : (
//                <p className="col-span-3 text-center text-white/50">Loading testimonials...</p>
//             )}
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Home;


// import React, { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import axios from "axios";
// import {
//   ArrowRight,
//   BookOpen,
//   Briefcase,
//   Building2,
//   Calendar,
//   CheckCircle2,
//   ChevronDown,
//   GraduationCap,
//   MapPin,
//   Play,
//   Rocket,
//   ShieldCheck,
//   Sparkles,
//   Star,
//   Target,
//   TrendingUp,
//   Users,
// } from "lucide-react";

// const Home = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     course: "MBA",
//     message: "",
//   });

//   const [status, setStatus] = useState("");
//   const [courses, setCourses] = useState([]);
//   const [events, setEvents] = useState([]);
//   const [recruiters, setRecruiters] = useState([]);
//   const [testimonials, setTestimonials] = useState([]);
//   const [faculty, setFaculty] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [c, e, r, t, f] = await Promise.all([
//           axios.get("/api/courses"),
//           axios.get("/api/events"),
//           axios.get("/api/recruiters"),
//           axios.get("/api/testimonials"),
//           axios.get("/api/faculty"),
//         ]);

//         setCourses(c.data || []);
//         setEvents(e.data || []);
//         setRecruiters(r.data || []);
//         setTestimonials(t.data || []);
//         setFaculty(f.data || []);
//       } catch (err) {
//         console.error("API error:", err);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   setStatus("Sending...");

//   //   try {
//   //     await axios.post("/api/inquiries", formData);
//   //     setStatus("Submitted successfully!");
//   //     setFormData({
//   //       name: "",
//   //       email: "",
//   //       phone: "",
//   //       course: "MBA",
//   //       message: "",
//   //     });
//   //   } catch (err) {
//   //     console.error(err);
//   //     setStatus("Failed. Try again.");
//   //   }
//   // };

//   const handleSubmit = async (e) => {
//   e.preventDefault();
//   setStatus("Sending...");

//   const emailData = {
//     _subject: `New Admission Inquiry - ${formData.course}`,
//     _template: "table",
//     _captcha: "false",
//     Name: formData.name,
//     Email: formData.email,
//     Phone: formData.phone,
//     Course: formData.course,
//     Message: formData.message || "No message",
//   };

//   try {
//     await axios.post(
//       "https://formsubmit.co/ajax/info.bimsbbsr@gmail.com",
//       emailData
//     );

//     setStatus("Submitted successfully! We will contact you soon.");

//     setFormData({
//       name: "",
//       email: "",
//       phone: "",
//       course: "MBA",
//       message: "",
//     });
//   } catch (error) {
//     console.error(error);
//     setStatus("Failed to send. Please try again.");
//   }
// };

//   const displayCourses =
//     courses.length > 0
//       ? courses
//       : [
//           {
//             _id: "1",
//             title: "MBA in Business Management",
//             duration: "2 Years",
//             description:
//               "A career-focused business program with leadership, finance, marketing, HR, analytics and placement preparation.",
//             eligibility: "Graduation in any discipline",
//           },
//           {
//             _id: "2",
//             title: "PGDM in AI & Data Science",
//             duration: "2 Years",
//             description:
//               "A modern business program designed with AI, analytics, business strategy and real-world projects.",
//             eligibility: "Graduation in any discipline",
//           },
//           {
//             _id: "3",
//             title: "BBA Program",
//             duration: "3 Years",
//             description:
//               "Foundation business program for students who want to build early careers in management and entrepreneurship.",
//             eligibility: "10+2 Passed",
//           },
//         ];

//   const displayRecruiters =
//     recruiters.length > 0
//       ? recruiters
//       : [
//           { name: "Deloitte" },
//           { name: "TCS" },
//           { name: "Wipro" },
//           { name: "Infosys" },
//           { name: "HDFC Bank" },
//           { name: "ICICI Bank" },
//           { name: "Axis Bank" },
//           { name: "Tech Mahindra" },
//         ];

//   const displayTestimonials =
//     testimonials.length > 0
//       ? testimonials
//       : [
//           {
//             _id: "1",
//             name: "Student Review",
//             role: "MBA Student",
//             message:
//               "The practical learning, business projects and placement preparation helped me build confidence.",
//           },
//           {
//             _id: "2",
//             name: "Student Review",
//             role: "PGDM Student",
//             message:
//               "The program gives strong exposure to business, analytics, presentations and corporate learning.",
//           },
//           {
//             _id: "3",
//             name: "Student Review",
//             role: "BBA Student",
//             message:
//               "Faculty support and campus learning environment are very helpful for career growth.",
//           },
//         ];

//   const displayEvents =
//     events.length > 0
//       ? events
//       : [
//           {
//             _id: "1",
//             title: "Admission Open for New Batch",
//             category: "Admission",
//             date: new Date(),
//           },
//           {
//             _id: "2",
//             title: "Business Leadership Workshop",
//             category: "Workshop",
//             date: new Date(),
//           },
//           {
//             _id: "3",
//             title: "Placement Readiness Session",
//             category: "Placement",
//             date: new Date(),
//           },
//         ];



//   return (
//     <div className="min-h-screen bg-[#f7f8fb] text-slate-900 overflow-x-hidden">
//       <Navbar />

//       {/* HERO */}
//       <section className="relative bg-[#07111f] text-white">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(37,99,235,0.45),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(16,185,129,0.35),transparent_35%)]" />

//         <div className="relative max-w-7xl mx-auto px-4 pt-16 pb-20 lg:pt-24 lg:pb-28 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
//           <div>
//             <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-2 text-sm font-semibold mb-6">
//               <Sparkles size={16} className="text-emerald-300" />
//               New-age School of Business
//             </div>

//             <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
//               Build a High-Growth Career in{" "}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-blue-400">
//                 Business & Leadership
//               </span>
//             </h1>

//             <p className="mt-6 text-lg text-slate-300 max-w-2xl leading-relaxed">
//               Learn business through live projects, industry mentors, AI-ready
//               curriculum, internships and placement-focused training.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 mt-8">
//               <a
//                 href="#apply"
//                 className="bg-emerald-400 text-[#07111f] px-7 py-4 rounded-xl font-black hover:bg-emerald-300 transition flex items-center justify-center gap-2"
//               >
//                 Request Callback <ArrowRight size={18} />
//               </a>

//               <a
//                 href="#programs"
//                 className="border border-white/20 px-7 py-4 rounded-xl font-black hover:bg-white/10 transition text-center flex items-center justify-center gap-2"
//               >
//                 <Play size={18} /> Explore Programs
//               </a>
//             </div>

//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
//               {[
//                 ["2 Years", "Full-time program"],
//                 ["100+", "Hiring network"],
//                 ["Live", "Projects"],
//                 ["Career", "Support"],
//               ].map((item, i) => (
//                 <div
//                   key={i}
//                   className="bg-white/10 border border-white/10 rounded-2xl p-4"
//                 >
//                   <h3 className="text-2xl font-black text-emerald-300">
//                     {item[0]}
//                   </h3>
//                   <p className="text-xs text-slate-300 mt-1">{item[1]}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* FORM */}
//           <div
//             id="apply"
//             className="bg-white text-slate-900 rounded-[2rem] shadow-2xl p-6 md:p-8"
//           >
//             <h2 className="text-2xl font-black">Get Program Details</h2>
//             <p className="text-slate-500 text-sm mt-1 mb-6">
//               Submit your details. Our admission team will contact you.
//             </p>

//             <form onSubmit={handleSubmit} className="space-y-4">
//               <input
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 placeholder="Full Name"
//                 className="w-full px-4 py-4 rounded-xl bg-slate-100 outline-none focus:ring-2 focus:ring-blue-600"
//               />

//               <input
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 type="email"
//                 placeholder="Email Address"
//                 className="w-full px-4 py-4 rounded-xl bg-slate-100 outline-none focus:ring-2 focus:ring-blue-600"
//               />

//               <input
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//                 type="tel"
//                 placeholder="Phone Number"
//                 className="w-full px-4 py-4 rounded-xl bg-slate-100 outline-none focus:ring-2 focus:ring-blue-600"
//               />

//               <select
//                 name="course"
//                 value={formData.course}
//                 onChange={handleChange}
//                 className="w-full px-4 py-4 rounded-xl bg-slate-100 outline-none focus:ring-2 focus:ring-blue-600"
//               >
//                 <option value="MBA">MBA</option>
//                 <option value="PGDM">PGDM</option>
//                 <option value="BBA">BBA</option>
//               </select>

//               <button
//                 type="submit"
//                 className="w-full bg-[#07111f] text-white py-4 rounded-xl font-black hover:bg-blue-900 transition"
//               >
//                 Submit
//               </button>

//               {status && (
//                 <p className="text-center text-sm font-bold text-blue-700">
//                   {status}
//                 </p>
//               )}
//             </form>
//           </div>
//         </div>
//       </section>

//       {/* STATS */}
//       <section className="max-w-7xl mx-auto px-4 -mt-10 relative z-20">
//         <div className="bg-white rounded-[2rem] shadow-xl grid grid-cols-2 md:grid-cols-4 overflow-hidden">
//           {[
//             ["100+", "Hiring Partners"],
//             ["25+", "Expert Mentors"],
//             ["10+", "Live Projects"],
//             ["100%", "Placement Assistance"],
//           ].map((item, i) => (
//             <div key={i} className="p-6 text-center border-r last:border-r-0">
//               <h3 className="text-3xl font-black text-blue-700">{item[0]}</h3>
//               <p className="text-sm text-slate-500 mt-1">{item[1]}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* WHY */}
//       <section className="py-24 px-4 max-w-7xl mx-auto">
//         <div className="text-center max-w-3xl mx-auto mb-14">
//           <p className="text-blue-700 font-black uppercase tracking-wider">
//             Why Choose Us
//           </p>
//           <h2 className="text-4xl md:text-5xl font-black mt-3">
//             Business education built for real career outcomes
//           </h2>
//         </div>

//         <div className="grid md:grid-cols-3 gap-6">
//           {[
//             {
//               icon: <Target />,
//               title: "Career-focused curriculum",
//               text: "Learn business concepts with practical projects, presentations and real-world case studies.",
//             },
//             {
//               icon: <Users />,
//               title: "Mentor-led learning",
//               text: "Get guidance from experienced faculty, industry mentors and career trainers.",
//             },
//             {
//               icon: <TrendingUp />,
//               title: "Placement preparation",
//               text: "Resume building, mock interviews, aptitude training and soft skill development.",
//             },
//           ].map((item, i) => (
//             <div
//               key={i}
//               className="bg-white rounded-[2rem] p-8 border shadow-sm hover:shadow-xl transition"
//             >
//               <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center mb-6">
//                 {item.icon}
//               </div>
//               <h3 className="text-2xl font-black">{item.title}</h3>
//               <p className="text-slate-600 mt-4 leading-relaxed">{item.text}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* PROGRAMS */}
//       <section id="programs" className="py-24 bg-[#07111f] text-white">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="text-center max-w-3xl mx-auto mb-14">
//             <p className="text-emerald-300 font-black uppercase tracking-wider">
//               Programs
//             </p>
//             <h2 className="text-4xl md:text-5xl font-black mt-3">
//               Choose your business career path
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-3 gap-6">
//             {displayCourses.map((course) => (
//               <div
//                 key={course._id}
//                 className="bg-white/10 border border-white/10 rounded-[2rem] p-7 hover:bg-white/15 transition"
//               >
//                 <div className="w-14 h-14 bg-emerald-400 text-[#07111f] rounded-2xl flex items-center justify-center mb-6">
//                   <BookOpen />
//                 </div>

//                 <h3 className="text-2xl font-black">{course.title}</h3>
//                 <p className="text-emerald-300 font-bold mt-2">
//                   {course.duration}
//                 </p>
//                 <p className="text-slate-300 mt-4 leading-relaxed text-sm">
//                   {course.description}
//                 </p>

//                 <div className="mt-6 pt-5 border-t border-white/10">
//                   <p className="text-xs text-slate-400">Eligibility</p>
//                   <p className="font-bold mt-1">{course.eligibility}</p>
//                 </div>

//                 <button className="mt-6 w-full bg-white text-[#07111f] py-3 rounded-xl font-black hover:bg-emerald-300 transition">
//                   View Program
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* EXPERIENCE */}
//       <section className="py-24 px-4 max-w-7xl mx-auto">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <div>
//             <p className="text-blue-700 font-black uppercase tracking-wider">
//               Learning Experience
//             </p>
//             <h2 className="text-4xl md:text-5xl font-black mt-3">
//               Learn business by building, pitching and solving real problems
//             </h2>
//             <p className="text-slate-600 mt-6 leading-relaxed">
//               Students work on case studies, business simulations, market
//               research, finance activities and presentation-based learning.
//             </p>

//             <div className="grid sm:grid-cols-2 gap-4 mt-8">
//               {[
//                 "Live Business Projects",
//                 "Corporate Workshops",
//                 "Mock Interviews",
//                 "Industry Sessions",
//               ].map((item, i) => (
//                 <div
//                   key={i}
//                   className="bg-white rounded-2xl p-5 border shadow-sm flex items-center gap-3"
//                 >
//                   <CheckCircle2 className="text-emerald-500" />
//                   <span className="font-black text-sm">{item}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="relative">
//             <div className="absolute -inset-4 bg-blue-600/10 rounded-[2rem] rotate-3" />
//             <img
//               src="/images/college.jpeg"
//               alt="Campus"
//               className="relative w-full h-[430px] object-cover rounded-[2rem] shadow-2xl"
//             />
//           </div>
//         </div>
//       </section>

//       {/* FACULTY */}
//       <section className="py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="text-center max-w-3xl mx-auto mb-14">
//             <p className="text-blue-700 font-black uppercase tracking-wider">
//               Mentors
//             </p>
//             <h2 className="text-4xl md:text-5xl font-black mt-3">
//               Learn from academic and industry experts
//             </h2>
//           </div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {(faculty.length > 0
//               ? faculty.slice(0, 4)
//               : [
//                   {
//                     _id: "1",
//                     name: "Industry Mentor",
//                     designation: "Business Strategy",
//                     qualification: "MBA / Corporate Expert",
//                   },
//                   {
//                     _id: "2",
//                     name: "Finance Mentor",
//                     designation: "Finance & Analytics",
//                     qualification: "Corporate Trainer",
//                   },
//                   {
//                     _id: "3",
//                     name: "Marketing Mentor",
//                     designation: "Brand & Growth",
//                     qualification: "Industry Expert",
//                   },
//                   {
//                     _id: "4",
//                     name: "Career Trainer",
//                     designation: "Placement Preparation",
//                     qualification: "HR Expert",
//                   },
//                 ]
//             ).map((fac) => (
//               <div
//                 key={fac._id}
//                 className="bg-[#f7f8fb] rounded-[2rem] p-6 text-center border hover:shadow-xl transition"
//               >
//                 <div className="w-24 h-24 rounded-full bg-slate-200 mx-auto overflow-hidden mb-4">
//                   {fac.image ? (
//                     <img
//                       src={fac.image}
//                       alt={fac.name}
//                       className="w-full h-full object-cover"
//                     />
//                   ) : (
//                     <div className="w-full h-full flex items-center justify-center text-slate-400">
//                       <Users />
//                     </div>
//                   )}
//                 </div>

//                 <h3 className="font-black text-lg">{fac.name}</h3>
//                 <p className="text-blue-700 text-sm font-bold mt-1">
//                   {fac.designation}
//                 </p>
//                 <p className="text-slate-500 text-xs mt-1">
//                   {fac.qualification}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* RECRUITERS */}
//       <section className="py-24 bg-[#07111f] text-white">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="text-center max-w-3xl mx-auto mb-12">
//             <p className="text-emerald-300 font-black uppercase tracking-wider">
//               Hiring Network
//             </p>
//             <h2 className="text-4xl md:text-5xl font-black mt-3">
//               Companies our students prepare for
//             </h2>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
//             {displayRecruiters.map((rec, i) => (
//               <div
//                 key={i}
//                 className="h-24 bg-white/10 border border-white/10 rounded-2xl flex items-center justify-center px-4"
//               >
//                 {rec.logo ? (
//                   <img
//                     src={rec.logo}
//                     alt={rec.name}
//                     className="max-h-12 object-contain"
//                   />
//                 ) : (
//                   <span className="font-black text-center text-sm">
//                     {rec.name}
//                   </span>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* EVENTS */}
//       <section className="py-24 px-4 max-w-7xl mx-auto">
//         <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
//           <div>
//             <p className="text-blue-700 font-black uppercase tracking-wider">
//               Updates
//             </p>
//             <h2 className="text-4xl md:text-5xl font-black mt-3">
//               Latest events and notices
//             </h2>
//           </div>
//         </div>

//         <div className="grid md:grid-cols-3 gap-6">
//           {displayEvents.slice(0, 3).map((event) => (
//             <div
//               key={event._id}
//               className="bg-white rounded-[2rem] p-7 border shadow-sm hover:shadow-xl transition"
//             >
//               <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
//                 <Calendar size={18} />
//                 {new Date(event.date).toLocaleDateString("en-IN", {
//                   day: "numeric",
//                   month: "short",
//                   year: "numeric",
//                 })}
//               </div>
//               <h3 className="text-xl font-black mt-4">{event.title}</h3>
//               <span className="inline-block mt-5 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-black">
//                 {event.category}
//               </span>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* TESTIMONIALS */}
//       <section className="py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="text-center max-w-3xl mx-auto mb-14">
//             <p className="text-blue-700 font-black uppercase tracking-wider">
//               Student Stories
//             </p>
//             <h2 className="text-4xl md:text-5xl font-black mt-3">
//               What students say about us
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-3 gap-6">
//             {displayTestimonials.slice(0, 3).map((t) => (
//               <div
//                 key={t._id}
//                 className="bg-[#f7f8fb] rounded-[2rem] p-8 border hover:shadow-xl transition"
//               >
//                 <div className="flex gap-1 text-yellow-400 mb-5">
//                   {[1, 2, 3, 4, 5].map((x) => (
//                     <Star key={x} size={18} fill="currentColor" />
//                   ))}
//                 </div>

//                 <p className="text-slate-600 leading-relaxed">“{t.message}”</p>

//                 <div className="mt-6 flex items-center gap-3">
//                   <div className="w-12 h-12 rounded-full bg-slate-300 overflow-hidden">
//                     {t.image && (
//                       <img
//                         src={t.image}
//                         alt={t.name}
//                         className="w-full h-full object-cover"
//                       />
//                     )}
//                   </div>

//                   <div>
//                     <h4 className="font-black">{t.name}</h4>
//                     <p className="text-xs text-blue-700 font-bold">{t.role}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FAQ */}
//       <section className="py-24 px-4 max-w-5xl mx-auto">
//         <div className="text-center mb-12">
//           <p className="text-blue-700 font-black uppercase tracking-wider">
//             FAQ
//           </p>
//           <h2 className="text-4xl md:text-5xl font-black mt-3">
//             Frequently asked questions
//           </h2>
//         </div>

//         <div className="space-y-4">
//           {[
//             {
//               q: "Who can apply for this program?",
//               a: "Students who have completed graduation can apply for MBA/PGDM programs. For BBA, 10+2 passed students can apply.",
//             },
//             {
//               q: "Is placement support available?",
//               a: "Yes, students get placement preparation, resume support, mock interviews and career guidance.",
//             },
//             {
//               q: "Will students get practical exposure?",
//               a: "Yes, the program includes live projects, workshops, presentations and industry sessions.",
//             },
//           ].map((item, i) => (
//             <details
//               key={i}
//               className="bg-white rounded-2xl p-6 border shadow-sm group"
//             >
//               <summary className="font-black cursor-pointer flex items-center justify-between">
//                 {item.q}
//                 <ChevronDown className="group-open:rotate-180 transition" />
//               </summary>
//               <p className="text-slate-600 mt-4 leading-relaxed">{item.a}</p>
//             </details>
//           ))}
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="px-4 pb-24">
//         <div className="max-w-7xl mx-auto bg-gradient-to-r from-blue-700 to-[#07111f] rounded-[2rem] p-8 md:p-14 text-white grid lg:grid-cols-2 gap-8 items-center">
//           <div>
//             <h2 className="text-3xl md:text-5xl font-black">
//               Start your business career today
//             </h2>
//             <p className="text-slate-200 mt-4">
//               Get complete program details, fees, eligibility and admission
//               guidance.
//             </p>
//           </div>

//           <a
//             href="#apply"
//             className="lg:ml-auto bg-emerald-400 text-[#07111f] px-8 py-4 rounded-xl font-black hover:bg-emerald-300 transition flex items-center justify-center gap-2"
//           >
//             Apply Now <ArrowRight size={18} />
//           </a>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Home;


import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  CheckCircle2,
  ChevronDown,
  Building2,
  GraduationCap,
  Award,
  FileText,
  MapPin,
  Clock,
  UserCheck
} from "lucide-react";

const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "MBA",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [courses, setCourses] = useState([]);
  const [events, setEvents] = useState([]);
  const [recruiters, setRecruiters] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [faculty, setFaculty] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [c, e, r, t, f] = await Promise.all([
          axios.get("/api/courses").catch(() => ({ data: [] })),
          axios.get("/api/events").catch(() => ({ data: [] })),
          axios.get("/api/recruiters").catch(() => ({ data: [] })),
          axios.get("/api/testimonials").catch(() => ({ data: [] })),
          axios.get("/api/faculty").catch(() => ({ data: [] })),
        ]);

        setCourses(c.data.length > 0 ? c.data : null);
        setEvents(e.data.length > 0 ? e.data : null);
        setRecruiters(r.data.length > 0 ? r.data : null);
        setTestimonials(t.data.length > 0 ? t.data : null);
        setFaculty(f.data.length > 0 ? f.data : null);
      } catch (err) {
        console.error("College API mapping error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Processing with Academic Registry...");

    const emailData = {
      _subject: `Official Campus Inquiry - ${formData.course}`,
      _template: "table",
      _captcha: "false",
      Applicant_Name: formData.name,
      Applicant_Email: formData.email,
      Contact_Number: formData.phone,
      Academic_Program: formData.course,
      Statement: formData.message || "General Campus Inquiry",
    };

    try {
      await axios.post(
        "https://formsubmit.co/ajax/info.bimsbbsr@gmail.com",
        emailData
      );
      setStatus("Inquiry registered successfully. The Admissions Desk will contact you.");
      setFormData({ name: "", email: "", phone: "", course: "MBA", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("Registry routing error. Please retry shortly.");
    }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Official College Fallback Datasets
  const displayCourses = courses || [
    { _id: "1", title: "Master of Business Administration (MBA)", duration: "2 Years Degree", description: "Affiliated postgraduate program offering core governance tracks across Finance, Human Resource Management, Marketing Operations, and Business Systems Analysis.", eligibility: "Bachelor's Degree in any discipline from a recognized University." },
    { _id: "2", title: "Post Graduate Diploma in Management (PGDM)", duration: "2 Years Full-Time", description: "Industry-aligned management infrastructure focused deeply on AI Applications, Applied Data Science, Strategic Corporate Management, and International Markets.", eligibility: "Graduation with valid performance scores across standard qualifying boards." },
    { _id: "3", title: "Bachelor of Business Administration (BBA)", duration: "3 Years Degree", description: "Foundational undergraduate syllabus mapping managerial economics, financial bookkeeping, basic corporate operations, and institutional leadership paradigms.", eligibility: "Higher Secondary (10+2 Grade Certificate) clearance from a authorized education board." },
  ];

  const displayRecruiters = recruiters || [
    { name: "Deloitte India" }, { name: "TATA Consultancy Services" }, { name: "Wipro Technologies" }, { name: "Infosys Campus" },
    { name: "HDFC Institutional Banking" }, { name: "ICICI Corporate" }, { name: "Axis Bank Ltd" }, { name: "Tech Mahindra Corporate" }
  ];

  const displayTestimonials = testimonials || [
    { _id: "1", name: "Siddharth Dash", role: "Alumni, MBA Batch", message: "The structured academic framework, comprehensive classroom seminars, and campus orientation programs established a great path for my corporate placement execution." },
    { _id: "2", name: "Priya Mohanty", role: "Alumni, PGDM Division", message: "The rigorous institutional curriculum combines theoretical foundations beautifully with analytical project assignments and regular case study reviews." },
    { _id: "3", name: "Amit Nayak", role: "Alumni, BBA Class", message: "The systematic guidance from our senior campus faculty and the extensive resources at the central library offered me an amazing platform for higher studies." },
  ];

  const displayEvents = events || [
    { _id: "1", title: "Academic Enrollment Active for Upcoming Regular Semester", category: "Admission Notice", date: new Date() },
    { _id: "2", title: "National Level Symposium on Business Leadership Ecosystems", category: "Campus Event", date: new Date() },
    { _id: "3", title: "Pre-Placement Training & Comprehensive Corporate Readiness Bootcamp", category: "Placement Circular", date: new Date() },
  ];

  const displayFaculty = faculty || [
    { _id: "1", name: "Dr. R.K. Mishra", designation: "Dean & Senior Professor", qualification: "Ph.D. in Strategic Management | 20+ Years Institutional Tenure" },
    { _id: "2", name: "Prof. S. Pradhan", designation: "Head of Academic Affairs", qualification: "M.Phil. Corporate Finance | Ex-Senior Investment Consultant" },
    { _id: "3", name: "Dr. Ananya Roy", designation: "Professor, Department of Marketing", qualification: "Ph.D. in Consumer Psychology & Behavioural Sciences" },
    { _id: "4", name: "Prof. M. Siddiqui", designation: "Director - Institutional Relations", qualification: "MBA Institutional Governance Coach | HR Advisory Panelist" },
  ];

  return (
    <div className="min-h-screen bg-[#f1f5f9] text-slate-800 font-sans antialiased">
      <Navbar />

      {/* OFFICIAL NOTICE TICKER BANNER */}
      <div className="bg-amber-500 text-slate-950 font-bold text-xs md:text-sm py-2 px-4 shadow-sm border-b border-amber-600 relative z-30 flex items-center overflow-hidden">
        <span className="bg-slate-950 text-white px-2 py-0.5 rounded-sm text-[10px] uppercase tracking-wider mr-3 flex-shrink-0">Latest Announcement</span>
        <marquee className="cursor-pointer" scrollamount="4">
          • Registration lines are now officially open for the current academic year intake. Submit admission inquiry forms to receive priority scheduling. • Campus placement updates: 94% placement target achieved for the outgoing batch. •
        </marquee>
      </div>

      {/* INSTITUTIONAL HERO SECTION */}
      <section className="relative bg-[#0d1e3d] text-white border-b-8 border-amber-500 py-16 lg:py-24">
        {/* Subtle Architecture Grid Backdrop Style */}
        <div className="absolute inset-0 bg-linear-to-b from-slate-900/40 to-slate-900/80 mix-blend-multiply" />

        <div className="relative max-w-7xl mx-auto px-4 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-sm px-3 py-1.5 text-xs font-bold text-amber-400 mb-6 uppercase tracking-widest">
              <Award size={14} /> Approved Management Institution
            </div>

            <h1 className="text-3xl md:text-5xl font-serif font-bold leading-tight tracking-normal text-slate-100">
              Bhubaneswar Institute of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200 font-sans font-black">
                Management & Science
              </span>
            </h1>

            <p className="mt-4 text-base text-slate-300 max-w-xl leading-relaxed font-normal">
              Fostering professional educational standards through rigorous structural pedagogy, state-of-the-art campus infrastructure, and systematic national placement channels.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button
                onClick={() => scrollToSection("admissions")}
                className="bg-amber-500 text-slate-950 px-6 py-3.5 rounded-sm font-bold hover:bg-amber-400 transition-colors shadow-md flex items-center gap-2 text-sm uppercase tracking-wider"
              >
                Admissions Desk <ArrowRight size={16} />
              </button>

              <button
                onClick={() => scrollToSection("curriculum")}
                className="border border-slate-400/40 bg-white/5 px-6 py-3.5 rounded-sm font-bold hover:bg-white/10 transition-colors text-center text-sm uppercase tracking-wider"
              >
                Academic Programs
              </button>
            </div>

            {/* Quick College Quick Links Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10">
              {[
                ["Central Library", "20k+ Journals"],
                ["Digital Campus", "Wi-Fi Enabled"],
                ["Hostel Block", "In-Campus Facility"],
                ["Alumni Network", "1500+ Professionals"],
              ].map((item, i) => (
                <div key={i} className="bg-slate-900/60 border border-slate-700/40 rounded-sm p-3.5">
                  <h4 className="text-sm font-bold text-amber-400">{item[0]}</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">{item[1]}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ADMISSIONS OFFICE INQUIRY FORM */}
          <div id="admissions" className="bg-white text-slate-900 rounded-sm shadow-xl p-6 md:p-8 border-t-4 border-amber-500 relative z-10 scroll-mt-14">
            <h2 className="text-xl font-serif font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <FileText className="text-amber-500" size={20} /> Office of Admissions
            </h2>
            <p className="text-slate-500 text-xs mt-1 mb-6">
              Please populate the official data registry below to initialize standard counseling workflows.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-500 mb-1">Applicant Full Name *</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className="w-full px-3 py-2.5 rounded-sm bg-slate-50 border border-slate-300 outline-none text-sm focus:border-slate-900 focus:bg-white transition"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-500 mb-1">Email Address *</label>
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
                  <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-500 mb-1">Contact Number *</label>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    type="tel"
                    placeholder="Primary mobile no."
                    className="w-full px-3 py-2.5 rounded-sm bg-slate-50 border border-slate-300 outline-none text-sm focus:border-slate-900 focus:bg-white transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-500 mb-1">Intended Course Program *</label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 rounded-sm bg-slate-50 border border-slate-300 outline-none text-sm focus:border-slate-900 focus:bg-white transition text-slate-700"
                >
                  <option value="MBA">Master of Business Administration (MBA)</option>
                  <option value="PGDM">Post Graduate Diploma in Management (PGDM)</option>
                  <option value="BBA">Bachelor of Business Administration (BBA)</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-[#0d1e3d] text-white py-3.5 rounded-sm font-bold hover:bg-slate-900 transition-colors shadow-sm text-xs uppercase tracking-widest mt-2 border border-slate-800"
              >
                Submit Official Registration
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

      {/* CORE STATISTICAL PROFILE BANNER */}
      <section className="max-w-7xl mx-auto px-4 -mt-8 relative z-20">
        <div className="bg-white rounded-sm shadow-md border-x border-b border-slate-200 grid grid-cols-2 md:grid-cols-4 overflow-hidden divide-x divide-slate-100">
          {[
            ["Approved Intake", "AICTE Criteria"],
            ["Corporate Reach", "100+ Networked Firms"],
            ["Faculty Profile", "80% Ph.D. Holders"],
            ["Campus Extent", "Modern Infrastructure"],
          ].map((item, i) => (
            <div key={i} className="p-5 text-center bg-white">
              <h3 className="text-base font-black text-slate-900 uppercase tracking-tight">{item[0]}</h3>
              <p className="text-xs font-semibold text-amber-600 mt-0.5">{item[1]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY BIMS - COLLEGE CORE VALUES */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-600 font-extrabold uppercase text-xs tracking-widest">Institutional Overview</span>
          <h2 className="text-2xl md:text-3xl font-serif font-bold mt-1 text-slate-900">
            Why Choose Bhubaneswar Institute of Management & Science?
          </h2>
          <div className="w-12 h-1 bg-amber-500 mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: <Building2 />, title: "State-of-the-Art Infrastructure", text: "Advanced multi-media smart lecture theaters, comprehensive computer centers, and specialized seminar presentation rooms." },
            { icon: <GraduationCap />, title: "Structured Academic Governance", text: "Rigorous alignment with university boards to ensure optimal curriculum completion and highly systematic end-semester evaluation cycles." },
            { icon: <UserCheck />, title: "Institutional Placement Records", text: "Continuous career counseling modules backed by corporate interface operations, mock panels, and structured alumni alignment." },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-sm p-8 border border-slate-200 shadow-xs hover:border-slate-300 transition-all">
              <div className="w-12 h-12 rounded-sm bg-slate-100 text-[#0d1e3d] flex items-center justify-center mb-6 border border-slate-200">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-serif">{item.title}</h3>
              <p className="text-slate-600 mt-3 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CURRICULUM & COURSE SYLLABI */}
      <section id="curriculum" className="py-20 bg-[#0d1e3d] text-white border-y-4 border-amber-500 scroll-mt-14">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-400 font-extrabold uppercase text-xs tracking-widest">Academic Framework</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold mt-1">
              Offered Courses & Qualification Criteria
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {displayCourses.map((course) => (
              <div key={course._id} className="bg-slate-900/50 border border-slate-700/50 rounded-sm p-8 flex flex-col justify-between hover:bg-slate-900/80 transition-colors">
                <div>
                  <div className="w-10 h-10 bg-amber-500 text-slate-950 rounded-sm flex items-center justify-center mb-6 font-bold">
                    <BookOpen size={20} />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-slate-100 leading-snug">{course.title}</h3>
                  <span className="inline-block bg-white/10 rounded-xs px-2.5 py-0.5 text-xs font-bold text-amber-400 mt-2">
                    {course.duration}
                  </span>
                  <p className="text-slate-300 mt-4 leading-relaxed text-xs">
                    {course.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-700/50">
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Admission Eligibility</p>
                  <p className="font-medium text-xs text-slate-200 mt-1 min-h-[32px]">{course.eligibility}</p>
                  <button
                    onClick={() => scrollToSection("admissions")}
                    className="mt-5 w-full bg-amber-500 text-slate-950 py-2.5 rounded-sm font-bold hover:bg-amber-400 transition-colors text-xs uppercase tracking-wider"
                  >
                    Request Syllabus Brochure
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAMPUS INFRASTRUCTURE AND LEARNING ENVIRONMENT */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-amber-600 font-extrabold uppercase text-xs tracking-widest">Campus Assets</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold mt-1 text-slate-900">
              Comprehensive Facilities & Academic Ecosystem
            </h2>
            <p className="text-slate-600 mt-4 text-sm leading-relaxed">
              BIMS offers an ideal geographic setting in Bhubaneswar equipped with standard institutional tools. Our infrastructure supports complete personality development along with baseline educational requirements.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {[
                "Advanced Computing Lab",
                "Central Seminar Auditorium",
                "Spacious Reference Library",
                "Official Training Cell",
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-sm p-4 border border-slate-200 shadow-xs flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0" />
                  <span className="font-bold text-slate-700 text-xs uppercase tracking-wide">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-2 bg-slate-300 border border-slate-400/30 rounded-sm" />
            <img
              src="/images/college.jpeg"
              alt="BIMS Management Campus Architecture"
              className="relative w-full h-[360px] object-cover rounded-sm shadow-md border border-slate-200"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop";
              }}
            />
          </div>
        </div>
      </section>

      {/* DISTINGUISHED ACADEMIC FACULTY BOARD
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-600 font-extrabold uppercase text-xs tracking-widest">Institutional Council</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold mt-1 text-slate-900">
              Distinguished Faculty Members
            </h2>
            <div className="w-12 h-1 bg-amber-500 mx-auto mt-3" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayFaculty.map((fac) => (
              <div key={fac._id} className="bg-slate-50 rounded-sm p-6 text-center border border-slate-200 shadow-xs">
                <div className="w-20 h-20 bg-slate-200 mx-auto flex items-center justify-center text-slate-400 mb-4 rounded-full border-2 border-white shadow-sm overflow-hidden">
                  {fac.image ? (
                    <img src={fac.image} alt={fac.name} className="w-full h-full object-cover" />
                  ) : (
                    <GraduationCap size={36} className="text-slate-400" />
                  )}
                </div>
                <h3 className="font-bold text-slate-900 font-serif text-base">{fac.name}</h3>
                <p className="text-amber-600 text-[11px] font-bold uppercase tracking-wider mt-0.5">{fac.designation}</p>
                <p className="text-slate-600 text-xs mt-3 bg-white border border-slate-200/60 rounded-xs py-1 px-2 inline-block font-medium">
                  {fac.qualification}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}


      {/* PRINCIPAL MESSAGE SECTION */}
      
      {/* STUDENT AND ALUMNI PLACEMENT RECORDS */}
      {/* <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-600 font-extrabold uppercase text-xs tracking-widest">Alumni Validation</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold mt-1 text-slate-900">Student Voices & Feedback</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {displayTestimonials.map((t) => (
              <div key={t._id} className="bg-white border border-slate-200 rounded-sm p-6 shadow-xs flex flex-col justify-between">
                <p className="text-slate-600 italic text-xs leading-relaxed">“{t.message}”</p>

                <div className="mt-6 flex items-center gap-3 pt-4 border-t border-slate-100">
                  <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-400 font-bold text-xs">
                    <GraduationCap size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-slate-900">{t.name}</h4>
                    <p className="text-[10px] text-amber-600 font-bold uppercase tracking-wider">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* REGISTRY FAQ SECTION */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-amber-600 font-extrabold uppercase text-xs tracking-widest">Registry Information</span>
          <h2 className="text-2xl font-serif font-bold mt-1 text-slate-900">Frequently Asked Admissions Questions</h2>
        </div>

        <div className="space-y-3">
          {[
            { q: "What is the affiliation profile of BIMS management courses?", a: "Our academic tracks follow institutional guidelines under regional educational board affiliations to guarantee optimal national degree validation across all government and private sector job verification modules." },
            { q: "How are the hostel and lodging parameters arranged?", a: "BIMS offers separate, secure multi-room lodging infrastructure for both male and female scholars with functional messing facilities directly adjacent to the academic complex." },
            {
              q: "Does the college offer structured fee installment flexibility?", a: "Yes, approved fee templates can be cleared via authorized term-based installments systematically matching standard semester boundaries upon prior written registry approval."
            }
          ].map((item, i) => (
            <details key={i} className="bg-white rounded-sm p-4 border border-slate-200 shadow-xs group select-none">
              <summary className="font-bold text-slate-900 text-sm cursor-pointer flex items-center justify-between list-none focus:outline-none">
                <span>{item.q}</span>
                <ChevronDown size={16} className="text-slate-400 group-open:rotate-180 transition-transform duration-200" />
              </summary>
              <p className="text-slate-600 mt-3 text-xs leading-relaxed border-t border-slate-100 pt-3">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* FINAL ADMISSIONS ACTION BAR */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto bg-[#0d1e3d] border-b-8 border-amber-500 rounded-sm p-8 md:p-12 text-white grid lg:grid-cols-2 gap-8 items-center shadow-md">
          <div>
            <h2 className="text-xl md:text-3xl font-serif font-bold text-slate-100">
              Initialize Your Enrollment Documentation Setup
            </h2>
            <p className="text-slate-400 mt-2 text-xs max-w-md">
              Secure official counseling dates, verify eligibility margins, and plan campus orientation details directly with the Academic Registry Board.
            </p>
          </div>

          <div className="lg:ml-auto">
            <button
              onClick={() => scrollToSection("admissions")}
              className="bg-amber-500 text-slate-950 px-6 py-3.5 rounded-sm font-bold hover:bg-amber-400 transition-colors shadow-md flex items-center gap-2 text-xs uppercase tracking-widest border border-amber-600"
            >
              Contact Registrar Office <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;