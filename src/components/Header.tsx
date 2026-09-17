import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'For Employers', to: '/employers' },
  { label: 'For Job Seekers', to: '/job-seekers' },
  { label: 'Opportunities', to: '/opportunities' },
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-smooth ${
          scrolled
            ? 'bg-white border-b border-black/10'
            : 'bg-white border-b border-transparent'
        }`}
      >
        <div className="flex items-center justify-between px-5 sm:px-8 lg:px-12 h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center" aria-label="The Office Hire - Home">
            <img src="/tohlogogo.webp" alt="The Office Hire" className="h-16 sm:h-14 w-auto object-contain" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
            {NAV_LINKS.map((link) => {
              const active = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-[13px] font-medium tracking-wide transition-colors duration-200 ${
                    active
                      ? 'text-black'
                      : 'text-grey hover:text-black'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <Link
            to="/contact"
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white text-[12px] font-medium uppercase tracking-[0.12em] transition-all duration-300 hover:bg-white hover:text-black border border-black"
          >
            Get in Touch
            <span className="text-sm">→</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden flex items-center justify-center w-10 h-10 -mr-2"
            aria-label="Open menu"
          >
            <Menu size={22} strokeWidth={1.5} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-all duration-400 ease-smooth ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-black flex flex-col">
          {/* Top bar */}
          <div className="flex items-center justify-between px-5 h-16 border-b border-white/10">
            <img src="/tohlogogo.webp" alt="The Office Hire" className="h-8 w-auto object-contain" />
            <button
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center w-10 h-10 -mr-2 text-white"
              aria-label="Close menu"
            >
              <X size={22} strokeWidth={1.5} />
            </button>
          </div>

          {/* Nav Links */}
          <nav className="flex-1 flex flex-col justify-center px-5 gap-1" aria-label="Mobile navigation">
            {NAV_LINKS.map((link, i) => {
              const active = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-3xl sm:text-4xl font-bold tracking-tight py-2 transition-all duration-500 ease-smooth ${
                    menuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                  } ${active ? 'text-white' : 'text-white/60'}`}
                  style={{ transitionDelay: menuOpen ? `${100 + i * 50}ms` : '0ms' }}
                >
                  {link.label.toUpperCase()}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="px-5 pb-10">
            <Link
              to="/contact"
              className="flex items-center justify-between w-full px-6 py-5 bg-white text-black text-label uppercase tracking-[0.15em] font-medium transition-all duration-300 hover:bg-transparent hover:text-white hover:border hover:border-white"
            >
              Get in Touch
              <span className="text-lg">→</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
