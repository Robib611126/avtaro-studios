import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#0A0A0A] text-gray-200 min-h-screen relative overflow-x-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.05] z-0"></div>
       <div className="absolute inset-0 -z-10 h-full w-full bg-[#0A0A0A] bg-[radial-gradient(#1E293B_1px,transparent_1px)] [background-size:32px_32px]"></div>

      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <HowItWorks />
          <WhyChooseUs />
          <Pricing />
          <FAQ />
        </main>
        <Footer />
      </div>

      <vapi-widget
        className="z-50"
        assistant-id="6639af75-80db-4d87-a507-54617a50c0cb"
        public-key="5d910fb5-b825-453f-bc96-2e832a59b840"
        mode="voice"
        theme="dark"
        base-color="#0A0A0A"
        accent-color="#3b82f6"
        button-base-color="#0A0A0A"
        button-accent-color="#ffffff"
        radius="large"
        size="full"
        position="bottom-right"
        main-label="Talk to Avtarly"
        start-button-text="Start"
        end-button-text="End Call"
        require-consent="true"
        local-storage-key="vapi_widget_consent"
        show-transcript="true"
      ></vapi-widget>
    </div>
  );
}

export default App;