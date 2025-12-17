import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = ({ news }) => {
  // Default news if none provided from backend
  const newsItems = news && news.length > 0 
    ? news.map(n => n.title).join(' • ') 
    : "Admissions open for MBA Batch 2024-26 • BIMS ranked Top 10 B-School in Odisha • Placement drive successfully completed with 100% placement record.";

  return (
    <div className="relative bg-gray-900 h-[500px] md:h-[600px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop" 
          alt="Campus Life" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bims-blue/90 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <span className="inline-block bg-bims-green text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
            ADMISSIONS OPEN 2024-25
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Shaping Future <br/>
            <span className="text-bims-green">Global Leaders</span>
          </h1>
          <p className="text-lg text-gray-200 mb-8 leading-relaxed">
            Join BIMS to experience world-class education, industry exposure, and a legacy of excellence in management studies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-bims-blue px-8 py-3 rounded font-bold hover:bg-gray-100 transition flex items-center justify-center gap-2">
              Explore Courses <ArrowRight size={18} />
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded font-bold hover:bg-white/10 transition">
              Virtual Tour
            </button>
          </div>
        </div>
      </div>
      
      {/* Ticker at bottom */}
      <div className="absolute bottom-0 w-full bg-bims-blue/90 backdrop-blur-sm text-white py-3">
        <div className="max-w-7xl mx-auto px-4 flex items-center overflow-hidden">
          <span className="font-bold bg-bims-green px-3 py-1 text-xs rounded mr-4 shrink-0 z-10 relative">LATEST NEWS</span>
          <div className="overflow-hidden w-full relative">
            <p className="animate-marquee inline-block text-sm">
              {newsItems}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;