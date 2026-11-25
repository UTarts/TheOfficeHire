import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Check, ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO';
import PageLayout from '@/components/PageLayout';
import SectionLabel from '@/components/SectionLabel';
import Reveal from '@/components/Reveal';
import CTASection from '@/components/CTASection';
import { useReveal } from '@/hooks/useReveal';

type Category = 'pr' | 'social';

interface PackageSection {
  title: string;
  items: string[];
}

interface ServicePackage {
  id: string;
  num: string;
  category: Category;
  name: string;
  price: string;
  period: string;
  badge?: string;
  audience: string;
  objective?: string;
  platforms?: string;
  highlights: string[];
  includes?: string[];
  sections?: PackageSection[];
  deliverables?: string;
  bestFor?: string;
  note?: string;
}

const PR_PACKAGES: ServicePackage[] = [
  {
    id: 'pr-starter',
    num: '01',
    category: 'pr',
    name: 'STARTER',
    price: '₹15,000',
    period: '/month',
    audience: 'For startups, professionals & small businesses beginning their PR journey',
    objective: 'Establish a professional presence and start building media visibility.',
    highlights: [
      'PR strategy & initial brand assessment',
      '1 professionally written press release/month',
      'Outreach to relevant digital publications',
      '1 founder/company profile positioning exercise',
    ],
    includes: [
      'PR strategy & initial brand assessment',
      '1 professionally written press release/month',
      'Media database research & targeted pitching',
      'Outreach to relevant digital publications',
      '1 founder/company profile positioning exercise',
      '1 thought-leadership topic/content idea',
      'Basic social media PR amplification',
      'Monthly PR activity report',
      'Media opportunity tracking',
    ],
    deliverables: '1 Targeted Media Outreach + Digital PR + Monthly Report',
  },
  {
    id: 'pr-growth',
    num: '02',
    category: 'pr',
    name: 'GROWTH',
    price: '₹30,000',
    period: '/month',
    audience: 'For growing businesses looking to establish authority',
    objective: 'Move from basic visibility to consistent brand positioning.',
    highlights: [
      'Everything in STARTER',
      'Up to 2 press releases/month & 1 thought-leadership article',
      'Targeted outreach to journalists, editors & podcasts',
      'Founder/CEO positioning & LinkedIn guidance',
    ],
    includes: [
      'Everything in STARTER',
      'Up to 2 press releases/month',
      'Targeted outreach to relevant journalists & editors',
      'Digital media pitching',
      'Founder/CEO positioning',
      '1 thought-leadership article/month',
      'Business/industry feature pitching',
      'Podcast & interview opportunity outreach',
      'LinkedIn personal-branding guidance',
      'Social media PR strategy',
      'Competitor/media visibility monitoring',
      'Monthly PR strategy call',
      'Detailed monthly media report',
    ],
    deliverables:
      '2 Press Releases + Thought Leadership + Media Pitching + Founder Positioning + Podcast Outreach + Monthly Report',
  },
  {
    id: 'pr-authority',
    num: '03',
    category: 'pr',
    name: 'AUTHORITY',
    price: '₹60,000',
    period: '/month',
    audience: 'For established businesses, founders & public-facing professionals',
    objective: 'Build sustained visibility, credibility and industry authority.',
    highlights: [
      'Everything in GROWTH + Dedicated account manager',
      'Up to 4 press releases & 2 thought-leadership articles/month',
      'Premium digital publication, podcast & YouTube outreach',
      'Event PR support & reputation monitoring',
    ],
    includes: [
      'Everything in GROWTH',
      'Up to 4 press releases/month',
      'Premium digital publication outreach',
      'Founder/CEO personal branding strategy',
      'Executive positioning',
      '2 thought-leadership articles/month',
      'Interview & feature opportunity pitching',
      'Podcast & YouTube appearance outreach',
      'Industry-specific media outreach',
      'Event PR support',
      'Influencer/creator outreach where relevant',
      'Reputation monitoring',
      'Monthly media sentiment/visibility analysis',
      'Monthly strategic consultation',
      'Dedicated account manager',
    ],
    deliverables:
      '4 Press Releases + Executive PR + Thought Leadership + Media Features + Podcast/Video Outreach + Event PR + Reputation Monitoring',
  },
  {
    id: 'pr-signature',
    num: '04',
    category: 'pr',
    name: 'SIGNATURE',
    price: '₹1,00,000+',
    period: '/month',
    badge: 'Custom Enterprise',
    audience: 'For organisations requiring an integrated PR & communications strategy',
    objective: 'Build and manage a comprehensive public-facing communication strategy.',
    highlights: [
      'Complete Strategic PR & Quarterly Communication Roadmap',
      'Ongoing Media Relations, Executive PR & Digital PR',
      'Product Launch, Event PR & Campaign Amplification',
      'Dedicated Crisis Communication & Reputation Response',
    ],
    sections: [
      {
        title: 'Strategic PR',
        items: [
          'Complete PR strategy',
          'Quarterly communication roadmap',
          'Brand positioning',
          'Corporate communication strategy',
          'Reputation management',
        ],
      },
      {
        title: 'Media Relations',
        items: [
          'Regular journalist/editor outreach',
          'Press releases',
          'Media pitching',
          'Feature opportunities',
          'Interviews',
          'Expert commentary opportunities',
        ],
      },
      {
        title: 'Executive PR',
        items: [
          'Founder/CEO positioning',
          'Executive thought leadership',
          'Personal brand strategy',
          'Speaking/interview opportunities',
          'LinkedIn positioning',
        ],
      },
      {
        title: 'Digital PR',
        items: [
          'Digital publication outreach',
          'Podcast appearances',
          'YouTube interviews',
          'Online features',
          'Content-led PR',
        ],
      },
      {
        title: 'Campaign & Event PR',
        items: [
          'Product/service launch PR',
          'Event publicity',
          'Media invitations',
          'Influencer outreach',
          'Campaign amplification',
        ],
      },
      {
        title: 'Crisis Communication',
        items: [
          'Crisis communication planning',
          'Media response preparation',
          'Official statement development',
          'Reputation response strategy',
        ],
      },
    ],
    note: 'Pricing: Customised according to scope, geography, media requirements and campaign duration.',
  },
];

const SOCIAL_PACKAGES: ServicePackage[] = [
  {
    id: 'social-starter',
    num: '01',
    category: 'social',
    name: 'STARTER',
    price: '₹15,000',
    period: '/month',
    audience: 'For startups and small businesses building their social presence',
    platforms: 'Instagram + Facebook OR LinkedIn',
    highlights: [
      '12 posts/month & 4 reels/month',
      'Social media strategy & monthly content calendar',
      'Basic graphic design, reel editing & scheduling',
      'Monthly performance report & 1 strategy call/month',
    ],
    includes: [
      'Social media strategy',
      'Monthly content calendar',
      '12 posts/month',
      '4 reels/month',
      'Caption writing',
      'Hashtag/keyword research',
      'Basic graphic design',
      'Basic reel editing',
      'Content scheduling',
      'Community monitoring',
      'Monthly performance report',
      '1 strategy call/month',
    ],
    bestFor: 'Startups, professionals and small businesses establishing their online presence.',
  },
  {
    id: 'social-growth',
    num: '02',
    category: 'social',
    name: 'GROWTH',
    price: '₹25,000',
    period: '/month',
    audience: 'For businesses looking for consistent growth and engagement',
    platforms: 'Up to 3 platforms',
    highlights: [
      'Everything in STARTER',
      '16 static/carousel posts, 8 reels & up to 12 stories/month',
      'Community, comment & DM monitoring',
      'Trend research, competitor monitoring & 2 strategy calls/month',
    ],
    includes: [
      'Everything in STARTER',
      '16 static/carousel posts/month',
      '8 reels/month',
      'Story content — up to 12/month',
      'Platform-specific content strategy',
      'Advanced captions & CTAs',
      'Trend research',
      'Competitor monitoring',
      'Community management',
      'Comment & DM monitoring',
      'Monthly analytics report',
      '2 strategy calls/month',
    ],
    bestFor: 'Growing companies, brands and service businesses.',
  },
  {
    id: 'social-professional',
    num: '03',
    category: 'social',
    name: 'PROFESSIONAL',
    price: '₹40,000',
    period: '/month',
    audience: 'For brands that want a strong, professionally managed digital presence',
    platforms: 'Up to 4 platforms',
    highlights: [
      'Everything in GROWTH',
      '20 posts, 12 reels & 20 stories/month',
      'Content shoots — 1 session/month*',
      'Advanced creative direction & influencer coordination',
    ],
    includes: [
      'Everything in GROWTH',
      '20 posts/month',
      '12 reels/month',
      '20 stories/month',
      'Advanced creative direction',
      'Professional reel editing',
      'Brand consistency management',
      'Content shoots — 1 session/month*',
      'Influencer/creator coordination',
      'Social media campaign planning',
      'Detailed competitor analysis',
      'Community management',
      'Monthly performance & growth report',
      'Monthly strategy meeting',
    ],
    bestFor: 'Established businesses, personal brands, founders and consumer-facing companies.',
    note: '*Subject to location, shoot requirements and agreed scope.',
  },
  {
    id: 'social-premium',
    num: '04',
    category: 'social',
    name: 'PREMIUM',
    price: '₹60,000+',
    period: '/month',
    badge: 'Complete Digital Brand Management',
    audience:
      'For businesses that want THE OFFICE HIRE to function as an extended digital marketing team.',
    platforms: 'Up to 5 platforms',
    highlights: [
      '24+ posts, 16+ reels & 30+ stories/month',
      'Complete digital strategy, positioning & campaign planning',
      'Full community, DM, lead-gen & reputation management',
      'Advanced video editing, reel scripting & influencer outreach',
    ],
    sections: [
      {
        title: 'Strategy',
        items: [
          'Complete digital strategy',
          'Monthly content strategy',
          'Brand positioning',
          'Audience research',
          'Competitor analysis',
          'Campaign planning',
        ],
      },
      {
        title: 'Content',
        items: [
          '24+ posts/month',
          '16+ reels/month',
          '30+ stories/month',
          'Carousel & educational content',
          'Trend-based content',
          'Founder/personal-brand content where applicable',
        ],
      },
      {
        title: 'Community',
        items: [
          'Comment management',
          'DM management',
          'Audience engagement',
          'Lead-generation coordination',
          'Reputation monitoring',
        ],
      },
      {
        title: 'Creative',
        items: [
          'Graphic design',
          'Advanced video editing',
          'Reel scripting',
          'Creative campaigns',
          'Content shoot coordination',
        ],
      },
      {
        title: 'Growth',
        items: [
          'Influencer collaboration',
          'Creator outreach',
          'Campaign amplification',
          'Social media contests/campaigns',
          'Monthly analytics',
          'Strategy consultation',
        ],
      },
    ],
    bestFor:
      'Established brands, public-facing businesses, founders and organisations requiring an integrated digital presence.',
  },
];

function PackageCard({
  pkg,
  onSelect,
}: {
  pkg: ServicePackage;
  onSelect: (pkg: ServicePackage) => void;
}) {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      onClick={() => onSelect(pkg)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(pkg);
        }
      }}
      className={`group flex flex-col justify-between border border-black/15 bg-white p-6 sm:p-8 transition-all duration-500 ease-smooth hover:border-black cursor-pointer ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div>
        {/* Top Row: Number & Optional Badge */}
        <div className="flex items-center justify-between gap-3 mb-6">
          <span className="text-label uppercase tracking-[0.15em] text-grey font-medium">
            Tier {pkg.num}
          </span>
          {pkg.badge && (
            <span className="px-2.5 py-1 bg-black text-white text-[10px] uppercase tracking-[0.14em] font-medium">
              {pkg.badge}
            </span>
          )}
        </div>

        {/* Title & Price */}
        <div className="pb-6 border-b border-black/10">
          <h3 className="text-subhead font-bold tracking-tight text-black">
            {pkg.name}
          </h3>
          <div className="mt-3 flex items-baseline gap-1">
            <span className="text-2xl sm:text-3xl font-bold tracking-tight text-black">
              {pkg.price}
            </span>
            <span className="text-sm text-grey">{pkg.period}</span>
          </div>
          <p className="text-sm text-grey-dark mt-3 leading-relaxed">
            {pkg.audience}
          </p>
        </div>

        {/* Platforms or Objective Snapshot */}
        {pkg.platforms && (
          <div className="py-4 border-b border-black/10">
            <p className="text-[11px] uppercase tracking-[0.14em] text-grey mb-1">
              Platforms
            </p>
            <p className="text-sm font-medium text-black">{pkg.platforms}</p>
          </div>
        )}
        {pkg.objective && (
          <div className="py-4 border-b border-black/10">
            <p className="text-[11px] uppercase tracking-[0.14em] text-grey mb-1">
              Objective
            </p>
            <p className="text-sm text-grey-dark leading-relaxed">
              {pkg.objective}
            </p>
          </div>
        )}

        {/* Highlights Preview */}
        <ul className="py-6 space-y-2.5">
          {pkg.highlights.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-sm text-grey-dark">
              <Check size={15} className="mt-0.5 shrink-0 text-black" strokeWidth={2} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom Action */}
      <div className="pt-4 border-t border-black/10 flex items-center justify-between">
        <span className="text-label uppercase tracking-[0.12em] font-medium text-black">
          View Full Scope
        </span>
        <span className="inline-flex items-center justify-center w-8 h-8 border border-black/20 group-hover:bg-black group-hover:text-white group-hover:border-black transition-all duration-300">
          <ArrowRight size={15} />
        </span>
      </div>
    </div>
  );
}

function PackageModal({
  pkg,
  onClose,
}: {
  pkg: ServicePackage;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-xs"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="package-modal-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] flex flex-col bg-white border border-black shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-black text-white px-5 sm:px-8 py-6 flex items-start justify-between gap-4 shrink-0">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-[11px] uppercase tracking-[0.16em] text-white/60">
                {pkg.category === 'pr'
                  ? 'PR & Communications'
                  : 'Social Media Management'}{' '}
                — Tier {pkg.num}
              </span>
              {pkg.badge && (
                <span className="px-2 py-0.5 border border-white/30 text-[10px] uppercase tracking-[0.12em] text-white">
                  {pkg.badge}
                </span>
              )}
            </div>
            <h2
              id="package-modal-title"
              className="text-2xl sm:text-3xl font-bold tracking-tight"
            >
              {pkg.name}{' '}
              <span className="font-normal text-white/80 ml-1">
                — {pkg.price}
                <span className="text-sm text-white/60">{pkg.period}</span>
              </span>
            </h2>
            <p className="text-sm text-white/70 mt-2">{pkg.audience}</p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-white/70 hover:text-white border border-white/20 hover:border-white transition-colors shrink-0"
            aria-label="Close package details"
          >
            <X size={18} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto px-5 sm:px-8 py-6 space-y-6">
          {/* Objective / Platforms */}
          {(pkg.objective || pkg.platforms) && (
            <div className="bg-black/[0.03] border border-black/10 p-4 sm:p-5">
              {pkg.platforms && (
                <div>
                  <p className="text-[11px] uppercase tracking-[0.14em] text-grey font-medium mb-1">
                    Platforms Covered
                  </p>
                  <p className="text-sm sm:text-base font-medium text-black">
                    {pkg.platforms}
                  </p>
                </div>
              )}
              {pkg.objective && (
                <div>
                  <p className="text-[11px] uppercase tracking-[0.14em] text-grey font-medium mb-1">
                    Objective
                  </p>
                  <p className="text-sm sm:text-base text-black leading-relaxed">
                    {pkg.objective}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Standard Flat List */}
          {pkg.includes && (
            <div>
              <h3 className="text-label uppercase tracking-[0.14em] font-semibold text-black mb-4">
                What&apos;s Included
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                {pkg.includes.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-sm text-grey-dark"
                  >
                    <Check
                      size={15}
                      className="mt-0.5 shrink-0 text-black"
                      strokeWidth={2}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Categorized Sections (Signature PR / Premium Social) */}
          {pkg.sections && (
            <div>
              <h3 className="text-label uppercase tracking-[0.14em] font-semibold text-black mb-4">
                Scope &amp; Capabilities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {pkg.sections.map((section) => (
                  <div
                    key={section.title}
                    className="border border-black/10 p-4 sm:p-5"
                  >
                    <h4 className="text-xs uppercase tracking-[0.14em] font-bold text-black pb-2.5 mb-3 border-b border-black/10">
                      {section.title}
                    </h4>
                    <ul className="space-y-2">
                      {section.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-grey-dark"
                        >
                          <Check
                            size={14}
                            className="mt-1 shrink-0 text-black"
                            strokeWidth={2}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Deliverables / Best For */}
          {pkg.deliverables && (
            <div className="border-t border-black/10 pt-5">
              <p className="text-[11px] uppercase tracking-[0.14em] text-grey font-medium mb-1.5">
                Key Deliverables
              </p>
              <p className="text-sm font-medium text-black leading-relaxed">
                {pkg.deliverables}
              </p>
            </div>
          )}

          {pkg.bestFor && (
            <div className="border-t border-black/10 pt-5">
              <p className="text-[11px] uppercase tracking-[0.14em] text-grey font-medium mb-1.5">
                Best For
              </p>
              <p className="text-sm font-medium text-black leading-relaxed">
                {pkg.bestFor}
              </p>
            </div>
          )}

          {/* Note / Disclaimer */}
          {pkg.note && (
            <p className="text-xs text-grey italic border-t border-black/10 pt-4">
              {pkg.note}
            </p>
          )}
        </div>

        {/* Sticky Modal Footer */}
        <div className="border-t border-black/10 px-5 sm:px-8 py-4 bg-white flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 shrink-0">
          <div className="hidden sm:block">
            <span className="text-xs uppercase tracking-[0.12em] text-grey block">
              Selected Package
            </span>
            <span className="text-sm font-bold text-black">
              {pkg.name} ({pkg.price}
              {pkg.period})
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-5 py-2.5 border border-black/20 text-black text-label uppercase tracking-[0.12em] font-medium hover:border-black transition-colors"
            >
              Close
            </button>
            <Link
              to="/contact"
              onClick={onClose}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-black text-white text-label uppercase tracking-[0.12em] font-medium border border-black hover:bg-white hover:text-black transition-all duration-300"
            >
              Enquire Now
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Opportunities() {
  const [activeTab, setActiveTab] = useState<Category>('pr');
  const [selectedPkg, setSelectedPkg] = useState<ServicePackage | null>(null);

  const packages = activeTab === 'pr' ? PR_PACKAGES : SOCIAL_PACKAGES;

  return (
    <>
      <SEO
        title="Social Media & PR Packages | The Office Hire"
        description="Explore our PR & Communications and Social Media Management packages designed for startups, growing brands, and established organisations."
      />
      <PageLayout>
        {/* HERO */}
        <section className="bg-white px-5 sm:px-8 lg:px-12 pt-12 pb-10 lg:pt-20 lg:pb-14">
          <div className="max-w-7xl mx-auto">
            <Reveal>
              <SectionLabel>Social Media &amp; PR</SectionLabel>
            </Reveal>
            <Reveal delay={1}>
              <h1 className="text-hero font-bold tracking-tight leading-[0.92] mt-5 mb-6">
                SOCIAL MEDIA
                <br />
                &amp; PR
              </h1>
            </Reveal>
            <Reveal delay={2}>
              <p className="text-body-lg text-grey-dark max-w-2xl">
                Strategic public relations and full-service social media management built to establish credibility, amplify your voice, and grow sustained brand authority.
              </p>
            </Reveal>
          </div>
        </section>

        {/* TABS + PACKAGES GRID */}
        <section className="bg-white px-5 sm:px-8 lg:px-12 pb-20 lg:pb-32">
          <div className="max-w-7xl mx-auto">
            {/* Category Tabs */}
            <Reveal>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 lg:mb-12 border-b border-black/10 pb-6">
                <div className="grid grid-cols-2 sm:inline-flex gap-2 sm:gap-3">
                  <button
                    onClick={() => setActiveTab('pr')}
                    className={`px-4 sm:px-6 py-3 text-[11px] sm:text-label uppercase tracking-[0.12em] font-medium transition-all duration-300 border text-center ${
                      activeTab === 'pr'
                        ? 'bg-black text-white border-black'
                        : 'bg-transparent text-black border-black/20 hover:border-black'
                    }`}
                  >
                    PR &amp; Communications (04)
                  </button>
                  <button
                    onClick={() => setActiveTab('social')}
                    className={`px-4 sm:px-6 py-3 text-[11px] sm:text-label uppercase tracking-[0.12em] font-medium transition-all duration-300 border text-center ${
                      activeTab === 'social'
                        ? 'bg-black text-white border-black'
                        : 'bg-transparent text-black border-black/20 hover:border-black'
                    }`}
                  >
                    Social Media (04)
                  </button>
                </div>

                <p className="text-xs uppercase tracking-[0.14em] text-grey">
                  Click any package to view full deliverables
                </p>
              </div>
            </Reveal>

            {/* Section Sub-intro */}
            <div className="mb-8">
              <h2 className="text-subhead font-bold tracking-tight text-black">
                {activeTab === 'pr'
                  ? 'PR & Communications Packages'
                  : 'Social Media Management Packages'}
              </h2>
              <p className="text-sm sm:text-base text-grey-dark mt-1.5 max-w-2xl">
                {activeTab === 'pr'
                  ? 'From initial media visibility to executive positioning and crisis communication.'
                  : 'Consistent content, creative direction, and community management tailored to your platforms.'}
              </p>
            </div>

            {/* 2-Column Responsive Grid */}
            <div
              key={activeTab}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
            >
              {packages.map((pkg) => (
                <PackageCard
                  key={pkg.id}
                  pkg={pkg}
                  onSelect={setSelectedPkg}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTASection
          headline={
            <>
              NEED A CUSTOM
              <br />
              COMMUNICATION PLAN?
            </>
          }
          buttonText="Get in Touch"
          buttonTo="/contact"
          variant="black"
        />
      </PageLayout>

      {/* Package Detail Modal */}
      {selectedPkg && (
        <PackageModal
          pkg={selectedPkg}
          onClose={() => setSelectedPkg(null)}
        />
      )}
    </>
  );
}