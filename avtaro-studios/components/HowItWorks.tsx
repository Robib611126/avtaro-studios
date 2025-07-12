import React from 'react';
import { HOW_IT_WORKS_STEPS } from '../constants';
import type { StepItem } from '../types';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-24 bg-black/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Four Steps to Effortless Content</h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">Our streamlined process makes high-end video production incredibly simple.</p>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-800 -translate-y-1/2"></div>
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 animate-pulse"></div>
          <div className="grid md:grid-cols-4 gap-10 md:gap-8 relative">
            {HOW_IT_WORKS_STEPS.map((step: StepItem, index: number) => (
              <div key={index} className="flex flex-col items-center text-center p-6 bg-gray-900/50 rounded-xl border border-gray-800 backdrop-blur-sm hover:border-blue-500 transition-all duration-300">
                <div className="text-5xl font-bold gradient-text mb-4">{step.step}</div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
