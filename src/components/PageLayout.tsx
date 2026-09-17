import { type ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface PageLayoutProps {
  children: ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <main className="pt-16 lg:pt-20">
      {children}
    </main>
  );
}
