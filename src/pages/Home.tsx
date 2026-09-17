import { Link } from 'react-router-dom';
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

export default function Home() {
  return (
    <>
      <SEO
        title="The Office Hire | Recruitment & HR Consultancy"
        description="We help businesses find, screen and shortlist people for the roles that matter. Recruitment without the noise."
      />
      <PageLayout>
        {/* HERO */}
        <section className="bg-white px-5 sm:px-8 lg:px-12 pt-12 pb-16 lg:pt-20 lg:pb-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left: text */}
              <div className="lg:col-span-7">
                <Reveal>
                  <SectionLabel>The Office Hire</SectionLabel>
                </Reveal>
                <Reveal delay={1}>
                  <h1 className="text-hero font-bold tracking-tight leading-[0.92] mt-5 mb-6">
                    WE FIND
                    <br />
                    PEOPLE.
                  </h1>
                </Reveal>
                <Reveal delay={2}>
                  <p className="text-body-lg text-grey-dark max-w-md mb-8">
                    We help businesses find, screen and shortlist people for the roles that matter.
                  </p>
                </Reveal>
                <Reveal delay={3}>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button to="/employers" variant="primary" fullWidth>
                      For Employers
                    </Button>
                    <Button to="/job-seekers" variant="secondary" fullWidth>
                      For Job Seekers
                    </Button>
                  </div>
                </Reveal>
              </div>

              {/* Right: image */}
              <div className="lg:col-span-5 lg:pt-8">
                <ImageBlock
                  src={IMAGES.heroMeeting}
                  alt="Professionals collaborating in a modern office meeting"
                  ratio="portrait"
                  priority
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* BLACK STATEMENT */}
        <section className="bg-black text-white px-5 sm:px-8 lg:px-12 py-24 lg:py-40">
          <div className="max-w-7xl mx-auto">
            <Reveal>
              <h2 className="text-hero font-bold tracking-tight leading-[0.92] mb-8">
                PEOPLE
                <br />
                MAKE
                <br />
                COMPANIES.
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <p className="text-body-lg text-white/60 max-w-lg">
                We connect businesses with people who can help them move forward.
              </p>
            </Reveal>
          </div>
        </section>

        {/* WHAT WE DO */}
        <section className="bg-white px-5 sm:px-8 lg:px-12 py-20 lg:py-32">
          <div className="max-w-7xl mx-auto">
            <Reveal>
              <SectionLabel>What We Do</SectionLabel>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="text-display font-bold tracking-tight mt-4 mb-12 lg:mb-16">
                What We Do
              </h2>
            </Reveal>
            <div className="border-b border-black/10">
              <ServiceRow number="01" title="SOURCE" description="We identify and reach people who match your requirements." />
              <ServiceRow number="02" title="SCREEN" description="We review profiles, assess fit, and filter for quality." />
              <ServiceRow number="03" title="SHORTLIST" description="We present the most suitable candidates for your role." />
              <ServiceRow number="04" title="CONNECT" description="We facilitate the introduction and help move things forward." />
            </div>
          </div>
        </section>

        {/* AUDIENCE SPLIT */}
        <section className="grid grid-cols-1 lg:grid-cols-2">
          {/* Employers - Black */}
          <div className="bg-black text-white px-5 sm:px-8 lg:px-12 py-20 lg:py-32 flex flex-col justify-center">
            <div className="max-w-md">
              <Reveal>
                <SectionLabel variant="light">For Employers</SectionLabel>
              </Reveal>
              <Reveal delay={1}>
                <h3 className="text-headline font-bold tracking-tight mt-4 mb-4">
                  Need people?
                </h3>
              </Reveal>
              <Reveal delay={2}>
                <p className="text-body-lg text-white/60 mb-8">
                  We help you find them.
                </p>
              </Reveal>
              <Reveal delay={3}>
                <Button to="/employers" variant="light-outline">
                  Work With Us
                </Button>
              </Reveal>
            </div>
          </div>

          {/* Job Seekers - White */}
          <div className="bg-white text-black px-5 sm:px-8 lg:px-12 py-20 lg:py-32 flex flex-col justify-center">
            <div className="max-w-md">
              <Reveal>
                <SectionLabel>For Job Seekers</SectionLabel>
              </Reveal>
              <Reveal delay={1}>
                <h3 className="text-headline font-bold tracking-tight mt-4 mb-4">
                  Looking for your next role?
                </h3>
              </Reveal>
              <Reveal delay={2}>
                <p className="text-body-lg text-grey-dark mb-8">
                  Start with your resume.
                </p>
              </Reveal>
              <Reveal delay={3}>
                <Button to="/job-seekers" variant="primary">
                  Submit Your Resume
                </Button>
              </Reveal>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="bg-white px-5 sm:px-8 lg:px-12 py-20 lg:py-32 border-t border-black/10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
              <div className="lg:col-span-4">
                <Reveal>
                  <SectionLabel>How It Works</SectionLabel>
                </Reveal>
                <Reveal delay={1}>
                  <h2 className="text-display font-bold tracking-tight mt-4">
                    How It
                    <br />
                    Works
                  </h2>
                </Reveal>
                <Reveal delay={2}>
                  <Link
                    to="/how-it-works"
                    className="inline-flex items-center gap-2 mt-8 text-body font-medium uppercase tracking-[0.12em] text-black hover:gap-3 transition-all duration-300"
                  >
                    See Full Process →
                  </Link>
                </Reveal>
              </div>
              <div className="lg:col-span-7 lg:col-start-6">
                <ProcessStep number="01" title="Tell Us" description="Share your hiring needs or career goals." />
                <ProcessStep number="02" title="Search" description="We identify the right people or opportunities." />
                <ProcessStep number="03" title="Screen" description="We review and assess for quality and fit." />
                <ProcessStep number="04" title="Shortlist" description="We present the most suitable candidates." />
                <ProcessStep number="05" title="Connect" description="We help bring the right people together." isLast />
              </div>
            </div>
          </div>
        </section>

        {/* WHY - BLACK */}
        <section className="bg-black text-white px-5 sm:px-8 lg:px-12 py-24 lg:py-40">
          <div className="max-w-7xl mx-auto">
            <Reveal>
              <h2 className="text-display font-bold tracking-tight leading-[1.0] mb-16 lg:mb-24">
                LESS NOISE.
                <br />
                MORE RELEVANCE.
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 border-t border-white/15">
              {[
                { title: 'Clarity', desc: 'Understand the requirement.' },
                { title: 'Relevance', desc: 'Focus on suitable people.' },
                { title: 'People', desc: 'Recruitment is human.' },
              ].map((item, i) => (
                <Reveal key={item.title} delay={(i + 1) as 1 | 2 | 3} className="pt-8 border-t border-white/15 md:border-t-0">
                  <h3 className="text-subhead font-bold tracking-tight mb-3">{item.title}</h3>
                  <p className="text-body text-white/60">{item.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA - Have a Role to Fill */}
        <CTASection
          headline={<>HAVE A ROLE<br />TO FILL?</>}
          buttonText="Start a Conversation"
          buttonTo="/contact"
          variant="black"
        />

        {/* JOB SEEKER CTA - White */}
        <section className="bg-white px-5 sm:px-8 lg:px-12 py-20 lg:py-32">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
              <div className="lg:col-span-7">
                <Reveal>
                  <h2 className="text-hero font-bold tracking-tight leading-[0.95] mb-8">
                    LOOKING
                    <br />
                    FOR YOUR
                    <br />
                    NEXT ROLE?
                  </h2>
                </Reveal>
                <Reveal delay={2}>
                  <Button to="/job-seekers" variant="primary">
                    Submit Your Resume
                  </Button>
                </Reveal>
              </div>
              <div className="lg:col-span-5">
                <ImageBlock
                  src={IMAGES.workspace2}
                  alt="Professional working on laptop in modern office"
                  ratio="portrait"
                />
              </div>
            </div>
          </div>
        </section>
      </PageLayout>
    </>
  );
}
