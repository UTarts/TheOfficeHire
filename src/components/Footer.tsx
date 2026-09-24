import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'For Employers', to: '/employers' },
  { label: 'For Job Seekers', to: '/job-seekers' },
  { label: 'Opportunities', to: '/opportunities' },
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Top statement */}
      <div className="px-5 sm:px-8 lg:px-12 pt-16 pb-12 lg:pt-24 lg:pb-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-label uppercase tracking-[0.2em] text-white/50 mb-6">
            The Office Hire
          </p>
          <h2 className="text-display font-bold tracking-tight leading-[1.0] max-w-3xl">
            RECRUITMENT
            <br />
            WITHOUT THE NOISE.
          </h2>
        </div>
      </div>

      {/* Main footer content */}
      <div className="px-5 sm:px-8 lg:px-12 pb-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto pt-12 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Nav */}
          <nav className="md:col-span-5" aria-label="Footer navigation">
            <p className="text-label-sm uppercase tracking-[0.18em] text-white/40 mb-5">
              Navigation
            </p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-body text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="md:col-span-4">
            <p className="text-label-sm uppercase tracking-[0.18em] text-white/40 mb-5">
              Contact
            </p>
            <div className="space-y-3">
              <a
                href="mailto:hello@theofficehire.com"
                className="block text-body text-white/70 hover:text-white transition-colors duration-200"
              >
                info@theofficehire.com
              </a>
              <a
                href="tel:+919211023617"
                className="block text-body text-white/70 hover:text-white transition-colors duration-200"
              >
                +91 92110 23617
              </a>
              <p className="text-body text-white/70">
                Greater Noida, UP, India
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="md:col-span-3 flex md:justify-end md:items-end">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 text-body text-white hover:text-white/80 transition-colors duration-200"
            >
              <span className="uppercase tracking-[0.12em] text-[13px] font-medium">
                Get in Touch
              </span>
              <ArrowUpRight size={18} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-4">
          <p className="text-label-sm uppercase tracking-[0.15em] text-white/40">
              {new Date().getFullYear()} The Office Hire
          </p>

          {/* UT Arts Branding */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-white/40">Powered by</span>
            <a href="https://www.utarts.in" target="_blank" rel="noopener noreferrer" className="font-bold text-orange-500 hover:text-orange-700 transition-colors flex items-center gap-1.5">
              <img alt="UT Arts Logo" className="h-6 w-6 rounded-full object-cover border border-gray-200" src="https://www.utarts.in/images/UTArt_Logo.webp" />
              UT Arts
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link" aria-hidden="true">
                <path d="M15 3h6v6"></path>
                <path d="M10 14 21 3"></path>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              </svg>
            </a>
          </div>

          <div className="flex flex-wrap gap-4 sm:gap-6">
            <Link to="/contact" className="text-label-sm uppercase tracking-[0.15em] text-white/40 hover:text-white transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/contact" className="text-label-sm uppercase tracking-[0.15em] text-white/40 hover:text-white transition-colors duration-200">
              Terms
            </Link>
            <Link to="/contact" className="text-label-sm uppercase tracking-[0.15em] text-white/40 hover:text-white transition-colors duration-200">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
