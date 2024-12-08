import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FormInputProps {
  label: string;
  name: string;
  type: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: LucideIcon;
  placeholder?: string;
  maxLength?: number;
  min?: number;
  className?: string;
}

export function FormInput({
  label,
  name,
  type,
  value,
  onChange,
  icon: Icon,
  placeholder,
  maxLength,
  min,
  className = '',
}: FormInputProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        )}
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className={`${Icon ? 'pl-10' : 'pl-3'} w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${className}`}
          placeholder={placeholder}
          maxLength={maxLength}
          min={min}
          required
        />
      </div>
    </div>
  );
}