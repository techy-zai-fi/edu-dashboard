import React from 'react';

export const Button = ({ children, variant = 'ghost', size = 'medium', style, onClick }) => {
  const variants = {
    ghost: {
      backgroundColor: 'transparent',
      color: '#374151',
      border: 'none',
    },
    solid: {
      backgroundColor: '#0284c7',
      color: '#ffffff',
      border: 'none',
    },
  };

  const sizes = {
    small: {
      padding: '0.25rem 0.5rem',
      fontSize: '0.75rem',
    },
    medium: {
      padding: '0.5rem 1rem',
      fontSize: '0.875rem',
    },
    large: {
      padding: '0.75rem 1.5rem',
      fontSize: '1rem',
    },
    icon: {
      padding: '0.5rem',
      fontSize: '1rem',
      borderRadius: '50%',
    },
  };

  const combinedStyle = {
    borderRadius: '0.375rem',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...variants[variant],
    ...sizes[size],
    ...style,
  };

  return (
    <button style={combinedStyle} onClick={onClick}>
      {children}
    </button>
  );
};
