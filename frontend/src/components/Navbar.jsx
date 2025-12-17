
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Facebook, Linkedin, Twitter, Instagram, ChevronDown, Search } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileAdmissionOpen, setMobileAdmissionOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="w-full relative z-50">
      {/* Row 1: Top Bar - Dark Info Strip */}
      <div className="bg-gray-900 text-gray-300 py-2 text-xs md:text-sm">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-1 md:space-y-0">
            <span className="flex items-center gap-2 hover:text-white transition cursor-pointer"><Phone size={14} /> +91 70084 11323</span>
            <span className="flex items-center gap-2 hover:text-white transition cursor-pointer"><Mail size={14} /> info.bimsbbsr@gmail.com</span>
          </div>
          <div className="hidden md:flex space-x-4 items-center">
            <div className="flex space-x-3 pr-4 border-r border-gray-700">
              <a href="#" className="hover:text-bims-green transition"><Facebook size={14} /></a>
              <a href="#" className="hover:text-bims-green transition"><Twitter size={14} /></a>
              <a href="#" className="hover:text-bims-green transition"><Linkedin size={14} /></a>
              <a href="#" className="hover:text-bims-green transition"><Instagram size={14} /></a>
            </div>
            <div className="flex space-x-4 text-xs font-semibold uppercase tracking-wide">
              <span className="cursor-pointer hover:text-white transition">Alumni</span>
              <span className="cursor-pointer hover:text-white transition">Staff Login</span>
              <span className="cursor-pointer hover:text-white transition">Student Portal</span>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2: Main Header - Logo & Branding */}
      <div className="bg-white py-4 md:py-6 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-4 group">
            <img 
              src="/logo.png" 
              alt="BIMS Logo" 
              className="h-16 md:h-20 w-auto group-hover:scale-105 transition duration-300"
            />
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-bims-blue leading-tight tracking-tight hidden md:block">
                BHUBANESWAR INSTITUTE OF <br className="hidden lg:block"/> MANAGEMENT AND SCIENCES
              </h1>
              <h1 className="text-xl font-extrabold text-bims-blue leading-tight tracking-tight md:hidden">
                BIMS BHUBANESWAR
              </h1>
              <p className="text-xs md:text-sm font-bold text-red-600 italic tracking-wide mt-1 uppercase hidden md:block">
                An Unit Of Orissa Millennium Education Trust
              </p>
            </div>
          </Link>

          {/* Right Side: Apply Button (Desktop) */}
          <div className="hidden lg:block">
            <Link 
              to="/apply" 
              className="bg-gradient-to-r from-bims-blue to-blue-800 text-white px-8 py-3 rounded shadow-lg hover:shadow-xl hover:from-blue-800 hover:to-bims-blue transition transform hover:-translate-y-1 font-bold tracking-wide"
            >
              APPLY ONLINE
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-bims-blue"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Row 3: Navigation Bar - Blue Strip */}
      <div className="bg-bims-blue text-white shadow-md hidden md:block sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center justify-between">
            <ul className="flex space-x-1">
              <li>
                <Link to="/" className={`block px-5 py-4 font-semibold text-sm uppercase tracking-wide hover:bg-white/10 transition border-b-4 ${isActive('/') ? 'border-bims-green bg-white/10' : 'border-transparent'}`}>
                  Home
                </Link>
              </li>
              
              {/* About Dropdown */}
              <li className="group relative">
                <span className={`cursor-pointer flex items-center gap-1 px-5 py-4 font-semibold text-sm uppercase tracking-wide hover:bg-white/10 transition border-b-4 ${isActive('/about') ? 'border-bims-green' : 'border-transparent'}`}>
                  About Us <ChevronDown size={14}/>
                </span>
                <div className="absolute top-full left-0 w-56 bg-white text-gray-800 shadow-xl rounded-b-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top border-t-4 border-bims-green z-50">
                  <Link to="/about" className="block px-4 py-3 text-sm hover:bg-gray-50 border-b border-gray-100 hover:text-bims-blue hover:pl-6 transition-all">Overview</Link>
                  <Link to="/about" className="block px-4 py-3 text-sm hover:bg-gray-50 border-b border-gray-100 hover:text-bims-blue hover:pl-6 transition-all">Mission & Vision</Link>
                  <Link to="/about" className="block px-4 py-3 text-sm hover:bg-gray-50 hover:text-bims-blue hover:pl-6 transition-all">Leadership</Link>
                </div>
              </li>

              {/* Academics Dropdown */}
              <li className="group relative">
                <span className={`cursor-pointer flex items-center gap-1 px-5 py-4 font-semibold text-sm uppercase tracking-wide hover:bg-white/10 transition border-b-4 ${isActive('/programs') || isActive('/faculty') ? 'border-bims-green' : 'border-transparent'}`}>
                  Academics <ChevronDown size={14}/>
                </span>
                <div className="absolute top-full left-0 w-56 bg-white text-gray-800 shadow-xl rounded-b-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top border-t-4 border-bims-green z-50">
                  <Link to="/programs" className="block px-4 py-3 text-sm hover:bg-gray-50 border-b border-gray-100 hover:text-bims-blue hover:pl-6 transition-all">MBA Program</Link>
                  <Link to="/faculty" className="block px-4 py-3 text-sm hover:bg-gray-50 border-b border-gray-100 hover:text-bims-blue hover:pl-6 transition-all">Faculty Members</Link>
                  <Link to="/programs" className="block px-4 py-3 text-sm hover:bg-gray-50 hover:text-bims-blue hover:pl-6 transition-all">Academic Calendar</Link>
                </div>
              </li>

              {/* Admission Dropdown */}
              <li className="group relative">
                <span className={`cursor-pointer flex items-center gap-1 px-5 py-4 font-semibold text-sm uppercase tracking-wide hover:bg-white/10 transition border-b-4 ${isActive('/admission') ? 'border-bims-green' : 'border-transparent'}`}>
                  Admission <ChevronDown size={14}/>
                </span>
                <div className="absolute top-full left-0 w-64 bg-white text-gray-800 shadow-xl rounded-b-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top border-t-4 border-bims-green z-50">
                  <Link to="/admission" className="block px-4 py-3 text-sm hover:bg-gray-50 border-b border-gray-100 hover:text-bims-blue hover:pl-6 transition-all">MBA Admission</Link>
                  <Link to="/admission" className="block px-4 py-3 text-sm hover:bg-gray-50 border-b border-gray-100 hover:text-bims-blue hover:pl-6 transition-all">Apply for Scholarship</Link>
                  <Link to="/admission" className="block px-4 py-3 text-sm hover:bg-gray-50 border-b border-gray-100 hover:text-bims-blue hover:pl-6 transition-all">Download Prospectus</Link>
                  <Link to="/apply" className="block px-4 py-3 text-sm hover:bg-gray-50 hover:text-bims-blue hover:pl-6 transition-all font-bold text-bims-blue">Apply Online</Link>
                </div>
              </li>

              <li>
                <Link to="/placement" className={`block px-5 py-4 font-semibold text-sm uppercase tracking-wide hover:bg-white/10 transition border-b-4 ${isActive('/placement') ? 'border-bims-green' : 'border-transparent'}`}>
                  Placements
                </Link>
              </li>
              <li>
                <Link to="/contact" className={`block px-5 py-4 font-semibold text-sm uppercase tracking-wide hover:bg-white/10 transition border-b-4 ${isActive('/contact') ? 'border-bims-green' : 'border-transparent'}`}>
                  Contact
                </Link>
              </li>
            </ul>
            
            {/* Search Icon */}
            <div className="px-4 cursor-pointer hover:text-bims-green transition">
              <Search size={20} />
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 absolute w-full shadow-2xl animate-fade-in-down">
          <div className="flex flex-col">
            <Link to="/" className="px-6 py-3 text-gray-800 font-medium border-b border-gray-100 hover:bg-gray-50" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" className="px-6 py-3 text-gray-800 font-medium border-b border-gray-100 hover:bg-gray-50" onClick={() => setIsOpen(false)}>About Us</Link>
            <Link to="/programs" className="px-6 py-3 text-gray-800 font-medium border-b border-gray-100 hover:bg-gray-50" onClick={() => setIsOpen(false)}>Academics</Link>
            <Link to="/faculty" className="px-6 py-3 text-gray-800 font-medium border-b border-gray-100 hover:bg-gray-50" onClick={() => setIsOpen(false)}>Faculty</Link>
            
            {/* Mobile Admission Submenu */}
            <div className="border-b border-gray-100">
              <button 
                onClick={() => setMobileAdmissionOpen(!mobileAdmissionOpen)}
                className="w-full flex justify-between items-center px-6 py-3 text-gray-800 font-medium hover:bg-gray-50"
              >
                Admission <ChevronDown size={16} className={`transform transition-transform ${mobileAdmissionOpen ? 'rotate-180' : ''}`}/>
              </button>
              {mobileAdmissionOpen && (
                <div className="bg-gray-50 px-6 py-2 space-y-2 border-l-4 border-bims-green ml-6 my-2">
                  <Link to="/admission" className="block py-1 text-sm text-gray-600 hover:text-bims-blue" onClick={() => setIsOpen(false)}>MBA</Link>
                  <Link to="/admission" className="block py-1 text-sm text-gray-600 hover:text-bims-blue" onClick={() => setIsOpen(false)}>Apply for Scholarship</Link>
                  <Link to="/admission" className="block py-1 text-sm text-gray-600 hover:text-bims-blue" onClick={() => setIsOpen(false)}>Download Prospectus</Link>
                  <Link to="/apply" className="block py-1 text-sm text-gray-600 hover:text-bims-blue font-bold" onClick={() => setIsOpen(false)}>Apply Online</Link>
                </div>
              )}
            </div>

            <Link to="/placement" className="px-6 py-3 text-gray-800 font-medium border-b border-gray-100 hover:bg-gray-50" onClick={() => setIsOpen(false)}>Placements</Link>
            <Link to="/contact" className="px-6 py-3 text-gray-800 font-medium border-b border-gray-100 hover:bg-gray-50" onClick={() => setIsOpen(false)}>Contact</Link>
            
            <div className="p-4 bg-gray-100">
               <Link to="/apply" className="block w-full text-center bg-bims-blue text-white py-3 rounded font-bold shadow-md" onClick={() => setIsOpen(false)}>APPLY ONLINE</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;