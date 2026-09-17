import { type ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'light' | 'light-outline';
  type?: 'button' | 'submit';
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
  ariaLabel?: string;
}

import { Link } from 'react-router-dom';

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  type = 'button',
  onClick,
  className = '',
  fullWidth = false,
  ariaLabel,
}: ButtonProps) {
  const base = `group inline-flex items-center justify-center gap-2.5 px-6 py-4 text-label uppercase tracking-[0.15em] font-medium transition-all duration-300 ease-smooth select-none ${
    fullWidth ? 'w-full' : ''
  }`;

  const variants = {
    primary: 'bg-black text-white hover:bg-white hover:text-black border border-black',
    secondary: 'bg-white text-black border border-black hover:bg-black hover:text-white',
    ghost: 'bg-transparent text-black border border-transparent hover:border-black',
    light: 'bg-white text-black hover:bg-black hover:text-white border border-white',
    'light-outline': 'bg-transparent text-white border border-white hover:bg-white hover:text-black',
  };

  const content = (
    <>
      <span>{children}</span>
      <span className="inline-block transition-transform duration-300 ease-smooth group-hover:translate-x-1">
        →
      </span>
    </>
  );

  const classes = `${base} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} aria-label={ariaLabel}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} aria-label={ariaLabel}>
      {content}
    </button>
  );
}
