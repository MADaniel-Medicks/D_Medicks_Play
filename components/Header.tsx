import React from 'react';
import { type View } from '../types';
import { TimelineIcon, FiguresIcon, VocabIcon, QuizIcon, AskIcon } from './icons/Icons';

interface HeaderProps {
  currentView: View;
  setCurrentView: (view: View) => void;
}

// FIX: Defined a dedicated interface for NavButton props to fix the TypeScript error with the 'key' prop.
interface NavButtonProps {
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const NavButton = ({ isActive, onClick, children }: NavButtonProps) => (
  <button
    onClick={onClick}
    className={`flex flex-col sm:flex-row items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
      isActive
        ? 'bg-blue-600 text-white shadow-lg'
        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
    }`}
  >
    {children}
  </button>
);


const Header: React.FC<HeaderProps> = ({ currentView, setCurrentView }) => {
  const navItems = [
    { id: 'timeline', label: 'Timeline', icon: <TimelineIcon /> },
    { id: 'figures', label: 'Figures', icon: <FiguresIcon /> },
    { id: 'vocabulary', label: 'Vocabulary', icon: <VocabIcon /> },
    { id: 'quiz', label: 'Quiz', icon: <QuizIcon /> },
    { id: 'ask', label: 'Ask AI Historian', icon: <AskIcon /> },
  ];

  return (
    <header className="bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-20">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-xl font-bold text-white hidden md:block">WWII: The Pacific Conflict</h1>
              <h1 className="text-xl font-bold text-white block md:hidden">WWII Pacific</h1>
            </div>
          </div>
          <nav className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              {navItems.map((item) => (
                 <NavButton
                  key={item.id}
                  isActive={currentView === item.id}
                  onClick={() => setCurrentView(item.id as View)}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </NavButton>
              ))}
            </div>
          </nav>
        </div>
      </div>
      {/* Mobile Navigation */}
      <nav className="sm:hidden bg-gray-800 p-2">
        <div className="flex justify-around">
           {navItems.map((item) => (
             <NavButton
                key={item.id}
                isActive={currentView === item.id}
                onClick={() => setCurrentView(item.id as View)}
              >
                {item.icon}
                <span className="hidden sm:inline">{item.label}</span>
              </NavButton>
            ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
