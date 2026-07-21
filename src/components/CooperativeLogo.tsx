import React from 'react';

interface CooperativeLogoProps {
  className?: string;
  variant?: 'main' | 'mono' | 'gold';
  sizeClassName?: string;
}

export default function CooperativeLogo({ 
  className = '', 
  variant = 'main',
  sizeClassName = 'w-10 h-10'
}: CooperativeLogoProps) {
  // Define colors based on the logo variant
  const leafColor = variant === 'mono' ? '#ffffff' : variant === 'gold' ? '#FBBF24' : '#C8102E'; // brand red
  const beanColor = variant === 'mono' ? '#ffffff' : variant === 'gold' ? '#FBBF24' : '#FFFFFF'; // white / outline
  const ringColor = variant === 'mono' ? '#ffffff' : variant === 'gold' ? '#F59E0B' : '#C8102E'; // brand red ring

  return (
    <svg 
      viewBox="0 0 100 100" 
      className={`${sizeClassName} ${className} drop-shadow-md select-none`}
    >
      {/* Outer Circle of Unity / Persatuan */}
      <circle 
        cx="50" 
        cy="50" 
        r="46" 
        fill="none" 
        stroke={ringColor} 
        strokeWidth="3.5" 
        strokeDasharray="1 1.5"
      />
      <circle 
        cx="50" 
        cy="50" 
        r="42" 
        fill="none" 
        stroke={ringColor} 
        strokeWidth="1.5" 
      />

      {/* Coffee Leaf Representation - Left Wing */}
      <path 
        d="M 50 15 C 30 25, 25 45, 50 75 C 50 75, 40 45, 50 15 Z" 
        fill={leafColor} 
        opacity="0.85"
      />

      {/* Coffee Bean Representation - Right Wing */}
      <path 
        d="M 50 15 C 70 25, 75 45, 50 75 C 50 75, 60 45, 50 15 Z" 
        fill={beanColor} 
        stroke={ringColor} 
        strokeWidth="1"
      />
      {/* Bean split line (S-Curve) */}
      <path 
        d="M 50 15 Q 60 40, 50 75" 
        fill="none" 
        stroke={ringColor} 
        strokeWidth="1.5" 
      />

      {/* Center Hands representation (Gotong royong interlocking arch) */}
      <path 
        d="M 32 60 Q 50 82, 68 60" 
        fill="none" 
        stroke={variant === 'gold' ? '#F59E0B' : '#FFFFFF'} 
        strokeWidth="2.5" 
        strokeLinecap="round"
      />
      <path 
        d="M 36 64 Q 50 85, 64 64" 
        fill="none" 
        stroke={leafColor} 
        strokeWidth="2.5" 
        strokeLinecap="round"
      />
    </svg>
  );
}
