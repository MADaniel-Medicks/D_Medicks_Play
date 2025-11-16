
import React from 'react';
import { HISTORICAL_FIGURES } from '../constants';

const FiguresSection: React.FC = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-center text-white mb-2">Key Historical Figures</h2>
      <p className="text-center text-gray-400 mb-12">Learn about the leaders and commanders who shaped the war.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {HISTORICAL_FIGURES.map((figure) => (
          <div key={figure.name} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-blue-500/30">
            <img className="w-full h-56 object-cover object-center" src={figure.imageUrl} alt={figure.name} />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white">{figure.name}</h3>
              <p className="text-md font-semibold text-blue-400 mt-1">{figure.role}</p>
              <p className="text-gray-300 mt-4 text-base leading-relaxed">{figure.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FiguresSection;
