import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Check, ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO';
import PageLayout from '@/components/PageLayout';
import Button from '@/components/Button';
import SectionLabel from '@/components/SectionLabel';
import Reveal from '@/components/Reveal';
import ImageBlock from '@/components/ImageBlock';
import ProcessStep from '@/components/ProcessStep';
import CTASection from '@/components/CTASection';
import { useReveal } from '@/hooks/useReveal';
import { IMAGES } from '@/data/images';

interface FeatureItem {
  title: string;
  description: string;
}

interface ProcessStage {
  step: string;
  title: string;
  description?: string;
  subItems?: FeatureItem[];
}

interface QuickSpec {
  label: string;
  value: string;
}

interface EmployerPackage {
  id: string;
  num: string;
  badge: string;
  title: string;
  tagline: string;
  cardSummary: string;
  overview: string;
  quickSpecs: QuickSpec[];
  cardHighlights: string[];
  keyFeatures: FeatureItem[];
  howItWorksTitle: string;
  howItWorksIntro?: string;
  howItWorksSteps?: ProcessStage[];
  howItWorksBullets?: string[];
  howItWorksNarrative?: string;
  whyChoose: FeatureItem[];
}

const EMPLOYER_PACKAGES: EmployerPackage[] = [
  {
    id: 'hyt',
    num: '01',
    badge: '2 – 50+ Hires',
    title: 'HYT — Hire Your Team',
    tagline: 'End-to-End Scalable Team Recruitment',
    cardSummary:
      'All-in-one bulk and multi-role recruitment handling everything from sourcing to verification for growing businesses.',
    overview:
      'Scale your workforce effortlessly with the HYT Package by The Office Hire. Designed for growing businesses, this all-in-one recruitment solution handles everything from sourcing to verification, delivering a ready-to-work team tailored specifically to your operational needs.',
    quickSpecs: [
      { label: 'Hiring Scale', value: '2 to 50+ Candidates' },
      { label: 'Scope', value: 'Multi-Role & Multi-Department' },
      { label: 'Client Support', value: '24/7 Dedicated Assistance' },
    ],
    cardHighlights: [
      'Recruit 2 to 50+ candidates in one campaign',
      'Multi-role & multi-department flexibility',
      '3-stage vetting + optional physical round',
      '24/7 dedicated client support',
    ],
    keyFeatures: [
      {
        title: 'Scalable Hiring',
        description:
          'Recruit anywhere from 2 to 50+ candidates in a single campaign.',
      },
      {
        title: 'Multi-Role Flexibility',
        description:
          'Hire across multiple departments and designations simultaneously.',
      },
      {
        title: 'Tailored to You',
        description:
          'A fully customizable recruitment drive built around your specific prerequisites.',
      },
      {
        title: 'Dedicated Support',
        description:
          '24/7 client assistance throughout the entire hiring cycle.',
      },
    ],
    howItWorksTitle: 'How It Works',
    howItWorksSteps: [
      {
        step: 'Step 01',
        title: 'Discovery & Strategy Consultation',
        description:
          'Before sourcing candidates, one of our seasoned recruitment specialists conducts an in-depth consultation with you to understand your business model, company culture, and exact role requirements. This ensures we target talent that aligns seamlessly with your goals.',
      },
      {
        step: 'Step 02',
        title: 'Our 3-Stage Vetting Process',
        subItems: [
          {
            title: 'Precision Shortlisting',
            description:
              'We source and filter applicants to match your exact criteria.',
          },
          {
            title: 'Virtual Interviews',
            description:
              'Our team conducts initial screening interviews to assess skills and cultural fit.',
          },
          {
            title: 'Background Verification',
            description:
              'We verify credentials and work history so you only meet reliable candidates.',
          },
        ],
      },
      {
        step: 'Step 03',
        title: 'Final Selection (Optional Physical Round)',
        description:
          'Once vetted, we present you with the top candidates. If desired, you can conduct an optional face-to-face interview before making the final offer—giving you complete control without the administrative burden.',
      },
    ],
    whyChoose: [
      {
        title: 'Slash Recruitment Costs',
        description:
          'Eliminate daily job-board ad spends, expensive recruitment portal subscriptions, and high-retainer HR fees. We deliver complete hiring solutions at nearly half the cost of traditional in-house recruitment.',
      },
      {
        title: 'Protect Your Productivity',
        description:
          'Stop losing valuable business hours to endless cold-calling, resume screening, and preliminary interviews. Keep your team focused on growth while we handle the heavy lifting.',
      },
      {
        title: 'Your Vision, Our Execution',
        description:
          'You set the standards; we execute them. Every requirement is noted and strictly applied throughout the search.',
      },
      {
        title: 'Proven Expertise',
        description:
          'Backed by experienced recruiters with a sharp eye for talent, we ensure every new hire adds immediate value to your organization.',
      },
    ],
  },
  {
    id: 'hr-partner',
    num: '02',
    badge: 'Dedicated HR Partner',
    title: 'Hire Us As Your HR',
    tagline: 'Your Vision, Our Vetting: Building Teams That Perform',
    cardSummary:
      'A dedicated, background-verified HR partner managing daily operations, compliance, payroll, and hiring—at half the in-house cost.',
    overview:
      'Elevate your workforce management with a dedicated, experienced HR partner from The Office Hire. Designed for businesses seeking seamless internal operations without the overhead of a full-time in-house department, this package provides a proactive HR professional aligned with your company’s vision, agenda, and operational standards.',
    quickSpecs: [
      { label: 'Work Schedule', value: '5 Days a Week Active Support' },
      { label: 'Engagement Model', value: 'Hybrid (Virtual + On-Site)' },
      { label: 'Tools & Portals', value: 'Fully Included (Zero Ad Spend)' },
    ],
    cardHighlights: [
      'Seasoned, background-verified HR specialist',
      'Hybrid virtual operations + on-site meetings',
      'Payroll, compliance & conflict resolution',
      'Hiring tools & network connections included',
    ],
    keyFeatures: [
      {
        title: 'Experienced & Accountable',
        description:
          'Work with a seasoned, background-verified HR specialist committed to professionalism.',
      },
      {
        title: 'Hybrid Flexibility',
        description:
          'Seamless virtual management for daily operations across your entire team, with on-site physical presence for critical meetings.',
      },
      {
        title: 'Dedicated Schedule',
        description: 'Active operational support 5 days a week.',
      },
      {
        title: 'Resources Included',
        description:
          'No need to invest in buying hiring tools and resources—we have it covered with built-in hiring tools and industry connections.',
      },
    ],
    howItWorksTitle: 'How We Do It',
    howItWorksIntro:
      'Every growing organization needs an HR partner equipped with strong industry networks and operational expertise. We take complete ownership of your daily people-operations so your leadership can focus on scaling, ensuring zero bottlenecks in:',
    howItWorksBullets: [
      'End-to-End Recruitment (utilizing our proven 3-Step Vetting Process)',
      'Regulatory & Policy Compliance Management',
      'Payroll, Remuneration Distribution & Incentive Calculations',
      'Workplace Conduct & Conflict Resolution',
    ],
    whyChoose: [
      {
        title: 'Cut Overhead in Half',
        description:
          'Get a full-fledged HR department at 50% of the cost of hiring a single full-time HR manager—with zero hidden charges.',
      },
      {
        title: 'Zero Recruitment Ad Spend',
        description:
          'Eliminate recurring expenses on job portals, premium listings, and sourcing tools; we leverage our own established resources.',
      },
      {
        title: 'Data-Driven Performance Tracking',
        description:
          'We collaborate weekly with your Team Leaders (TLs) to compile unbiased employee performance reports for upper management—ensuring transparent, accurate incentive distribution.',
      },
      {
        title: 'Guaranteed Accountability & Trust',
        description:
          'Maintain your company’s high standards with a thoroughly vetted HR representative operating within a strict framework of confidentiality and professionalism.',
      },
      {
        title: 'Proven Hiring Excellence',
        description:
          'Whenever your team expands, we deploy our signature 3-step hiring methodology (Shortlisting, Virtual Interviews, and Verification) to bring in top-tier talent.',
      },
    ],
  },
  {
    id: 'hire-the-one',
    num: '03',
    badge: 'Starts at ₹3,000 Flat',
    title: 'Hire The “One”',
    tagline: 'Targeted Recruitment, Flat Pricing, Zero Hassle.',
    cardSummary:
      'Fast-tracked, budget-friendly hiring for a single critical role—vetted and job-ready within two weeks.',
    overview:
      'Need to fill a single, critical role without overpaying? Hire The “One” is a fast-tracked, budget-friendly recruitment solution designed to find your ideal candidate within two weeks—at a fraction of traditional hiring costs.',
    quickSpecs: [
      { label: 'Turnaround Time', value: 'Within 2 Weeks' },
      { label: 'Pricing Model', value: 'Starting at ₹3,000 Flat' },
      { label: 'Client Support', value: '24/7 Until Role Closure' },
    ],
    cardHighlights: [
      'Vetted, job-ready matches within 2 weeks',
      'Flat pricing from ₹3,000 — zero hidden fees',
      'Powered by our 3-Step Hiring Process',
      'Earn redeemable brand credits on every hire',
    ],
    keyFeatures: [
      {
        title: 'Rapid Turnaround',
        description: 'Receive vetted, job-ready matches within 2 weeks.',
      },
      {
        title: 'Flat, Transparent Pricing',
        description:
          'Starting at just ₹3,000, with zero hidden charges, portal fees, or top-ups.',
      },
      {
        title: 'Proven Vetting',
        description: 'Powered by our signature 3-Step Hiring Process.',
      },
      {
        title: '24/7 Support',
        description:
          'Round-the-clock client assistance until the role is closed.',
      },
    ],
    howItWorksTitle: 'How We Do It',
    howItWorksNarrative:
      'We begin with a focused consultation to understand your business model, role expectations, and ideal candidate profile. From there, we execute our 3-Step Vetting Process (Shortlisting, Virtual Interviews, and Verification). You pay a single flat fee—no expensive job-board premiums—and get a verified professional ready to join your team.',
    whyChoose: [
      {
        title: 'Unbeatable Cost-Efficiency',
        description:
          'Why pay a full HR retainer or spend heavily on ads when you can close a single position for ₹3K?',
      },
      {
        title: 'Zero Wasted Hours',
        description:
          'Stay focused on daily operations while we filter out unqualified applicants.',
      },
      {
        title: 'Role-Specific Precision',
        description:
          'Every candidate is screened strictly against your brand’s operational requirements.',
      },
      {
        title: 'Exclusive Brand Credits',
        description:
          'Earn redeemable service credits with every hire that can be applied toward future packages with The Office Hire.',
      },
    ],
  },
];

function EmployerPackageCard({
  pkg,
  onSelect,
}: {
  pkg: EmployerPackage;
  onSelect: (pkg: EmployerPackage) => void;
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
      className={`group flex flex-col justify-between border border-black/15 bg-white p-6 sm:p-8 transition-all duration-500 ease-smooth hover:border-black hover:-translate-y-1 cursor-pointer ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div>
        {/* Number & Scale Badge */}
        <div className="flex items-center justify-between gap-3 mb-6">
          <span className="text-label uppercase tracking-[0.16em] text-grey font-medium">
            Package {pkg.num}
          </span>
          <span className="px-2.5 py-1 bg-black text-white text-[10px] uppercase tracking-[0.14em] font-medium">
            {pkg.badge}
          </span>
        </div>

        {/* Title & Tagline */}
        <div className="pb-6 border-b border-black/10">
          <h3 className="text-2xl font-bold tracking-tight text-black">
            {pkg.title}
          </h3>
          <p className="text-xs uppercase tracking-[0.12em] text-grey font-medium mt-2">
            {pkg.tagline}
          </p>
          <p className="text-sm text-grey-dark mt-4 leading-relaxed">
            {pkg.cardSummary}
          </p>
        </div>

        {/* Highlights */}
        <ul className="py-6 space-y-3">
          {pkg.cardHighlights.map((item, idx) => (
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

      {/* Bottom CTA Bar */}
      <div className="pt-5 border-t border-black/10 flex items-center justify-between">
        <span className="text-label uppercase tracking-[0.12em] font-medium text-black">
          Explore Package
        </span>
        <span className="inline-flex items-center justify-center w-9 h-9 border border-black/20 group-hover:bg-black group-hover:text-white group-hover:border-black transition-all duration-300">
          <ArrowRight size={15} />
        </span>
      </div>
    </div>
  );
}

function EmployerPackageModal({
  pkg,
  onClose,
}: {
  pkg: EmployerPackage;
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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="employer-package-modal-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-white border border-black shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Dark Header */}
        <div className="bg-black text-white px-5 sm:px-8 py-6 flex items-start justify-between gap-4 shrink-0">
          <div>
            <div className="flex flex-wrap items-center gap-2.5 mb-2">
              <span className="text-[11px] uppercase tracking-[0.16em] text-white/60">
                Employer Solutions — Package {pkg.num}
              </span>
              <span className="px-2.5 py-0.5 border border-white/30 text-[10px] uppercase tracking-[0.12em] text-white">
                {pkg.badge}
              </span>
            </div>
            <h2
              id="employer-package-modal-title"
              className="text-2xl sm:text-3xl font-bold tracking-tight"
            >
              {pkg.title}
            </h2>
            <p className="text-sm text-white/75 mt-1.5">{pkg.tagline}</p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-white/70 hover:text-white border border-white/20 hover:border-white transition-colors shrink-0"
            aria-label="Close package details"
          >
            <X size={18} />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto px-5 sm:px-8 py-6 sm:py-8 space-y-8">
          {/* Quick-Glance Executive Specs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 border border-black/15 divide-y sm:divide-y-0 sm:divide-x divide-black/15 bg-black/[0.02]">
            {pkg.quickSpecs.map((spec) => (
              <div key={spec.label} className="p-4">
                <p className="text-[10px] uppercase tracking-[0.16em] text-grey font-medium">
                  {spec.label}
                </p>
                <p className="text-sm font-bold text-black mt-1">
                  {spec.value}
                </p>
              </div>
            ))}
          </div>

          {/* Package Overview */}
          <div>
            <h3 className="text-label uppercase tracking-[0.16em] font-semibold text-grey mb-2.5">
              Package Overview
            </h3>
            <p className="text-sm sm:text-base text-black leading-relaxed">
              {pkg.overview}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-label uppercase tracking-[0.16em] font-semibold text-grey mb-4">
              Key Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pkg.keyFeatures.map((feat) => (
                <div
                  key={feat.title}
                  className="border border-black/10 p-4 sm:p-5 bg-white"
                >
                  <div className="flex items-start gap-2.5">
                    <Check
                      size={16}
                      className="mt-0.5 shrink-0 text-black"
                      strokeWidth={2.2}
                    />
                    <div>
                      <h4 className="text-sm font-bold text-black">
                        {feat.title}
                      </h4>
                      <p className="text-sm text-grey-dark mt-1 leading-relaxed">
                        {feat.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* How It Works / How We Do It */}
          <div className="border-t border-black/10 pt-7">
            <h3 className="text-label uppercase tracking-[0.16em] font-semibold text-grey mb-4">
              {pkg.howItWorksTitle}
            </h3>

            {/* Package 1: Multi-step Process */}
            {pkg.howItWorksSteps && (
              <div className="space-y-4">
                {pkg.howItWorksSteps.map((stage) => (
                  <div
                    key={stage.step}
                    className="border border-black/10 p-5 bg-black/[0.015]"
                  >
                    <div className="flex flex-wrap items-baseline gap-2.5 mb-2">
                      <span className="px-2 py-0.5 bg-black text-white text-[10px] uppercase tracking-[0.14em] font-medium">
                        {stage.step}
                      </span>
                      <h4 className="text-base font-bold text-black">
                        {stage.title}
                      </h4>
                    </div>
                    {stage.description && (
                      <p className="text-sm text-grey-dark leading-relaxed">
                        {stage.description}
                      </p>
                    )}
                    {stage.subItems && (
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
                        {stage.subItems.map((sub, idx) => (
                          <div
                            key={sub.title}
                            className="bg-white border border-black/10 p-3.5"
                          >
                            <span className="text-[10px] uppercase tracking-[0.14em] text-grey font-semibold">
                              0{idx + 1}
                            </span>
                            <h5 className="text-sm font-bold text-black mt-0.5">
                              {sub.title}
                            </h5>
                            <p className="text-xs text-grey-dark mt-1 leading-relaxed">
                              {sub.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Package 2: Intro + Operational Ownership Grid */}
            {pkg.howItWorksIntro && pkg.howItWorksBullets && (
              <div className="space-y-4">
                <p className="text-sm sm:text-base text-grey-dark leading-relaxed">
                  {pkg.howItWorksIntro}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {pkg.howItWorksBullets.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 border border-black/10 p-4 bg-black/[0.015]"
                    >
                      <span className="text-xs font-bold text-black mt-0.5">
                        0{idx + 1}
                      </span>
                      <p className="text-sm font-medium text-black leading-snug">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Package 3: Focused Narrative + 3-Step Strip */}
            {pkg.howItWorksNarrative && (
              <div className="space-y-4">
                <p className="text-sm sm:text-base text-grey-dark leading-relaxed">
                  {pkg.howItWorksNarrative}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    '01. Shortlisting',
                    '02. Virtual Interviews',
                    '03. Verification',
                  ].map((step) => (
                    <div
                      key={step}
                      className="border border-black/15 px-4 py-3 text-xs uppercase tracking-[0.12em] font-bold text-black bg-black/[0.02]"
                    >
                      {step}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Why Choose The Office Hire? */}
          <div className="bg-black text-white p-5 sm:p-7">
            <h3 className="text-label uppercase tracking-[0.16em] font-semibold text-white/60 mb-5">
              Why Choose The Office Hire?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {pkg.whyChoose.map((reason) => (
                <div
                  key={reason.title}
                  className="border-t border-white/15 pt-4"
                >
                  <h4 className="text-sm font-bold text-white">
                    {reason.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-white/70 mt-1.5 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sticky Footer */}
        <div className="border-t border-black/10 px-5 sm:px-8 py-4 bg-white flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 shrink-0">
          <div className="hidden sm:block">
            <span className="text-[11px] uppercase tracking-[0.14em] text-grey block">
              Selected Solution
            </span>
            <span className="text-sm font-bold text-black">{pkg.title}</span>
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
              Discuss This Package
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Employers() {
  const [selectedPkg, setSelectedPkg] = useState<EmployerPackage | null>(null);

  return (
    <>
      <SEO
        title="Recruitment Support for Employers | The Office Hire"
        description="We help employers source, screen, and shortlist the right people for the roles that matter."
      />
      <PageLayout>
        {/* HERO */}
        <section className="bg-white px-5 sm:px-8 lg:px-12 pt-12 pb-16 lg:pt-20 lg:pb-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-7">
                <Reveal>
                  <SectionLabel>For Employers</SectionLabel>
                </Reveal>
                <Reveal delay={1}>
                  <h1 className="text-hero font-bold tracking-tight leading-[0.92] mt-5 mb-6">
                    YOU HAVE
                    <br />
                    A ROLE.
                  </h1>
                </Reveal>
                <Reveal delay={2}>
                  <h2 className="text-subhead font-medium text-grey-dark max-w-lg mb-8">
                    We help you find the people.
                  </h2>
                </Reveal>
                <Reveal delay={3}>
                  <p className="text-body-lg text-grey-dark max-w-md mb-8">
                    From understanding the requirement to connecting you with the right candidate, we manage the search so you can focus on the hire.
                  </p>
                </Reveal>
                <Reveal delay={4}>
                  <Button to="/contact" variant="primary">
                    Discuss Your Hiring Needs
                  </Button>
                </Reveal>
              </div>
              <div className="lg:col-span-5 lg:pt-8">
                <ImageBlock
                  src={IMAGES.conferenceRoom}
                  alt="Business professionals in a modern conference room meeting"
                  ratio="portrait"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* WHAT WE HELP WITH */}
        <section className="bg-white px-5 sm:px-8 lg:px-12 py-20 lg:py-32 border-t border-black/10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 lg:mb-16">
              <div>
                <Reveal>
                  <SectionLabel>What We Help With</SectionLabel>
                </Reveal>
                <Reveal delay={1}>
                  <h2 className="text-display font-bold tracking-tight mt-4">
                    Our Services
                  </h2>
                </Reveal>
              </div>
              <Reveal delay={2}>
                <p className="text-sm sm:text-base text-grey-dark max-w-md lg:text-right">
                  Structured recruitment and HR solutions built for scale, speed, and accountability. Select any package to inspect the full process and deliverables.
                </p>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              {EMPLOYER_PACKAGES.map((pkg) => (
                <EmployerPackageCard
                  key={pkg.id}
                  pkg={pkg}
                  onSelect={setSelectedPkg}
                />
              ))}
            </div>
          </div>
        </section>

        {/* HOW WE WORK */}
        <section className="bg-white-light px-5 sm:px-8 lg:px-12 py-20 lg:py-32">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
              <div className="lg:col-span-4">
                <Reveal>
                  <SectionLabel>How We Work</SectionLabel>
                </Reveal>
                <Reveal delay={1}>
                  <h2 className="text-display font-bold tracking-tight mt-4">
                    Our Golden
                    <br />
                    Rule
                  </h2>
                </Reveal>
              </div>
              <div className="lg:col-span-7 lg:col-start-6">
                <ProcessStep number="01" title="Shortlisting" description="We present the most suitable people for your role." />
                <ProcessStep number="02" title="Interview" description="We interview the matching candidates." />
                <ProcessStep number="03" title="Verification" description="We assess profiles, experience, and fit." isLast />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTASection
          headline={<>LET'S TALK<br />ABOUT THE ROLE.</>}
          buttonText="Get in Touch"
          buttonTo="/contact"
          variant="black"
        />
      </PageLayout>

      {/* Package Detail Modal */}
      {selectedPkg && (
        <EmployerPackageModal
          pkg={selectedPkg}
          onClose={() => setSelectedPkg(null)}
        />
      )}
    </>
  );
}