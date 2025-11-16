import React, { useState } from 'react';
import { TIMELINE_EVENTS } from '../constants';
import { type TimelineEvent } from '../types';

// FIX: Defined a dedicated interface for EventCard props to fix the TypeScript error with the 'key' prop.
interface EventCardProps {
  event: TimelineEvent;
  isExpanded: boolean;
  onClick: () => void;
}

const EventCard = ({ event, isExpanded, onClick }: EventCardProps) => {
  return (
    <div className="relative pl-8 sm:pl-32 py-6 group">
      {/* Vertical line */}
      <div className="absolute top-0 left-0 h-full w-0.5 bg-gray-600 group-last:h-[calc(50%-1.5rem)]"></div>
      
      {/* Circle marker */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-[1.1rem] transform w-8 h-8 rounded-full bg-gray-800 border-4 border-blue-500 flex items-center justify-center text-sm font-bold text-white transition-transform duration-300 group-hover:scale-110">
        {event.year.toString().slice(-2)}
      </div>

      <div 
        className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg cursor-pointer transition-all duration-300 hover:shadow-blue-500/20 hover:border-blue-500 border border-transparent"
        onClick={onClick}
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <time className="text-sm font-semibold text-blue-400">{event.year}</time>
              <h3 className="mt-1 text-lg sm:text-xl font-bold text-white">{event.title}</h3>
              <p className="mt-2 text-gray-400">{event.description}</p>
            </div>
            <div className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </div>
        </div>

        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[500px] mt-4' : 'max-h-0'}`}>
          <div className="border-t border-gray-700 pt-4 flex flex-col lg:flex-row gap-4 items-start">
            <img src={event.imageUrl} alt={event.title} className="w-full lg:w-1/3 h-auto object-cover rounded-md shadow-md" />
            <p className="text-gray-300 text-base leading-relaxed">{event.longDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const TimelineSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(TIMELINE_EVENTS[1].year);

  const handleCardClick = (year: number) => {
    setExpandedId(expandedId === year ? null : year);
  };

  return (
    <section>
      <h2 className="text-3xl font-bold text-center text-white mb-2">Timeline of the Conflict</h2>
      <p className="text-center text-gray-400 mb-12">Click on an event to learn more.</p>
      <div className="relative">
        {TIMELINE_EVENTS.map((event) => (
          <EventCard 
            key={event.year} 
            event={event} 
            isExpanded={expandedId === event.year}
            onClick={() => handleCardClick(event.year)}
          />
        ))}
      </div>
    </section>
  );
};

export default TimelineSection;
