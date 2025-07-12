import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="py-24 md:py-32 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-4xl mx-auto">
          Your Brand. Your Voice. <br className="hidden md:block" />
          <span className="gradient-text">Without the Camera.</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          We turn your face and voice into a talking AI avatar that delivers powerful, cinematic videos on your behalf. Scale your content, not your time.
        </p>
        <div className="mt-10">
          <a
            href="https://www.avtarostudios.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-blue-700 transition-transform duration-300 transform hover:scale-105 shadow-2xl shadow-blue-500/30"
          >
            Book a Demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
