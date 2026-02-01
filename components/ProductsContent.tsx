
import React, { useState } from 'react';
import Hero from './Hero';

type BagStyle = 'U-Panel' | 'Circular' | '4 Panel' | 'Baffle';
type TabType = 'Top Options' | 'Bottom Options' | 'Lifting Options';

const ProductsContent: React.FC = () => {
  const [selectedStyle, setSelectedStyle] = useState<BagStyle>('U-Panel');
  const [selectedTab, setSelectedTab] = useState<TabType>('Lifting Options');
  const [selectedOption, setSelectedOption] = useState<string>('Lift Top');

  const bagStyles: BagStyle[] = ['U-Panel', 'Circular', '4 Panel', 'Baffle'];
  const tabs: TabType[] = ['Top Options', 'Bottom Options', 'Lifting Options'];
  
  const optionsMap: Record<TabType, string[]> = {
    'Top Options': ['Duffle Top', 'Spout Top', 'Open Top'],
    'Bottom Options': ['Flat Bottom', 'Spout Bottom', 'Diaper Bottom'],
    'Lifting Options': ['Lift Top', 'Stevedores', 'Lift Sleeve'],
  };

  // مصفوفة تعيين الصور بناءً على الخيار المحدد (الأسماء مطابقة تماماً للصورة المرفقة)
  const imageMapping: Record<string, string> = {
    'Lift Top': 'jumbo-bags.png',
    'Stevedores': 'products-1.png',
    'Lift Sleeve': 'products-1.png',
    'Duffle Top': 'prodcuts-3.png',
    'Spout Top': 'prodcuts-4.png',
    'Open Top': 'prodcuts-5.png',
    'Flat Bottom': 'prodcuts-6.png',
    'Spout Bottom': 'prodcuts-7.png',
    'Diaper Bottom': 'prodcuts-3.png', // افتراضي لهذا الخيار
  };

  const getImagePath = () => {
    const fileName = imageMapping[selectedOption] || 'jumbo-bags.png';
      return `${import.meta.env.BASE_URL}images/${fileName}`;
  };

  const tableData = [
    { cap: "20", c1: "35\" X 35\" X 27\"", c2: "-", c3: "-" },
    { cap: "25", c1: "35\" X 35\" X 33\"", c2: "-", c3: "-" },
    { cap: "30", c1: "35\" X 35\" X 38\"", c2: "-", c3: "-" },
    { cap: "35", c1: "35\" X 35\" X 44\"", c2: "34\" X 41\" X 38\"", c3: "-" },
    { cap: "40", c1: "35\" X 35\" X 49\"", c2: "34\" X 41\" X 42\"", c3: "-" },
    { cap: "45", c1: "35\" X 35\" X 54\"", c2: "34\" X 41\" X 47\"", c3: "-" },
    { cap: "50", c1: "35\" X 35\" X 59\"", c2: "34\" X 41\" X 51\"", c3: "-" },
    { cap: "55", c1: "35\" X 35\" X 65\"", c2: "34\" X 41\" X 56\"", c3: "41\" X 41\" X 48\"" },
    { cap: "60", c1: "35\" X 35\" X 71\"", c2: "34\" X 41\" X 61\"", c3: "41\" X 41\" X 52\"" },
    { cap: "65", c1: "35\" X 35\" X 76\"", c2: "34\" X 41\" X 65\"", c3: "41\" X 41\" X 56\"" },
    { cap: "70", c1: "-", c2: "34\" X 41\" X 70\"", c3: "41\" X 41\" X 60\"" },
    { cap: "75", c1: "-", c2: "34\" X 41\" X 76\"", c3: "41\" X 41\" X 65\"" },
    { cap: "80", c1: "-", c2: "-", c3: "41\" X 41\" X 69\"" },
    { cap: "85", c1: "-", c2: "-", c3: "41\" X 41\" X 73\"" },
    { cap: "90", c1: "-", c2: "-", c3: "41\" X 41\" X 78\"" },
    { cap: "95", c1: "-", c2: "-", c3: "41\" X 41\" X 82\"" },
    { cap: "100", c1: "-", c2: "-", c3: "41\" X 41\" X 87\"" },
  ];

  return (
    <div className="bg-white">
      <Hero 
        title="JUMBOBAG PRODUCTS" 
        backgroundImage={`${import.meta.env.BASE_URL}images/products-bg.jpg`} 
        height="h-[450px]"
      />

      {/* Intro Statement Section */}
      <section className="py-20 bg-white">
        <div className="max-w-8xl mx-auto px-6 lg:px-24">
          <div className="max-w-6xl">
            <h2 className="text-gray-500 text-3xl lg:text-[32px] font-light leading-tight mb-4">
              JumboBag LLC has earned a reputation for providing services and products of the highest quality standards and superior satisfaction ratings.
            </h2>
            <p className="text-gray-600 text-[14px] font-normal leading-relaxed">
              It maintains a commitment to fulfill customers’ needs and expectations in the critical areas of quality assurance, food safety, traceability, environmental responsibility and social accountability.
            </p>
          </div>
        </div>
      </section>

      {/* About Section - Split Layout */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-8xl mx-auto px-6 lg:px-24 flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 flex justify-center">
            <img 
              src={`${import.meta.env.BASE_URL}images/re.png`}
              alt="Jumbo Bag Product" 
              className="max-w-[15rem] w-full h-auto"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h3 className="text-jumboBlue text-[24px] font-bold uppercase mb-6 tracking-tight">ABOUT JUMBOBAG LLC</h3>
            <div className="text-gray-600 space-y-6 text-[14px] leading-relaxed">
              <p>
                At JumboBag, we supply the highest quality flexible intermediate bulk containers, which are always custom made to individual specification requirements. We offer the complete range of FIBC’s. Our R&D teams are working to bring you technological innovations to optimize supply chains.
              </p>
              <p>
                JumboBag FIBC’s are produced in facilities operating under preferred third party procedures. All of our containers are manufactured under FIBC safety guidelines and our performance standards are continually monitored in our in-house testing facilities to ensure that every product we ship is worthy of the JumboBag name.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Audit Section */}
      <section className="py-12">
        <div className="max-w-8xl mx-auto px-6 lg:px-24 text-center">
          <p className="text-gray-700 text-[18px] font-light">
            We are continuously working to update third party audit requirements and currently offer certification achievements with the following accredited agencies:
          </p>
        </div>
      </section>

      {/* Interactive Selector - Pixel Perfect to Reference */}
      <section className="pb-20 bg-white">
        <div className="max-w-8xl mx-auto px-6 lg:px-24">
          <div className="border border-gray-200 rounded-sm shadow-sm overflow-hidden">
             {/* Header Label */}
             <div className="bg-[#f5f5f5] p-5 border-b border-gray-200">
                <span className="text-gray-700 text-lg">Select a Bag Style <span className="text-[#337ab7]">{selectedStyle}</span></span>
             </div>
             
             <div className="p-8">
                {/* Style Buttons */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                  {bagStyles.map((style) => (
                    <button 
                      key={style}
                      onClick={() => setSelectedStyle(style)}
                      className={`py-2.5 rounded text-white text-[14px] font-normal shadow-sm transition-all ${selectedStyle === style ? 'bg-[#337ab7]' : 'bg-[#4d90ca] hover:bg-[#337ab7]'}`}
                    >
                      {style}
                    </button>
                  ))}
                </div>

                {/* Tab Navigation */}
                <div className="relative border-b border-gray-200 mb-8 flex items-end">
                  {tabs.map((tab) => (
                    <button 
                      key={tab}
                      onClick={() => setSelectedTab(tab)}
                      className={`px-8 py-3 text-[13px] font-normal transition-all relative z-10 
                        ${selectedTab === tab 
                          ? 'text-gray-700 bg-white border-t border-l border-r border-gray-200 rounded-t-md -mb-[1px]' 
                          : 'text-[#337ab7] hover:text-[#23527c]'
                        }`}
                    >
                      {tab}
                    </button>
                  ))}
                  <div className="ml-auto flex flex-col gap-0.5 pb-2 pr-2 text-gray-400">
                    <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"/></svg>
                    <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 24 24"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/></svg>
                  </div>
                </div>

                {/* Sub-Options Buttons */}
                <div className="flex flex-wrap gap-4 mb-4">
                  {optionsMap[selectedTab].map((option) => (
                    <button 
                      key={option}
                      onClick={() => {
                        setSelectedOption(option);
                      }}
                      className={`px-5 py-2 rounded text-white text-[14px] transition-all ${selectedOption === option ? 'bg-[#337ab7]' : 'bg-[#4d90ca] hover:bg-[#337ab7]'}`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
             </div>
          </div>

          {/* Dynamic Product Image Display */}
          <div className="flex justify-center mt-12 mb-20">
            <div className="max-w-lg w-full">
              <img 
                src={getImagePath()}
                alt={`${selectedStyle} - ${selectedOption}`}
                className="w-full h-auto opacity-90 transition-opacity duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Table Section */}
      <section className="pb-24">
        <div className="max-w-8xl mx-auto px-6 lg:px-24">
          <h4 className="text-gray-600 text-[20px] font-light mb-8">All sizes are in inches</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-center text-[13px] border-collapse">
              <thead>
                <tr className="bg-[#d2d6de] text-gray-800 font-bold">
                  <th className="py-3 px-4 border-r border-white w-1/4">Cubic Foot Capacity</th>
                  <th className="py-3 px-4 border-r border-white italic w-1/4">44" X 44" filled</th>
                  <th className="py-3 px-4 border-r border-white italic w-1/4">48" X 48" filled</th>
                  <th className="py-3 px-4 italic w-1/4">52" X 52" filled</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-[#f9f9f9]'}>
                    <td className="py-2 px-4 border-r border-white text-gray-600">{row.cap}</td>
                    <td className="py-2 px-4 border-r border-white text-gray-600">{row.c1}</td>
                    <td className="py-2 px-4 border-r border-white text-gray-600">{row.c2}</td>
                    <td className="py-2 px-4 text-gray-600">{row.c3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsContent;
