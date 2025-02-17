'use client';

import { useState, useEffect } from 'react';
import { auth } from '@/lib/firebase';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import type { E164Number } from 'libphonenumber-js/core';

export default function PhoneAuth() {
  const [phoneNumber, setPhoneNumber] = useState<E164Number | undefined>(undefined);
  const [verificationCode, setVerificationCode] = useState('');
  const [verificationId, setVerificationId] = useState('');
  const [step, setStep] = useState<'phone' | 'code'>('phone');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Try to detect user's country on component mount
  useEffect(() => {
    const detectCountry = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        if (data.country_calling_code) {
          setPhoneNumber(data.country_calling_code);
        }
      } catch (error) {
        console.error('Error detecting country:', error);
      }
    };

    detectCountry();
  }, []);

  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        size: 'normal',
        callback: () => {
          // reCAPTCHA solved
        },
        'expired-callback': () => {
          // Response expired
        }
      });
    }
  };

  const handleSendCode = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!phoneNumber) {
      setError('Please enter a valid phone number');
      setLoading(false);
      return;
    }

    try {
      setupRecaptcha();
      const confirmation = await signInWithPhoneNumber(
        auth, 
        phoneNumber, // PhoneInput already formats with '+'
        window.recaptchaVerifier
      );
      setVerificationId(confirmation.verificationId);
      setStep('code');
    } catch (err) {
      setError('Error sending verification code. Please try again.');
      console.error(err);
    }

    setLoading(false);
  };

  const handleVerifyCode = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const credential = await window.confirmationResult.confirm(verificationCode);
      // User signed in successfully
      const user = credential.user;
      // Here you can redirect or update UI
    } catch (err) {
      setError('Invalid verification code. Please try again.');
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-800 transition-colors">
      <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white text-center">
        Phone Authentication
      </h2>
      
      {step === 'phone' ? (
        <form onSubmit={handleSendCode} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
              Phone Number
            </label>
            <PhoneInput
              international
              countryCallingCodeEditable={false}
              defaultCountry="US"
              value={phoneNumber}
              onChange={setPhoneNumber}
              className="w-full p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 
                       rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 
                       focus:border-transparent transition-colors"
            />
          </div>
          
          <div id="recaptcha-container" className="mt-4"></div>
          
          <button
            type="submit"
            disabled={loading || !phoneNumber}
            className="w-full p-3 bg-emerald-600 text-white rounded-lg font-medium
                     hover:bg-emerald-700 transition-all duration-200
                     disabled:opacity-50 disabled:cursor-not-allowed
                     transform hover:scale-[1.02] active:scale-[0.98]"
          >
            {loading ? 'Sending...' : 'Send Verification Code'}
          </button>
        </form>
      ) : (
        <form onSubmit={handleVerifyCode} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
              Verification Code
            </label>
            <input
              type="text"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              placeholder="Enter 6-digit code"
              className="w-full p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 
                       rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 
                       focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
              required
            />
          </div>
          
          <button
            type="submit"
            disabled={loading || verificationCode.length !== 6}
            className="w-full p-3 bg-emerald-600 text-white rounded-lg font-medium
                     hover:bg-emerald-700 transition-all duration-200
                     disabled:opacity-50 disabled:cursor-not-allowed
                     transform hover:scale-[1.02] active:scale-[0.98]"
          >
            {loading ? 'Verifying...' : 'Verify Code'}
          </button>
          
          <button
            type="button"
            onClick={() => setStep('phone')}
            className="w-full p-3 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 
                     dark:hover:text-emerald-300 transition-colors duration-200 font-medium"
          >
            Back to Phone Number
          </button>
        </form>
      )}

      {error && (
        <div className="mt-6 text-red-600 dark:text-red-400 text-sm text-center font-medium">
          {error}
        </div>
      )}
    </div>
  );
} 