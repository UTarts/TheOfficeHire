import { type ReactNode } from 'react';

interface SectionHeadingProps {
  children: ReactNode;
  variant?: 'dark' | 'light';
  className?: string;
}

export default function SectionHeading({ children, variant = 'dark', className = '' }: SectionHeadingProps) {
  const color = variant === 'dark' ? 'text-black' : 'text-white';
  return (
    <h2 className={`text-headline font-bold tracking-tight ${color} ${className}`}>
      {children}
    </h2>
  );
}
