
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import { BookOpen, Users, Trophy, Building2, ChevronRight, Calendar, ArrowRight, MapPin, Quote } from 'lucide-react';
import axios from 'axios';

const Home = () => {
  // State for inquiry form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'MBA',
    message: ''
  });
  const [status, setStatus] = useState('');

  // Data States
  const [courses, setCourses] = useState([]);
  const [events, setEvents] = useState([]);
  const [recruiters, setRecruiters] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [faculty, setFaculty] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [resCourses, resEvents, resRecruiters, resTestimonials, resFaculty] = await Promise.all([
           axios.get('/api/courses'),
           axios.get('/api/events'),
           axios.get('/api/recruiters'),
           axios.get('/api/testimonials'),
           axios.get('/api/faculty')
        ]);
        setCourses(resCourses.data);
        setEvents(resEvents.data);
        setRecruiters(resRecruiters.data);
        setTestimonials(resTestimonials.data);
        setFaculty(resFaculty.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      await axios.post('/api/inquiries', formData);
      setStatus('Inquiry Sent Successfully!');
      setFormData({ name: '', email: '', phone: '', course: 'MBA', message: '' });
    } catch (error) {
      console.error(error);
      setStatus('Failed to send. Try again.');
    }
  };

  const features = [
    { icon: <BookOpen size={32} />, title: "Academic Excellence", desc: "Industry-aligned curriculum tailored for modern business challenges." },
    { icon: <Users size={32} />, title: "Expert Faculty", desc: "Learn from Ph.D. holders and industry veterans." },
    { icon: <Trophy size={32} />, title: "Top Placements", desc: "Consistent track record with top MNCs and corporates." },
    { icon: <Building2 size={32} />, title: "Modern Campus", desc: "State-of-the-art infrastructure in the heart of Bhubaneswar." },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <Hero news={events.filter(e => e.category === 'News')} />

      {/* About Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-bims-green rounded-tl-3xl opacity-20"></div>
          <img 
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop" 
            alt="Students" 
            className="rounded-lg shadow-xl relative z-10 w-full"
          />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-bims-blue rounded-br-3xl opacity-20"></div>
        </div>
        <div>
          <h4 className="text-bims-green font-bold uppercase tracking-wider mb-2">Welcome to BIMS</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Empowering Minds, <br/>Transforming Lives</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            At Bhubaneswar Institute of Management and Science, we believe in holistic development. Modeled after leading global institutions, we provide an environment that fosters critical thinking, innovation, and leadership.
          </p>
          <ul className="space-y-3 mb-8">
            {['Industry Integrated Curriculum', '100% Placement Assistance', 'Soft Skills Development'].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                <span className="w-5 h-5 rounded-full bg-bims-green/20 flex items-center justify-center text-bims-green text-xs">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <button className="bg-bims-blue text-white px-6 py-3 rounded font-semibold hover:bg-blue-900 transition flex items-center gap-2">
            Read More <ArrowRight size={18}/>
          </button>
        </div>
      </section>

      {/* Why Choose BIMS (Features) */}
      <section className="bg-bims-blue py-20 text-white clip-path-slant pb-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose BIMS?</h2>
            <div className="w-20 h-1 bg-bims-green mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feat, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/10 hover:-translate-y-2 transition duration-300">
                <div className="text-bims-green mb-4">{feat.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feat.title}</h3>
                <p className="text-gray-300 text-sm">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h4 className="text-bims-green font-bold uppercase tracking-wider mb-2">Academic Programs</h4>
            <h2 className="text-3xl font-bold text-gray-900">Our Courses</h2>
            <div className="w-20 h-1 bg-bims-green mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.length > 0 ? courses.map((course) => (
              <div key={course._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex flex-col h-full">
                <div className="h-48 bg-gray-200 relative">
                   <img 
                      src={course.image || "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop"} 
                      alt={course.title}
                      className="w-full h-full object-cover"
                   />
                   <div className="absolute top-4 right-4 bg-bims-green text-white text-xs font-bold px-2 py-1 rounded">
                     {course.duration}
                   </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{course.title}</h3>
                  <p className="text-sm text-gray-500 mb-4">{course.code}</p>
                  <p className="text-gray-600 text-sm mb-6 flex-grow line-clamp-3">{course.description}</p>
                  
                  <div className="border-t border-gray-100 pt-4 mt-auto">
                    <p className="text-xs text-gray-500 mb-2"><strong>Eligibility:</strong> {course.eligibility}</p>
                    <button className="w-full mt-2 border border-bims-blue text-bims-blue font-semibold py-2 rounded hover:bg-bims-blue hover:text-white transition">
                      View Syllabus
                    </button>
                  </div>
                </div>
              </div>
            )) : (
              <p className="text-center col-span-3 text-gray-500">Loading courses...</p>
            )}
          </div>
        </div>
      </section>

      {/* Events & Inquiry Section (Split) */}
      <section className="max-w-7xl mx-auto px-4 py-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* News & Notices */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-xl p-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <Calendar className="text-bims-green"/> Recent Notices & Events
              </h3>
              <a href="#" className="text-bims-blue font-semibold text-sm hover:underline">View All</a>
            </div>
            <div className="space-y-4">
              {events.length > 0 ? events.slice(0, 5).map((event) => (
                <div key={event._id} className="flex items-start gap-4 p-4 border-b border-gray-100 hover:bg-gray-50 transition group">
                  <div className="bg-gray-100 text-gray-600 rounded px-3 py-2 text-center min-w-[70px] group-hover:bg-bims-blue group-hover:text-white transition">
                    <span className="block text-xs font-bold">{new Date(event.date).toLocaleDateString('en-US', { month: 'short' }).toUpperCase()}</span>
                    <span className="block text-sm font-bold">{new Date(event.date).getDate()}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 hover:text-bims-blue cursor-pointer transition">{event.title}</h4>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded mt-1 inline-block">{event.category}</span>
                    <p className="text-xs text-bims-green font-medium mt-1 cursor-pointer flex items-center gap-1">Read Details <ChevronRight size={12}/></p>
                  </div>
                </div>
              )) : (
                <p className="text-gray-500">No recent notices.</p>
              )}
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="bg-bims-green rounded-lg shadow-xl p-8 text-white h-fit">
            <h3 className="text-2xl font-bold mb-2">Quick Inquiry</h3>
            <p className="text-green-50 text-sm mb-6">Request information about admissions.</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <input 
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text" 
                placeholder="Full Name" 
                className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 placeholder-white/70 text-white focus:outline-none focus:bg-white/20"
                required
              />
              <input 
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email" 
                placeholder="Email Address" 
                className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 placeholder-white/70 text-white focus:outline-none focus:bg-white/20"
                required
              />
              <input 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                type="tel" 
                placeholder="Phone Number" 
                className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 placeholder-white/70 text-white focus:outline-none focus:bg-white/20"
                required
              />
              <select 
                name="course"
                value={formData.course}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white focus:outline-none focus:bg-white/20 [&>option]:text-black"
              >
                <option value="MBA">MBA (General)</option>
                <option value="MBA-Finance">MBA (Finance)</option>
                <option value="BBA">BBA</option>
              </select>
              <button type="submit" className="w-full bg-white text-bims-darkGreen font-bold py-3 rounded hover:bg-gray-100 transition shadow-lg">
                Submit Inquiry
              </button>
              {status && <p className="text-sm text-center font-semibold mt-2">{status}</p>}
            </form>
          </div>

        </div>
      </section>

      {/* Faculty Highlight Section */}
      {faculty.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
               <h2 className="text-3xl font-bold text-gray-900">Distinguished Faculty</h2>
               <div className="w-20 h-1 bg-bims-green mx-auto mt-4"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {faculty.slice(0, 4).map((fac) => (
                <div key={fac._id} className="bg-white rounded-lg shadow p-4 text-center hover:shadow-lg transition">
                  <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full mb-4 overflow-hidden">
                    <img 
                      src={fac.image || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} 
                      alt={fac.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-lg text-gray-800">{fac.name}</h3>
                  <p className="text-bims-green text-sm font-medium">{fac.designation}</p>
                  <p className="text-gray-500 text-xs mt-1">{fac.qualification}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Recruiters Section with Infinite Scroll */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
           <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-gray-800">Our Top Recruiters</h3>
          </div>
          
          <div className="relative w-full overflow-hidden">
            <div className="flex w-[200%] animate-scroll">
              {/* First Copy */}
              <div className="flex w-1/2 justify-around items-center px-4">
                {recruiters.length > 0 ? recruiters.map((recruiter) => (
                  <div key={`rec-${recruiter._id}`} className="w-40 h-20 flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 transition duration-300 px-4">
                    {recruiter.logo ? (
                      <img src={recruiter.logo} alt={recruiter.name} className="max-w-full max-h-full object-contain" />
                    ) : (
                      <span className="font-bold text-gray-400 text-lg">{recruiter.name}</span>
                    )}
                  </div>
                )) : [1,2,3,4].map(i => <div key={i} className="w-32 h-12 bg-gray-100 rounded"></div>)}
              </div>
              
              {/* Duplicate Copy for Seamless Loop */}
              <div className="flex w-1/2 justify-around items-center px-4">
                {recruiters.length > 0 ? recruiters.map((recruiter) => (
                  <div key={`rec-dup-${recruiter._id}`} className="w-40 h-20 flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 transition duration-300 px-4">
                    {recruiter.logo ? (
                      <img src={recruiter.logo} alt={recruiter.name} className="max-w-full max-h-full object-contain" />
                    ) : (
                      <span className="font-bold text-gray-400 text-lg">{recruiter.name}</span>
                    )}
                  </div>
                )) : [1,2,3,4].map(i => <div key={i} className="w-32 h-12 bg-gray-100 rounded"></div>)}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-bims-blue text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Student Voices</h2>
             <div className="w-20 h-1 bg-bims-green mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.length > 0 ? testimonials.map((t) => (
              <div key={t._id} className="bg-white/10 backdrop-blur p-8 rounded-lg border border-white/10 relative">
                <Quote className="absolute top-4 right-4 text-bims-green opacity-50" size={40} />
                <p className="text-gray-200 italic mb-6">"{t.message}"</p>
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                     {t.image && <img src={t.image} alt={t.name} className="w-full h-full object-cover" />}
                   </div>
                   <div>
                     <h4 className="font-bold text-white">{t.name}</h4>
                     <p className="text-xs text-bims-green">{t.role} {t.batch && `(${t.batch})`}</p>
                     {t.company && <p className="text-xs text-gray-400">Placed at {t.company}</p>}
                   </div>
                </div>
              </div>
            )) : (
               <p className="col-span-3 text-center text-white/50">Loading testimonials...</p>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;