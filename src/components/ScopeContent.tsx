
import React from 'react';
import Hero from './Hero';

const ScopeContent: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Offset for the sticky nav
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const SectionHeader = ({ title }: { title: string }) => (
    <h2 className="text-jumboBlue text-[28px] font-bold uppercase mb-6 tracking-tight leading-tight">
      {title}
    </h2>
  );

  const ReturnToTop = () => (
    <button 
      onClick={scrollToTop}
      className="flex items-center text-jumboBlue text-[13px] font-bold uppercase tracking-wider mt-10 group"
    >
      <span className="mr-2 text-xl font-normal">2</span>
      <span className="group-hover:underline">RETURN TO TOP</span>
    </button>
  );

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <Hero 
        title="SCOPE" 
        backgroundImage={`${import.meta.env.BASE_URL}images/scope-bg.png`}
        height="h-[450px]"
      />

      {/* Internal Sticky Navigation */}
      <nav className="bg-[#f5f5f5] border-b border-gray-100 py-6 sticky top-0 z-20 shadow-sm">
        <div className="max-w-8xl mx-auto px-6 lg:px-24">
          <ul className="flex flex-wrap justify-center gap-x-12 gap-y-4">
            <li>
              <button onClick={() => scrollToSection('partners')} className="text-jumboBlue text-[12px] font-bold uppercase tracking-widest hover:text-jumboGreen transition-colors">
                Selection of Global Partners
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('logistics')} className="text-jumboBlue text-[12px] font-bold uppercase tracking-widest hover:text-jumboGreen transition-colors">
                Logistics
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('production')} className="text-jumboBlue text-[12px] font-bold uppercase tracking-widest hover:text-jumboGreen transition-colors">
                North American Production
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('support')} className="text-jumboBlue text-[12px] font-bold uppercase tracking-widest hover:text-jumboGreen transition-colors">
                Customer Support
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Section 1: Selection of Global Partners */}
      <section id="partners" className="py-28 bg-white overflow-hidden">
        <div className="max-w-8xl mx-auto px-6 lg:px-24 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full lg:w-1/2 relative h-[380px]">
            <div className="absolute top-0 left-0 w-4/5 h-4/5 z-0 overflow-hidden">
              <img src={`${import.meta.env.BASE_URL}images/s1.png`} alt="Background Leaf" className="w-full h-full object-cover opacity-90" />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <SectionHeader title="SELECTION OF GLOBAL PARTNERS" />
            <div className="text-gray-600 text-[14px] leading-relaxed space-y-6 max-w-xl">
              <p>
                The selection of our global sourcing partners is based on exacting criteria which allows our customers to take advantage of the latest technologies in FIBC manufacture. Our partner facilities are vertically integrated and use state-of-the-art equipment to produce the most advanced materials and components. Partner facilities are chosen based on regional stability, competitive value offerings and global diversification aspects. Additionally, we evaluate potential suppliers’ historical data as pertains to responsiveness, on-time performance, and quality management.
              </p>
              <p>
                JumboBag analyzes customers’ industries and requirements to correlate them with the pertinent manufacturing partner location, affording the applicable third party certification and production standards.
              </p>
              <ReturnToTop />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Logistics */}
      <section id="logistics" className="py-28 bg-gray-50 overflow-hidden">
        <div className="max-w-8xl mx-auto px-6 lg:px-24 flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">
          <div className="w-full lg:w-1/2 relative h-[380px]">
            <div className="absolute top-0 right-0 w-4/5 h-4/5 z-0 overflow-hidden">
              <img src={`${import.meta.env.BASE_URL}images/s2.png`} alt="Background Leaf" className="w-full h-full object-cover opacity-90" />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <SectionHeader title="LOGISTICS" />
            <div className="text-gray-600 text-[14px] leading-relaxed space-y-6 max-w-xl">
              <p>
                Our customers value the importance JumboBag LLC places on clear and consistent communication throughout the supply chain. Through meticulous coordination with all logistics partners, we are able to provide timely tracking information and transparency. We have implemented a sample approval process for new customers and/or existing customers with specification changes.
              </p>
              <ReturnToTop />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: North American Production */}
      <section id="production" className="py-28 bg-white overflow-hidden">
        <div className="max-w-8xl mx-auto px-6 lg:px-24 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full lg:w-1/2 relative h-[380px]">
            <div className="absolute top-0 left-0 w-4/5 h-4/5 z-0 overflow-hidden">
              <img src={`${import.meta.env.BASE_URL}images/s3.png`} alt="Background Leaf" className="w-full h-full object-cover opacity-90" />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <SectionHeader title="NORTH AMERICAN PRODUCTION" />
            <div className="text-gray-600 text-[14px] leading-relaxed space-y-6 max-w-xl">
              <p>
                JumboBag also provides a North American production facility, which offers our customers the reassurance of guaranteed supply in the event of unpredictable usage spikes or unexpected disruptions of the supply chain.
              </p>
              <ReturnToTop />
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Customer Support */}
      <section id="support" className="py-28 bg-gray-50 overflow-hidden">
        <div className="max-w-8xl mx-auto px-6 lg:px-24 flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">
          <div className="w-full lg:w-1/2 relative h-[380px]">
            <div className="absolute top-0 right-0 w-4/5 h-4/5 z-0 overflow-hidden">
              <img src={`${import.meta.env.BASE_URL}images/s4.png`} alt="Background Leaf" className="w-full h-full object-cover opacity-90" />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <SectionHeader title="CUSTOMER SUPPORT" />
            <div className="text-gray-600 text-[14px] leading-relaxed space-y-6 max-w-xl">
              <p>
                You will find our customer support second to none. Our commitment to innovation through technical engineering offers a critical component to your specification optimization. We will offer you value added partnerships at competitive pricing levels.
              </p>
              <ReturnToTop />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Fix: Adding the missing default export to satisfy App.tsx import
export default ScopeContent;
