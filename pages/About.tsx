import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-art-50 min-h-screen py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 md:p-16 shadow-sm rounded-sm">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            
            <div className="w-full md:w-1/3 flex-shrink-0">
              <div className="aspect-[3/4] bg-art-200 relative">
                 {/* Artist Photo Placeholder */}
                <img 
                  src="/images/angelique-portrait.jpg" 
                  alt="Angelique Mohs" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-art-900 -z-10"></div>
              </div>
              
              <div className="mt-8">
                <h3 className="font-serif text-lg font-bold text-art-900 mb-2">Exhibitions</h3>
                <ul className="text-sm text-art-600 space-y-2">
                  <li>2023 - Downtown Arts Center, "Colors of Nature"</li>
                  <li>2022 - Riverside Gallery, Group Show</li>
                  <li>2020 - "Solitude" Virtual Exhibition</li>
                </ul>
              </div>
            </div>

            <div className="w-full md:w-2/3">
              <h1 className="font-serif text-4xl md:text-5xl text-art-900 mb-8">Angelique Mohs</h1>
              
              <div className="space-y-6 text-art-700 leading-relaxed font-light text-lg">
                <p>
                  Art has always been my way of translating the world. From the vibrant hues of a fresh harvest to the deep, soulful gaze of a portrait subject, I find endless inspiration in the details that often go unnoticed.
                </p>
                <p>
                  My journey began with sketches in charcoal, learning to understand value and form. Over the years, I have expanded my repertoire to include oils, acrylics, and mixed media. Each medium offers a different voice; oils allow for depth and blending that brings portraits to life, while acrylics offer the immediacy needed for capturing fleeting moments in nature.
                </p>
                <p>
                  Lately, I have been exploring the interplay of light on water and the complex textures found in nature—pebbles, feathers, and petals. My work is not just about replicating what I see, but about evoking the feeling of that moment.
                </p>
                <p>
                  When I am not painting, I can be found sculpting ceramic figures, adding a touch of whimsy to my collection. I invite you to explore my gallery and share in my vision of the world.
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-art-100">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Signature_sample.svg/1200px-Signature_sample.svg.png" 
                  alt="Signature" 
                  className="h-16 opacity-50" 
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;