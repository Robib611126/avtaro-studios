import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black/30 border-t border-gray-900">
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white max-w-2xl mx-auto">Ready to Create Content at Scale?</h2>
        <p className="mt-4 text-lg text-gray-400 max-w-xl mx-auto">
          Stop trading your time for content. Let your AI avatar do the work.
        </p>
        <div className="mt-10">
          <a
            href="https://www.avtarostudios.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-blue-700 transition-transform duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/20"
          >
            View Demo or Book a Meeting
          </a>
        </div>
      </div>
      <div className="border-t border-gray-800 py-6 text-center">
        <p className="text-gray-500">&copy; {new Date().getFullYear()} Avtaro Studios. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
