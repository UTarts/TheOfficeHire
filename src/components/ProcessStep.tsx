import { useReveal } from '@/hooks/useReveal';

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  variant?: 'dark' | 'light';
  isLast?: boolean;
}

export default function ProcessStep({ number, title, description, variant = 'dark', isLast = false }: ProcessStepProps) {
  const { ref, visible } = useReveal();
  const isDark = variant === 'dark';
  const lineColor = isDark ? 'bg-black/15' : 'bg-white/15';
  const textColor = isDark ? 'text-black' : 'text-white';
  const descColor = isDark ? 'text-grey-dark' : 'text-white/60';
  const numColor = isDark ? 'text-grey' : 'text-white/50';

  return (
    <div ref={ref} className="relative">
      <div
        className={`flex items-start gap-5 lg:gap-8 py-6 lg:py-8 transition-all duration-700 ease-smooth ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        {/* Number */}
        <div className="flex-shrink-0 w-16 lg:w-24">
          <span className={`text-headline font-bold tracking-tight ${numColor} ${textColor}`}>
            {number}
          </span>
        </div>

        {/* Content */}
        <div className="flex-1 pt-1 lg:pt-2">
          <h3 className={`text-subhead font-bold tracking-tight ${textColor} mb-1`}>
            {title}
          </h3>
          <p className={`text-body ${descColor}`}>
            {description}
          </p>
        </div>
      </div>

      {/* Connector line */}
      {!isLast && (
        <div className={`h-px ${lineColor}`} />
      )}
    </div>
  );
}
