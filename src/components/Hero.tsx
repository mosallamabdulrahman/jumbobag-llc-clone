
import React from 'react';

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  height?: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, backgroundImage, height = "h-[600px]" }) => {
  return (
    <section className={`relative ${height} flex items-center`}>
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 transition-opacity duration-700"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-45"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 lg:px-24 max-w-8xl mx-auto">
        <div className="max-w-4xl">
          <h1 className="text-white text-5xl lg:text-7xl font-light mb-6 uppercase tracking-tight leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-white text-lg lg:text-xl font-light max-w-3xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
