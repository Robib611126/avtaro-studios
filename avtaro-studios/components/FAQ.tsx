import React, { useState } from 'react';
import { FAQ_ITEMS } from '../constants';
import type { FaqItem } from '../types';

interface FaqItemProps {
  item: FaqItem;
}

const FaqAccordionItem: React.FC<FaqItemProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-800">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-6"
      >
        <span className="text-lg font-semibold text-white">{item.question}</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div
        className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
            <p className="pb-6 text-gray-400 leading-relaxed">{item.answer}</p>
        </div>
      </div>
    </div>
  );
};


const FAQ = () => {
  return (
    <section id="faq" className="py-20 md:py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Frequently Asked Questions</h2>
          <p className="mt-4 text-lg text-gray-400">Have questions? We have answers.</p>
        </div>
        <div className="space-y-2">
          {FAQ_ITEMS.map((item, index) => (
            <FaqAccordionItem key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
