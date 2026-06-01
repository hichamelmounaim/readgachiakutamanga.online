import React from 'react';
import SEOHead from '../components/SEOHead';
import { CHARACTERS } from '../constants';

const Characters: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <SEOHead
        title="Gachiakuta Manga Characters - Database"
        description="Detailed profiles of Gachiakuta Manga characters including Ludo, Engine and more."
      />

      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Gachiakuta Manga Characters</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Comprehensive database of every character in the Gachiakuta manga. Learn about their sports, abilities, and relationships.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CHARACTERS.map((char) => (
          <div key={char.id} className="group flex flex-col bg-[#1a1a1a] rounded-xl border border-white/5 overflow-hidden hover:border-bb-blue/50 transition-all duration-300 hover:shadow-lg hover:shadow-bb-blue/10">
            <div className="relative h-64 overflow-hidden">
              <img src={char.image} alt={char.name} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-[#1a1a1a] to-transparent"></div>
            </div>
            <div className="flex flex-col p-6 flex-1">
              <div className="flex justify-between items-start mb-4">
                <div className="flex flex-col gap-2">
                  <h2 className="text-2xl font-bold text-white group-hover:text-bb-blue transition-colors">
                    {char.name}
                  </h2>
                  <span className="self-start px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-[#3b82f6] bg-[#3b82f6]/10 rounded-md">
                    {char.role}
                  </span>
                </div>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed flex-1">
                {char.description || "No description available."}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Characters;