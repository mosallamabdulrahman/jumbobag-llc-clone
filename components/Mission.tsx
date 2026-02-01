
import React from 'react';

const Mission: React.FC = () => {
  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="max-w-8xl mx-auto px-6 lg:px-24">
        <div className="max-w-5xl">
          <h2 className="text-jumboBlue text-5xl lg:text-6xl font-normal uppercase mb-8 tracking-tight">
            Mission Statement
          </h2>
          <p className="text-gray-600 text-3xl lg:text-4xl font-light leading-snug mb-8">
            JumboBag LLC recognizes the link between economic growth and the efficiency and satisfaction of its customers.
          </p>
          <p className="text-gray-500 text-sm font-light leading-relaxed">
            This is maintained through the promotion of viable products manufactured to the latest technological standards and utilizing strict international guidelines. With a commitment to innovation, logistics, and communication, JumboBag LLC is your ideal partner for the twenty-first century.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
