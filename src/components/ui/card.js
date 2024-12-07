import React from 'react';

export const Card = ({ children, style }) => {
  return (
    <div
      style={{
        borderRadius: '0.75rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#ffffff',
        overflow: 'hidden',
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({ children, style }) => {
  return (
    <div
      style={{
        padding: '1rem',
        borderBottom: '1px solid #e5e7eb',
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export const CardContent = ({ children, style }) => {
  return (
    <div
      style={{
        padding: '1rem',
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export const CardFooter = ({ children, style }) => {
  return (
    <div
      style={{
        padding: '1rem',
        borderTop: '1px solid #e5e7eb',
        ...style,
      }}
    >
      {children}
    </div>
  );
};
