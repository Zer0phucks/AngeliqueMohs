import React, { useState, useEffect } from 'react';
import { blogPosts, upcomingEvents } from '../data';
import EventsCalendar from '../components/EventsCalendar';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const News: React.FC = () => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  return (
    <div className="bg-white min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-16">
          <h1 className="font-serif text-4xl md:text-5xl text-art-900">Studio News</h1>
          
          {/* Mobile Calendar Toggle */}
          <button
            onClick={() => setIsCalendarOpen(!isCalendarOpen)}
            className="md:hidden p-2 hover:bg-art-50 rounded transition-colors"
            aria-label="Toggle events calendar"
          >
            {isCalendarOpen ? <X size={24} className="text-art-900" /> : <Menu size={24} className="text-art-900" />}
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content - Blog Posts */}
          <div className="flex-1 lg:max-w-3xl">
            <div className="space-y-16">
              {blogPosts.map((post) => (
                <article key={post.id} className="flex flex-col border-b border-art-100 pb-16 last:border-0">
                  <div className="mb-6 overflow-hidden rounded-sm">
                    <img 
                      src={post.imageUrl} 
                      alt={post.title} 
                      className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold tracking-widest text-art-400 uppercase mb-2">{post.date}</span>
                    <h2 className="font-serif text-3xl text-art-900 mb-4 hover:text-art-600 transition-colors cursor-pointer">
                      {post.title}
                    </h2>
                    <p className="text-art-600 mb-4 italic text-lg">{post.summary}</p>
                    <p className="text-art-700 leading-relaxed">{post.content}</p>
                    <button className="mt-6 text-art-900 font-bold uppercase text-xs tracking-widest self-start border-b border-art-900 pb-1 hover:text-art-600 hover:border-art-600 transition-colors">
                      Read More
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Side Menu - Events Calendar */}
          <aside className="lg:w-80 lg:sticky lg:top-24 lg:h-fit">
            <div className="hidden lg:block">
              <EventsCalendar events={upcomingEvents} />
            </div>
            <AnimatePresence>
              {isCalendarOpen && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="lg:hidden mb-8"
                >
                  <EventsCalendar events={upcomingEvents} />
                </motion.div>
              )}
            </AnimatePresence>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default News;