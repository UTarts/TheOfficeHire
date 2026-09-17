import { type ReactNode } from 'react';
import SectionLabel from './SectionLabel';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

interface SectionHeaderProps {
  label?: string;
  heading: ReactNode;
  variant?: 'dark' | 'light';
  className?: string;
  align?: 'left' | 'center';
}

export default function SectionHeader({
  label,
  heading,
  variant = 'dark',
  className = '',
  align = 'left',
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : '';
  return (
    <div className={`${alignClass} ${className}`}>
      {label && (
        <Reveal>
          <SectionLabel variant={variant}>{label}</SectionLabel>
        </Reveal>
      )}
      <Reveal delay={1}>
        <SectionHeading variant={variant} className="mt-4">
          {heading}
        </SectionHeading>
      </Reveal>
    </div>
  );
}
