'use client';

import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface CaptchaHeaderProps {
  onNewProblem: () => void;
}

const CaptchaHeader: React.FC<CaptchaHeaderProps> = ({ onNewProblem }) => {
  return (
    <div className="flex items-center justify-between mb-2">
      <label htmlFor="captcha" className="block text-sm font-medium text-emerald-800 dark:text-emerald-200">
        Prove you're human (or really good at math)
      </label>
      <button
        type="button"
        onClick={onNewProblem}
        className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 text-sm"
      >
        New Problem
      </button>
    </div>
  );
};

interface CaptchaChallengeProps {
  captchaProblem: { question: string; answer: number };
  captchaAnswer: string;
  isAnswerCorrect: boolean;
  currentMessage: string;
  onAnswerChange: (value: string) => void;
  onNewProblem: () => void;
  onCartoonClick: () => void;
}

const CaptchaChallenge: React.FC<CaptchaChallengeProps> = ({
  captchaProblem,
  captchaAnswer,
  isAnswerCorrect,
  currentMessage,
  onAnswerChange,
  onNewProblem,
  onCartoonClick,
}) => {
  return (
    <div className="relative group">
      <CaptchaHeader onNewProblem={onNewProblem} />
      <div className="relative">
        <div className="mb-3 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl">
          <div className="flex items-start space-x-4">
            <div 
              className="relative w-20 h-20 flex-shrink-0 cursor-pointer hover:scale-105 transition-transform"
              onClick={onCartoonClick}
              title="Click me to hear the question!"
            >
              <Image
                src="/cartoon.png"
                alt="Amino Fabian Cartoon"
                width={80}
                height={80}
                className="rounded-full"
              />
              <AnimatePresence>
                {isAnswerCorrect && (
                  <>
                    {/* Flares */}
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{
                          scale: [1, 2],
                          opacity: [0.8, 0],
                          x: [0, Math.cos(i * 60 * Math.PI / 180) * 100],
                          y: [0, Math.sin(i * 60 * Math.PI / 180) * 100],
                        }}
                        transition={{
                          duration: 0.8,
                          ease: "easeOut",
                        }}
                        className="absolute top-1/2 left-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2"
                      >
                        <div className="w-full h-full bg-emerald-400 rounded-full" />
                      </motion.div>
                    ))}
                    {/* "Correct!" text */}
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white/10 dark:bg-black/10 backdrop-blur-md text-emerald-400 dark:text-emerald-300 px-3 py-1 rounded-full text-xs mt-5 z-50 font-semibold font-['Caveat'] whitespace-nowrap"
                    >
                      Correct! 🎉
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
            <div className="flex-1">
              <div className="relative bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm">
                <div className="absolute left-[-8px] top-4 w-4 h-4 bg-white dark:bg-gray-800 transform rotate-45" />
                <p className="font-['Caveat'] text-lg text-emerald-800 dark:text-emerald-200 relative z-10">
                  Hey there! Can you solve this for me? 
                  <span className="font-['Georgia'] ml-3 bg-emerald-50 dark:bg-emerald-900/30 px-2 text-xs rounded">
                    {captchaProblem.question} = ?
                  </span>
                  <br />
                  <span className="text-sm text-emerald-600 dark:text-emerald-400 italic">
                    (Or just WhatsApp if math isn't your thing 😉)
                  </span>
                </p>
                {captchaAnswer !== '' && (
                  <div className={`mt-3 p-3 rounded-lg ${
                    isAnswerCorrect 
                      ? 'bg-emerald-50 dark:bg-emerald-900/30' 
                      : 'bg-rose-50 dark:bg-rose-900/30'
                  }`}>
                    <p className={`font-['Caveat'] text-lg ${
                      isAnswerCorrect 
                        ? 'text-emerald-600 dark:text-emerald-400' 
                        : 'text-rose-500 dark:text-rose-400'
                    }`}>
                      {currentMessage}
                    </p>
                  </div>
                )}
              </div>
              <input
                type="text"
                id="captcha"
                value={captchaAnswer}
                onChange={(e) => onAnswerChange(e.target.value)}
                required
                className="mt-4 block w-full pl-4 pr-4 py-2.5 border border-gray-200 dark:border-gray-700 rounded-lg
                text-gray-700 dark:text-gray-200 bg-white/80 dark:bg-gray-800/80
                focus:border-emerald-500 dark:focus:border-emerald-400 focus:ring-1 focus:ring-emerald-500/10 dark:focus:ring-emerald-400/10 focus:outline-none
                hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200
                placeholder:text-gray-400 dark:placeholder:text-gray-500"
                placeholder="Your answer..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaptchaChallenge;
