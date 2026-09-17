import SEO from '@/components/SEO';
import PageLayout from '@/components/PageLayout';
import Button from '@/components/Button';
import SectionLabel from '@/components/SectionLabel';
import Reveal from '@/components/Reveal';
import { useReveal } from '@/hooks/useReveal';

const FLOW_STEPS = ['Company', 'Role', 'Search', 'Screen', 'Shortlist', 'People'];

function FlowStep({ step, index }: { step: string; index: number }) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={`flex flex-col items-center transition-all duration-700 ease-smooth ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <span className="text-label uppercase tracking-[0.18em] text-grey mb-4">
        {String(index + 1).padStart(2, '0')}
      </span>
      <span className="text-headline lg:text-display font-bold tracking-tight">
        {step}
      </span>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <>
      <SEO
        title="How Recruitment Works | The Office Hire"
        description="From requirement to people — our process is simple, clear, and human."
      />
      <PageLayout>
        {/* HERO */}
        <section className="bg-white px-5 sm:px-8 lg:px-12 pt-12 pb-16 lg:pt-20 lg:pb-24">
          <div className="max-w-7xl mx-auto">
            <Reveal>
              <SectionLabel>How It Works</SectionLabel>
            </Reveal>
            <Reveal delay={1}>
              <h1 className="text-hero font-bold tracking-tight leading-[0.92] mt-5">
                FROM
                <br />
                REQUIREMENT
                <br />
                TO PEOPLE.
              </h1>
            </Reveal>
          </div>
        </section>

        {/* FLOW GRAPHIC */}
        <section className="bg-black text-white px-5 sm:px-8 lg:px-12 py-20 lg:py-32">
          <div className="max-w-7xl mx-auto">
            <Reveal>
              <SectionLabel variant="light">The Process</SectionLabel>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="text-display font-bold tracking-tight mt-4 mb-16 lg:mb-24">
                The Process
              </h2>
            </Reveal>

            {/* Desktop: horizontal flow with lines */}
            <div className="hidden lg:flex flex-col gap-0">
              {FLOW_STEPS.map((step, i) => (
                <FlowStep key={step} step={step} index={i} />
              )).map((el, i) => (
                <div key={i} className="flex items-center justify-center">
                  {el}
                  {i < FLOW_STEPS.length - 1 && (
                    <div className="w-px h-16 bg-white/20 my-2" />
                  )}
                </div>
              ))}
            </div>

            {/* Mobile/Tablet: vertical flow with arrows */}
            <div className="lg:hidden flex flex-col items-center gap-2">
              {FLOW_STEPS.map((step, i) => (
                <div key={step} className="flex flex-col items-center">
                  <FlowStep step={step} index={i} />
                  {i < FLOW_STEPS.length - 1 && (
                    <span className="text-2xl text-white/30 my-3">↓</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TWO PATHS */}
        <section className="grid grid-cols-1 lg:grid-cols-2">
          {/* Employers */}
          <div className="bg-white px-5 sm:px-8 lg:px-12 py-20 lg:py-32 border-r border-black/10">
            <div className="max-w-md">
              <Reveal>
                <SectionLabel>For Employers</SectionLabel>
              </Reveal>
              <Reveal delay={1}>
                <h3 className="text-headline font-bold tracking-tight mt-4 mb-6">
                  Tell us what you need.
                </h3>
              </Reveal>
              <Reveal delay={2}>
                <p className="text-body-lg text-grey-dark mb-8">
                  Share the role, the team, and the kind of person you're looking for. We'll handle the search.
                </p>
              </Reveal>
              <Reveal delay={3}>
                <Button to="/employers" variant="primary">
                  For Employers
                </Button>
              </Reveal>
            </div>
          </div>

          {/* Job Seekers */}
          <div className="bg-white-light px-5 sm:px-8 lg:px-12 py-20 lg:py-32">
            <div className="max-w-md">
              <Reveal>
                <SectionLabel>For Job Seekers</SectionLabel>
              </Reveal>
              <Reveal delay={1}>
                <h3 className="text-headline font-bold tracking-tight mt-4 mb-6">
                  Tell us what you're looking for.
                </h3>
              </Reveal>
              <Reveal delay={2}>
                <p className="text-body-lg text-grey-dark mb-8">
                  Submit your profile and preferred role. We'll reach out when something relevant comes up.
                </p>
              </Reveal>
              <Reveal delay={3}>
                <Button to="/job-seekers" variant="primary">
                  For Job Seekers
                </Button>
              </Reveal>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-black text-white px-5 sm:px-8 lg:px-12 py-20 lg:py-32">
          <div className="max-w-7xl mx-auto">
            <Reveal>
              <h2 className="text-hero font-bold tracking-tight leading-[0.95] mb-10">
                READY TO
                <br />
                START?
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <Button to="/contact" variant="light-outline">
                Get in Touch
              </Button>
            </Reveal>
          </div>
        </section>
      </PageLayout>
    </>
  );
}
