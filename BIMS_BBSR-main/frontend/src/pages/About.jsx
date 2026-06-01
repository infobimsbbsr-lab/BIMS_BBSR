// import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import PageHeader from '../components/PageHeader';
// import { Target, Eye, Award } from 'lucide-react';

// const About = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col">
//       <Navbar />
//       <PageHeader title="About BIMS" breadcrumb="About Us" />
      
//       <section className="py-16 max-w-7xl mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
//           <div>
//             <h2 className="text-3xl font-bold text-gray-900 mb-6">Legacy of Excellence</h2>
//             <div className="prose text-gray-600 leading-relaxed space-y-4">
//               <p>
//                 Bhubaneswar Institute of Management and Science (BIMS), a unit of Swastik Education & Charitable Trust (SECT), was established with a vision to create future-ready leaders. Located in the temple city of Bhubaneswar, BIMS has emerged as a premier business school in Eastern India.
//               </p>
//               <p>
//                 Our curriculum is rigorously designed to bridge the gap between academic theory and industry practice. With a focus on holistic development, we ensure our students are not just employable but capable of driving innovation in the corporate world.
//               </p>
//               <p>
//                 We offer a vibrant campus life, state-of-the-art infrastructure, and a learning environment that encourages curiosity and critical thinking.
//               </p>
//             </div>
//           </div>
//           <div className="relative">
//             <img 
//               src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086&auto=format&fit=crop" 
//               alt="BIMS Building" 
//               className="rounded-lg shadow-xl w-full"
//             />
//             <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg border-l-4 border-bims-green max-w-xs hidden md:block">
//               <p className="text-lg font-bold text-bims-blue">20+ Years</p>
//               <p className="text-sm text-gray-600">Of Educational Excellence & Industry Partnership</p>
//             </div>
//           </div>
//         </div>

//         {/* Vision Mission */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
//           <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition border-t-4 border-bims-green">
//             <Eye className="text-bims-blue mb-4" size={40} />
//             <h3 className="text-xl font-bold mb-3">Our Vision</h3>
//             <p className="text-gray-600 text-sm">To be a globally recognized center of excellence in management education, fostering ethical leadership and sustainable growth.</p>
//           </div>
//           <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition border-t-4 border-bims-blue">
//             <Target className="text-bims-green mb-4" size={40} />
//             <h3 className="text-xl font-bold mb-3">Our Mission</h3>
//             <p className="text-gray-600 text-sm">To empower students with conceptual knowledge, practical skills, and values to excel in a dynamic business environment.</p>
//           </div>
//           <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition border-t-4 border-red-500">
//             <Award className="text-red-500 mb-4" size={40} />
//             <h3 className="text-xl font-bold mb-3">Core Values</h3>
//             <ul className="text-gray-600 text-sm space-y-2 list-disc pl-4">
//               <li>Integrity & Ethics</li>
//               <li>Innovation & Creativity</li>
//               <li>Social Responsibility</li>
//               <li>Academic Freedom</li>
//             </ul>
//           </div>
//         </div>
//       </section>
      
//       <Footer />
//     </div>
//   );
// };

// export default About;



import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  ArrowRight,
  Award,
  BookOpen,
  Building2,
  CheckCircle2,
  Eye,
  GraduationCap,
  ShieldCheck,
  Target,
  Users,
  FileText,
  Landmark,
} from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-[#f1f5f9] text-slate-800 font-sans antialiased">
      <Navbar />

      {/* HERO */}
      <section className="relative bg-[#0d1e3d] text-white border-b-8 border-amber-500 py-16 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 to-slate-950/70" />

        <div className="relative max-w-7xl mx-auto px-4 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-sm px-3 py-1.5 text-xs font-bold text-amber-400 mb-6 uppercase tracking-widest">
              <Award size={14} /> About Our Institution
            </div>

            <h1 className="text-3xl md:text-5xl font-serif font-bold leading-tight text-slate-100">
              About Bhubaneswar Institute of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200 font-sans font-black">
                Management & Science
              </span>
            </h1>

            <p className="mt-5 text-base text-slate-300 max-w-xl leading-relaxed">
              BIMS is committed to building future-ready management
              professionals through structured academics, practical exposure,
              institutional discipline, and systematic career preparation.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#legacy"
                className="bg-amber-500 text-slate-950 px-6 py-3.5 rounded-sm font-bold hover:bg-amber-400 transition-colors shadow-md flex items-center gap-2 text-sm uppercase tracking-wider"
              >
                Explore Institution <ArrowRight size={16} />
              </a>

              <a
                href="#vision"
                className="border border-slate-400/40 bg-white/5 px-6 py-3.5 rounded-sm font-bold hover:bg-white/10 transition-colors text-sm uppercase tracking-wider"
              >
                Vision & Mission
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-2 bg-slate-300 border border-slate-400/30 rounded-sm" />
            <img
              src="/images/college.jpeg"
              alt="BIMS Campus"
              className="relative w-full h-[380px] object-cover rounded-sm shadow-md border border-slate-200"
              onError={(e) => {
                e.target.src =
                  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop";
              }}
            />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-4 -mt-8 relative z-20">
        <div className="bg-white rounded-sm shadow-md border-x border-b border-slate-200 grid grid-cols-2 md:grid-cols-4 overflow-hidden divide-x divide-slate-100">
          {[
            ["20+ Years", "Educational Excellence"],
            ["100+ Firms", "Corporate Network"],
            ["1500+", "Alumni Network"],
            ["Modern", "Campus Infrastructure"],
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

      {/* LEGACY */}
      <section id="legacy" className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-amber-600 font-extrabold uppercase text-xs tracking-widest">
              Institutional Legacy
            </span>

            <h2 className="text-2xl md:text-3xl font-serif font-bold mt-1 text-slate-900">
              Legacy of Excellence in Management Education
            </h2>

            <div className="w-12 h-1 bg-amber-500 mt-4 mb-6" />

            <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
              <p>
                Bhubaneswar Institute of Management and Science, a unit of
                Swastik Education & Charitable Trust, was established with a
                vision to create future-ready leaders.
              </p>

              <p>
                Located in Bhubaneswar, BIMS focuses on professional education
                through a structured academic framework, institutional
                discipline, practical learning, and career-oriented training.
              </p>

              <p>
                Our curriculum bridges academic theory and corporate practice,
                helping students develop communication skills, leadership
                quality, analytical thinking, and employability confidence.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {[
                "Industry-aligned Curriculum",
                "Structured Academic Governance",
                "Placement Preparation Cell",
                "Corporate Interface Activities",
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-sm p-4 border border-slate-200 shadow-xs flex items-center gap-3"
                >
                  <CheckCircle2
                    size={16}
                    className="text-emerald-600 flex-shrink-0"
                  />
                  <span className="font-bold text-slate-700 text-xs uppercase tracking-wide">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                icon: <Landmark />,
                title: "Institutional Foundation",
                text: "Built with a vision to support professional business education in Eastern India.",
              },
              {
                icon: <GraduationCap />,
                title: "Academic Excellence",
                text: "Curriculum designed to support management, leadership, and employability skills.",
              },
              {
                icon: <Users />,
                title: "Student Development",
                text: "Focus on communication, confidence, practical exposure, and personality growth.",
              },
              {
                icon: <Building2 />,
                title: "Campus Facilities",
                text: "Learning environment supported by classrooms, library, labs, and training spaces.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-sm p-6 border border-slate-200 shadow-xs"
              >
                <div className="w-11 h-11 rounded-sm bg-slate-100 text-[#0d1e3d] flex items-center justify-center mb-5 border border-slate-200">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 font-serif">
                  {item.title}
                </h3>
                <p className="text-slate-600 mt-2 text-xs leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION MISSION */}
      <section
        id="vision"
        className="py-20 bg-white border-y border-slate-200"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-600 font-extrabold uppercase text-xs tracking-widest">
              Vision, Mission & Values
            </span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold mt-1 text-slate-900">
              Our Institutional Purpose
            </h2>
            <div className="w-12 h-1 bg-amber-500 mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-sm p-8 border border-slate-200 shadow-xs">
              <div className="w-12 h-12 rounded-sm bg-slate-100 text-[#0d1e3d] flex items-center justify-center mb-6 border border-slate-200">
                <Eye />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-serif">
                Our Vision
              </h3>
              <p className="text-slate-600 mt-3 text-sm leading-relaxed">
                To become a recognized center of excellence in management
                education, nurturing ethical leadership, innovation, and
                sustainable professional growth.
              </p>
            </div>

            <div className="bg-[#0d1e3d] text-white rounded-sm p-8 border-t-4 border-amber-500 shadow-md">
              <div className="w-12 h-12 rounded-sm bg-amber-500 text-slate-950 flex items-center justify-center mb-6">
                <Target />
              </div>
              <h3 className="text-lg font-bold font-serif">Our Mission</h3>
              <p className="text-slate-300 mt-3 text-sm leading-relaxed">
                To empower students with conceptual knowledge, practical skills,
                communication ability, and values required to excel in a dynamic
                corporate environment.
              </p>
            </div>

            <div className="bg-slate-50 rounded-sm p-8 border border-slate-200 shadow-xs">
              <div className="w-12 h-12 rounded-sm bg-slate-100 text-[#0d1e3d] flex items-center justify-center mb-6 border border-slate-200">
                <ShieldCheck />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-serif">
                Core Values
              </h3>

              <ul className="mt-4 space-y-2">
                {[
                  "Integrity & Ethics",
                  "Innovation & Creativity",
                  "Academic Discipline",
                  "Social Responsibility",
                  "Student-first Culture",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-sm text-slate-600"
                  >
                    <CheckCircle2 size={15} className="text-emerald-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* GOVERNANCE */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-2 bg-slate-300 border border-slate-400/30 rounded-sm" />
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop"
              alt="Students"
              className="relative w-full h-[360px] object-cover rounded-sm shadow-md border border-slate-200"
            />
          </div>

          <div>
            <span className="text-amber-600 font-extrabold uppercase text-xs tracking-widest">
              Academic Governance
            </span>

            <h2 className="text-2xl md:text-3xl font-serif font-bold mt-1 text-slate-900">
              A structured environment for career-focused learning
            </h2>

            <p className="text-slate-600 mt-4 text-sm leading-relaxed">
              BIMS promotes a disciplined academic ecosystem where classroom
              learning, practical training, project work, industry sessions, and
              placement preparation work together to support student growth.
            </p>

            <div className="space-y-4 mt-8">
              {[
                {
                  icon: <BookOpen />,
                  title: "Classroom + Practical Learning",
                  text: "Students learn business concepts through case studies, presentations, and assignments.",
                },
                {
                  icon: <FileText />,
                  title: "Official Academic Process",
                  text: "Academic activities are planned through structured semester-based execution.",
                },
                {
                  icon: <Award />,
                  title: "Professional Development",
                  text: "Training focuses on interview preparation, soft skills, leadership, and confidence.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-sm p-5 border border-slate-200 shadow-xs flex gap-4"
                >
                  <div className="w-11 h-11 shrink-0 rounded-sm bg-slate-100 text-[#0d1e3d] flex items-center justify-center border border-slate-200">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto bg-[#0d1e3d] border-b-8 border-amber-500 rounded-sm p-8 md:p-12 text-white grid lg:grid-cols-2 gap-8 items-center shadow-md">
          <div>
            <h2 className="text-xl md:text-3xl font-serif font-bold text-slate-100">
              Start Your Management Career with BIMS
            </h2>
            <p className="text-slate-400 mt-2 text-xs max-w-md">
              Get admission details, eligibility guidance, program information,
              and counseling support from the academic desk.
            </p>
          </div>

          <div className="lg:ml-auto">
            <a
              href="/apply"
              className="bg-amber-500 text-slate-950 px-6 py-3.5 rounded-sm font-bold hover:bg-amber-400 transition-colors shadow-md flex items-center gap-2 text-xs uppercase tracking-widest border border-amber-600"
            >
              Contact Admissions <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;