// import React from 'react';
// import { Link } from 'react-router-dom';
// import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-gray-300">
//       <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
//           {/* Column 1: About */}
//           <div>
//             <Link to="/" className="flex items-center gap-2 mb-6">
//                <img 
//                 src="/logo.png" 
//                 alt="BIMS Logo" 
//                 className="h-12 bg-white rounded p-1"
//               />
//               <span className="text-xl font-bold text-white">BIMS</span>
//             </Link>
//             <p className="text-sm leading-relaxed mb-6">
//               Bhubaneswar Institute of Management and Science (BIMS) is dedicated to creating industry-ready professionals through academic excellence and practical exposure.
//             </p>
//             <div className="flex space-x-4">
//               <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-bims-green hover:text-white transition"><Facebook size={16}/></a>
//               <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-bims-green hover:text-white transition"><Twitter size={16}/></a>
//               <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-bims-green hover:text-white transition"><Linkedin size={16}/></a>
//               <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-bims-green hover:text-white transition"><Instagram size={16}/></a>
//             </div>
//           </div>

//           {/* Column 2: Quick Links */}
//           <div>
//             <h3 className="text-white text-lg font-bold mb-6 relative inline-block">
//               Quick Links
//               <span className="absolute bottom-[-8px] left-0 w-12 h-1 bg-bims-green"></span>
//             </h3>
//             <ul className="space-y-3 text-sm">
//               <li><Link to="/about" className="hover:text-bims-green transition">About Us</Link></li>
//               <li><Link to="/admission" className="hover:text-bims-green transition">Admission Procedure</Link></li>
//               <li><Link to="/placement" className="hover:text-bims-green transition">Placement Records</Link></li>
//               <li><Link to="/faculty" className="hover:text-bims-green transition">Faculty Members</Link></li>
//               <li><Link to="/programs" className="hover:text-bims-green transition">Academic Programs</Link></li>
//               <li><Link to="/contact" className="hover:text-bims-green transition">Contact Us</Link></li>
//             </ul>
//           </div>

//           {/* Column 3: Contact Info */}
//           <div>
//             <h3 className="text-white text-lg font-bold mb-6 relative inline-block">
//               Contact Us
//               <span className="absolute bottom-[-8px] left-0 w-12 h-1 bg-bims-green"></span>
//             </h3>
//             <div className="space-y-4 text-sm">
//               <div className="flex items-start gap-3">
//                 <MapPin className="text-bims-green shrink-0" size={18} />
//                 <p>Bhubaneswar, Khordha</p>
//               </div>
//               <div className="flex items-center gap-3">
//                 <Phone className="text-bims-green shrink-0" size={18} />
//                 <p>+91 70084 11323</p>
//               </div>
//               <div className="flex items-center gap-3">
//                 <Mail className="text-bims-green shrink-0" size={18} />
//                 <p>info.bimsbbsr@gmail.com</p>
//               </div>
//             </div>
//           </div>

//           {/* Column 4: Map */}
//           <div>
//             <h3 className="text-white text-lg font-bold mb-6 relative inline-block">
//               Locate Us
//               <span className="absolute bottom-[-8px] left-0 w-12 h-1 bg-bims-green"></span>
//             </h3>
//             <div className="bg-gray-800 h-40 rounded overflow-hidden">
//              <iframe 
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.1332883658596!2d85.8569442!3d20.2924197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190a0300000001%3A0x3f350543209581a0!2sBhubaneswar%20Institute%20of%20Management%20Studies%20(BIMS)!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
//                 width="100%" 
//                 height="100%" 
//                 style={{border:0}} 
//                 allowFullScreen="" 
//                 loading="lazy">
//               </iframe>
//             </div>
//           </div>

//         </div>
//       </div>
      
//       <div className="border-t border-gray-800 py-6">
//         <div className="max-w-7xl mx-auto px-4 text-sm grid grid-cols-1 md:grid-cols-3 items-center gap-4">
//           <p className="text-center md:text-left">© {new Date().getFullYear()} BIMS Bhubaneswar. All Rights Reserved.</p>
//           <div className="flex justify-center space-x-6">
//             <Link to="#" className="hover:text-white transition">Privacy Policy</Link>
//             <Link to="#" className="hover:text-white transition">Terms of Use</Link>
//           </div>
//           <div className="flex items-center justify-center md:justify-end gap-2">
//             <span className="text-gray-400">Developed by</span>
//             <span className="font-semibold text-white transition-transform duration-300 animate-pulse hover:animate-none hover:scale-105 motion-reduce:animate-none">
//               Silan Software Pvt Ltd
//             </span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#07111f] to-[#020817] text-white">
      {/* Top CTA */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col lg:flex-row justify-between items-center gap-6">
          <div>
            <p className="text-yellow-400 uppercase tracking-widest text-xs font-bold">
              Admissions Open 2026-28
            </p>
            <h2 className="text-3xl font-bold mt-2">
              Start Your Academic Journey Today
            </h2>
          </div>

          <Link
            to="/apply"
            className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-yellow-300 transition"
          >
            Apply Now <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo */}
        <div>
          <img
            src="/logo.png"
            alt="BIMS"
            className="h-16 bg-white rounded-xl p-2"
          />

          <h3 className="text-2xl font-bold mt-5">
            BIMS Bhubaneswar
          </h3>

          <p className="text-slate-400 mt-4 leading-relaxed">
            Empowering future leaders through quality education,
            innovation, research, and industry collaboration.
          </p>

          <div className="flex gap-3 mt-6">
            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-yellow-400 hover:text-black transition flex items-center justify-center cursor-pointer"
              >
                <Icon size={18} />
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-6 text-yellow-400">
            Quick Links
          </h3>

          <div className="space-y-3">
            <Link to="/about" className="block hover:text-yellow-400">
              About Us
            </Link>

            <Link to="/Admissions" className="block hover:text-yellow-400">
              Admissions
            </Link>

            <Link to="/Programs" className="block hover:text-yellow-400">
              Programs
            </Link>

            <Link to="/Placements" className="block hover:text-yellow-400">
              Placements
            </Link>

            <Link to="/CampusLife" className="block hover:text-yellow-400">
              Campus Life
            </Link>

            <Link to="/Contact" className="block hover:text-yellow-400">
              Contact
            </Link>
          </div>
        </div>

        {/* Programs */}
        {/* <div>
          <h3 className="text-xl font-bold mb-6 text-yellow-400">
            Programs
          </h3>

          <div className="space-y-3 text-slate-300">
            <p>MBA</p>
            <p>PGDM</p>
            <p>BBA</p>
            <p>Data Science</p>
            <p>AI & ML</p>
            <p>Industry Internship</p>
          </div>
        </div> */}
        {/* Programs */}
<div>
  <h3 className="text-xl font-bold mb-6 text-yellow-400">
    Our Programs
  </h3>

  <div className="space-y-5">
    {/* UG Programs */}
    <div>
      <h4 className="text-white font-semibold mb-2">
        UG Programs
      </h4>

      <div className="space-y-2 text-slate-300 text-sm">
        <Link
          to="/ug/ai-ml"
          className="block hover:text-yellow-400 transition"
        >
          B.Sc AI & Machine Learning
        </Link>

        <Link
          to="/ug/microbiology"
          className="block hover:text-yellow-400 transition"
        >
          B.Sc Microbiology
        </Link>

        <Link
          to="/ug/bjmc"
          className="block hover:text-yellow-400 transition"
        >
          Bachelor of Journalism & Mass Communication
        </Link>

        <Link
          to="/ug/computer-science"
          className="block hover:text-yellow-400 transition"
        >
          B.Sc Computer Science
        </Link>
      </div>
    </div>

    {/* PG Programs */}
    <div>
      <h4 className="text-white font-semibold mb-2">
        PG Programs
      </h4>

      <div className="space-y-2 text-slate-300 text-sm">
        <Link
          to="/pg/pgdm"
          className="block hover:text-yellow-400 transition"
        >
          PGDM
        </Link>

        <Link
          to="/pg/pgdm-ai-ds"
          className="block hover:text-yellow-400 transition"
        >
          PGDM AI & Data Science
        </Link>

        <Link
          to="/pg/pgdm-finance-hr"
          className="block hover:text-yellow-400 transition"
        >
         PGDM Finance, Marketing & HR
        </Link>

        <Link
          to="/pg/pgdm-healthcare"
          className="block hover:text-yellow-400 transition"
        >
          PGDM Healthcare
        </Link>

        <Link
          to="/pg/pgdm-operations"
          className="block hover:text-yellow-400 transition"
        >
          PGDM Operations
        </Link>

        <Link
          to="/pg/msw"
          className="block hover:text-yellow-400 transition"
        >
          Master of Social Work (MSW)
        </Link>
      </div>
    </div>
  </div>
</div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-bold mb-6 text-yellow-400">
            Contact Info
          </h3>

          <div className="space-y-5">
            <div className="flex gap-3">
              <MapPin className="text-yellow-400" />
              <span>Bhubaneswar, Odisha</span>
            </div>

            <div className="flex gap-3">
              <Phone className="text-yellow-400" />
              <span>+91 70084 11323</span>
            </div>

            <div className="flex gap-3">
              <Mail className="text-yellow-400" />
              <span>info.bimsbbsr@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col lg:flex-row justify-between items-center gap-3 text-sm text-slate-400">
          <p>
            © {new Date().getFullYear()} BIMS Bhubaneswar. All Rights Reserved.
          </p>

          <p>
            Developed by
            <span className="text-yellow-400 font-semibold ml-2">
              Silan Software Pvt. Ltd.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;