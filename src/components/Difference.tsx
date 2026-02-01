
import React from 'react';

const Difference: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-8xl mx-auto px-6 lg:px-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-jumboBlue text-[28px] lg:text-[32px] font-normal mb-8 leading-tight">
              The Jumbo Difference
            </h2>
            <p className="text-gray-700 text-lg lg:text-xl font-light leading-relaxed max-w-xl">
              At JumboBag LLC you will be assured of timely supply of the highest quality packaging deserving of your product and business.
            </p>
          </div>

          {/* Product Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="max-w-[18rem] w-full">
              <img 
                src={`${import.meta.env.BASE_URL}images/jumbo-bags.png`}
                alt="Jumbo Bags" 
                className="w-full h-auto object-contain transform lg:scale-110 origin-center lg:origin-right"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Difference;
