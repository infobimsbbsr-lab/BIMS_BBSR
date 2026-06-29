// import React, { useState, useEffect } from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import PageHeader from '../components/PageHeader';
// import axios from 'axios';
// import { Clock, CheckCircle, BookOpen } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const Programs = () => {
//   const [courses, setCourses] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const allCourses = [
//   {
//     id: 1,
//     type: "UG",
//     code: "BBA",
//     title: "Bachelor of Business Administration",
//     duration: "3 Years",
//     seats: 120,
//     eligibility: "+2 / Higher Secondary",
//     description:
//       "Develop leadership, management, marketing and entrepreneurship skills for modern business environments.",
//     image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644"
//   },
//   {
//     id: 2,
//     type: "UG",
//     code: "BCA",
//     title: "Bachelor of Computer Applications",
//     duration: "3 Years",
//     seats: 60,
//     eligibility: "+2 Science / Commerce",
//     description:
//       "Build strong foundations in software development, databases, networking and programming.",
//     image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
//   },
//   {
//     id: 3,
//     type: "PG",
//     code: "MBA",
//     title: "Master of Business Administration",
//     duration: "2 Years",
//     seats: 180,
//     eligibility: "Graduate in any discipline",
//     description:
//       "Advanced business management, finance, marketing, HR and strategic leadership training.",
//     image: "https://images.unsplash.com/photo-1552664730-d307ca884978"
//   },
//   {
//     id: 4,
//     type: "PG",
//     code: "MCA",
//     title: "Master of Computer Applications",
//     duration: "2 Years",
//     seats: 60,
//     eligibility: "Graduate with Mathematics",
//     description:
//       "Professional software engineering, AI, cloud computing and application development.",
//     image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
//   }
// ];

// const [activeProgram, setActiveProgram] = useState("UG");

// const filteredCourses = allCourses.filter(
//   course => course.type === activeProgram
// );

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const res = await axios.get('/api/courses');
//         setCourses(res.data);
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchCourses();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col">
//       <Navbar />
//       <PageHeader title="Academic Programs" breadcrumb="Academics" />

//       <section className="py-16 max-w-7xl mx-auto px-4">
//         {loading ? (
//           <p className="text-center">Loading programs...</p>
//         ) : (
//           // <div className="space-y-12">
//           //   {courses.map((course) => (
//           //     <div key={course._id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
//           //       <div className="md:w-1/3 h-64 md:h-auto">
//           //         <img 
//           //           src={course.image || "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"} 
//           //           alt={course.title} 
//           //           className="w-full h-full object-cover"
//           //         />
//           //       </div>
//           //       <div className="p-8 md:w-2/3 flex flex-col justify-center">
//           //         <div className="flex items-center gap-3 mb-2">
//           //           <span className="bg-bims-green text-white text-xs font-bold px-2 py-1 rounded">{course.code || 'PG'}</span>
//           //           <span className="flex items-center text-gray-500 text-sm gap-1"><Clock size={14}/> {course.duration}</span>
//           //           {course.seats && <span className="bg-blue-100 text-bims-blue text-xs font-bold px-2 py-1 rounded">{course.seats} Seats</span>}
//           //         </div>
//           //         <h3 className="text-2xl font-bold text-gray-900 mb-4">{course.title}</h3>
//           //         <p className="text-gray-600 mb-6">{course.description}</p>
                  
//           //         <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 mb-6">
//           //           <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2"><CheckCircle size={16} className="text-bims-blue"/> Eligibility</h4>
//           //           <p className="text-sm text-gray-600">{course.eligibility}</p>
//           //         </div>

//           //         <div className="flex gap-4">
//           //           <Link to="/apply" className="bg-bims-blue text-white px-6 py-2 rounded font-medium hover:bg-blue-900 transition flex items-center justify-center">
//           //             Apply Now
//           //           </Link>
//           //           <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded font-medium hover:bg-gray-50 transition flex items-center gap-2">
//           //             <BookOpen size={16}/> Download Syllabus
//           //           </button>
//           //         </div>
//           //       </div>
//           //     </div>
//           //   ))}
//           // </div>

//           <div className="space-y-10">
//   {filteredCourses.map((course) => (
//     <div
//       key={course.id}
//       className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col lg:flex-row"
//     >
//       <div className="lg:w-1/3 h-72">
//         <img
//           src={course.image}
//           alt={course.title}
//           className="w-full h-full object-cover"
//         />
//       </div>

//       <div className="lg:w-2/3 p-8">
//         <div className="flex flex-wrap gap-3 mb-4">
//           <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
//             {course.code}
//           </span>

//           <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
//             {course.duration}
//           </span>

//           <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
//             {course.seats} Seats
//           </span>
//         </div>

//         <h2 className="text-3xl font-bold text-gray-900 mb-4">
//           {course.title}
//         </h2>

//         <p className="text-gray-600 mb-6">
//           {course.description}
//         </p>

//         <div className="bg-gray-50 rounded-2xl p-5 mb-6">
//           <h4 className="font-bold mb-2">
//             Eligibility
//           </h4>

//           <p className="text-gray-600">
//             {course.eligibility}
//           </p>
//         </div>

//         <div className="flex gap-4">
//           <Link
//             to="/apply"
//             className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700"
//           >
//             Apply Now
//           </Link>

//           <button className="border px-6 py-3 rounded-xl font-semibold hover:bg-gray-50">
//             Download Syllabus
//           </button>
//         </div>
//       </div>
//     </div>
//   ))}
// </div>
//         )}
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Programs;


import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/cources/UG/PageHeader";
import { Link } from "react-router-dom";

const Programs = () => {
  const [activeProgram, setActiveProgram] = useState("UG");

  const allCourses = [
    {
      id: 1,
      type: "UG",
      code: "BBA",
      title: "Bachelor of Business Administration (BBA)",
      duration: "3 Years",
      seats: 120,
      eligibility: "+2 / Higher Secondary",
      description:
        "Develop leadership, management, marketing and entrepreneurship skills for modern business environments.",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 2,
      type: "UG",
      code: "BCA",
      title: "Bachelor of Computer Applications (BCA)",
      duration: "3 Years",
      seats: 60,
      eligibility: "+2 Science / Commerce",
      description:
        "Build strong foundations in software development, databases, networking and programming.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 3,
      type: "PG",
      code: "MBA",
      title: "Master of Business Administration (MBA)",
      duration: "2 Years",
      seats: 180,
      eligibility: "Graduate in any discipline",
      description:
        "Advanced business management, finance, marketing, HR and strategic leadership training.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 4,
      type: "PG",
      code: "MCA",
      title: "Master of Computer Applications (MCA)",
      duration: "2 Years",
      seats: 60,
      eligibility: "Graduate with Mathematics",
      description:
        "Professional software engineering, AI, cloud computing and application development.",
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const filteredCourses = allCourses.filter(
    (course) => course.type === activeProgram
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <PageHeader
        title="Academic Programs"
        breadcrumb="Academics"
      />

      <section className="py-20 max-w-7xl mx-auto px-4">
  <div className="text-center mb-12">
    <h2 className="text-4xl font-bold text-gray-900 mb-4">
      Academic Programs
    </h2>

    <p className="text-gray-600 max-w-2xl mx-auto">
      Choose your academic path and explore our undergraduate and
      postgraduate programs.
    </p>
  </div>

  <div className="grid md:grid-cols-2 gap-8">

    {/* UG CARD */}
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
      <img
        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
        alt="UG Programs"
        className="w-full h-64 object-cover"
      />

      <div className="p-8">
        <h3 className="text-3xl font-bold text-blue-700 mb-3">
          Undergraduate Programs
        </h3>

        <p className="text-gray-600 mb-6">
          Build a strong foundation through our undergraduate programs
          designed for future professionals.
        </p>

        <Link
          to="/ug-programs"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700"
        >
          View UG Programs
        </Link>
      </div>
    </div>

    {/* PG CARD */}
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
      <img
        src="https://images.unsplash.com/photo-1552664730-d307ca884978"
        alt="PG Programs"
        className="w-full h-64 object-cover"
      />

      <div className="p-8">
        <h3 className="text-3xl font-bold text-green-700 mb-3">
          Postgraduate Programs
        </h3>

        <p className="text-gray-600 mb-6">
          Advance your knowledge and career with specialized postgraduate
          education and professional training.
        </p>

        <Link
          to="/pg-programs"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700"
        >
          View PG Programs
        </Link>
      </div>
    </div>

  </div>
</section>

      <Footer />
    </div>
  );
};

export default Programs;