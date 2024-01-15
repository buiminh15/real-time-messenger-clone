import React from 'react'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface InputProps {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  disabled?: boolean;
}

export const Input: React.FC<InputProps> = ({
  errors,
  id,
  label,
  register,
  disabled,
  required,
  type
}) => {
  return (
    <div>Input</div>
  )
}
