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
                Our Services
              </h2>
            </Reveal>
            <div className="border-b border-black/10">
              <ServiceRow number="01" title="HYT- Hire Your Team" description="TO HIRE YOUR COMPLETE TEAM WITH OUR HYT PACKAGE, THIS SERVICE PROVIDES YOU A HASSLE FREE HIRING PROCESS FOR YOUR BUSINESS" />
              <ServiceRow number="02" title="Hire Us As Your HR" description="Your Vision, Our Vetting: Building Teams That Perform" />
              <ServiceRow number="03" title="Hire The “One”" description="Targeted Recruitment, Flat Pricing, Zero Hassle." />
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
    </>
  );
}
