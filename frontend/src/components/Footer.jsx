import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: About */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
               <img 
                src="/logo.png" 
                alt="BIMS Logo" 
                className="h-12 bg-white rounded p-1"
              />
              <span className="text-xl font-bold text-white">BIMS</span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Bhubaneswar Institute of Management and Science (BIMS) is dedicated to creating industry-ready professionals through academic excellence and practical exposure.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-bims-green hover:text-white transition"><Facebook size={16}/></a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-bims-green hover:text-white transition"><Twitter size={16}/></a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-bims-green hover:text-white transition"><Linkedin size={16}/></a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-bims-green hover:text-white transition"><Instagram size={16}/></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 relative inline-block">
              Quick Links
              <span className="absolute bottom-[-8px] left-0 w-12 h-1 bg-bims-green"></span>
            </h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-bims-green transition">About Us</Link></li>
              <li><Link to="/admission" className="hover:text-bims-green transition">Admission Procedure</Link></li>
              <li><Link to="/placement" className="hover:text-bims-green transition">Placement Records</Link></li>
              <li><Link to="/faculty" className="hover:text-bims-green transition">Faculty Members</Link></li>
              <li><Link to="/programs" className="hover:text-bims-green transition">Academic Programs</Link></li>
              <li><Link to="/contact" className="hover:text-bims-green transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 relative inline-block">
              Contact Us
              <span className="absolute bottom-[-8px] left-0 w-12 h-1 bg-bims-green"></span>
            </h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="text-bims-green shrink-0" size={18} />
                <p>Bhubaneswar, Khordha</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-bims-green shrink-0" size={18} />
                <p>+91 70084 11323</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-bims-green shrink-0" size={18} />
                <p>info.bimsbbsr@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Column 4: Map */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 relative inline-block">
              Locate Us
              <span className="absolute bottom-[-8px] left-0 w-12 h-1 bg-bims-green"></span>
            </h3>
            <div className="bg-gray-800 h-40 rounded overflow-hidden">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.1332883658596!2d85.8569442!3d20.2924197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190a0300000001%3A0x3f350543209581a0!2sBhubaneswar%20Institute%20of%20Management%20Studies%20(BIMS)!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy">
              </iframe>
            </div>
          </div>

        </div>
      </div>
      
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© {new Date().getFullYear()} BIMS Bhubaneswar. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="hover:text-white transition">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;