import React from 'react';

interface FooterProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ currentPage, onNavigate }) => {
  const linkClass = (page: string) =>
    `uppercase text-[11px] font-bold tracking-[0.2em] transition-colors ${
      currentPage === page
        ? 'text-jumboGreen'
        : 'text-gray-300 hover:text-jumboGreen'
    }`;

  return (
    <footer className="bg-jumboDarkBlue py-16 text-white">
      <div className="max-w-8xl mx-auto px-6 lg:px-24">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-6 mb-12">

          {/* Footer Logo */}
          <div className="lg:w-1/4">
            <img
              src={`${import.meta.env.BASE_URL}images/logo.png`}
              alt="JumboBag LLC Logo"
              className="h-[5rem] w-[6rem]"
            />
          </div>

          {/* Footer Navigation */}
          <nav className="flex flex-wrap gap-x-8 gap-y-4 lg:w-1/2 justify-center">
            <button onClick={() => onNavigate('about')} className={linkClass('about')}>
              About
            </button>

            <button onClick={() => onNavigate('products')} className={linkClass('products')}>
              Jumbobag Products
            </button>

            <button onClick={() => onNavigate('sustainability')} className={linkClass('sustainability')}>
              Sustainability
            </button>

            <button onClick={() => onNavigate('scope')} className={linkClass('scope')}>
              Scope
            </button>

            <button onClick={() => onNavigate('locations')} className={linkClass('locations')}>
              Locations
            </button>
          </nav>

          {/* Address */}
          <div className="text-right lg:w-1/4 flex flex-col items-end">
            <p className="text-sm font-bold mb-1">JumboBag LLC</p>
            <p className="text-xs font-bold leading-relaxed mb-1 text-gray-300">
              9835 Genard Rd. | Suite A3
            </p>
            <p className="text-xs font-bold leading-relaxed mb-3 text-gray-300">
              Houston, TX 77041
            </p>

            <button
              onClick={() => onNavigate('supplier-code')}
              className="text-[11px] font-bold tracking-wider text-gray-300 hover:text-white border-b border-gray-400 pb-0.5"
            >
              Supplier Code of Conduct
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-[10px] uppercase font-bold tracking-widest text-gray-400">
          <p>2026 © Five Star Holding LLC</p>
          <p className="mt-4 md:mt-0">Designed and developed by Wildfire</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
