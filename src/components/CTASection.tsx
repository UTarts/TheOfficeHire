import { type ReactNode } from 'react';
import Button from './Button';
import Reveal from './Reveal';

interface CTASectionProps {
  headline: ReactNode;
  buttonText: string;
  buttonTo: string;
  variant?: 'black' | 'white';
  buttonVariant?: 'primary' | 'secondary' | 'light' | 'light-outline';
}

export default function CTASection({
  headline,
  buttonText,
  buttonTo,
  variant = 'black',
  buttonVariant,
}: CTASectionProps) {
  const isBlack = variant === 'black';
  const bg = isBlack ? 'bg-black' : 'bg-white';
  const text = isBlack ? 'text-white' : 'text-black';
  const btnVariant = buttonVariant || (isBlack ? 'light-outline' : 'primary');

  return (
    <section className={`${bg} ${text} px-5 sm:px-8 lg:px-12 py-20 lg:py-32`}>
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <h2 className="text-hero font-bold tracking-tight leading-[0.95] mb-10">
            {headline}
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <Button to={buttonTo} variant={btnVariant}>
            {buttonText}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
