
import React from 'react';
import { VOCABULARY_TERMS } from '../constants';

const VocabularySection: React.FC = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-center text-white mb-2">Key Vocabulary</h2>
      <p className="text-center text-gray-400 mb-12">Important words and phrases to understand the conflict.</p>
      <div className="max-w-4xl mx-auto space-y-4">
        {VOCABULARY_TERMS.map((item) => (
          <div key={item.term} className="bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:bg-gray-700 hover:shadow-blue-500/20">
            <h3 className="text-xl font-bold text-blue-400">{item.term}</h3>
            <p className="text-gray-300 mt-2">{item.definition}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VocabularySection;
