import React from 'react';

const PageHeader = ({ title, breadcrumb }) => {
  return (
    <div className="relative bg-bims-blue text-white py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop" 
          alt="Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bims-blue via-bims-blue/90 to-transparent"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-bims-green font-medium flex items-center gap-2">
          Home <span className="text-gray-400">/</span> {breadcrumb}
        </p>
      </div>
    </div>
  );
};

export default PageHeader;