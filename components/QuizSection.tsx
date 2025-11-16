
import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../constants';

const QuizSection: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const question = QUIZ_QUESTIONS[currentQuestionIndex];

  const handleAnswer = (option: string) => {
    if (showFeedback) return;

    setSelectedAnswer(option);
    setShowFeedback(true);
    if (option === question.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    setShowFeedback(false);
    setSelectedAnswer(null);
    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setIsFinished(false);
  };
  
  const getButtonClass = (option: string) => {
    if (!showFeedback) {
      return 'bg-gray-700 hover:bg-blue-600';
    }
    if (option === question.correctAnswer) {
      return 'bg-green-600';
    }
    if (option === selectedAnswer) {
      return 'bg-red-600';
    }
    return 'bg-gray-700 opacity-50';
  };

  if (isFinished) {
    return (
      <div className="max-w-2xl mx-auto text-center bg-gray-800 p-8 rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold text-white mb-4">Quiz Complete!</h2>
        <p className="text-xl text-gray-300 mb-6">Your final score is:</p>
        <p className="text-6xl font-bold text-blue-400 mb-8">{score} / {QUIZ_QUESTIONS.length}</p>
        <button
          onClick={restartQuiz}
          className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-blue-700 transition-colors duration-300"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <section>
      <h2 className="text-3xl font-bold text-center text-white mb-2">Knowledge Check</h2>
      <p className="text-center text-gray-400 mb-8">Test what you've learned.</p>
      <div className="max-w-2xl mx-auto bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg">
        <div className="mb-6">
          <p className="text-sm text-gray-400 mb-2">Question {currentQuestionIndex + 1} of {QUIZ_QUESTIONS.length}</p>
          <h3 className="text-xl sm:text-2xl font-semibold text-white">{question.question}</h3>
        </div>
        <div className="space-y-4">
          {question.options.map((option) => (
            <button
              key={option}
              onClick={() => handleAnswer(option)}
              disabled={showFeedback}
              className={`w-full text-left p-4 rounded-lg font-medium transition-all duration-300 text-white ${getButtonClass(option)}`}
            >
              {option}
            </button>
          ))}
        </div>
        {showFeedback && (
          <div className="mt-6 text-center">
             <p className={`text-lg font-bold mb-4 ${selectedAnswer === question.correctAnswer ? 'text-green-400' : 'text-red-400'}`}>
                {selectedAnswer === question.correctAnswer ? 'Correct!' : 'Not quite.'}
             </p>
            <button
              onClick={handleNext}
              className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              {currentQuestionIndex < QUIZ_QUESTIONS.length - 1 ? 'Next Question' : 'Finish Quiz'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default QuizSection;
