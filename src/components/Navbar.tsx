
import React from 'react';

interface NavbarProps {
  isOpen: boolean;
  onToggle: () => void;
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isOpen, onToggle, currentPage, onNavigate }) => {
  return (
    <header className="bg-white">
      <div className="max-w-8xl mx-auto px-6 py-4 lg:py-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center cursor-pointer" onClick={() => onNavigate('home')}>
        <img
          src={`${import.meta.env.BASE_URL}images/logo.png`}
          alt="JumboBag LLC Logo"
          className="h-[5rem] w-[6rem]"
        />

        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-10">
          <button 
            onClick={() => onNavigate('about')}
            className={`text-[.875rem] font-semibold uppercase tracking-widest relative pb-1 transition-colors ${currentPage === 'about' ? 'text-jumboBlue after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-jumboGreen' : 'text-gray-600 hover:text-jumboGreen'}`}
          >
            About
          </button>
          <button 
            onClick={() => onNavigate('products')}
            className={`text-[.875rem] font-semibold uppercase tracking-widest relative pb-1 transition-colors ${currentPage === 'products' ? 'text-jumboBlue after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-jumboGreen' : 'text-gray-600 hover:text-jumboGreen'}`}
          >
            Jumbobag Products
          </button>
          <button 
            onClick={() => onNavigate('sustainability')}
            className={`text-[.875rem] font-semibold uppercase tracking-widest relative pb-1 transition-colors ${currentPage === 'sustainability' ? 'text-jumboBlue after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-jumboGreen' : 'text-gray-600 hover:text-jumboGreen'}`}
          >
            Sustainability
          </button>
          <button 
            onClick={() => onNavigate('scope')}
            className={`text-[.875rem] font-semibold uppercase tracking-widest relative pb-1 transition-colors ${currentPage === 'scope' ? 'text-jumboBlue after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-jumboGreen' : 'text-gray-600 hover:text-jumboGreen'}`}
          >
            Scope
          </button>
          <button 
            onClick={() => onNavigate('locations')}
            className={`text-[.875rem] font-semibold uppercase tracking-widest relative pb-1 transition-colors ${currentPage === 'locations' ? 'text-jumboBlue after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-jumboGreen' : 'text-gray-600 hover:text-jumboGreen'}`}
          >
            Locations
          </button>
          <button 
            onClick={() => onNavigate('contact')}
            className={`bg-jumboGreen text-white px-6 py-3 rounded-sm text-[.875rem] font-bold uppercase tracking-widest hover:opacity-90 transition-all ${currentPage === 'contact' ? 'ring-2 ring-jumboBlue ring-offset-2' : ''}`}
          >
            Contact Us
          </button>
        </nav>

        {/* Hamburger Menu */}
        <button 
          onClick={onToggle}
          className="lg:hidden text-jumboDarkBlue focus:outline-none"
        >
          <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      {/* Green Border UNDER menu */}
      <div className="h-1.5 bg-jumboGreen w-full"></div>
    </header>
  );
};

export default Navbar;
