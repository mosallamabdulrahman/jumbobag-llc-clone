
import React from 'react';
import Hero from './Hero';

const LocationsContent: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <Hero 
        title="LOCATIONS" 
        backgroundImage={`${import.meta.env.BASE_URL}images/location-bg.jpg`}
        height="h-[450px]"
      />

      {/* World Map Section */}
      <section className="py-24 bg-white">
        <div className="max-w-8xl mx-auto px-6 lg:px-24">
          <div className="flex justify-center">
            <div className="max-w-6xl w-full">
              <img 
                src={`${import.meta.env.BASE_URL}images/download.jpg`}
                alt="JumboBag Global Locations Map" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocationsContent;
