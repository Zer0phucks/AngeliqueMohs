import React from 'react';
import { blogPosts } from '../data';

const News: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl md:text-5xl text-center text-art-900 mb-16">Studio News</h1>

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
    </div>
  );
};

export default News;