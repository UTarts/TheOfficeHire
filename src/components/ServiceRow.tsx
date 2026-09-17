import { type ReactNode } from 'react';
import { useReveal } from '@/hooks/useReveal';

interface ServiceRowProps {
  number: string;
  title: string;
  description: string;
  variant?: 'dark' | 'light';
}

export default function ServiceRow({ number, title, description, variant = 'dark' }: ServiceRowProps) {
  const { ref, visible } = useReveal();
  const isDark = variant === 'dark';

  return (
    <div
      ref={ref}
      className={`group relative border-t transition-colors duration-400 ease-smooth ${
        isDark ? 'border-black/10' : 'border-white/15'
      } ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} transition-all duration-700`}
    >
      {/* Hover invert */}
      <div
        className={`absolute inset-0 transition-opacity duration-400 ease-smooth opacity-0 group-hover:opacity-100 ${
          isDark ? 'bg-black' : 'bg-white'
        }`}
      />

      <div className="relative grid grid-cols-12 gap-4 items-center py-8 lg:py-10 px-1">
        {/* Number */}
        <div className="col-span-2 lg:col-span-1">
          <span
            className={`text-label uppercase tracking-[0.15em] font-medium transition-colors duration-300 ${
              isDark ? 'text-grey group-hover:text-white/60' : 'text-white/50 group-hover:text-grey'
            }`}
          >
            {number}
          </span>
        </div>

        {/* Title */}
        <div className="col-span-10 lg:col-span-4">
          <h3
            className={`text-subhead font-bold tracking-tight transition-colors duration-300 ${
              isDark ? 'text-black group-hover:text-white' : 'text-white group-hover:text-black'
            }`}
          >
            {title}
          </h3>
        </div>

        {/* Description */}
        <div className="col-span-12 lg:col-span-6 lg:col-start-7">
          <p
            className={`text-body transition-colors duration-300 ${
              isDark ? 'text-grey-dark group-hover:text-white/80' : 'text-white/60 group-hover:text-grey-dark'
            }`}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
