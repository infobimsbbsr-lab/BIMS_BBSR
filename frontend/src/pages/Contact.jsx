// import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import PageHeader from '../components/PageHeader';
// import { MapPin, Phone, Mail } from 'lucide-react';

// const Contact = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col">
//       <Navbar />
//       <PageHeader title="Contact Us" breadcrumb="Contact" />

//       <section className="py-16 max-w-7xl mx-auto px-4">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

//           {/* Info Side */}
//           <div className="space-y-8">
//             <div>
//               <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
//               <p className="text-gray-600">
//                 Have questions about admissions, courses, or campus life? Reach out to us.
//               </p>
//             </div>

//             <div className="space-y-6">
//               <div className="flex items-start gap-4">
//                 <div className="bg-bims-green/10 p-3 rounded-full text-bims-green">
//                   <MapPin size={24} />
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-gray-900">Campus Address</h4>
//                   <p className="text-gray-600">Bhubaneswar, Khordha</p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4">
//                 <div className="bg-bims-green/10 p-3 rounded-full text-bims-green">
//                   <Phone size={24} />
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-gray-900">Phone Numbers</h4>
//                   <p className="text-gray-600">+91 70084 11323</p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4">
//                 <div className="bg-bims-green/10 p-3 rounded-full text-bims-green">
//                   <Mail size={24} />
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-gray-900">Email Address</h4>
//                   <p className="text-gray-600">info.bimsbbsr@gmail.com</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Form Side */}
//           <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-bims-blue">
//             <h3 className="text-xl font-bold mb-6">Send us a Message</h3>
//             <form className="space-y-4">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <input type="text" placeholder="First Name" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-bims-blue" />
//                 <input type="text" placeholder="Last Name" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-bims-blue" />
//               </div>
//               <input type="email" placeholder="Email Address" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-bims-blue" />
//               <input type="tel" placeholder="Phone Number" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-bims-blue" />
//               <textarea rows="4" placeholder="Your Message" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-bims-blue"></textarea>
//               <button className="w-full bg-bims-blue text-white font-bold py-3 rounded hover:bg-blue-900 transition">
//                 SendMessage
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>

//       {/* Map Section */}
//       <div className="h-96 w-full bg-gray-200">
//          <iframe 
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.1332883658596!2d85.8569442!3d20.2924197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190a0300000001%3A0x3f350543209581a0!2sBhubaneswar%20Institute%20of%20Management%20Studies%20(BIMS)!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
//             width="100%" 
//             height="100%" 
//             style={{border:0}} 
//             allowFullScreen="" 
//             loading="lazy">
//           </iframe>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default Contact;

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import {
  ArrowRight,
  Award,
  Building2,
  Clock,
  Mail,
  MapPin,
  Phone,
  Send,
  ShieldCheck,
  Users,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("Sending your inquiry...");

    const payload = {
      _subject: `New Contact Inquiry - BIMS Website`,
      _captcha: "false",
      _template: "table",

      First_Name: formData.firstName,
      Last_Name: formData.lastName,
      Email: formData.email,
      Phone: formData.phone,
      Message: formData.message,
    };

    try {
      await axios.post(
        "https://formsubmit.co/ajax/info.bimsbbsr@gmail.com",
        payload
      );

      setStatus(
        "Your inquiry has been submitted successfully. Our team will contact you shortly."
      );

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      setStatus("Unable to send inquiry right now. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-[#f1f5f9] text-slate-800 font-sans antialiased">
      <Navbar />

      {/* NOTICE BAR */}
      <div className="bg-amber-500 text-slate-950 font-bold text-xs md:text-sm py-2 px-4 shadow-sm border-b border-amber-600 relative z-30 flex items-center overflow-hidden">
        <span className="bg-slate-950 text-white px-2 py-0.5 rounded-sm text-[10px] uppercase tracking-wider mr-3 flex-shrink-0">
          Contact Desk
        </span>

        <marquee scrollamount="4">
          Admissions support, academic counseling and institutional inquiry
          services are available through the BIMS contact office.
        </marquee>
      </div>

      {/* HERO */}
      <section className="relative bg-[#0d1e3d] text-white border-b-8 border-amber-500 py-16 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 to-slate-950/70" />

        <div className="relative max-w-7xl mx-auto px-4 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-sm px-3 py-1.5 text-xs font-bold text-amber-400 mb-6 uppercase tracking-widest">
              <Award size={14} /> Contact Information
            </div>

            <h1 className="text-3xl md:text-5xl font-serif font-bold leading-tight text-slate-100">
              Connect With <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200 font-sans font-black">
                Bhubaneswar Institute of Management & Science
              </span>
            </h1>

            <p className="mt-5 text-base text-slate-300 max-w-xl leading-relaxed">
              Contact the admissions office, academic department or institutional
              support team for inquiries related to admissions, placements,
              courses and campus facilities.
            </p>

            {/* CONTACT CARDS */}
            <div className="grid sm:grid-cols-2 gap-4 mt-10">
              <div className="bg-slate-900/60 border border-slate-700/40 rounded-sm p-5">
                <MapPin className="text-amber-400 mb-3" size={22} />

                <h3 className="text-sm font-bold uppercase tracking-wide">
                  Campus Address
                </h3>

                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Bhubaneswar Institute of Management & Science,
                  Bhubaneswar, Odisha
                </p>
              </div>

              <div className="bg-slate-900/60 border border-slate-700/40 rounded-sm p-5">
                <Phone className="text-amber-400 mb-3" size={22} />

                <h3 className="text-sm font-bold uppercase tracking-wide">
                  Contact Number
                </h3>

                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  +91 70084 11323
                </p>
              </div>

              <div className="bg-slate-900/60 border border-slate-700/40 rounded-sm p-5">
                <Mail className="text-amber-400 mb-3" size={22} />

                <h3 className="text-sm font-bold uppercase tracking-wide">
                  Email Address
                </h3>

                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  info.bimsbbsr@gmail.com
                </p>
              </div>

              <div className="bg-slate-900/60 border border-slate-700/40 rounded-sm p-5">
                <Clock className="text-amber-400 mb-3" size={22} />

                <h3 className="text-sm font-bold uppercase tracking-wide">
                  Office Timing
                </h3>

                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Monday - Saturday <br />
                  9:00 AM - 5:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="bg-white text-slate-900 rounded-sm shadow-xl p-6 md:p-8 border-t-4 border-amber-500 relative z-10">
            <h2 className="text-xl font-serif font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <Send className="text-amber-500" size={20} />
              Send an Inquiry
            </h2>

            <p className="text-slate-500 text-xs mt-1 mb-6">
              Fill in your details and our institutional support team will
              contact you shortly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  placeholder="First Name"
                  className="w-full px-4 py-3 rounded-sm bg-slate-50 border border-slate-300 outline-none text-sm focus:border-slate-900"
                />

                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  placeholder="Last Name"
                  className="w-full px-4 py-3 rounded-sm bg-slate-50 border border-slate-300 outline-none text-sm focus:border-slate-900"
                />
              </div>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-sm bg-slate-50 border border-slate-300 outline-none text-sm focus:border-slate-900"
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-sm bg-slate-50 border border-slate-300 outline-none text-sm focus:border-slate-900"
              />

              <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Write your message..."
                className="w-full px-4 py-3 rounded-sm bg-slate-50 border border-slate-300 outline-none text-sm focus:border-slate-900 resize-none"
              />

              <button
                type="submit"
                className="w-full bg-[#0d1e3d] text-white py-3.5 rounded-sm font-bold hover:bg-slate-900 transition-colors shadow-sm text-xs uppercase tracking-widest border border-slate-800 flex items-center justify-center gap-2"
              >
                Send Message <ArrowRight size={15} />
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

      {/* QUICK INFO */}
      <section className="max-w-7xl mx-auto px-4 -mt-8 relative z-20">
        <div className="bg-white rounded-sm shadow-md border-x border-b border-slate-200 grid grid-cols-2 md:grid-cols-4 overflow-hidden divide-x divide-slate-100">
          {[
            ["Admissions", "Student Support"],
            ["Academic", "Counseling Desk"],
            ["Placement", "Career Guidance"],
            ["Campus", "Institutional Help"],
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

      {/* SUPPORT SECTION */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-600 font-extrabold uppercase text-xs tracking-widest">
            Institutional Support
          </span>

          <h2 className="text-2xl md:text-3xl font-serif font-bold mt-1 text-slate-900">
            Student and visitor assistance
          </h2>

          <div className="w-12 h-1 bg-amber-500 mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Users />,
              title: "Admissions Counseling",
              text: "Support for admission process, eligibility and documentation guidance.",
            },
            {
              icon: <Building2 />,
              title: "Campus Assistance",
              text: "Information regarding campus facilities and institutional activities.",
            },
            {
              icon: <ShieldCheck />,
              title: "Student Helpdesk",
              text: "Academic support and institutional communication services.",
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

      {/* MAP */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white border border-slate-200 rounded-sm overflow-hidden shadow-sm">
            <div className="p-5 border-b border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 font-serif">
                Campus Location
              </h3>

              <p className="text-sm text-slate-500 mt-1">
                Bhubaneswar Institute of Management & Science
              </p>
            </div>

            <div className="h-[450px] w-full">
              <div className="h-[450px] rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://maps.google.com/maps?q=20.242368,85.746936&z=16&output=embed"
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="BIMS Bhubaneswar Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;