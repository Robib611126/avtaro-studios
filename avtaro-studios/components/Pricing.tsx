import React from 'react';
import { PRICING_TIERS, ADDONS } from '../constants';
import type { PricingTier } from '../types';

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-blue-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);


const Pricing = () => {
  return (
    <section id="pricing" className="py-20 md:py-24 bg-black/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Flexible Plans for Every Creator</h2>
          <p className="mt-4 text-lg text-gray-400">Choose the plan that best fits your content goals.</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
          {PRICING_TIERS.map((tier: PricingTier) => (
            <div key={tier.name} className={`bg-gray-900/50 rounded-2xl p-8 border ${tier.isPopular ? 'border-blue-500' : 'border-gray-800'} flex flex-col h-full ${tier.isPopular ? 'transform lg:scale-105 shadow-2xl shadow-blue-500/10' : ''}`}>
              {tier.isPopular && (
                <div className="text-center mb-6">
                  <span className="bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase">Most Popular</span>
                </div>
              )}
              <h3 className="text-2xl font-bold text-white text-center">{tier.name}</h3>
              <div className="text-center my-6">
                <span className="text-5xl font-bold text-white">{tier.priceInr}</span>
                <span className="text-gray-400"> / {tier.priceUsd}</span>
              </div>
              <p className="text-gray-400 text-center min-h-[48px]">{tier.description}</p>
              <ul className="my-8 space-y-4 flex-grow">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <CheckIcon />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="https://www.avtarostudios.com" target="_blank" rel="noopener noreferrer" className={`w-full text-center font-bold py-3 px-6 rounded-lg transition-colors duration-300 mt-auto ${tier.isPopular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-700 text-gray-200 hover:bg-gray-600'}`}>
                {tier.ctaText}
              </a>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-white">Powerful Add-ons</h3>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
                {ADDONS.map(addon => (
                    <div key={addon.name} className="bg-gray-800/60 border border-gray-700 rounded-lg px-5 py-3">
                        <p className="font-semibold text-white">{addon.name}</p>
                        <p className="text-sm text-gray-400">{addon.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
