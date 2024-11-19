'use client';

import React from 'react';
import { IconType } from 'react-icons';

interface FormFieldProps {
  id: string;
  name: string;
  label: string;
  type?: 'text' | 'email' | 'textarea';
  placeholder: string;
  required?: boolean;
  Icon: IconType;
  rows?: number;
}

const FormField: React.FC<FormFieldProps> = ({
  id,
  name,
  label,
  type = 'text',
  placeholder,
  required = true,
  Icon,
  rows,
}) => {
  const isTextarea = type === 'textarea';
  const InputComponent = isTextarea ? 'textarea' as const : 'input';

  return (
    <div className="relative group">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div className="relative">
        <div className={`absolute left-0 ${isTextarea ? 'top-3' : 'inset-y-0'} pl-3 ${!isTextarea && 'flex items-center'} pointer-events-none`}>
          <Icon size={18} className="text-gray-400 group-focus-within:text-emerald-500 transition-colors duration-200" />
        </div>
        <InputComponent
          type={type}
          name={name}
          id={id}
          required={required}
          rows={rows}
          className={`block w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg
          text-gray-700 bg-white/80 ${isTextarea ? 'resize-none' : ''}
          focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/10 focus:outline-none
          hover:border-gray-300 transition-all duration-200
          placeholder:text-gray-400`}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default FormField;
