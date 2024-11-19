'use client';

import React from 'react';
import { HiUser, HiMail, HiPencilAlt } from 'react-icons/hi';
import CaptchaChallenge from './CaptchaChallenge';
import FormHeader from './FormHeader';
import FormField from './FormField';
import SubmitButton from './SubmitButton';
import StatusMessage from './StatusMessage';

interface ContactFormProps {
  formRef: React.RefObject<HTMLFormElement>;
  isSubmitting: boolean;
  submitStatus: 'idle' | 'success' | 'error';
  isAnswerCorrect: boolean;
  captchaProblem: { question: string; answer: number };
  captchaAnswer: string;
  currentMessage: string;
  isInView: boolean;
  onSubmit: (e: React.FormEvent) => Promise<void>;
  onCaptchaAnswerChange: (value: string) => void;
  onNewCaptcha: () => void;
  onCartoonClick: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({
  formRef,
  isSubmitting,
  submitStatus,
  isAnswerCorrect,
  captchaProblem,
  captchaAnswer,
  currentMessage,
  isInView,
  onSubmit,
  onCaptchaAnswerChange,
  onNewCaptcha,
  onCartoonClick,
}) => {
  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      className="w-full max-w-lg mx-auto p-6 relative overflow-hidden
        bg-gradient-to-br from-emerald-50 via-white to-emerald-50
        dark:from-gray-800/80 dark:via-gray-800/60 dark:to-gray-800/80
        shadow-lg rounded-2xl border border-emerald-100/30 dark:border-emerald-600/10"
    >
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(16,185,129,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_120%,rgba(16,185,129,0.15),transparent_50%)] opacity-70" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.8),rgba(255,255,255,0.4))] dark:bg-[linear-gradient(135deg,rgba(30,41,59,0.4),rgba(30,41,59,0.2))] backdrop-blur-[2px]" />
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-[0.05] dark:opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dotPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" className="fill-emerald-600 dark:fill-emerald-400"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotPattern)" />
        </svg>
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        {/* Header */}
        <FormHeader isInView={isInView} />

        {/* Form Fields */}
        <div className="space-y-6">
          <FormField
            id="user_name"
            name="user_name"
            label="Name"
            type="text"
            placeholder="Your name"
            Icon={HiUser}
          />

          <FormField
            id="user_email"
            name="user_email"
            label="Email"
            type="email"
            placeholder="your.email@example.com"
            Icon={HiMail}
          />

          <FormField
            id="message"
            name="message"
            label="Message"
            type="textarea"
            placeholder="Your message..."
            Icon={HiPencilAlt}
            rows={4}
          />

          {/* Captcha Challenge */}
          <CaptchaChallenge
            captchaProblem={captchaProblem}
            captchaAnswer={captchaAnswer}
            isAnswerCorrect={isAnswerCorrect}
            currentMessage={currentMessage}
            onAnswerChange={onCaptchaAnswerChange}
            onNewProblem={onNewCaptcha}
            onCartoonClick={onCartoonClick}
          />

          {/* Submit Button */}
          <SubmitButton
            isSubmitting={isSubmitting}
            isDisabled={!isAnswerCorrect}
          />

          {/* Status Messages */}
          <StatusMessage status={submitStatus} />
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
