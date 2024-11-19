'use client';

import React from 'react';
import { HiPaperAirplane } from 'react-icons/hi';

interface SubmitButtonProps {
  isSubmitting: boolean;
  isDisabled: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ isSubmitting, isDisabled }) => {
  return (
    <div className="relative mt-5">
      <button
        type="submit"
        disabled={isSubmitting || isDisabled}
        className="w-full px-6 py-3 bg-emerald-500 hover:bg-emerald-600 
        text-white font-medium rounded-lg shadow-sm
        focus:outline-none focus:ring-2 focus:ring-emerald-500/20
        disabled:opacity-50 disabled:cursor-not-allowed
        transition-all duration-200 ease-out"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </span>
        ) : (
          <span className="flex items-center justify-center gap-2">
            <HiPaperAirplane className="h-5 w-5 text-white relative z-50 transform rotate-90" />
            Send Message
          </span>
        )}
      </button>
    </div>
  );
};

export default SubmitButton;
