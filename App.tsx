import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Difference from './components/Difference';
import GreenSplit from './components/GreenSplit';
import Mission from './components/Mission';
import ProductCards from './components/ProductCards';
import Footer from './components/Footer';
import AboutContent from './components/AboutContent';
import ProductsContent from './components/ProductsContent';
import SustainabilityContent from './components/SustainabilityContent';
import ScopeContent from './components/ScopeContent';
import LocationsContent from './components/LocationsContent';
import ContactContent from './components/ContactContent';

const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'about':
        return <AboutContent />;
      case 'products':
        return <ProductsContent />;
      case 'sustainability':
        return <SustainabilityContent />;
      case 'scope':
        return <ScopeContent />;
      case 'locations':
        return <LocationsContent />;
      case 'contact':
        return <ContactContent />;
      default:
        return (
          <>
            <Hero
              title="Food and Pharmaceutical Industries"
              subtitle="JumboBag LLC provides FIBC’s from only fully integrated world class facilities for Food and Pharma grade applications. Our facilities meet and exceed the requirements of AIB, BRC and ISO 22000."
              backgroundImage={`${import.meta.env.BASE_URL}images/hero-main.jpg`}
            />
            <Difference />
            <GreenSplit />
            <Mission />
            <ProductCards />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar
        isOpen={isMobileMenuOpen}
        onToggle={toggleMobileMenu}
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      <main
        key={currentPage}
        className="
          animate-page
        "
      >
        {renderContent()}
      </main>


      {/* ✅ Footer PROPS FIXED */}
      <Footer
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={toggleMobileMenu}
          ></div>

          <div className="absolute left-0 top-0 h-full w-4/5 max-w-sm bg-white shadow-xl p-8 transition-transform transform duration-300">
            <div className="flex justify-between items-center mb-12">
              <img
                src={`${import.meta.env.BASE_URL}images/logo.png`}
                alt="Logo"
                className="h-[4.5rem]"
              />
              <button onClick={toggleMobileMenu} className="text-jumboBlue">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav className="flex flex-col space-y-2">
              <button onClick={() => handleNavigate('about')} className={`text-left py-4 border-b border-gray-100 font-semibold uppercase text-sm tracking-widest ${currentPage === 'about' ? 'text-jumboGreen' : 'text-jumboBlue'}`}>About</button>
              <button onClick={() => handleNavigate('products')} className={`text-left py-4 border-b border-gray-100 font-semibold uppercase text-sm tracking-widest ${currentPage === 'products' ? 'text-jumboGreen' : 'text-jumboBlue'}`}>JumboBag Products</button>
              <button onClick={() => handleNavigate('sustainability')} className={`text-left py-4 border-b border-gray-100 font-semibold uppercase text-sm tracking-widest ${currentPage === 'sustainability' ? 'text-jumboGreen' : 'text-jumboBlue'}`}>Sustainability</button>
              <button onClick={() => handleNavigate('scope')} className={`text-left py-4 border-b border-gray-100 font-semibold uppercase text-sm tracking-widest ${currentPage === 'scope' ? 'text-jumboGreen' : 'text-jumboBlue'}`}>Scope</button>
              <button onClick={() => handleNavigate('locations')} className={`text-left py-4 border-b border-gray-100 font-semibold uppercase text-sm tracking-widest ${currentPage === 'locations' ? 'text-jumboGreen' : 'text-jumboBlue'}`}>Locations</button>
              <button onClick={() => handleNavigate('contact')} className={`text-left py-4 font-bold uppercase text-sm tracking-widest text-jumboGreen`}>Contact Us</button>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
