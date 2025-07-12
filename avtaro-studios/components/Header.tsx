import React from 'react';

const Header = () => {
  return (
    <header className="py-6 px-4 md:px-8 lg:px-16 sticky top-0 z-40 bg-[#0A0A0A]/80 backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">
          Avtaro<span className="gradient-text">Studios</span>
        </h1>
        <a 
          href="https://www.avtarostudios.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg shadow-blue-500/20"
        >
          Book a Demo
        </a>
      </div>
    </header>
  );
};

export default Header;
