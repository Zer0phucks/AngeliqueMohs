import React from 'react';
import { Instagram, Facebook, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-art-900 text-art-100 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Angelique Mohs</h3>
            <p className="text-art-300 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Capturing the beauty of the ordinary through vibrant colors and intricate details. Oil, acrylic, and mixed media artist based in California.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-serif text-lg font-bold mb-4">Connect</h4>
            <div className="flex space-x-6">
              <a href="#" className="text-art-300 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-art-300 hover:text-white transition-colors">
                <Facebook size={24} />
              </a>
              <a href="mailto:contact@angeliquemohs.com" className="text-art-300 hover:text-white transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-serif text-lg font-bold mb-4">Newsletter</h4>
            <p className="text-art-300 text-sm mb-4">Subscribe for updates on new collections.</p>
            <form className="flex w-full max-w-xs" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex-1 px-4 py-2 bg-art-800 border border-art-700 rounded-l-md focus:outline-none focus:ring-1 focus:ring-art-300 text-sm"
              />
              <button className="bg-art-100 text-art-900 px-4 py-2 rounded-r-md text-sm font-bold hover:bg-white transition-colors">
                Join
              </button>
            </form>
          </div>

        </div>
        
        <div className="border-t border-art-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-art-400">
          <p>&copy; {new Date().getFullYear()} Angelique Mohs. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed for Art.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;