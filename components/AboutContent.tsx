import React from 'react';

const AboutContent: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[440px] flex items-center justify-start overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={`${import.meta.env.BASE_URL}images/about-bg.jpg`}
            alt="Industrial Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/45"></div>
        </div>

        <div className="relative z-10 w-full max-w-8xl mx-auto px-6 lg:px-24">
          <h1 className="text-white text-7xl lg:text-8xl font-light uppercase tracking-tighter">
            About
          </h1>
        </div>
      </section>

      {/* The Jumbo Difference Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-8xl mx-auto px-6 lg:px-24">
          <h2 className="text-jumboBlue text-4xl lg:text-5xl font-normal uppercase mb-10 tracking-tight">
            The Jumbo Difference
          </h2>

          <div className="space-y-8 max-w-7xl">
            <p className="text-gray-600 text-2xl lg:text-3xl font-light leading-relaxed">
              At JumboBag LLC you will be assured of timely supply of the highest quality
              packaging deserving of your product and business.
            </p>

            <p className="text-gray-500 text-base lg:text-lg font-light leading-relaxed">
              You will find our customer support second to none. Our commitment to
              innovation through technical engineering offers a critical component to
              your specification optimization. We will offer you value added
              partnerships at competitive pricing levels.
            </p>
          </div>
        </div>
      </section>

      {/* About JumboBag LLC Split Section */}
      <section className="pb-24 lg:pb-32 bg-white">
        <div className="max-w-8xl mx-auto px-6 lg:px-24 flex flex-col lg:flex-row items-start gap-16 lg:gap-24">
          {/* Left Image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-jumboGreen opacity-10 -z-10 hidden lg:block"></div>

            <img
              src={`${import.meta.env.BASE_URL}images/a1.png`}
              alt="JumboBag Production"
              className="w-full h-auto shadow-2xl rounded-sm"
            />
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-jumboBlue text-3xl font-semibold uppercase mb-8 tracking-tight">
              About JumboBag LLC
            </h2>

            <div className="text-gray-600 text-base font-light leading-relaxed space-y-6">
              <p>
                Since 1992, JumboBag LLC is engaged in the production and marketing of
                Flexible Intermediate Bulk Containers. The company operates in the US,
                Europe and, through business partnerships, in Asia. JBC is strategically
                headquartered in Houston, Texas with warehousing locations throughout
                the continental United States.
              </p>

              <p>
                Capitalizing on our technical background, JumboBag LLC provides viable
                FIBC packaging options supported by technical expertise and reliable
                supply streams to the North American Markets.
              </p>

              <p>
                JumboBag has long-standing partnerships with some of the premier
                manufacturers in the world. Our facilities offer products that conform
                to today’s stringent regulations and requirements of the
                food/pharmaceutical and chemicals. JumboBag also provides a North
                American production facility, which offers our customers the reassurance
                of guaranteed supply in the event of unpredictable usage spikes or
                unexpected disruptions of the supply chain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="relative min-h-[450px] flex items-center justify-center py-20">
        <div className="absolute inset-0 z-0">
          <img
            src={`${import.meta.env.BASE_URL}images/about-bg.jpg`}
            alt="Warehouse Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/85"></div>
        </div>

        <div className="relative z-10 max-w-5xl px-6 text-center">
          <p className="text-gray-700 text-3xl lg:text-4xl font-light leading-tight italic">
            "JumboBag will provide the highest level of customer service, not only with
            timely information regarding the status of orders, but with prompt responses
            to technical or regulatory inquiries."
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutContent;
