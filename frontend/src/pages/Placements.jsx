// import React, { useState, useEffect } from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import PageHeader from '../components/PageHeader';
// import axios from 'axios';

// const Placements = () => {
//   const [recruiters, setRecruiters] = useState([]);
//   const [testimonials, setTestimonials] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [recRes, testRes] = await Promise.all([
//           axios.get('/api/recruiters'),
//           axios.get('/api/testimonials')
//         ]);
//         setRecruiters(recRes.data);
//         setTestimonials(testRes.data);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col">
//       <Navbar />
//       <PageHeader title="Placements" breadcrumb="Placement" />

//       {/* Stats */}
//       <section className="bg-white py-12 border-b">
//         <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
//           <div>
//             <h3 className="text-4xl font-bold text-bims-blue">100%</h3>
//             <p className="text-gray-600">Placement Assistance</p>
//           </div>
//           <div>
//             <h3 className="text-4xl font-bold text-bims-blue">50+</h3>
//             <p className="text-gray-600">Corporate Partners</p>
//           </div>
//            <div>
//             <h3 className="text-4xl font-bold text-bims-blue">12 LPA</h3>
//             <p className="text-gray-600">Highest Package</p>
//           </div>
//            <div>
//             <h3 className="text-4xl font-bold text-bims-blue">4.5 LPA</h3>
//             <p className="text-gray-600">Average Package</p>
//           </div>
//         </div>
//       </section>

//       {/* Recruiters Grid */}
//       <section className="py-16 max-w-7xl mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-12">Our Corporate Partners</h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
//           {recruiters.map((rec) => (
//             <div key={rec._id} className="bg-white p-6 rounded shadow-sm border border-gray-100 flex items-center justify-center hover:shadow-md transition h-24">
//               {rec.logo ? (
//                 <img src={rec.logo} alt={rec.name} className="max-h-full max-w-full" />
//               ) : (
//                 <span className="font-bold text-gray-400">{rec.name}</span>
//               )}
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="bg-bims-blue text-white py-16">
//         <div className="max-w-7xl mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12">Placement Stories</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {testimonials.filter(t => t.company).map((t) => (
//               <div key={t._id} className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/10">
//                 <div className="flex items-center gap-4 mb-4">
//                   <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
//                      <img src={t.image || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} alt={t.name} className="w-full h-full object-cover"/>
//                   </div>
//                   <div>
//                     <h4 className="font-bold">{t.name}</h4>
//                     <p className="text-xs text-bims-green">Placed at {t.company}</p>
//                   </div>
//                 </div>
//                 <p className="text-sm text-gray-200 italic">"{t.message}"</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Placements;

import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import {
  ArrowRight,
  Award,
  Briefcase,
  Building2,
  CheckCircle2,
  ChevronDown,
  GraduationCap,
  ShieldCheck,
  TrendingUp,
  UserCheck,
  Users,
} from "lucide-react";

const Placements = () => {
  const [recruiters, setRecruiters] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [recRes, testRes] = await Promise.all([
          axios.get("/api/recruiters").catch(() => ({ data: [] })),
          axios.get("/api/testimonials").catch(() => ({ data: [] })),
        ]);

        setRecruiters(recRes.data);
        setTestimonials(testRes.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  const displayRecruiters =
    recruiters.length > 0
      ? recruiters
      : [
          { name: "Deloitte India" },
          { name: "TCS" },
          { name: "Infosys" },
          { name: "Wipro" },
          { name: "ICICI Bank" },
          { name: "HDFC Bank" },
          { name: "Axis Bank" },
          { name: "Tech Mahindra" },
        ];

  const displayTestimonials =
    testimonials.length > 0
      ? testimonials
      : [
          {
            _id: "1",
            name: "Rahul Mishra",
            company: "Deloitte",
            role: "MBA Alumni",
            message:
              "The placement training and interview preparation sessions helped me secure my first corporate role successfully.",
          },
          {
            _id: "2",
            name: "Priya Das",
            company: "Infosys",
            role: "PGDM Student",
            message:
              "BIMS provided excellent placement guidance, communication training and corporate exposure.",
          },
          {
            _id: "3",
            name: "Amit Nayak",
            company: "TCS",
            role: "BBA Alumni",
            message:
              "The placement support team continuously guided us with mock interviews and aptitude preparation.",
          },
        ];

  return (
    <div className="min-h-screen bg-[#f1f5f9] text-slate-800 font-sans antialiased">
      <Navbar />

      {/* NOTICE BAR */}
      <div className="bg-amber-500 text-slate-950 font-bold text-xs md:text-sm py-2 px-4 shadow-sm border-b border-amber-600 relative z-30 flex items-center overflow-hidden">
        <span className="bg-slate-950 text-white px-2 py-0.5 rounded-sm text-[10px] uppercase tracking-wider mr-3 flex-shrink-0">
          Placement Notice
        </span>

        <marquee scrollamount="4">
          Campus placement activities, corporate training sessions and recruiter
          interactions are actively conducted through the BIMS Placement Cell.
        </marquee>
      </div>

      {/* HERO */}
      <section className="relative bg-[#0d1e3d] text-white border-b-8 border-amber-500 py-16 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 to-slate-950/70" />

        <div className="relative max-w-7xl mx-auto px-4 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-sm px-3 py-1.5 text-xs font-bold text-amber-400 mb-6 uppercase tracking-widest">
              <Award size={14} /> Training & Placement Cell
            </div>

            <h1 className="text-3xl md:text-5xl font-serif font-bold leading-tight text-slate-100">
              Corporate Placements & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200 font-sans font-black">
                Career Development
              </span>
            </h1>

            <p className="mt-5 text-base text-slate-300 max-w-xl leading-relaxed">
              The BIMS Placement Cell works continuously to prepare students for
              corporate careers through structured placement training, industry
              interaction, aptitude development and interview preparation.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button className="bg-amber-500 text-slate-950 px-6 py-3.5 rounded-sm font-bold hover:bg-amber-400 transition-colors shadow-md flex items-center gap-2 text-sm uppercase tracking-wider">
                Placement Support <ArrowRight size={16} />
              </button>

              <button className="border border-slate-400/40 bg-white/5 px-6 py-3.5 rounded-sm font-bold hover:bg-white/10 transition-colors text-sm uppercase tracking-wider">
                Corporate Partners
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10">
              {[
                ["100%", "Placement Support"],
                ["50+", "Corporate Partners"],
                ["12 LPA", "Highest Package"],
                ["4.5 LPA", "Average Package"],
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

          {/* INFO PANEL */}
          <div className="bg-white text-slate-900 rounded-sm shadow-xl p-6 md:p-8 border-t-4 border-amber-500 relative z-10">
            <h2 className="text-xl font-serif font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <Briefcase className="text-amber-500" size={20} />
              Placement Cell Activities
            </h2>

            <p className="text-slate-500 text-xs mt-1 mb-6">
              Students receive complete placement readiness support through
              institutional career guidance systems.
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: <Users size={18} />,
                  title: "Mock Interviews",
                  text: "Technical and HR interview practice sessions.",
                },
                {
                  icon: <TrendingUp size={18} />,
                  title: "Aptitude Training",
                  text: "Continuous quantitative and reasoning preparation.",
                },
                {
                  icon: <UserCheck size={18} />,
                  title: "Resume Building",
                  text: "Professional resume and profile guidance support.",
                },
                {
                  icon: <Building2 size={18} />,
                  title: "Corporate Interaction",
                  text: "Industry seminars and recruiter engagement activities.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-3 bg-slate-50 border border-slate-200 rounded-sm p-4"
                >
                  <div className="w-9 h-9 bg-[#0d1e3d] text-amber-400 rounded-sm flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="font-bold text-sm text-slate-900">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-4 -mt-8 relative z-20">
        <div className="bg-white rounded-sm shadow-md border-x border-b border-slate-200 grid grid-cols-2 md:grid-cols-4 overflow-hidden divide-x divide-slate-100">
          {[
            ["Corporate", "Placement Drives"],
            ["Training", "Career Development"],
            ["Industry", "Networking Support"],
            ["Interview", "Preparation Modules"],
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

      {/* WHY PLACEMENTS */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-600 font-extrabold uppercase text-xs tracking-widest">
            Placement Ecosystem
          </span>

          <h2 className="text-2xl md:text-3xl font-serif font-bold mt-1 text-slate-900">
            Career-focused placement support structure
          </h2>

          <div className="w-12 h-1 bg-amber-500 mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <CheckCircle2 />,
              title: "Corporate Readiness",
              text: "Students receive training in communication, aptitude, group discussion and interview skills.",
            },
            {
              icon: <ShieldCheck />,
              title: "Placement Guidance",
              text: "Dedicated placement coordination and recruiter interaction support.",
            },
            {
              icon: <GraduationCap />,
              title: "Professional Development",
              text: "Career grooming sessions aligned with modern corporate requirements.",
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

      {/* RECRUITERS */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-600 font-extrabold uppercase text-xs tracking-widest">
              Corporate Recruiters
            </span>

            <h2 className="text-2xl md:text-3xl font-serif font-bold mt-1 text-slate-900">
              Our corporate hiring partners
            </h2>

            <div className="w-12 h-1 bg-amber-500 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {displayRecruiters.map((rec, index) => (
              <div
                key={index}
                className="bg-slate-50 p-6 rounded-sm border border-slate-200 flex items-center justify-center hover:border-slate-300 transition-all h-24"
              >
                {rec.logo ? (
                  <img
                    src={rec.logo}
                    alt={rec.name}
                    className="max-h-full max-w-full object-contain grayscale opacity-80"
                  />
                ) : (
                  <span className="font-bold text-xs text-slate-500 uppercase text-center">
                    {rec.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-600 font-extrabold uppercase text-xs tracking-widest">
            Alumni Feedback
          </span>

          <h2 className="text-2xl md:text-3xl font-serif font-bold mt-1 text-slate-900">
            Placement success stories
          </h2>

          <div className="w-12 h-1 bg-amber-500 mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {displayTestimonials.map((t) => (
            <div
              key={t._id}
              className="bg-white border border-slate-200 rounded-sm p-6 shadow-xs"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden">
                  <img
                    src={
                      t.image ||
                      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                    }
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <p className="text-[11px] text-amber-600 font-bold uppercase tracking-wider">
                    Placed at {t.company}
                  </p>
                </div>
              </div>

              <p className="text-slate-600 italic text-sm leading-relaxed">
                "{t.message}"
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-amber-600 font-extrabold uppercase text-xs tracking-widest">
            Placement FAQ
          </span>

          <h2 className="text-2xl font-serif font-bold mt-1 text-slate-900">
            Frequently asked questions
          </h2>
        </div>

        <div className="space-y-3">
          {[
            {
              q: "Does BIMS provide placement assistance?",
              a: "Yes, students receive placement support, training sessions and corporate interview guidance.",
            },
            {
              q: "Are mock interviews conducted?",
              a: "Yes, mock interview and aptitude preparation activities are conducted regularly.",
            },
            {
              q: "Which companies recruit from BIMS?",
              a: "Students have opportunities with companies across IT, banking, finance and corporate sectors.",
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
              Build Your Corporate Career with BIMS
            </h2>

            <p className="text-slate-400 mt-2 text-xs max-w-md">
              Get placement training, career preparation and corporate exposure
              through the BIMS Placement Cell.
            </p>
          </div>

          <button className="lg:ml-auto bg-amber-500 text-slate-950 px-6 py-3.5 rounded-sm font-bold hover:bg-amber-400 transition-colors shadow-md flex items-center gap-2 text-xs uppercase tracking-widest border border-amber-600">
            Contact Placement Cell <ArrowRight size={14} />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Placements;