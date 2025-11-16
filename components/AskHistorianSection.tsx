
import React, { useState, useRef, useEffect } from 'react';
import { askHistorian } from '../services/geminiService';
import { type ChatMessage } from '../types';
import { SendIcon, UserIcon, AiIcon } from './icons/Icons';

const AskHistorianSection: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { sender: 'ai', text: "Hello! I am an AI historian specializing in the WWII conflict between the U.S. and Japan. Ask me a question about this topic." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const aiResponse = await askHistorian(input);
      const aiMessage: ChatMessage = { sender: 'ai', text: aiResponse };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      const errorMessage: ChatMessage = { sender: 'ai', text: "Sorry, I couldn't process your request right now." };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section>
      <h2 className="text-3xl font-bold text-center text-white mb-2">Ask the AI Historian</h2>
      <p className="text-center text-gray-400 mb-8">Have a question? Get an answer from our AI expert.</p>
      
      <div className="max-w-3xl mx-auto bg-gray-800 rounded-lg shadow-2xl flex flex-col h-[70vh]">
        <div className="flex-1 p-6 space-y-6 overflow-y-auto">
          {messages.map((msg, index) => (
            <div key={index} className={`flex items-start gap-4 ${msg.sender === 'user' ? 'justify-end' : ''}`}>
              {msg.sender === 'ai' && (
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                  <AiIcon />
                </div>
              )}
              <div className={`max-w-md p-4 rounded-xl ${msg.sender === 'user' ? 'bg-blue-600 text-white rounded-br-none' : 'bg-gray-700 text-gray-200 rounded-bl-none'}`}>
                 <p className="text-base leading-relaxed whitespace-pre-wrap">{msg.text}</p>
              </div>
               {msg.sender === 'user' && (
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center">
                  <UserIcon />
                </div>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="flex items-start gap-4">
               <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                  <AiIcon />
                </div>
              <div className="max-w-md p-4 rounded-xl bg-gray-700 text-gray-200 rounded-bl-none">
                <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse [animation-delay:-0.3s]"></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse [animation-delay:-0.15s]"></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        <form onSubmit={handleSubmit} className="p-4 border-t border-gray-700 flex items-center gap-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your question here..."
            className="flex-1 w-full bg-gray-700 text-white placeholder-gray-400 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="bg-blue-600 text-white rounded-full p-3 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors duration-200"
          >
            <SendIcon />
          </button>
        </form>
      </div>
    </section>
  );
};

export default AskHistorianSection;
