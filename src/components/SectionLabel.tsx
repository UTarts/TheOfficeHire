interface SectionLabelProps {
  children: React.ReactNode;
  variant?: 'dark' | 'light';
  className?: string;
}

export default function SectionLabel({ children, variant = 'dark', className = '' }: SectionLabelProps) {
  const color = variant === 'dark' ? 'text-grey' : 'text-white/60';
  return (
    <span className={`text-label uppercase tracking-[0.2em] font-medium ${color} ${className}`}>
      {children}
    </span>
  );
}
