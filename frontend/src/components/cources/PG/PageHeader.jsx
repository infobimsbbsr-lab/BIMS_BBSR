// import React from 'react';

// const PageHeader = ({ title, breadcrumb }) => {
//   return (
//     <div className="relative bg-bims-blue text-white py-16 md:py-24 overflow-hidden">
//       <div className="absolute inset-0 overflow-hidden">
//         <img 
//           src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop" 
//           alt="Background" 
//           className="w-full h-full object-cover opacity-20"
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-bims-blue via-bims-blue/90 to-transparent"></div>
//       </div>
//       <div className="relative max-w-7xl mx-auto px-4">
//         <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
//         <p className="text-bims-green font-medium flex items-center gap-2">
//           Home <span className="text-gray-400">/</span> {breadcrumb}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default PageHeader;

import React from 'react';

const PageHeader = ({ title, breadcrumb }) => {
  return (
    <div className="relative bg-bims-blue text-white overflow-hidden min-h-[250px] flex items-center">
      <div className="max-w-7xl w-full mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center relative z-10">
        
        {/* Left Side: Content */}
        <div className="space-y-4">
          <nav className="flex items-center gap-2 text-sm text-gray-300">
            <a href="/" className="hover:underline decoration-bims-green">Home</a>
            <span>/</span>
            <span className="text-bims-green font-medium">{breadcrumb}</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-none text-white border-l-4 border-bims-green pl-4">
            {title}
          </h1>
        </div>
      </div>

      {/* Right Side: Image Background Layer */}
      <div className="absolute inset-y-0 right-0 w-full md:w-1/2 hidden md:block">
        {/* FIXED: The gradient now starts 100% solid BIMS blue at the center cut to completely cover the seam */}
        <div className="absolute inset-0 bg-gradient-to-r from-bims-blue via-bims-blue/80 to-transparent/10 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop" 
          alt="BIMS Campus" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default PageHeader;