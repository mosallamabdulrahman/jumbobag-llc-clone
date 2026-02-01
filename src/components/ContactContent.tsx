
import React from 'react';
import Hero from './Hero';

const ContactContent: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <Hero 
        title="CONTACT US" 
        backgroundImage={`${import.meta.env.BASE_URL}images/contact-bg.png`}
        height="h-[450px]"
      />

      {/* Map Section */}
      <section className="w-full">
        <div className="max-w-8xl mx-auto px-6 lg:px-24 py-16">
          <div className="w-full h-[400px] border border-gray-200 rounded-sm overflow-hidden shadow-sm">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3460.916897263595!2d-95.53986952445413!3d29.837837075283474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c59800000001%3A0x6a6d6396f4a7c64a!2s9835%20Genard%20Rd%20a3%2C%20Houston%2C%20TX%2077041%2C%20USA!5e0!3m2!1sen!2seg!4v1711200000000!5m2!1sen!2seg" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="pb-24 bg-white">
        <div className="max-w-8xl mx-auto px-6 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            {/* Address */}
            <div>
              <h3 className="text-gray-800 text-lg font-bold mb-4">JumboBag LLC</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                9835 Genard Rd. | Suite A3<br />
                Houston, TX 77041<br />
                (713) 460 8545
              </p>
            </div>
            {/* Contact Jason */}
            <div>
              <h3 className="text-gray-800 text-lg font-bold mb-4">Contact Jason</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                Jason Hawkins<br />
                Mobile: (713) 248-4543
              </p>
            </div>
            {/* Contact Jim */}
            <div>
              <h3 className="text-gray-800 text-lg font-bold mb-4">Contact Jim</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                James (Jim) White<br />
                Mobile: (832) 622-0366
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form 
            action="https://formspree.io/f/mosallamabdulrahman@gmail.com" 
            method="POST"
            className="max-w-4xl"
          >
            <div className="space-y-8">
              {/* Name Fields */}
              <div>
                <label className="block text-gray-800 text-[15px] font-bold mb-2">Name* <span className="text-red-500 font-normal italic">(Required)</span></label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input type="text" name="first_name" required className="w-full border border-gray-300 p-3 rounded-sm focus:outline-none focus:border-jumboGreen" />
                    <span className="text-gray-500 text-xs mt-1 block">First</span>
                  </div>
                  <div>
                    <input type="text" name="last_name" required className="w-full border border-gray-300 p-3 rounded-sm focus:outline-none focus:border-jumboGreen" />
                    <span className="text-gray-500 text-xs mt-1 block">Last</span>
                  </div>
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-gray-800 text-[15px] font-bold mb-2">Email* <span className="text-red-500 font-normal italic">(Required)</span></label>
                  <input type="email" name="email" required className="w-full border border-gray-300 p-3 rounded-sm focus:outline-none focus:border-jumboGreen" />
                </div>
                <div>
                  <label className="block text-gray-800 text-[15px] font-bold mb-2">Phone</label>
                  <input type="tel" name="phone" className="w-full border border-gray-300 p-3 rounded-sm focus:outline-none focus:border-jumboGreen" />
                </div>
              </div>

              {/* Address Fields */}
              <div>
                <label className="block text-gray-800 text-[15px] font-bold mb-2">Address* <span className="text-red-500 font-normal italic">(Required)</span></label>
                <div className="space-y-4">
                  <div>
                    <input type="text" name="street_address" required className="w-full border border-gray-300 p-3 rounded-sm focus:outline-none focus:border-jumboGreen" />
                    <span className="text-gray-500 text-xs mt-1 block">Street Address</span>
                  </div>
                  <div>
                    <input type="text" name="address_line_2" className="w-full border border-gray-300 p-3 rounded-sm focus:outline-none focus:border-jumboGreen" />
                    <span className="text-gray-500 text-xs mt-1 block">Address Line 2</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <input type="text" name="city" required className="w-full border border-gray-300 p-3 rounded-sm focus:outline-none focus:border-jumboGreen" />
                      <span className="text-gray-500 text-xs mt-1 block">City</span>
                    </div>
                    <div>
                      <input type="text" name="state" required className="w-full border border-gray-300 p-3 rounded-sm focus:outline-none focus:border-jumboGreen" />
                      <span className="text-gray-500 text-xs mt-1 block">State / Province / Region</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <input type="text" name="zip" required className="w-full border border-gray-300 p-3 rounded-sm focus:outline-none focus:border-jumboGreen" />
                      <span className="text-gray-500 text-xs mt-1 block">ZIP / Postal Code</span>
                    </div>
                    <div>
                      <input type="text" name="country" required className="w-full border border-gray-300 p-3 rounded-sm focus:outline-none focus:border-jumboGreen" />
                      <span className="text-gray-500 text-xs mt-1 block">Country</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-800 text-[15px] font-bold mb-2">Message* <span className="text-red-500 font-normal italic">(Required)</span></label>
                <textarea name="message" required rows={8} placeholder="Enter your message" className="w-full border border-gray-300 p-3 rounded-sm focus:outline-none focus:border-jumboGreen"></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="bg-jumboGreen text-white px-12 py-3 rounded-sm text-sm font-bold uppercase tracking-widest hover:opacity-90 transition-all shadow-md"
              >
                SEND
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactContent;
