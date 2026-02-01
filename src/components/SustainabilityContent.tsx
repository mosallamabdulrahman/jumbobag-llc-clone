
import React from 'react';
import Hero from './Hero';

const SustainabilityContent: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section - Reusing the existing Hero component */}
      <Hero 
        title="SUSTAINABILITY" 
        backgroundImage={`${import.meta.env.BASE_URL}images/sustain-bg.jpg`}
        height="h-[450px]"
      />

      {/* Intro Text Section */}
      <section className="py-24 bg-white">
        <div className="max-w-8xl mx-auto px-6 lg:px-24">
          <div className="max-w-7xl">
            <p className="text-gray-500 text-3xl lg:text-[34px] font-light leading-snug">
              JumboBag recognizes the need for sustainability as a means of continued positive business operation without compromising the ability of future development. To this end we address issues at the macro level.
            </p>
          </div>
        </div>
      </section>

      {/* WE ADDRESS Section - Overlapping Images Layout */}
      <section className="pb-32 bg-white">
        <div className="max-w-8xl mx-auto px-6 lg:px-24 flex flex-col lg:flex-row items-center gap-20">
          
          {/* Left Side: Overlapping Images */}
          <div className="w-full lg:w-1/2 relative h-[400px]">
            {/* Background Image (Green Leaf) */}
            <div className="absolute top-0 left-0 w-4/5 h-4/5 z-0 overflow-hidden">
              <img 
                src={`${import.meta.env.BASE_URL}images/r1.png`} 
                alt="Sustainability process" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side: Text & Bullets */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-jumboBlue text-3xl font-bold uppercase mb-8 tracking-tight">WE ADDRESS</h2>
            <ul className="space-y-4 text-gray-600 text-[15px] leading-relaxed">
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span>
                <span>Economic efficiency (innovations, prosperity, productivity)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span>
                <span>Social Equity (health, community and human rights)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span>
                <span>Environmental Accountability (Recyclability, land use and climate changes)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span>
                <span>Among the requirements from our offshore partners are Environmental Management Certifications and reporting and disclosures of their business processes which allow transparency.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Full-width Quote/Vision Section */}
      <section className="relative min-h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={`${import.meta.env.BASE_URL}images/products-bg.jpg`}
            alt="Warehouse Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-white/40"></div>
        </div>
        <div className="relative z-10 max-w-6xl px-6 text-center">
          <p className="text-gray-800 text-3xl lg:text-[42px] font-light leading-tight">
            We are engaged with our customers, employees, surrounding community and partners with the goal of understanding opposition and then finding common ground to ultimately be able to facilitate joint decision making.
          </p>
        </div>
      </section>
    </div>
  );
};

export default SustainabilityContent;
