'use client';

import React from 'react';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  fullWidth?: boolean;
  children?: React.ReactNode;
  onClick?: () => void
  secondary?: boolean;
  danger?: boolean;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  danger,
  disabled,
  fullWidth,
  secondary,
  type
}) => {
  return (
    <div>Button</div>
  );
};
