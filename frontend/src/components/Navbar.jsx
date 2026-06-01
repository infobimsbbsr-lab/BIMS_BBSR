// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Menu, X, Phone, Mail, Facebook, Linkedin, Twitter, Instagram, ChevronDown, Search } from 'lucide-react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [mobileAdmissionOpen, setMobileAdmissionOpen] = useState(false);
//   const location = useLocation();

//   const isActive = (path) => location.pathname === path;

//   return (
//     <header className="w-full relative z-50">
//       {/* Row 1: Top Bar - Dark Info Strip */}
//       <div className="bg-gray-900 text-gray-300 py-2 text-xs md:text-sm">
//         <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
//           <div className="flex flex-col md:flex-row md:space-x-6 space-y-1 md:space-y-0">
//             <span className="flex items-center gap-2 hover:text-white transition cursor-pointer"><Phone size={14} /> +91 70084 11323</span>
//             <span className="flex items-center gap-2 hover:text-white transition cursor-pointer"><Mail size={14} /> info.bimsbbsr@gmail.com</span>
//           </div>
//           <div className="hidden md:flex space-x-4 items-center">
//             <div className="flex space-x-3 pr-4 border-r border-gray-700">
//               <a href="#" className="hover:text-bims-green transition"><Facebook size={14} /></a>
//               <a href="#" className="hover:text-bims-green transition"><Twitter size={14} /></a>
//               <a href="#" className="hover:text-bims-green transition"><Linkedin size={14} /></a>
//               <a href="#" className="hover:text-bims-green transition"><Instagram size={14} /></a>
//             </div>
//             <div className="flex space-x-4 text-xs font-semibold uppercase tracking-wide">
//               <span className="cursor-pointer hover:text-white transition">Alumni</span>
//               <span className="cursor-pointer hover:text-white transition">Staff Login</span>
//               <span className="cursor-pointer hover:text-white transition">Student Portal</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Row 2: Main Header - Logo & Branding */}
//       <div className="bg-white py-4 md:py-6 shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
//           {/* Logo Section */}
//           <Link to="/" className="flex items-center gap-4 group">
//             <img 
//               src="/logo.png" 
//               alt="BIMS Logo" 
//               className="h-16 md:h-20 w-auto group-hover:scale-105 transition duration-300"
//             />
//             <div>
//               <h1 className="text-2xl md:text-3xl font-extrabold text-bims-blue leading-tight tracking-tight hidden md:block">
//                 BHUBANESWAR INSTITUTE OF <br className="hidden lg:block"/> MANAGEMENT AND SCIENCE
//               </h1>
//               <h1 className="text-xl font-extrabold text-bims-blue leading-tight tracking-tight md:hidden">
//                 BIMS BHUBANESWAR
//               </h1>
//               <p className="text-xs md:text-sm font-bold text-red-600 italic tracking-wide mt-1 uppercase hidden md:block">
//                 An Unit Of Swastik Education & Charitable Trust (SECT)
//               </p>
//             </div>
//           </Link>

//           {/* Right Side: Apply Button (Desktop) */}
//           <div className="hidden lg:block">
//             <Link 
//               to="/apply" 
//               className="bg-gradient-to-r from-bims-blue to-blue-800 text-white px-8 py-3 rounded shadow-lg hover:shadow-xl hover:from-blue-800 hover:to-bims-blue transition transform hover:-translate-y-1 font-bold tracking-wide"
//             >
//               APPLY ONLINE
//             </Link>
//           </div>

//           {/* Mobile Menu Toggle */}
//           <button 
//             className="md:hidden p-2 text-bims-blue"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? <X size={32} /> : <Menu size={32} />}
//           </button>
//         </div>
//       </div>

//       {/* Row 3: Navigation Bar - Blue Strip */}
//       <div className="bg-bims-blue text-white shadow-md hidden md:block sticky top-0 z-40">
//         <div className="max-w-7xl mx-auto px-4">
//           <nav className="flex items-center justify-between">
//             <ul className="flex space-x-1">
//               <li>
//                 <Link to="/" className={`block px-5 py-4 font-semibold text-sm uppercase tracking-wide hover:bg-white/10 transition border-b-4 ${isActive('/') ? 'border-bims-green bg-white/10' : 'border-transparent'}`}>
//                   Home
//                 </Link>
//               </li>

//               {/* About Dropdown */}
//               <li className="group relative">
//                 <span className={`cursor-pointer flex items-center gap-1 px-5 py-4 font-semibold text-sm uppercase tracking-wide hover:bg-white/10 transition border-b-4 ${isActive('/about') ? 'border-bims-green' : 'border-transparent'}`}>
//                   About Us <ChevronDown size={14}/>
//                 </span>
//                 <div className="absolute top-full left-0 w-56 bg-white text-gray-800 shadow-xl rounded-b-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top border-t-4 border-bims-green z-50">
//                   <Link to="/about" className="block px-4 py-3 text-sm hover:bg-gray-50 border-b border-gray-100 hover:text-bims-blue hover:pl-6 transition-all">Overview</Link>
//                   <Link to="/about" className="block px-4 py-3 text-sm hover:bg-gray-50 border-b border-gray-100 hover:text-bims-blue hover:pl-6 transition-all">Mission & Vision</Link>
//                   <Link to="/about" className="block px-4 py-3 text-sm hover:bg-gray-50 hover:text-bims-blue hover:pl-6 transition-all">Leadership</Link>
//                 </div>
//               </li>

//               {/* Academics Dropdown */}
//               <li className="group relative">
//                 <span className={`cursor-pointer flex items-center gap-1 px-5 py-4 font-semibold text-sm uppercase tracking-wide hover:bg-white/10 transition border-b-4 ${isActive('/programs') || isActive('/faculty') ? 'border-bims-green' : 'border-transparent'}`}>
//                   Academics <ChevronDown size={14}/>
//                 </span>
//                 <div className="absolute top-full left-0 w-56 bg-white text-gray-800 shadow-xl rounded-b-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top border-t-4 border-bims-green z-50">
//                   <Link to="/programs" className="block px-4 py-3 text-sm hover:bg-gray-50 border-b border-gray-100 hover:text-bims-blue hover:pl-6 transition-all">MBA Program</Link>
//                   <Link to="/faculty" className="block px-4 py-3 text-sm hover:bg-gray-50 border-b border-gray-100 hover:text-bims-blue hover:pl-6 transition-all">Faculty Members</Link>
//                   <Link to="/programs" className="block px-4 py-3 text-sm hover:bg-gray-50 hover:text-bims-blue hover:pl-6 transition-all">Academic Calendar</Link>
//                 </div>
//               </li>

//               {/* Admission Dropdown */}
//               <li className="group relative">
//                 <span className={`cursor-pointer flex items-center gap-1 px-5 py-4 font-semibold text-sm uppercase tracking-wide hover:bg-white/10 transition border-b-4 ${isActive('/admission') ? 'border-bims-green' : 'border-transparent'}`}>
//                   Admission <ChevronDown size={14}/>
//                 </span>
//                 <div className="absolute top-full left-0 w-64 bg-white text-gray-800 shadow-xl rounded-b-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top border-t-4 border-bims-green z-50">
//                   <Link to="/admission" className="block px-4 py-3 text-sm hover:bg-gray-50 border-b border-gray-100 hover:text-bims-blue hover:pl-6 transition-all">MBA Admission</Link>
//                   <Link to="/admission" className="block px-4 py-3 text-sm hover:bg-gray-50 border-b border-gray-100 hover:text-bims-blue hover:pl-6 transition-all">Apply for Scholarship</Link>
//                   <Link to="/admission" className="block px-4 py-3 text-sm hover:bg-gray-50 border-b border-gray-100 hover:text-bims-blue hover:pl-6 transition-all">Download Prospectus</Link>
//                   <Link to="/apply" className="block px-4 py-3 text-sm hover:bg-gray-50 hover:text-bims-blue hover:pl-6 transition-all font-bold text-bims-blue">Apply Online</Link>
//                 </div>
//               </li>

//               <li>
//                 <Link to="/placement" className={`block px-5 py-4 font-semibold text-sm uppercase tracking-wide hover:bg-white/10 transition border-b-4 ${isActive('/placement') ? 'border-bims-green' : 'border-transparent'}`}>
//                   Placements
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/contact" className={`block px-5 py-4 font-semibold text-sm uppercase tracking-wide hover:bg-white/10 transition border-b-4 ${isActive('/contact') ? 'border-bims-green' : 'border-transparent'}`}>
//                   Contact
//                 </Link>
//               </li>
//             </ul>

//             {/* Search Icon */}
//             <div className="px-4 cursor-pointer hover:text-bims-green transition">
//               <Search size={20} />
//             </div>
//           </nav>
//         </div>
//       </div>

//       {/* Mobile Menu Drawer */}
//       {isOpen && (
//         <div className="md:hidden bg-white border-t border-gray-200 absolute w-full shadow-2xl animate-fade-in-down">
//           <div className="flex flex-col">
//             <Link to="/" className="px-6 py-3 text-gray-800 font-medium border-b border-gray-100 hover:bg-gray-50" onClick={() => setIsOpen(false)}>Home</Link>
//             <Link to="/about" className="px-6 py-3 text-gray-800 font-medium border-b border-gray-100 hover:bg-gray-50" onClick={() => setIsOpen(false)}>About Us</Link>
//             <Link to="/programs" className="px-6 py-3 text-gray-800 font-medium border-b border-gray-100 hover:bg-gray-50" onClick={() => setIsOpen(false)}>Academics</Link>
//             <Link to="/faculty" className="px-6 py-3 text-gray-800 font-medium border-b border-gray-100 hover:bg-gray-50" onClick={() => setIsOpen(false)}>Faculty</Link>

//             {/* Mobile Admission Submenu */}
//             <div className="border-b border-gray-100">
//               <button 
//                 onClick={() => setMobileAdmissionOpen(!mobileAdmissionOpen)}
//                 className="w-full flex justify-between items-center px-6 py-3 text-gray-800 font-medium hover:bg-gray-50"
//               >
//                 Admission <ChevronDown size={16} className={`transform transition-transform ${mobileAdmissionOpen ? 'rotate-180' : ''}`}/>
//               </button>
//               {mobileAdmissionOpen && (
//                 <div className="bg-gray-50 px-6 py-2 space-y-2 border-l-4 border-bims-green ml-6 my-2">
//                   <Link to="/admission" className="block py-1 text-sm text-gray-600 hover:text-bims-blue" onClick={() => setIsOpen(false)}>MBA</Link>
//                   <Link to="/admission" className="block py-1 text-sm text-gray-600 hover:text-bims-blue" onClick={() => setIsOpen(false)}>Apply for Scholarship</Link>
//                   <Link to="/admission" className="block py-1 text-sm text-gray-600 hover:text-bims-blue" onClick={() => setIsOpen(false)}>Download Prospectus</Link>
//                   <Link to="/apply" className="block py-1 text-sm text-gray-600 hover:text-bims-blue font-bold" onClick={() => setIsOpen(false)}>Apply Online</Link>
//                 </div>
//               )}
//             </div>

//             <Link to="/placement" className="px-6 py-3 text-gray-800 font-medium border-b border-gray-100 hover:bg-gray-50" onClick={() => setIsOpen(false)}>Placements</Link>
//             <Link to="/contact" className="px-6 py-3 text-gray-800 font-medium border-b border-gray-100 hover:bg-gray-50" onClick={() => setIsOpen(false)}>Contact</Link>

//             <div className="p-4 bg-gray-100">
//                <Link to="/apply" className="block w-full text-center bg-bims-blue text-white py-3 rounded font-bold shadow-md" onClick={() => setIsOpen(false)}>APPLY ONLINE</Link>
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;


// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import {
//   Menu,
//   X,
//   ChevronDown,
//   Phone,
//   ArrowRight,
//   BookOpen,
//   Users,
//   Briefcase,
//   Building2,
// } from "lucide-react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [programOpen, setProgramOpen] = useState(false);
//   const location = useLocation();

//   const isActive = (path) => location.pathname === path;

//   const navLink =
//     "text-[15px] font-semibold text-slate-700 hover:text-blue-700 transition";

//   return (
//     <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="h-20 flex items-center justify-between">
//           {/* Logo */}
//           <Link to="/" className="flex items-center gap-3">
//             <img
//               src="/logo.png"
//               alt="BIMS Logo"
//               className="h-12 w-auto object-contain"
//             />

//             <div className="leading-tight">
//               <h1 className="text-lg md:text-xl font-black text-[#07111f] tracking-tight">
//                 BIMS
//               </h1>
//               <p className="hidden sm:block text-xs font-bold text-slate-500">
//                 BHUBANESWAR INSTITUTE OF <br className="hidden lg:block" /> MANAGEMENT AND SCIENCE
//               </p>
//             </div>
//           </Link>

//           {/* Desktop Nav */}
//           <nav className="hidden lg:flex items-center gap-8">
//             <Link
//               to="/"
//               className={`${navLink} ${isActive("/") ? "text-blue-700" : ""
//                 }`}
//             >
//               Home
//             </Link>

//             <Link to="/about" className={navLink}>
//               About
//             </Link>

//             <Link to="/placement" className={navLink}>
//               Admission
//             </Link>

//             <div className="relative group">
//               <button className={`${navLink} flex items-center gap-1`}>
//                 Programs <ChevronDown size={16} />
//               </button>

//               <div className="absolute top-full left-1/2 -translate-x-1/2 pt-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
//                 <div className="w-[720px] bg-white rounded-3xl shadow-2xl border border-slate-100 p-5 grid grid-cols-2 gap-4">
//                   <Link
//                     to="/programs"
//                     className="p-5 rounded-2xl hover:bg-blue-50 transition flex gap-4"
//                   >
//                     <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-xl flex items-center justify-center">
//                       <BookOpen size={22} />
//                     </div>
//                     <div>
//                       <h3 className="font-black text-slate-900">
//                         MBA Program
//                       </h3>
//                       <p className="text-sm text-slate-500 mt-1">
//                         Business, leadership, finance & management.
//                       </p>
//                     </div>
//                   </Link>

//                   <Link
//                     to="/programs"
//                     className="p-5 rounded-2xl hover:bg-emerald-50 transition flex gap-4"
//                   >
//                     <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center">
//                       <Briefcase size={22} />
//                     </div>
//                     <div>
//                       <h3 className="font-black text-slate-900">
//                         PGDM Program
//                       </h3>
//                       <p className="text-sm text-slate-500 mt-1">
//                         Industry-ready practical business learning.
//                       </p>
//                     </div>
//                   </Link>

//                   <Link
//                     to="/faculty"
//                     className="p-5 rounded-2xl hover:bg-purple-50 transition flex gap-4"
//                   >
//                     <div className="w-12 h-12 bg-purple-100 text-purple-700 rounded-xl flex items-center justify-center">
//                       <Users size={22} />
//                     </div>
//                     <div>
//                       <h3 className="font-black text-slate-900">Faculty</h3>
//                       <p className="text-sm text-slate-500 mt-1">
//                         Learn from academic & industry mentors.
//                       </p>
//                     </div>
//                   </Link>

//                   <Link
//                     to="/placement"
//                     className="p-5 rounded-2xl hover:bg-orange-50 transition flex gap-4"
//                   >
//                     <div className="w-12 h-12 bg-orange-100 text-orange-700 rounded-xl flex items-center justify-center">
//                       <Building2 size={22} />
//                     </div>
//                     <div>
//                       <h3 className="font-black text-slate-900">
//                         Placements
//                       </h3>
//                       <p className="text-sm text-slate-500 mt-1">
//                         Career training & hiring support.
//                       </p>
//                     </div>
//                   </Link>
//                 </div>
//               </div>
//             </div>

//             <Link to="/placement" className={navLink}>
//               Examinations
//             </Link>

//             <Link to="/placement" className={navLink}>
//               Placements
//             </Link>

//               <Link to="/placement" className={navLink}>
//               Campus Life
//             </Link>

//             <Link to="/contact" className={navLink}>
//               Contact
//             </Link>
//           </nav>

//           {/* Desktop Right */}
//           <div className="hidden lg:flex items-center gap-4">
//             <a
//               href="tel:+917008411323"
//               className="flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-blue-700"
//             >
//               <Phone size={17} />
//               +91 70084 11323
//             </a>

//             <Link
//               to="/apply"
//               className="bg-[#07111f] text-white px-6 py-3 rounded-xl font-black hover:bg-blue-700 transition flex items-center gap-2"
//             >
//               Apply Now <ArrowRight size={17} />
//             </Link>
//           </div>

//           {/* Mobile Button */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="lg:hidden w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center text-slate-900"
//           >
//             {isOpen ? <X size={25} /> : <Menu size={25} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="lg:hidden bg-white border-t border-slate-200 shadow-xl">
//           <div className="px-4 py-4 space-y-2">
//             <Link
//               to="/"
//               onClick={() => setIsOpen(false)}
//               className="block px-4 py-3 rounded-xl font-bold text-slate-800 hover:bg-slate-100"
//             >
//               Home
//             </Link>

//             <button
//               onClick={() => setProgramOpen(!programOpen)}
//               className="w-full flex justify-between items-center px-4 py-3 rounded-xl font-bold text-slate-800 hover:bg-slate-100"
//             >
//               Programs
//               <ChevronDown
//                 size={18}
//                 className={`transition ${programOpen ? "rotate-180" : ""}`}
//               />
//             </button>

//             {programOpen && (
//               <div className="ml-4 border-l-2 border-blue-600 pl-4 space-y-2">
//                 <Link
//                   to="/programs"
//                   onClick={() => setIsOpen(false)}
//                   className="block py-2 text-sm font-semibold text-slate-600"
//                 >
//                   MBA Program
//                 </Link>
//                 <Link
//                   to="/programs"
//                   onClick={() => setIsOpen(false)}
//                   className="block py-2 text-sm font-semibold text-slate-600"
//                 >
//                   PGDM Program
//                 </Link>
//                 <Link
//                   to="/faculty"
//                   onClick={() => setIsOpen(false)}
//                   className="block py-2 text-sm font-semibold text-slate-600"
//                 >
//                   Faculty
//                 </Link>
//                 <Link
//                   to="/placement"
//                   onClick={() => setIsOpen(false)}
//                   className="block py-2 text-sm font-semibold text-slate-600"
//                 >
//                   Placements
//                 </Link>
//               </div>
//             )}

//             <Link
//               to="/about"
//               onClick={() => setIsOpen(false)}
//               className="block px-4 py-3 rounded-xl font-bold text-slate-800 hover:bg-slate-100"
//             >
//               About
//             </Link>

//             <Link
//               to="/placement"
//               onClick={() => setIsOpen(false)}
//               className="block px-4 py-3 rounded-xl font-bold text-slate-800 hover:bg-slate-100"
//             >
//               Placements
//             </Link>

//             <Link
//               to="/contact"
//               onClick={() => setIsOpen(false)}
//               className="block px-4 py-3 rounded-xl font-bold text-slate-800 hover:bg-slate-100"
//             >
//               Contact
//             </Link>

//             <a
//               href="tel:+917008411323"
//               className="block px-4 py-3 rounded-xl font-bold text-blue-700 bg-blue-50"
//             >
//               Call: +91 70084 11323
//             </a>

//             <Link
//               to="/apply"
//               onClick={() => setIsOpen(false)}
//               className="block text-center bg-[#07111f] text-white px-6 py-4 rounded-xl font-black"
//             >
//               Apply Now
//             </Link>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  ArrowRight,
  BookOpen,
  Users,
  Briefcase,
  Building2,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [programOpen, setProgramOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navLink =
    "text-[14px] xl:text-[15px] font-semibold text-slate-700 hover:text-blue-700 transition whitespace-nowrap";

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between gap-6">
          {/* Logo - click logo to go home */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img
              src="/logo.png"
              alt="BIMS Logo"
              className="h-12 w-auto object-contain"
            />

            <div className="leading-tight">
              <h1 className="text-lg md:text-xl font-black text-[#07111f] tracking-tight">
                BIMS
              </h1>
              <p className="hidden sm:block text-[10px] xl:text-xs font-bold text-slate-500 leading-snug">
                BHUBANESWAR INSTITUTE OF <br className="hidden xl:block" />
                MANAGEMENT AND SCIENCE
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex flex-1 items-center justify-center gap-5 xl:gap-7">
            <Link
              to="/about"
              className={`${navLink} ${isActive("/about") ? "text-blue-700" : ""}`}
            >
              About
            </Link>

            <Link
              to="/Admission"
              className={`${navLink} ${isActive("/Admission") ? "text-blue-700" : ""}`}
            >
              Admission
            </Link>

            <div className="relative group">
              <button className={`${navLink} flex items-center gap-1`}>
                Programs <ChevronDown size={16} />
              </button>

              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="w-[700px] xl:w-[760px] bg-white rounded-3xl shadow-2xl border border-slate-100 p-5 grid grid-cols-2 gap-4">
                  <Link
                    to="/programs"
                    className="p-5 rounded-2xl hover:bg-blue-50 transition flex gap-4"
                  >
                    <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-xl flex items-center justify-center shrink-0">
                      <BookOpen size={22} />
                    </div>
                    <div>
                      <h3 className="font-black text-slate-900">UG Program</h3>
                      <p className="text-sm text-slate-500 mt-1">
                        Business, leadership, finance & management.
                      </p>
                    </div>
                  </Link>

                  <Link
                    to="/programs"
                    className="p-5 rounded-2xl hover:bg-emerald-50 transition flex gap-4"
                  >
                    <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center shrink-0">
                      <Briefcase size={22} />
                    </div>
                    <div>
                      <h3 className="font-black text-slate-900">PG Program</h3>
                      <p className="text-sm text-slate-500 mt-1">
                        Industry-ready practical business learning.
                      </p>
                    </div>
                  </Link>

                  {/* <Link
                    to="/faculty"
                    className="p-5 rounded-2xl hover:bg-purple-50 transition flex gap-4"
                  >
                    <div className="w-12 h-12 bg-purple-100 text-purple-700 rounded-xl flex items-center justify-center shrink-0">
                      <Users size={22} />
                    </div>
                    <div>
                      <h3 className="font-black text-slate-900">Faculty</h3>
                      <p className="text-sm text-slate-500 mt-1">
                        Learn from academic & industry mentors.
                      </p>
                    </div>
                  </Link>

                  <Link
                    to="/placement"
                    className="p-5 rounded-2xl hover:bg-orange-50 transition flex gap-4"
                  >
                    <div className="w-12 h-12 bg-orange-100 text-orange-700 rounded-xl flex items-center justify-center shrink-0">
                      <Building2 size={22} />
                    </div>
                    <div>
                      <h3 className="font-black text-slate-900">Placements</h3>
                      <p className="text-sm text-slate-500 mt-1">
                        Career training & hiring support.
                      </p>
                    </div>
                  </Link> */}
                </div>
              </div>
            </div>

            <Link
              to="/Examination"
              className={`${navLink} ${isActive("/Examination") ? "text-blue-700" : ""}`}
            >
              Examination
            </Link>

            <Link
              to="/Placements"
              className={`${navLink} ${isActive("/Placements") ? "text-blue-700" : ""}`}
            >
              Placements
            </Link>

            <Link
              to="/campus-life"
              className={`${navLink} ${isActive("/campus-life") ? "text-blue-700" : ""}`}
            >
              Campus Life
            </Link>

            <Link to="/contact" className={navLink}>
              Contact
            </Link>
          </nav>

          {/* Desktop Right */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href="tel:+917008411323"
              className="hidden xl:flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-blue-700 whitespace-nowrap"
            >
              <Phone size={17} />
              +91 70084 11323
            </a>

            <Link
              to="/apply"
              className="bg-[#07111f] text-white px-5 xl:px-6 py-3 rounded-xl font-black hover:bg-blue-700 transition flex items-center gap-2 whitespace-nowrap"
            >
              Apply Now <ArrowRight size={17} />
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center text-slate-900"
          >
            {isOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 shadow-xl">
          <div className="px-4 py-4 space-y-2">
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-xl font-bold text-slate-800 hover:bg-slate-100"
            >
              About
            </Link>

            <Link
              to="/placement"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-xl font-bold text-slate-800 hover:bg-slate-100"
            >
              Admission
            </Link>

            <button
              onClick={() => setProgramOpen(!programOpen)}
              className="w-full flex justify-between items-center px-4 py-3 rounded-xl font-bold text-slate-800 hover:bg-slate-100"
            >
              Programs
              <ChevronDown
                size={18}
                className={`transition ${programOpen ? "rotate-180" : ""}`}
              />
            </button>

            {programOpen && (
              <div className="ml-4 border-l-2 border-blue-600 pl-4 space-y-2">
                <Link
                  to="/programs"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-sm font-semibold text-slate-600"
                >
                  UG Program
                </Link>

                <Link
                  to="/programs"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-sm font-semibold text-slate-600"
                >
                  PG Program
                </Link>

                {/* <Link
                  to="/faculty"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-sm font-semibold text-slate-600"
                >
                  
                </Link>

                <Link
                  to="/placement"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-sm font-semibold text-slate-600"
                >
                 
                </Link> */}
              </div>
            )}

            <Link
              to="/examinnation"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-xl font-bold text-slate-800 hover:bg-slate-100"
            >
              Examinations
            </Link>

            <Link
              to="/placement"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-xl font-bold text-slate-800 hover:bg-slate-100"
            >
              Placements
            </Link>

            <Link
              to="/campus-life"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-xl font-bold text-slate-800 hover:bg-slate-100"
            >
              Campus Life
            </Link>

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-xl font-bold text-slate-800 hover:bg-slate-100"
            >
              Contact
            </Link>

            <a
              href="tel:+917008411323"
              className="block px-4 py-3 rounded-xl font-bold text-blue-700 bg-blue-50"
            >
              Call: +91 70084 11323
            </a>

            <Link
              to="/apply"
              onClick={() => setIsOpen(false)}
              className="block text-center bg-[#07111f] text-white px-6 py-4 rounded-xl font-black"
            >
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;