
import React from 'react';

const GreenSplit: React.FC = () => {
  return (
    <section className="bg-jumboGreen py-24">
      <div className="max-w-8xl mx-auto px-6 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 relative">
          
          {/* Vertical Divider (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white opacity-40"></div>

          {/* Sustainability */}
          <div className="text-center md:pr-12 mb-16 md:mb-0">
            <h3 className="text-white text-3xl font-normal uppercase tracking-widest mb-6">
              Sustainability
            </h3>
            <p className="text-white text-lg font-light leading-relaxed max-w-md mx-auto">
              JumboBag recognizes the need for sustainability as a means of continued positive business operation without compromising the ability of future development
            </p>
          </div>

          {/* Scope */}
          <div className="text-center md:pl-12">
            <h3 className="text-white text-3xl font-normal uppercase tracking-widest mb-6">
              Scope
            </h3>
            <p className="text-white text-lg font-light leading-relaxed max-w-md mx-auto">
              The selection of our global sourcing partners is based on exacting criteria which allows our customers to take advantage of the latest technologies in FIBC manufacture
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GreenSplit;
