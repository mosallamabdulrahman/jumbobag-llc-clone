
import React from 'react';

const ProductCards: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-8xl mx-auto px-6 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Card 1: Products */}
          <div className="flex flex-col">
            <div className="mb-8 overflow-hidden">
              <img 
            src={`${import.meta.env.BASE_URL}images/h1.jpg`}
                alt="JumboBag Products" 
                className="w-full h-80 object-cover"
              />
            </div>
            <h3 className="text-jumboBlue text-2xl font-semibold mb-4">
              JumboBag Products
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              JumboBag LLC has earned a reputation for providing services and products of the highest quality standards and superior satisfaction ratings. It maintains a commitment to fulfill customers’ needs and expectations in the critical areas of quality assurance, food safety, traceability, environmental responsibility and social accountability.
            </p>
            <button className="bg-jumboGreen text-white self-start px-6 py-2.5 rounded-sm text-sm font-semibold uppercase tracking-wider hover:bg-opacity-90">
              Learn More
            </button>
          </div>

          {/* Card 2: About */}
          <div className="flex flex-col">
            <div className="mb-8 overflow-hidden">
              <img 
            src={`${import.meta.env.BASE_URL}images/h2.jpg`}
                alt="About JumboBag" 
                className="w-full h-80 object-cover"
              />
            </div>
            <h3 className="text-jumboBlue text-2xl font-semibold mb-4">
              About JumboBag LLC
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              You will find our customer support second to none. Our commitment to innovation through technical engineering offers a critical component to your specification optimization. We will offer you value added partnerships at competitive pricing levels.
            </p>
            <button className="bg-jumboGreen text-white self-start px-6 py-2.5 rounded-sm text-sm font-semibold uppercase tracking-wider hover:bg-opacity-90">
              Learn More
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductCards;
