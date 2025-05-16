/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const FloatingCVButton = ({ cvFile = "assets/CV.pdf" }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={cvFile}
        download="MyResume.pdf"
        className={`flex items-center justify-center rounded-full shadow-lg p-4 transition-all duration-300 ${
          isHovered 
            ? "bg-blue-600 text-white scale-110" 
            : "bg-white text-blue-600"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        title="Download CV"
      >
        <div className="flex flex-col items-center">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
            />
          </svg>
          <span className="text-xs font-medium mt-1">CV</span>
        </div>
      </a>
    </div>
  );
};

export default FloatingCVButton;