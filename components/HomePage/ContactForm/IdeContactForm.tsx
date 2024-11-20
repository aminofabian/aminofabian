'use client';

import React, { useRef, useState, useEffect } from 'react';
import { useInView } from 'framer-motion';
import { getRandomMessage, getRandomSuccessMessage } from './CaptchaMessages';
import ContactForm from './ContactForm';

interface IdeContactFormProps {
  onClose?: () => void;
}

const IDEContactForm = ({ onClose }: IdeContactFormProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [captchaAnswer, setCaptchaAnswer] = useState<string>('');
  const [captchaProblem, setCaptchaProblem] = useState({ question: '', answer: 0 });
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [currentMessage, setCurrentMessage] = useState('');
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });


  useEffect(() => {
    generateCaptcha();
  }, []);

  useEffect(() => {
    if (captchaAnswer === '') {
      return;
    }
    const correct = parseInt(captchaAnswer) === captchaProblem.answer;
    setIsAnswerCorrect(correct);
    if (!correct && captchaAnswer !== '') {
      const message = getRandomMessage();
      setCurrentMessage(message);
    } else if (correct) {
      const message = getRandomSuccessMessage();
      setCurrentMessage(message);
    }
  }, [captchaAnswer, captchaProblem.answer]);

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const num3 = Math.floor(Math.random() * 10) + 1;
    const operators = ['+', '-'];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    let question: string;
    let answer: number;

    if (operator === '+') {
      answer = num1 + num2 + num3;
      question = `${num1} + ${num2} + ${num3}`;
    } else {
      answer = num1 - num2 - num3;
      question = `${num1} - ${num2} - ${num3}`;
    }
    
    setCaptchaProblem({ question, answer });
  };

  const handleCartoonClick = () => {
    // Voice disabled
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    
    if (!isAnswerCorrect) {
      alert('Please solve the math problem correctly before submitting.');
      return;
    }

    try {
      setIsSubmitting(true);
      const formData = new FormData(formRef.current);
      const data = {
        user_name: formData.get('user_name'),
        user_email: formData.get('user_email'),
        message: formData.get('message')
      };

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }
      
      console.log('Email sent successfully');
      setSubmitStatus('success');
      formRef.current.reset();
      setCaptchaAnswer('');
      generateCaptcha();
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
      if (error instanceof Error) {
        alert(`Failed to send email: ${error.message}`);
      }
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <div ref={containerRef}>
      <ContactForm
        formRef={formRef}
        isSubmitting={isSubmitting}
        submitStatus={submitStatus}
        isAnswerCorrect={isAnswerCorrect}
        captchaProblem={captchaProblem}
        captchaAnswer={captchaAnswer}
        currentMessage={currentMessage}
        isInView={isInView}
        onSubmit={handleSubmit}
        onCaptchaAnswerChange={setCaptchaAnswer}
        onNewCaptcha={generateCaptcha}
        onCartoonClick={handleCartoonClick}
      />
    </div>
  );
};

export default IDEContactForm;