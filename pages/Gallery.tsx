import React, { useState } from 'react';
import { artworks } from '../data';
import { Artwork } from '../types';
import { X, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface GalleryProps {
  onAddToCart: (artwork: Artwork) => void;
}

const Gallery: React.FC<GalleryProps> = ({ onAddToCart }) => {
  const [filter, setFilter] = useState<string>('All');
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  const categories = ['All', 'Wildlife', 'Abstract', 'Botanical', 'Portrait'];

  const filteredArtworks = filter === 'All' 
    ? artworks 
    : artworks.filter(art => art.category === filter);

  return (
    <div className="py-12 md:py-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl text-art-900 mb-6">Gallery</h1>
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-sm uppercase tracking-widest px-4 py-2 rounded-full transition-all duration-300 ${
                  filter === cat 
                    ? 'bg-art-900 text-white' 
                    : 'bg-art-50 text-art-600 hover:bg-art-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry-style Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredArtworks.map((art) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={art.id}
                className="group cursor-pointer"
                onClick={() => setSelectedArtwork(art)}
              >
                <div className="relative overflow-hidden bg-art-100 rounded-sm shadow-sm">
                  <img 
                    src={art.imageUrl} 
                    alt={art.title} 
                    className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="font-serif text-lg text-art-900 font-medium">{art.title}</h3>
                  <p className="text-xs text-art-500 uppercase tracking-wide mt-1">{art.category}</p>
                  {art.available && (
                    <span className="inline-block mt-2 text-green-600 text-xs font-medium bg-green-50 px-3 py-1 rounded-full">
                      Available
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredArtworks.length === 0 && (
          <div className="text-center py-24 text-art-400">
            <p>No artworks found in this category.</p>
          </div>
        )}
      </div>

      {/* Artwork Modal (Lightbox) */}
      <AnimatePresence>
        {selectedArtwork && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white/95 backdrop-blur-sm"
          >
            <div className="relative w-full max-w-6xl max-h-[90vh] flex flex-col md:flex-row bg-white shadow-2xl overflow-hidden rounded-lg">
              <button 
                onClick={() => setSelectedArtwork(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/50 rounded-full hover:bg-white text-art-900 transition-colors"
              >
                <X size={24} />
              </button>

              <div className="w-full md:w-2/3 bg-art-100 flex items-center justify-center p-4">
                <img 
                  src={selectedArtwork.imageUrl} 
                  alt={selectedArtwork.title} 
                  className="max-h-[80vh] w-auto object-contain shadow-lg"
                />
              </div>

              <div className="w-full md:w-1/3 p-8 md:p-12 overflow-y-auto bg-white flex flex-col justify-center">
                <p className="text-sm text-art-500 uppercase tracking-widest mb-2">
                  {selectedArtwork.category} • {selectedArtwork.year}
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-art-900 mb-6 leading-tight">
                  {selectedArtwork.title}
                </h2>
                <div className="w-12 h-1 bg-art-200 mb-6"></div>
                <p className="text-art-700 leading-relaxed mb-6">
                  {selectedArtwork.description}
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm text-art-600 mb-8">
                  <div>
                    <span className="block text-art-400 text-xs uppercase">Dimensions</span>
                    {selectedArtwork.dimensions}
                  </div>
                  <div>
                    <span className="block text-art-400 text-xs uppercase">Medium</span>
                    {selectedArtwork.category}
                  </div>
                </div>

                <div className="mt-auto">
                  {selectedArtwork.available ? (
                    <>
                      <div className="flex items-center justify-center mb-6">
                        <span className="text-green-600 text-sm font-medium bg-green-50 px-3 py-1 rounded-full">Available</span>
                      </div>
                      <button 
                        onClick={() => {
                          onAddToCart(selectedArtwork);
                          setSelectedArtwork(null);
                        }}
                        className="w-full bg-art-900 text-white py-4 px-6 rounded-sm uppercase tracking-widest font-bold hover:bg-art-800 transition-colors flex items-center justify-center gap-2"
                      >
                        <ShoppingBag size={18} /> Add to Cart
                      </button>
                    </>
                  ) : (
                    <div className="text-center py-4">
                      <p className="text-art-500 text-sm">This artwork is not currently available for purchase.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;