// import React, { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import axios from "axios";
// import {
//   ArrowRight,
//   BookOpen,
//   Calendar,
//   CheckCircle2,
//   ChevronDown,
//   Building2,
//   GraduationCap,
//   Award,
//   FileText,
//   MapPin,
//   Clock,
//   UserCheck
// } from "lucide-react";

// const Home = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     course: "",
//     message: "",
//   });

//   const [status, setStatus] = useState("");
//   const [courses, setCourses] = useState(null);
//   const [events, setEvents] = useState(null);
//   const [recruiters, setRecruiters] = useState(null);
//   const [testimonials, setTestimonials] = useState(null);
//   const [faculty, setFaculty] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [c, e, r, t, f] = await Promise.all([
//           axios.get("/api/courses").catch(() => ({ data: [] })),
//           axios.get("/api/events").catch(() => ({ data: [] })),
//           axios.get("/api/recruiters").catch(() => ({ data: [] })),
//           axios.get("/api/testimonials").catch(() => ({ data: [] })),
//           axios.get("/api/faculty").catch(() => ({ data: [] })),
//         ]);

//         setCourses(c.data.length > 0 ? c.data : null);
//         setEvents(e.data.length > 0 ? e.data : null);
//         setRecruiters(r.data.length > 0 ? r.data : null);
//         setTestimonials(t.data.length > 0 ? t.data : null);
//         setFaculty(f.data.length > 0 ? f.data : null);
//       } catch (err) {
//         console.error("College API mapping error:", err);
//       } finally {
//         loading && setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("Sending admission inquiry...");

//     const emailData = {
//       _subject: `New Admission Inquiry - ${formData.course}`,
//       _template: "table",
//       _captcha: "false",
//       "Applicant Name": formData.name,
//       "Applicant Email": formData.email,
//       "Contact Number": formData.phone,
//       "Selected Course": formData.course,
//       "Message/Statement": formData.message || "General Campus Inquiry",
//     };

//     try {
//       const response = await fetch(
//         "https://formsubmit.co/ajax/info.bimsbbsr@gmail.com",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json",
//             "Origin": window.location.origin
//           },
//           body: JSON.stringify(emailData),
//         }
//       );

//       const result = await response.json();

//       if (response.ok && result.success === "true") {
//         setStatus("Submitted successfully! The Admission team will contact you soon.");
//         setFormData({
//           name: "",
//           email: "",
//           phone: "",
//           course: "",
//           message: "",
//         });
//       } else {
//         throw new Error(result.message || "Form submission failed on server end.");
//       }
//     } catch (error) {
//       console.error("FormSubmit Error: ", error);
//       setStatus("Submission failed. If this is the first test, please check info.bimsbbsr@gmail.com to activate FormSubmit.");
//     }
//   };

//   const scrollToSection = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   // Official College Fallback Datasets
//   const displayCourses = courses || [
//     // ==========================
//     // UG PROGRAMS
//     // ==========================

//     {
//       _id: "1",
//       title: "B.Sc Artificial Intelligence & Machine Learning",
//       duration: "3 Years Degree",
//       description:
//         "Advanced undergraduate program covering Artificial Intelligence, Machine Learning, Deep Learning, Data Analytics, Python Programming, Cloud Computing and AI Applications.",
//       eligibility:
//         "Passed 10+2 (Science) with Mathematics from a recognized Board.",
//     },

//     {
//       _id: "2",
//       title: "B.Sc Computer Science",
//       duration: "3 Years Degree",
//       description:
//         "Industry-oriented computer science program focusing on Programming, Database Management, Software Engineering, Networking, Cyber Security and Cloud Computing.",
//       eligibility:
//         "Passed 10+2 with Mathematics from a recognized Board.",
//     },

//     {
//       _id: "3",
//       title: "B.Sc Microbiology",
//       duration: "3 Years Degree",
//       description:
//         "Comprehensive study of microorganisms, molecular biology, genetics, immunology, biotechnology and laboratory techniques.",
//       eligibility:
//         "Passed 10+2 Science with Biology from a recognized Board.",
//     },

//     {
//       _id: "4",
//       title: "Bachelor of Journalism & Mass Communication (BJMC)",
//       duration: "3 Years Degree",
//       description:
//         "Professional media education covering Journalism, Digital Media, Public Relations, Advertising, Television Production and Communication Skills.",
//       eligibility:
//         "Passed 10+2 from any recognized Board.",
//     },

//     // ==========================
//     // PG PROGRAMS
//     // ==========================

//     {
//       _id: "5",
//       title: "Post Graduate Diploma in Management (PGDM)",
//       duration: "2 Years Full-Time",
//       description:
//         "Professional management program emphasizing Leadership, Strategic Management, Marketing, Finance, HR and Entrepreneurship.",
//       eligibility:
//         "Bachelor's Degree in any discipline from a recognized University.",
//     },

//     {
//       _id: "6",
//       title: "PGDM Artificial Intelligence & Data Science",
//       duration: "2 Years Full-Time",
//       description:
//         "Specialized management program integrating Artificial Intelligence, Data Science, Business Analytics, Machine Learning and Digital Transformation.",
//       eligibility:
//         "Bachelor's Degree from a recognized University.",
//     },

//     {
//       _id: "7",
//       title: "PGDM Finance & Human Resource",
//       duration: "2 Years Full-Time",
//       description:
//         "Dual specialization in Financial Management, Human Resource Management, Investment Analysis, Corporate Finance and Organizational Behaviour.",
//       eligibility:
//         "Bachelor's Degree from a recognized University.",
//     },

//     {
//       _id: "8",
//       title: "PGDM Healthcare Management",
//       duration: "2 Years Full-Time",
//       description:
//         "Management program designed for Hospital Administration, Healthcare Operations, Medical Tourism, Health Policy and Healthcare Analytics.",
//       eligibility:
//         "Bachelor's Degree from a recognized University.",
//     },

//     {
//       _id: "9",
//       title: "PGDM Operations Management",
//       duration: "2 Years Full-Time",
//       description:
//         "Focused on Supply Chain Management, Logistics, Production Planning, Quality Management and Business Operations.",
//       eligibility:
//         "Bachelor's Degree from a recognized University.",
//     },

//     {
//       _id: "10",
//       title: "Master of Social Work (MSW)",
//       duration: "2 Years Degree",
//       description:
//         "Professional postgraduate program in Community Development, Social Welfare, NGO Management, Rural Development and Human Rights.",
//       eligibility:
//         "Bachelor's Degree from a recognized University.",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-[#f1f5f9] text-slate-800 font-sans antialiased">
//       <Navbar />

//       {/* OFFICIAL NOTICE TICKER BANNER */}
//       <div className="bg-amber-500 text-slate-950 font-bold text-xs md:text-sm py-2 px-4 shadow-sm border-b border-amber-600 relative z-30 flex items-center overflow-hidden">
//         <span className="bg-slate-950 text-white px-2 py-0.5 rounded-sm text-[10px] uppercase tracking-wider mr-3 flex-shrink-0">Latest Announcement</span>
//         <marquee className="cursor-pointer" scrollamount="4">
//           • Registration lines are now officially open for the current academic year intake. Submit admission inquiry forms to receive priority scheduling. • Campus placement updates: 94% placement target achieved for the outgoing batch. •
//         </marquee>
//       </div>

//       {/* INSTITUTIONAL HERO SECTION */}
//       <section className="relative bg-[#0d1e3d] text-white border-b-8 border-amber-500 py-16 lg:py-24">
//         <div className="absolute inset-0 bg-linear-to-b from-slate-900/40 to-slate-900/80 mix-blend-multiply" />

//         <div className="relative max-w-7xl mx-auto px-4 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
//           <div>
//             <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-sm px-3 py-1.5 text-xs font-bold text-amber-400 mb-6 uppercase tracking-widest">
//               <Award size={14} /> Approved Management Institution
//             </div>

//             <h1 className="text-3xl md:text-5xl font-serif font-bold leading-tight tracking-normal text-slate-100">
//               Bhubaneswar Institute of <br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200 font-sans font-black">
//                 Management & Science
//               </span>
//             </h1>

//             <p className="mt-4 text-base text-slate-300 max-w-xl leading-relaxed font-normal">
//               Fostering professional educational standards through rigorous structural pedagogy, state-of-the-art campus infrastructure, and systematic national placement channels.
//             </p>

//             <div className="flex flex-wrap gap-4 mt-8">
//               <button
//                 onClick={() => scrollToSection("admissions")}
//                 className="bg-amber-500 text-slate-950 px-6 py-3.5 rounded-sm font-bold hover:bg-amber-400 transition-colors shadow-md flex items-center gap-2 text-sm uppercase tracking-wider"
//               >
//                 Admissions Desk <ArrowRight size={16} />
//               </button>

//               <button
//                 onClick={() => scrollToSection("curriculum")}
//                 className="border border-slate-400/40 bg-white/5 px-6 py-3.5 rounded-sm font-bold hover:bg-white/10 transition-colors text-center text-sm uppercase tracking-wider"
//               >
//                 Academic Programs
//               </button>
//             </div>

//             <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10">
//               {[
//                 ["Central Library", "20k+ Journals"],
//                 ["Digital Campus", "Wi-Fi Enabled"],
//                 ["Hostel Block", "In-Campus Facility"],
//                 ["Alumni Network", "1500+ Professionals"],
//               ].map((item, i) => (
//                 <div key={i} className="bg-slate-900/60 border border-slate-700/40 rounded-sm p-3.5">
//                   <h4 className="text-sm font-bold text-amber-400">{item[0]}</h4>
//                   <p className="text-[11px] text-slate-400 mt-0.5">{item[1]}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* ADMISSIONS OFFICE INQUIRY FORM */}
//           <div id="admissions" className="bg-white text-slate-900 rounded-sm shadow-xl p-6 md:p-8 border-t-4 border-amber-500 relative z-10 scroll-mt-14">
//             <h2 className="text-xl font-serif font-bold text-slate-900 tracking-tight flex items-center gap-2">
//               <FileText className="text-amber-500" size={20} /> Office of Admissions
//             </h2>
//             <p className="text-slate-500 text-xs mt-1 mb-6">
//               Please populate the official data registry below to initialize standard counseling workflows.
//             </p>

//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-500 mb-1">Applicant Full Name *</label>
//                 <input
//                   name="name"
//                   type="text"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   placeholder="Your full name"
//                   className="w-full px-3 py-2.5 rounded-sm bg-slate-50 border border-slate-300 outline-none text-sm focus:border-slate-900 focus:bg-white transition"
//                 />
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-500 mb-1">Email Address *</label>
//                   <input
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     type="email"
//                     placeholder="name@example.com"
//                     className="w-full px-3 py-2.5 rounded-sm bg-slate-50 border border-slate-300 outline-none text-sm focus:border-slate-900 focus:bg-white transition"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-500 mb-1">Contact Number *</label>
//                   <input
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     required
//                     type="tel"
//                     placeholder="Primary mobile no."
//                     className="w-full px-3 py-2.5 rounded-sm bg-slate-50 border border-slate-300 outline-none text-sm focus:border-slate-900 focus:bg-white transition"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-500 mb-1">Intended Course Program *</label>
//                 {/* <select
//                   name="course"
//                   value={formData.course}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2.5 rounded-sm bg-slate-50 border border-slate-300 outline-none text-sm focus:border-slate-900 focus:bg-white transition text-slate-700"
//                 >
//                   <option value="MBA">Master of Business Administration (MBA)</option>
//                   <option value="PGDM">Post Graduate Diploma in Management (PGDM)</option>
//                   <option value="BBA">Bachelor of Business Administration (BBA)</option>
//                 </select> */}
//                 <select
//                   name="courseApplied"
//                   value={formData.courseApplied}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2.5 rounded-sm bg-slate-50 border border-slate-300 outline-none text-sm focus:border-slate-900 focus:bg-white transition text-slate-700"
//                   // className={inputClass}
//                   required
//                 >
//                   <optgroup label="Undergraduate (UG) Programs">
//                     <option value="" disabled>
//                       -- Choose Program --
//                     </option>
//                     <option value="B.Sc Artificial Intelligence & Machine Learning">
//                       B.Sc Artificial Intelligence & Machine Learning
//                     </option>

//                     <option value="B.Sc Microbiology">
//                       B.Sc Microbiology
//                     </option>

//                     <option value="Bachelor of Journalism & Mass Communication">
//                       Bachelor of Journalism & Mass Communication
//                     </option>

//                     <option value="B.Sc Computer Science">
//                       B.Sc Computer Science
//                     </option>
//                   </optgroup>

//                   <optgroup label="Postgraduate (PG) Programs">
//                     <option value="PGDM">
//                       Post Graduate Diploma in Management (PGDM)
//                     </option>

//                     <option value="PGDM AI & Data Science">
//                       PGDM AI & Data Science
//                     </option>

//                     <option value="PGDM Finance & Human Resource">
//                       PGDM Finance & Human Resource
//                     </option>

//                     <option value="PGDM Healthcare Management">
//                       PGDM Healthcare Management
//                     </option>

//                     <option value="PGDM Operations Management">
//                       PGDM Operations Management
//                     </option>

//                     <option value="Master of Social Work (MSW)">
//                       Master of Social Work (MSW)
//                     </option>
//                   </optgroup>
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-500 mb-1">Message / Additional Details</label>
//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   rows="2"
//                   placeholder="Type any specific questions here..."
//                   className="w-full px-3 py-2.5 rounded-sm bg-slate-50 border border-slate-300 outline-none text-sm focus:border-slate-900 focus:bg-white transition text-slate-700 resize-none"
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-[#0d1e3d] text-white py-3.5 rounded-sm font-bold hover:bg-slate-900 transition-colors shadow-sm text-xs uppercase tracking-widest mt-2 border border-slate-800"
//               >
//                 Submit Official Registration
//               </button>

//               {status && (
//                 <div className="mt-3 p-3 bg-amber-50 border border-amber-200 rounded-sm">
//                   <p className="text-center text-xs font-bold text-slate-800">
//                     {status}
//                   </p>
//                 </div>
//               )}
//             </form>
//           </div>
//         </div>
//       </section>

//       {/* CORE STATISTICAL PROFILE BANNER */}
//       <section className="max-w-7xl mx-auto px-4 -mt-8 relative z-20">
//         <div className="bg-white rounded-sm shadow-md border-x border-b border-slate-200 grid grid-cols-2 md:grid-cols-4 overflow-hidden divide-x divide-slate-100">
//           {[
//             ["Approved Intake", "AICTE Criteria"],
//             ["Corporate Reach", "100+ Networked Firms"],
//             ["Faculty Profile", "80% Ph.D. Holders"],
//             ["Campus Extent", "Modern Infrastructure"],
//           ].map((item, i) => (
//             <div key={i} className="p-5 text-center bg-white">
//               <h3 className="text-base font-black text-slate-900 uppercase tracking-tight">{item[0]}</h3>
//               <p className="text-xs font-semibold text-amber-600 mt-0.5">{item[1]}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* WHY BIMS - COLLEGE CORE VALUES */}
//       <section className="py-20 px-4 max-w-7xl mx-auto">
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <span className="text-amber-600 font-extrabold uppercase text-xs tracking-widest">Institutional Overview</span>
//           <h2 className="text-2xl md:text-3xl font-serif font-bold mt-1 text-slate-900">
//             Why Choose Bhubaneswar Institute of Management & Science?
//           </h2>
//           <div className="w-12 h-1 bg-amber-500 mx-auto mt-4" />
//         </div>

//         <div className="grid md:grid-cols-3 gap-8">
//           {[
//             { icon: <Building2 />, title: "State-of-the-Art Infrastructure", text: "Advanced multi-media smart lecture theaters, comprehensive computer centers, and specialized seminar presentation rooms." },
//             { icon: <GraduationCap />, title: "Structured Academic Governance", text: "Rigorous alignment with university boards to ensure optimal curriculum completion and highly systematic end-semester evaluation cycles." },
//             { icon: <UserCheck />, title: "Institutional Placement Records", text: "Continuous career counseling modules backed by corporate interface operations, mock panels, and structured alumni alignment." },
//           ].map((item, i) => (
//             <div key={i} className="bg-white rounded-sm p-8 border border-slate-200 shadow-xs hover:border-slate-300 transition-all">
//               <div className="w-12 h-12 rounded-sm bg-slate-100 text-[#0d1e3d] flex items-center justify-center mb-6 border border-slate-200">
//                 {item.icon}
//               </div>
//               <h3 className="text-lg font-bold text-slate-900 font-serif">{item.title}</h3>
//               <p className="text-slate-600 mt-3 text-sm leading-relaxed">{item.text}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* CURRICULUM & COURSE SYLLABI */}
//       <section id="curriculum" className="py-20 bg-[#0d1e3d] text-white border-y-4 border-amber-500 scroll-mt-14">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="text-center max-w-3xl mx-auto mb-16">
//             <span className="text-amber-400 font-extrabold uppercase text-xs tracking-widest">Academic Framework</span>
//             <h2 className="text-2xl md:text-3xl font-serif font-bold mt-1">
//               Offered Courses & Qualification Criteria
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {displayCourses.map((course) => (
//               <div key={course._id} className="bg-slate-900/50 border border-slate-700/50 rounded-sm p-8 flex flex-col justify-between hover:bg-slate-900/80 transition-colors">
//                 <div>
//                   <div className="w-10 h-10 bg-amber-500 text-slate-950 rounded-sm flex items-center justify-center mb-6 font-bold">
//                     <BookOpen size={20} />
//                   </div>
//                   <h3 className="text-lg font-serif font-bold text-slate-100 leading-snug">{course.title}</h3>
//                   <span className="inline-block bg-white/10 rounded-xs px-2.5 py-0.5 text-xs font-bold text-amber-400 mt-2">
//                     {course.duration}
//                   </span>
//                   <p className="text-slate-300 mt-4 leading-relaxed text-xs">
//                     {course.description}
//                   </p>
//                 </div>

//                 <div className="mt-8 pt-6 border-t border-slate-700/50">
//                   <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Admission Eligibility</p>
//                   <p className="font-medium text-xs text-slate-200 mt-1 min-h-[32px]">{course.eligibility}</p>
//                   <button
//                     onClick={() => scrollToSection("admissions")}
//                     className="mt-5 w-full bg-amber-500 text-slate-950 py-2.5 rounded-sm font-bold hover:bg-amber-400 transition-colors text-xs uppercase tracking-wider"
//                   >
//                     Request Syllabus Brochure
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CAMPUS INFRASTRUCTURE AND LEARNING ENVIRONMENT */}
//       <section className="py-20 px-4 max-w-7xl mx-auto">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <div>
//             <span className="text-amber-600 font-extrabold uppercase text-xs tracking-widest">Campus Assets</span>
//             <h2 className="text-2xl md:text-3xl font-serif font-bold mt-1 text-slate-900">
//               Comprehensive Facilities & Academic Ecosystem
//             </h2>
//             <p className="text-slate-600 mt-4 text-sm leading-relaxed">
//               BIMS offers an ideal geographic setting in Bhubaneswar equipped with standard institutional tools. Our infrastructure supports complete personality development along with baseline educational requirements.
//             </p>

//             <div className="grid sm:grid-cols-2 gap-4 mt-8">
//               {[
//                 "Advanced Computing Lab",
//                 "Central Seminar Auditorium",
//                 "Spacious Reference Library",
//                 "Official Training Cell",
//               ].map((item, i) => (
//                 <div key={i} className="bg-white rounded-sm p-4 border border-slate-200 shadow-xs flex items-center gap-3">
//                   <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0" />
//                   <span className="font-bold text-slate-700 text-xs uppercase tracking-wide">{item}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="relative">
//             <div className="absolute -inset-2 bg-slate-300 border border-slate-400/30 rounded-sm" />
//             <img
//               src="/images/college.jpeg"
//               alt="BIMS Management Campus Architecture"
//               className="relative w-full h-[360px] object-cover rounded-sm shadow-md border border-slate-200"
//               onError={(e) => {
//                 e.target.src = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop";
//               }}
//             />
//           </div>
//         </div>
//       </section>



//       {/* REGISTRY FAQ SECTION */}
//       <section className="py-20 px-4 max-w-4xl mx-auto">
//         <div className="text-center mb-12">
//           <span className="text-amber-600 font-extrabold uppercase text-xs tracking-widest">Registry Information</span>
//           <h2 className="text-2xl font-serif font-bold mt-1 text-slate-900">Frequently Asked Admissions Questions</h2>
//         </div>

//         <div className="space-y-3">
//           {[
//             { q: "What is the affiliation profile of BIMS management courses?", a: "Our academic tracks follow institutional guidelines under regional educational board affiliations to guarantee optimal national degree validation across all government and private sector job verification modules." },
//             { q: "How are the hostel and lodging parameters arranged?", a: "BIMS offers separate, secure multi-room lodging infrastructure for both male and female scholars with functional messing facilities directly adjacent to the academic complex." },
//             { q: "Does the college offer structured fee installment flexibility?", a: "Yes, approved fee templates can be cleared via authorized term-based installments systematically matching standard semester boundaries upon prior written registry approval." }
//           ].map((item, i) => (
//             <details key={i} className="bg-white rounded-sm p-4 border border-slate-200 shadow-xs group select-none">
//               <summary className="font-bold text-slate-900 text-sm cursor-pointer flex items-center justify-between list-none focus:outline-none">
//                 <span>{item.q}</span>
//                 <ChevronDown size={16} className="text-slate-400 group-open:rotate-180 transition-transform duration-200" />
//               </summary>
//               <p className="text-slate-600 mt-3 text-xs leading-relaxed border-t border-slate-100 pt-3">
//                 {item.a}
//               </p>
//             </details>
//           ))}
//         </div>
//       </section>

//       {/* FINAL ADMISSIONS ACTION BAR */}
//       <section className="px-4 pb-20">
//         <div className="max-w-7xl mx-auto bg-[#0d1e3d] border-b-8 border-amber-500 rounded-sm p-8 md:p-12 text-white grid lg:grid-cols-2 gap-8 items-center shadow-md">
//           <div>
//             <h2 className="text-xl md:text-3xl font-serif font-bold text-slate-100">
//               Initialize Your Enrollment Documentation Setup
//             </h2>
//             <p className="text-slate-400 mt-2 text-xs max-w-md">
//               Secure official counseling dates, verify eligibility margins, and plan campus orientation details directly with the Academic Registry Board.
//             </p>
//           </div>

//           <div className="lg:ml-auto">
//             <button
//               onClick={() => scrollToSection("admissions")}
//               className="bg-amber-500 text-slate-950 px-6 py-3.5 rounded-sm font-bold hover:bg-amber-400 transition-colors shadow-md flex items-center gap-2 text-xs uppercase tracking-widest border border-amber-600"
//             >
//               Contact Registrar Office <ArrowRight size={14} />
//             </button>
//           </div>
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
    course: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [courses, setCourses] = useState(null);
  const [events, setEvents] = useState(null);
  const [recruiters, setRecruiters] = useState(null);
  const [testimonials, setTestimonials] = useState(null);
  const [faculty, setFaculty] = useState(null);
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
        loading && setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending admission inquiry...");

    const emailData = {
      _subject: `New Admission Inquiry - ${formData.course}`,
      _template: "table",
      _captcha: "false",
      "Applicant Name": formData.name,
      "Applicant Email": formData.email,
      "Contact Number": formData.phone,
      "Selected Course": formData.course,
      "Message/Statement": formData.message || "General Campus Inquiry",
    };

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/info.bimsbbsr@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Origin": window.location.origin
          },
          body: JSON.stringify(emailData),
        }
      );

      const result = await response.json();

      if (response.ok && result.success === "true") {
        setStatus("Submitted successfully! The Admission team will contact you soon.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          course: "",
          message: "",
        });
      } else {
        throw new Error(result.message || "Form submission failed on server end.");
      }
    } catch (error) {
      console.error("FormSubmit Error: ", error);
      setStatus("Submission failed. If this is the first test, please check info.bimsbbsr@gmail.com to activate FormSubmit.");
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
    {
      _id: "1",
      title: "B.Sc Artificial Intelligence & Machine Learning",
      duration: "3 Years Degree",
      description: "Advanced undergraduate program covering Artificial Intelligence, Machine Learning, Deep Learning, Data Analytics, Python Programming, Cloud Computing and AI Applications.",
      eligibility: "Passed 10+2 (Science) with Mathematics from a recognized Board.",
    },
    {
      _id: "2",
      title: "B.Sc Computer Science",
      duration: "3 Years Degree",
      description: "Industry-oriented computer science program focusing on Programming, Database Management, Software Engineering, Networking, Cyber Security and Cloud Computing.",
      eligibility: "Passed 10+2 with Mathematics from a recognized Board.",
    },
    {
      _id: "3",
      title: "B.Sc Microbiology",
      duration: "3 Years Degree",
      description: "Comprehensive study of microorganisms, molecular biology, genetics, immunology, biotechnology and laboratory techniques.",
      eligibility: "Passed 10+2 Science with Biology from a recognized Board.",
    },
    {
      _id: "4",
      title: "Bachelor of Journalism & Mass Communication (BJMC)",
      duration: "3 Years Degree",
      description: "Professional media education covering Journalism, Digital Media, Public Relations, Advertising, Television Production and Communication Skills.",
      eligibility: "Passed 10+2 from any recognized Board.",
    },
    {
      _id: "5",
      title: "Post Graduate Diploma in Management (PGDM)",
      duration: "2 Years Full-Time",
      description: "Professional management program emphasizing Leadership, Strategic Management, Marketing, Finance, HR and Entrepreneurship.",
      eligibility: "Bachelor's Degree in any discipline from a recognized University.",
    },
    {
      _id: "6",
      title: "PGDM Artificial Intelligence & Data Science",
      duration: "2 Years Full-Time",
      description: "Specialized management program integrating Artificial Intelligence, Data Science, Business Analytics, Machine Learning and Digital Transformation.",
      eligibility: "Bachelor's Degree from a recognized University.",
    },
    {
      _id: "7",
      title: "PGDM Finance & Human Resource",
      duration: "2 Years Full-Time",
      description: "Dual specialization in Financial Management, Human Resource Management, Investment Analysis, Corporate Finance and Organizational Behaviour.",
      eligibility: "Bachelor's Degree from a recognized University.",
    },
    {
      _id: "8",
      title: "PGDM Healthcare Management",
      duration: "2 Years Full-Time",
      description: "Management program designed for Hospital Administration, Healthcare Operations, Medical Tourism, Health Policy and Healthcare Analytics.",
      eligibility: "Bachelor's Degree from a recognized University.",
    },
    {
      _id: "9",
      title: "PGDM Operations Management",
      duration: "2 Years Full-Time",
      description: "Focused on Supply Chain Management, Logistics, Production Planning, Quality Management and Business Operations.",
      eligibility: "Bachelor's Degree from a recognized University.",
    },
    // {
    //   _id: "10",
    //   title: "Master of Social Work (MSW)",
    //   duration: "2 Years Degree",
    //   description: "Professional postgraduate program in Community Development, Social Welfare, NGO Management, Rural Development and Human Rights.",
    //   eligibility: "Bachelor's Degree from a recognized University.",
    // },
  ];

  const displayFaculty = faculty || [
    {
      _id: "1",
      name: "Ashirbad Pradhan",
      designation: "Dean & Professor (Management)",
      qualification: "Ph.D. in Management, MBA",
      experience: "18+ Years Corporate & Academic Experience"
    },
    {
      _id: "2",
      name: "Abhijit Nayak",
      designation: "Assistant Professor (Computer Science & AI)",
      qualification: "Ph.D. in Computer Science, M.Tech",
      experience: "10+ Years Teaching Experience"
    },
    {
      _id: "3",
      name: "Sushree Anandita Pradhan",
      designation: "Senior Lecturer (Finance & Analytics)",
      qualification: "MBA (Finance), CFA Level II",
      experience: "12+ Years Industry Research Experience"
    }
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
          <div id="admissions" className="bg-white text-slate-900 rounded-sm shadow-xl p-6 md:p-8 border-t-4 border-amber-500 relative z-10 scroll-mt-8">
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
                  type="text"
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
                  required
                >
                  <optgroup label="Undergraduate (UG) Programs">
                    <option value="" disabled hidden>-- Choose Program --</option>
                    <option value="B.Sc Artificial Intelligence & Machine Learning">B.Sc Artificial Intelligence & Machine Learning</option>
                    <option value="B.Sc Microbiology">B.Sc Microbiology</option>
                    <option value="Bachelor of Journalism & Mass Communication">Bachelor of Journalism & Mass Communication</option>
                    <option value="B.Sc Computer Science">B.Sc Computer Science</option>
                  </optgroup>

                  <optgroup label="Postgraduate (PG) Programs">
                    <option value="PGDM">Post Graduate Diploma in Management (PGDM)</option>
                    <option value="PGDM AI & Data Science">PGDM AI & Data Science</option>
                    <option value="PGDM Finance & Human Resource">PGDM Finance & Human Resource</option>
                    <option value="PGDM Healthcare Management">PGDM Healthcare Management</option>
                    <option value="PGDM Operations Management">PGDM Operations Management</option>
                    <option value="Master of Social Work (MSW)">Master of Social Work (MSW)</option>
                  </optgroup>
                </select>
              </div>

              <div>
                <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-500 mb-1">Message / Additional Details</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="2"
                  placeholder="Type any specific questions here..."
                  className="w-full px-3 py-2.5 rounded-sm bg-slate-50 border border-slate-300 outline-none text-sm focus:border-slate-900 focus:bg-white transition text-slate-700 resize-none"
                />
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

      {/* PRINCIPAL'S MESSAGE SECTION */}
      <section className="py-16 px-4 max-w-7xl mx-auto bg-white rounded-sm shadow-xs border border-slate-200 mb-20">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-center">
          <div className="text-center lg:text-left lg:border-r lg:border-slate-200 lg:pr-8">
            <div className="relative inline-block">
              <div className="absolute -inset-1.5 bg-amber-500 rounded-sm z-0" />
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop"
                alt="Principal Portrait"
                className="relative w-56 h-64 object-cover mx-auto rounded-sm shadow-md border border-slate-200 z-10"
              />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mt-4 font-serif">Prof. (Dr.) R. N. Panda</h3>
            <p className="text-amber-600 text-xs font-bold uppercase tracking-wider mt-1">Principal, BIMS</p>
          </div>
          <div>
            <span className="text-amber-600 font-extrabold uppercase text-xs tracking-widest">Leadership Perspective</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold mt-1 text-slate-900 mb-6">
              From the Desk of the Principal
            </h2>
            <div className="text-slate-600 text-sm leading-relaxed space-y-4 font-normal">
              <p className="italic font-medium text-slate-700">
                "Welcome to Bhubaneswar Institute of Management & Science. In an era structured by global technological transitions, our educational mandate centers on developing technical proficiency anchored by leadership competence."
              </p>
              <p>
                We execute an academic infrastructure focused strictly on real-world outcomes. Our systems ensure that core curriculum execution seamlessly interfaces with industry realities, training individuals to effectively join executive and scientific workspaces post-graduation.
              </p>
              <p>
                I invite all intending applicants to engage our academic networks and secure high-impact professional milestones within our campus landscape.
              </p>
            </div>
          </div>
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

      {/* FACULTY PROFILE SECTION */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-600 font-extrabold uppercase text-xs tracking-widest">Expert Mentorship</span>
          <h2 className="text-2xl md:text-3xl font-serif font-bold mt-1 text-slate-900">
            Our Distinguished Faculty Board
          </h2>
          <div className="w-12 h-1 bg-amber-500 mx-auto mt-4" />
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {displayFaculty.map((member) => (
            <div key={member._id} className="bg-white rounded-sm p-6 border border-slate-200 shadow-xs hover:border-slate-300 hover:shadow-md transition-all flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-[#0d1e3d] mb-4 border border-slate-200 shadow-inner">
                <GraduationCap size={28} />
              </div>
              <h3 className="text-base font-bold text-slate-900 font-serif">{member.name}</h3>
              <p className="text-amber-600 text-xs font-bold uppercase tracking-wide mt-1">{member.designation}</p>
              <div className="w-8 h-[1px] bg-slate-200 my-3" />
              <p className="text-slate-600 text-xs font-medium">{member.qualification}</p>
              <p className="text-slate-400 text-[10px] mt-1 uppercase tracking-wider font-semibold">{member.experience}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CAMPUS INFRASTRUCTURE AND LEARNING ENVIRONMENT */}
      <section className="py-20 px-4 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
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
                <div key={i} className="bg-slate-50 rounded-sm p-4 border border-slate-200 shadow-xs flex items-center gap-3">
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
            { q: "Does the college offer structured fee installment flexibility?", a: "Yes, approved fee templates can be cleared via authorized term-based installments systematically matching standard semester boundaries upon prior written registry approval." }
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

