import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { artworks } from '../data';
import { getImageUrl } from '../utils/imageUrl';

const Home: React.FC = () => {
  // Select specific impactful artworks for the slider
  const heroSlides = artworks.filter(art => ['1', '5', '6', '8'].includes(art.id));
  const previewHighlights = artworks.filter((art) => ['7', '3', '9'].includes(art.id));
  
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Slider Section */}
      <section className="relative h-[80vh] md:h-screen w-full bg-art-900 overflow-hidden">
        <AnimatePresence>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img 
                src={heroSlides[currentSlide].imageUrl} 
                alt={heroSlides[currentSlide].title} 
                className="w-full h-full object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-art-900 via-art-900/40 to-transparent"></div>
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
            
            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4 max-w-5xl mx-auto">
              <motion.p 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-art-200 text-lg md:text-xl tracking-[0.3em] uppercase mb-6 font-light"
              >
                Angelique Mohs
              </motion.p>
              
              <motion.h1 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="font-serif text-5xl md:text-7xl lg:text-8xl text-art-50 mb-10 drop-shadow-2xl leading-tight"
              >
                {heroSlides[currentSlide].title}
              </motion.h1>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.8 }}
              >
                <Link 
                  to="/gallery" 
                  className="group inline-flex items-center px-10 py-4 border border-art-100 text-art-100 uppercase tracking-widest text-sm font-bold hover:bg-art-100 hover:text-art-900 transition-all duration-300"
                >
                  View Collection
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 text-white/40 hover:text-white border border-transparent hover:border-white/20 rounded-full transition-all duration-300 backdrop-blur-sm hover:bg-white/10"
          aria-label="Previous slide"
        >
          <ChevronLeft size={40} strokeWidth={1} />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 text-white/40 hover:text-white border border-transparent hover:border-white/20 rounded-full transition-all duration-300 backdrop-blur-sm hover:bg-white/10"
          aria-label="Next slide"
        >
          <ChevronRight size={40} strokeWidth={1} />
        </button>

        {/* Dots Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex space-x-4">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1 transition-all duration-500 rounded-full ${
                index === currentSlide ? 'w-16 bg-white' : 'w-8 bg-white/30 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-art-900 mb-4">Selected Works</h2>
            <div className="w-24 h-1 bg-art-300 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Preview Cards */}
            {previewHighlights.map((item) => (
              <div key={item.id} className="group relative overflow-hidden cursor-pointer shadow-sm">
                <Link to="/gallery" className="block aspect-[3/4] overflow-hidden">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-full object-cover transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-art-900/10 group-hover:bg-art-900/40 transition-colors duration-500 flex items-center justify-center">
                    <div className="border border-white/0 group-hover:border-white/80 p-6 transition-all duration-500">
                      <span className="text-transparent group-hover:text-white font-serif text-2xl font-bold transition-colors duration-300 transform translate-y-4 group-hover:translate-y-0 block">
                        {item.title}
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link to="/gallery" className="text-art-900 font-bold uppercase text-xs tracking-[0.2em] border-b border-art-900 pb-2 hover:text-art-600 hover:border-art-600 transition-colors">
              Explore Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Brief Bio Tease */}
      <section className="py-24 bg-art-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-art-200 -z-10 rounded-full opacity-50"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-art-300 -z-10 rounded-full opacity-50"></div>
            <img 
              src={getImageUrl('/images/angelique-portrait.jpg')} 
              alt="Angelique Mohs in the studio" 
              className="rounded-sm shadow-xl w-full z-10 relative"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="font-serif text-4xl text-art-900 mb-8">The Artist</h2>
            <p className="text-art-700 mb-6 leading-relaxed text-lg font-light">
              My work is an exploration of the colors that hide in the shadows and the light that dances on the surface of the mundane. Whether it's the intense gaze of a portrait subject or the tranquil arrangement of pebbles in a stream, I seek to capture the essence of the moment.
            </p>
            <p className="text-art-700 mb-10 leading-relaxed text-lg font-light">
              Based in California, I work primarily in oils and acrylics, constantly pushing the boundaries of realism and expression.
            </p>
            <Link 
              to="/bio" 
              className="inline-block bg-art-900 text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-art-800 transition-colors shadow-lg hover:shadow-xl"
            >
              Read Biography
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;