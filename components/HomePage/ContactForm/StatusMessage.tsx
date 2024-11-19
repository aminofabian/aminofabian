'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface StatusMessageProps {
  status: 'idle' | 'success' | 'error';
}

const StatusMessage: React.FC<StatusMessageProps> = ({ status }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ 
        opacity: status !== 'idle' ? 1 : 0,
        y: status !== 'idle' ? 0 : 10
      }}
      className={`text-center py-2 rounded-lg ${
        status === 'success'
          ? 'text-emerald-700 bg-emerald-50'
          : status === 'error'
          ? 'text-red-700 bg-red-50'
          : ''
      }`}
    >
      {status === 'success' && 'Message sent successfully!'}
      {status === 'error' && 'Failed to send message. Please try again.'}
    </motion.div>
  );
};

export default StatusMessage;
