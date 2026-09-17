import SEO from '@/components/SEO';
import PageLayout from '@/components/PageLayout';
import Button from '@/components/Button';
import SectionLabel from '@/components/SectionLabel';
import Reveal from '@/components/Reveal';
import ImageBlock from '@/components/ImageBlock';
import ServiceRow from '@/components/ServiceRow';
import ProcessStep from '@/components/ProcessStep';
import CTASection from '@/components/CTASection';
import { IMAGES } from '@/data/images';

export default function Employers() {
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
            <Reveal>
              <SectionLabel>What We Help With</SectionLabel>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="text-display font-bold tracking-tight mt-4 mb-12 lg:mb-16">
                What We
                <br />
                Help With
              </h2>
            </Reveal>
            <div className="border-b border-black/10">
              <ServiceRow number="01" title="Source" description="We identify and reach people who fit your requirements." />
              <ServiceRow number="02" title="Screen" description="We review profiles and assess candidates for quality and fit." />
              <ServiceRow number="03" title="Shortlist" description="We present the most suitable candidates for your consideration." />
              <ServiceRow number="04" title="Recruitment Support" description="We facilitate the process from introduction to connection." />
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
                    How We
                    <br />
                    Work
                  </h2>
                </Reveal>
              </div>
              <div className="lg:col-span-7 lg:col-start-6">
                <ProcessStep number="01" title="Understand" description="We learn about your role, team, and requirements." />
                <ProcessStep number="02" title="Search" description="We identify and reach out to matching candidates." />
                <ProcessStep number="03" title="Screen" description="We assess profiles, experience, and fit." />
                <ProcessStep number="04" title="Shortlist" description="We present the most suitable people for your role." />
                <ProcessStep number="05" title="Connect" description="We facilitate introductions and next steps." isLast />
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
    </>
  );
}
