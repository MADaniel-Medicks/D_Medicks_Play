
import React, { useState } from 'react';
import Header from './components/Header';
import TimelineSection from './components/TimelineSection';
import FiguresSection from './components/FiguresSection';
import VocabularySection from './components/VocabularySection';
import QuizSection from './components/QuizSection';
import AskHistorianSection from './components/AskHistorianSection';
import { type View } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('timeline');

  const renderContent = () => {
    switch (currentView) {
      case 'timeline':
        return <TimelineSection />;
      case 'figures':
        return <FiguresSection />;
      case 'vocabulary':
        return <VocabularySection />;
      case 'quiz':
        return <QuizSection />;
      case 'ask':
        return <AskHistorianSection />;
      default:
        return <TimelineSection />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-sans">
      <Header currentView={currentView} setCurrentView={setCurrentView} />
      <main className="p-4 sm:p-6 md:p-8 max-w-7xl mx-auto">
        {renderContent()}
      </main>
       <footer className="text-center p-4 text-gray-500 text-xs">
        <p>An educational tool for learning purposes. Historical content should be verified with academic sources.</p>
      </footer>
    </div>
  );
};

export default App;
