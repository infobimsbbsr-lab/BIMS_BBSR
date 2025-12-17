import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <PageHeader title="Contact Us" breadcrumb="Contact" />

      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Info Side */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-gray-600">
                Have questions about admissions, courses, or campus life? Reach out to us.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-bims-green/10 p-3 rounded-full text-bims-green">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Campus Address</h4>
                  <p className="text-gray-600">IDCO Plot No. 2, Sector-A, Zone-B,<br/> Mancheswar Industrial Estate,<br/> Bhubaneswar, Odisha 751010</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-bims-green/10 p-3 rounded-full text-bims-green">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Phone Numbers</h4>
                  <p className="text-gray-600">+91 12345 67890</p>
                  <p className="text-gray-600">+91 09876 54321</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-bims-green/10 p-3 rounded-full text-bims-green">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Email Address</h4>
                  <p className="text-gray-600">admission@bimsbbsr.in</p>
                  <p className="text-gray-600">info@bimsbbsr.in</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-bims-blue">
            <h3 className="text-xl font-bold mb-6">Send us a Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-bims-blue" />
                <input type="text" placeholder="Last Name" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-bims-blue" />
              </div>
              <input type="email" placeholder="Email Address" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-bims-blue" />
              <input type="tel" placeholder="Phone Number" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-bims-blue" />
              <textarea rows="4" placeholder="Your Message" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-bims-blue"></textarea>
              <button className="w-full bg-bims-blue text-white font-bold py-3 rounded hover:bg-blue-900 transition">
                SendMessage
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <div className="h-96 w-full bg-gray-200">
         <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.1332883658596!2d85.8569442!3d20.2924197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190a0300000001%3A0x3f350543209581a0!2sBhubaneswar%20Institute%20of%20Management%20Studies%20(BIMS)!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{border:0}} 
            allowFullScreen="" 
            loading="lazy">
          </iframe>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;