import React from 'react';
import { WHY_CHOOSE_US_FEATURES } from '../constants';
import type { FeatureItem } from '../types';

const WhyChooseUs = () => {
  return (
    <section id="features" className="py-20 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">The Future of Personal Branding</h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">We provide a revolutionary way to build your brand while you focus on what you do best.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US_FEATURES.map((feature: FeatureItem, index: number) => (
            <div key={index} className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-colors duration-300 transform hover:-translate-y-1">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
