'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiMail, HiUser, HiPencilAlt, HiPaperAirplane } from 'react-icons/hi';
import emailjs from '@emailjs/browser';
import { getRandomMessage, getRandomSuccessMessage } from './CaptchaMessages';
import Image from 'next/image';

const IDEContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [captchaAnswer, setCaptchaAnswer] = useState<string>('');
  const [captchaProblem, setCaptchaProblem] = useState({ question: '', answer: 0 });
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [currentMessage, setCurrentMessage] = useState('');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  // Text-to-speech function (disabled)
  const speak = () => {
    // Voice functionality disabled
    return;
  };

  useEffect(() => {
    // Initialize EmailJS with public key only
    emailjs.init("nb8hu7naiVneNR8KU");
    generateCaptcha();
  }, []);

  useEffect(() => {
    if (captchaAnswer === '') {
      setIsAnswerCorrect(false);
      return;
    }
    const correct = parseInt(captchaAnswer) === captchaProblem.answer;
    setIsAnswerCorrect(correct);
    if (!correct && captchaAnswer !== '') {
      const message = getRandomMessage();
      setCurrentMessage(message);
      speak(); // Speak the incorrect message
    } else if (correct) {
      const message = getRandomSuccessMessage();
      setCurrentMessage(message);
      speak(); // Speak the success message
    }
  }, [captchaAnswer, captchaProblem.answer]);

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const num3 = Math.floor(Math.random() * 5) + 1;
    let question = '';
    let answer = 0;
    
    const operation = Math.floor(Math.random() * 3);
    
    if (operation === 0) {
      answer = num1 + num2 + num3;
      question = `${num1} + ${num2} + ${num3}`;
    } else if (operation === 1) {
      answer = num1 * num2;
      question = `${num1} × ${num2}`;
    } else {
      if (Math.random() > 0.5) {
        answer = num1 - (num2 * num3);
        question = `${num1} - (${num2} × ${num3})`;
      } else {
        answer = num1 - num2 - num3;
        question = `${num1} - ${num2} - ${num3}`;
      }
    }
    
    setCaptchaProblem({ question, answer });
    // Voice disabled
  };

  // Add click handler for the cartoon image (no voice)
  const handleCartoonClick = () => {
    // Voice disabled
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    if (parseInt(captchaAnswer) !== captchaProblem.answer) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
      return;
    }

    try {
      setIsSubmitting(true);
      
      // Log form data for debugging
      const formData = new FormData(formRef.current);
      console.log('Form Data:', {
        user_name: formData.get('user_name'),
        user_email: formData.get('user_email'),
        message: formData.get('message')
      });

      const response = await emailjs.sendForm(
        'service_6pl0jns', // Service ID
        'template_exhg1ep', // Updated Template ID
        formRef.current,
        'nb8hu7naiVneNR8KU' // Public key
      );
      
      console.log('EmailJS Response:', response);
      setSubmitStatus('success');
      formRef.current.reset();
      setCaptchaAnswer('');
      generateCaptcha();
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
      // Show more detailed error message
      if (error instanceof Error) {
        alert(`Failed to send email: ${error.message}`);
      }
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <div ref={ref} className="relative z-30 w-full max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-emerald-900 mb-4">Get in Touch</h2>
        <p className="text-lg text-emerald-700 opacity-80">Have a project in mind? Let's discuss it!</p>
      </motion.div>

      {/* Form Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative max-w-2xl mx-auto"
      >
        {/* Form Background */}
        <div className="absolute -inset-[1px] bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-2xl opacity-30" />
        
        {/* Form Content */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="relative border border-emerald-100/30 bg-white/95 shadow-sm rounded-2xl p-8 md:p-10 space-y-6"
        >
          {/* Name Field */}
          <div className="relative group">
            <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <HiUser size={18} className="text-gray-400 group-focus-within:text-emerald-500 transition-colors duration-200" />
              </div>
              <input
                type="text"
                name="user_name"
                id="user_name"
                required
                className="block w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg
                text-gray-700 bg-white/80
                focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/10 focus:outline-none
                hover:border-gray-300 transition-all duration-200
                placeholder:text-gray-400"
                placeholder="Your name"
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="relative group">
            <label htmlFor="user_email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <HiMail size={18} className="text-gray-400 group-focus-within:text-emerald-500 transition-colors duration-200" />
              </div>
              <input
                type="email"
                name="user_email"
                id="user_email"
                required
                className="block w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg
                text-gray-700 bg-white/80
                focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/10 focus:outline-none
                hover:border-gray-300 transition-all duration-200
                placeholder:text-gray-400"
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          {/* Message Field */}
          <div className="relative group">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <div className="relative">
              <div className="absolute left-0 top-3 pl-3 pointer-events-none">
                <HiPencilAlt size={18} className="text-gray-400 group-focus-within:text-emerald-500 transition-colors duration-200" />
              </div>
              <textarea
                name="message"
                id="message"
                required
                rows={4}
                className="block w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg
                text-gray-700 bg-white/80 resize-none
                focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/10 focus:outline-none
                hover:border-gray-300 transition-all duration-200
                placeholder:text-gray-400"
                placeholder="Your message..."
              />
            </div>
          </div>

          {/* Captcha Field */}
          <div className="relative group">
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="captcha" className="block text-sm font-medium text-emerald-800">
                Prove you're human (or really good at math)
              </label>
              <button
                type="button"
                onClick={() => {
                  generateCaptcha();
                  setCaptchaAnswer('');
                }}
                className="text-emerald-600 hover:text-emerald-700 text-sm"
              >
                New Problem
              </button>
            </div>
            <div className="relative">
              <div className="mb-3 p-4 bg-emerald-50 rounded-xl">
                <div className="flex items-start space-x-4">
                  {/* Cartoon Image - now clickable */}
                  <div 
                    className="relative w-20 h-20 flex-shrink-0 cursor-pointer hover:scale-105 transition-transform"
                    onClick={handleCartoonClick}
                    title="Click me to hear the question!"
                  >
                    <Image
                      src="/cartoon.png"
                      alt="Amino Fabian Cartoon"
                      width={80}
                      height={80}
                      className="rounded-full"
                    />
                  </div>
                  {/* Message Bubble */}
                  <div className="relative bg-white p-4 rounded-xl shadow-sm flex-grow">
                    {/* Triangle for speech bubble */}
                    <div className="absolute left-[-8px] top-4 w-4 h-4 bg-white transform rotate-45" />
                    <p className="font-['Caveat'] text-lg text-emerald-800 relative z-10">
                      Hey there! Can you solve this for me? <span className="font-['Georgia'] ml-3 bg-emerald-50 px-2 text-xs"> {captchaProblem.question} = ? </span> 
                      <br />
                      <span className="text-sm text-emerald-600 italic">
                        (Or just WhatsApp if math isn&apos;t your thing 😉)
                      </span>
                    </p>
                    {captchaAnswer !== '' && (
                      <div className={`mt-3 p-3 rounded-lg ${isAnswerCorrect ? 'bg-emerald-50' : 'bg-rose-50'}`}>
                        <p className={`font-['Caveat'] text-lg ${isAnswerCorrect ? 'text-emerald-600' : 'text-rose-500'}`}>
                          {currentMessage}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <input
                type="text"
                id="captcha"
                value={captchaAnswer}
                onChange={(e) => setCaptchaAnswer(e.target.value)}
                required
                className="block w-full pl-4 pr-4 py-2.5 border border-gray-200 rounded-lg
                text-gray-700 bg-white/80
                focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/10 focus:outline-none
                hover:border-gray-300 transition-all duration-200
                placeholder:text-gray-400"
                placeholder="Your answer..."
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="relative">
            <button
              type="submit"
              disabled={isSubmitting || !isAnswerCorrect}
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

          {/* Status Messages */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ 
              opacity: submitStatus !== 'idle' ? 1 : 0,
              y: submitStatus !== 'idle' ? 0 : 10
            }}
            className={`text-center py-2 rounded-lg ${
              submitStatus === 'success'
                ? 'text-emerald-700 bg-emerald-50'
                : submitStatus === 'error'
                ? 'text-red-700 bg-red-50'
                : ''
            }`}
          >
            {submitStatus === 'success' && 'Message sent successfully!'}
            {submitStatus === 'error' && 'Failed to send message. Please try again.'}
          </motion.div>
        </form>
      </motion.div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-0 right-0 w-96 h-96 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-0"
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-0"
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export default IDEContactForm;