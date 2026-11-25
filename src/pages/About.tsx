import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO';
import PageLayout from '@/components/PageLayout';
import SectionLabel from '@/components/SectionLabel';
import Reveal from '@/components/Reveal';
import CTASection from '@/components/CTASection';
import { useReveal } from '@/hooks/useReveal';

const BELIEFS = [
  {
    num: '01',
    label: 'People',
    text: 'The right person can transform a team.',
  },
  {
    num: '02',
    label: 'Teams',
    text: 'The right team can transform a business.',
  },
  {
    num: '03',
    label: 'Brand',
    text: 'The right brand can transform how that business is perceived.',
  },
];

const RECRUITMENT_STAGES = [
  {
    num: '01',
    title: 'Understanding',
    desc: 'We take the time to understand the organisation, the role, and the exact requirements behind every vacancy.',
  },
  {
    num: '02',
    title: 'Curating',
    desc: 'We identify and curate candidates based on skills, experience, suitability, and organisational alignment.',
  },
  {
    num: '03',
    title: 'Connecting',
    desc: 'We connect businesses with verified, relevant candidates—with an emphasis on speed, professionalism, and the right fit.',
  },
];

const WHO_WE_SERVE = [
  {
    title: 'Startups',
    desc: 'Building your founding team with dependable, high-ownership talent.',
  },
  {
    title: 'Growing Companies',
    desc: 'Scaling rapidly across departments without losing hiring quality.',
  },
  {
    title: 'Established Organisations',
    desc: 'Sourcing specialised professionals for critical, high-impact roles.',
  },
];

const ECOSYSTEM_PILLARS = [
  { num: '01', text: 'Where talent meets opportunity.' },
  { num: '02', text: 'Where businesses meet the right people.' },
  { num: '03', text: 'Where ideas meet the right audience.' },
];

const FOUNDERS = [
  {
    num: '01',
    name: 'Vaidehi Singh Suryavanshi',
    role: 'Co-Founder',
    focus: 'Strategy & Frameworks',
    bio: 'Vaidehi leads the development of comprehensive strategic frameworks and operational blueprints at The Office Hire. By translating high-level business goals into precise, actionable execution plans, she ensures the agency scales with clarity, efficiency, and a structured approach that cuts through conventional noise.',
  },
  {
    num: '02',
    name: 'Ansh Mishra',
    role: 'Co-Founder',
    focus: 'Operations & Execution',
    bio: 'Ansh oversees the entire operational lifecycle at The Office Hire, ensuring that every moving part—from initial client intake to final execution—runs with absolute precision and zero friction. His focus is on eliminating administrative bottlenecks and streamlining workflows to consistently deliver seamless, high-impact recruitment and PR solutions.',
  },
  {
    num: '03',
    name: 'Priyansh Mundra',
    role: 'Co-Founder',
    focus: 'Finance & Fiscal Architecture',
    bio: "Priyansh manages the financial health and fiscal strategy of The Office Hire, balancing disciplined resource allocation with sustainable business expansion. His goal is to back the agency's creative and operational ambitions with sound financial architecture, ensuring transparency and long-term economic stability.",
  },
  {
    num: '04',
    name: 'Krishna Saraswat',
    role: 'Co-Founder',
    focus: 'Communications & Media',
    bio: "Krishna heads communications, strategic alliances, and the external outlook of the organisation—building meaningful, long-term relationships with clients and collaborators. He oversees the organisation's media presence, ensuring the brand's voice remains clear, authentic, and deeply aligned with our human-centric values.",
  },
];

function FounderCard({ founder }: { founder: (typeof FOUNDERS)[0] }) {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      className={`flex flex-col justify-between border border-black/15 bg-white p-6 transition-all duration-700 ease-smooth hover:border-black ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div>
        {/* Top Tag */}
        <div className="flex items-center justify-between gap-2 pb-4 mb-5 border-b border-black/10">
          <span className="text-label uppercase tracking-[0.16em] text-grey font-medium">
            {founder.num}
          </span>
          <span className="text-[10px] uppercase tracking-[0.14em] text-grey font-medium">
            {founder.role}
          </span>
        </div>

        {/* Name & Focus */}
        <h3 className="text-xl font-bold tracking-tight text-black leading-snug">
          {founder.name}
        </h3>
        <p className="text-xs uppercase tracking-[0.12em] text-grey font-medium mt-1.5 mb-4">
          {founder.focus}
        </p>

        {/* Bio */}
        <p className="text-sm text-grey-dark leading-relaxed">{founder.bio}</p>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <>
      <SEO
        title="About The Office Hire | Recruitment, PR & Business Growth"
        description="Based out of Delhi NCR and serving businesses globally, The Office Hire is an integrated platform for recruitment, talent solutions, PR, and marketing."
      />
      <PageLayout>
        {/* HERO */}
        <section className="bg-white px-5 sm:px-8 lg:px-12 pt-12 pb-16 lg:pt-20 lg:pb-24">
          <div className="max-w-7xl mx-auto">
            <Reveal>
              <SectionLabel>About The Office Hire</SectionLabel>
            </Reveal>
            <Reveal delay={1}>
              <h1 className="text-hero font-bold tracking-tight leading-[0.92] mt-5 mb-8 max-w-5xl">
                BUILDING CONNECTIONS
                <br />
                THAT DRIVE BUSINESSES
                <br />
                FORWARD.
              </h1>
            </Reveal>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end pb-12 lg:pb-16 border-b border-black/10">
              <Reveal delay={2} className="lg:col-span-7">
                <p className="text-body-lg text-grey-dark leading-relaxed">
                  Every successful organisation begins with people. Based out of{' '}
                  <span className="text-black font-medium">Delhi NCR</span> and
                  serving businesses across the globe,{' '}
                  <span className="text-black font-medium">The Office Hire</span>{' '}
                  is an integrated platform offering recruitment, talent
                  solutions, PR, marketing, and business services designed to
                  help organisations grow.
                </p>
              </Reveal>

              {/* Quick Facts Strip */}
              <Reveal delay={3} className="lg:col-span-5">
                <div className="grid grid-cols-3 border border-black/15 divide-x divide-black/15 bg-black/[0.02]">
                  <div className="p-3.5 sm:p-4">
                    <p className="text-[10px] uppercase tracking-[0.14em] text-grey">
                      Base
                    </p>
                    <p className="text-xs sm:text-sm font-bold text-black mt-1">
                      Delhi NCR
                    </p>
                  </div>
                  <div className="p-3.5 sm:p-4">
                    <p className="text-[10px] uppercase tracking-[0.14em] text-grey">
                      Reach
                    </p>
                    <p className="text-xs sm:text-sm font-bold text-black mt-1">
                      Global
                    </p>
                  </div>
                  <div className="p-3.5 sm:p-4">
                    <p className="text-[10px] uppercase tracking-[0.14em] text-grey">
                      Focus
                    </p>
                    <p className="text-xs sm:text-sm font-bold text-black mt-1">
                      Hiring &amp; PR
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* 3-Step Philosophy Strip */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 pt-10 lg:pt-12">
              {BELIEFS.map((item, i) => (
                <Reveal key={item.num} delay={(i + 1) as 1 | 2 | 3}>
                  <div className="border-l-2 border-black pl-5 py-1">
                    <span className="text-[11px] uppercase tracking-[0.16em] text-grey font-medium">
                      {item.num} / {item.label}
                    </span>
                    <p className="text-base sm:text-lg font-bold tracking-tight text-black mt-1.5 leading-snug">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* RECRUITMENT APPROACH (3 KEY STAGES) */}
        <section className="bg-black text-white px-5 sm:px-8 lg:px-12 py-20 lg:py-32">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 lg:mb-16">
              <div>
                <Reveal>
                  <span className="inline-block text-label uppercase tracking-[0.18em] text-white/50 font-medium">
                    Our Recruitment Approach
                  </span>
                </Reveal>
                <Reveal delay={1}>
                  <h2 className="text-display font-bold tracking-tight mt-4">
                    Efficient. Precise.
                    <br />
                    Dependable.
                  </h2>
                </Reveal>
              </div>
              <Reveal delay={2}>
                <p className="text-sm sm:text-base text-white/65 max-w-md leading-relaxed">
                  Our hiring process is built around a simple principle—making
                  it simpler, faster, and more reliable to find the right people
                  for your team.
                </p>
              </Reveal>
            </div>

            {/* 01 Understanding | 02 Curating | 03 Connecting */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {RECRUITMENT_STAGES.map((stage, i) => (
                <Reveal key={stage.num} delay={(i + 1) as 1 | 2 | 3}>
                  <div className="h-full border border-white/15 p-6 sm:p-8 flex flex-col justify-between hover:border-white/40 transition-colors duration-300">
                    <div>
                      <span className="inline-block px-2.5 py-1 border border-white/25 text-[11px] uppercase tracking-[0.16em] text-white/80 font-medium mb-6">
                        Stage {stage.num}
                      </span>
                      <h3 className="text-2xl font-bold tracking-tight text-white mb-3">
                        {stage.title}
                      </h3>
                      <p className="text-sm sm:text-base text-white/65 leading-relaxed">
                        {stage.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Who We Partner With */}
            <div className="mt-14 lg:mt-20 pt-10 border-t border-white/15">
              <Reveal>
                <p className="text-[11px] uppercase tracking-[0.18em] text-white/50 font-medium mb-6">
                  Built For Every Stage Of Growth
                </p>
              </Reveal>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {WHO_WE_SERVE.map((group) => (
                  <div key={group.title} className="border-l border-white/20 pl-4">
                    <h4 className="text-base font-bold text-white">
                      {group.title}
                    </h4>
                    <p className="text-sm text-white/60 mt-1 leading-relaxed">
                      {group.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* BEYOND RECRUITMENT & VISION */}
        <section className="bg-white-light px-5 sm:px-8 lg:px-12 py-20 lg:py-32 border-b border-black/10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
              {/* Left: Beyond Recruitment */}
              <Reveal className="lg:col-span-7 flex flex-col justify-between bg-white border border-black/15 p-7 sm:p-10">
                <div>
                  <SectionLabel>Beyond Recruitment</SectionLabel>
                  <h2 className="text-display font-bold tracking-tight mt-4 mb-6">
                    More Than Services.
                    <br />
                    A Growth Partner.
                  </h2>
                  <p className="text-base text-grey-dark leading-relaxed mb-4">
                    Recruitment is only one part of what we do. Through our{' '}
                    <span className="text-black font-medium">
                      PR and marketing solutions
                    </span>
                    , we help businesses strengthen their presence, communicate
                    their story, and build meaningful connections with their
                    audiences.
                  </p>
                  <p className="text-base text-grey-dark leading-relaxed">
                    We believe modern businesses need more than isolated
                    vendors—they need reliable partners who understand the
                    bigger picture.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 mt-8 pt-6 border-t border-black/10">
                  <Link
                    to="/employers"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white text-label uppercase tracking-[0.12em] font-medium border border-black hover:bg-white hover:text-black transition-all duration-300"
                  >
                    Employer Solutions
                    <ArrowRight size={14} />
                  </Link>
                  <Link
                    to="/opportunities"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-transparent text-black text-label uppercase tracking-[0.12em] font-medium border border-black/25 hover:border-black transition-all duration-300"
                  >
                    Social Media &amp; PR
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </Reveal>

              {/* Right: The Vision Card */}
              <Reveal
                delay={2}
                className="lg:col-span-5 bg-black text-white p-7 sm:p-10 flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block text-[11px] uppercase tracking-[0.18em] text-white/50 font-medium">
                    Our Vision
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mt-4 mb-4">
                    Building a Professional Ecosystem.
                  </h3>
                  <p className="text-sm text-white/65 leading-relaxed mb-8">
                    This is the beginning of a journey to create a unified space
                    that powers modern organisations from the inside out:
                  </p>

                  <div className="space-y-4">
                    {ECOSYSTEM_PILLARS.map((pillar) => (
                      <div
                        key={pillar.num}
                        className="flex items-start gap-3.5 border-t border-white/15 pt-4"
                      >
                        <span className="text-xs font-bold text-white/50 mt-0.5">
                          {pillar.num}
                        </span>
                        <p className="text-base font-medium text-white">
                          {pillar.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-xs uppercase tracking-[0.16em] text-white/50 mt-8 pt-6 border-t border-white/15">
                  We are excited to build this journey with you.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* FOUR FOUNDERS */}
        <section className="bg-white px-5 sm:px-8 lg:px-12 py-20 lg:py-32">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 lg:mb-16">
              <div>
                <Reveal>
                  <SectionLabel>Leadership</SectionLabel>
                </Reveal>
                <Reveal delay={1}>
                  <h2 className="text-display font-bold tracking-tight mt-4 max-w-3xl">
                    Meet the People
                    <br />
                    Behind The Office Hire.
                  </h2>
                </Reveal>
              </div>
              <Reveal delay={2}>
                <p className="text-sm sm:text-base text-grey-dark max-w-sm lg:text-right">
                  Four co-founders combining strategy, operations, financial
                  discipline, and brand communications.
                </p>
              </Reveal>
            </div>

            {/* Responsive 4-col desktop, 2-col tablet, 1-col mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {FOUNDERS.map((founder) => (
                <FounderCard key={founder.num} founder={founder} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTASection
          headline={
            <>
              LET&apos;S BUILD THIS
              <br />
              JOURNEY TOGETHER.
            </>
          }
          buttonText="Get in Touch"
          buttonTo="/contact"
          variant="black"
        />
      </PageLayout>
    </>
  );
}