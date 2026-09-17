import SEO from '@/components/SEO';
import PageLayout from '@/components/PageLayout';
import Button from '@/components/Button';
import SectionLabel from '@/components/SectionLabel';
import Reveal from '@/components/Reveal';
import ImageBlock from '@/components/ImageBlock';
import CTASection from '@/components/CTASection';
import { useReveal } from '@/hooks/useReveal';
import { IMAGES } from '@/data/images';

const FOUNDERS = [
  { num: '01', name: 'Founder Name', role: 'Founder & Director', bio: 'Short biography placeholder. Replace with the founder\'s background, experience, and focus areas.', image: IMAGES.founder1 },
  { num: '02', name: 'Founder Name', role: 'Co-Founder', bio: 'Short biography placeholder. Replace with the founder\'s background, experience, and focus areas.', image: IMAGES.founder2 },
  { num: '03', name: 'Founder Name', role: 'Co-Founder', bio: 'Short biography placeholder. Replace with the founder\'s background, experience, and focus areas.', image: IMAGES.founder3 },
  { num: '04', name: 'Founder Name', role: 'Co-Founder', bio: 'Short biography placeholder. Replace with the founder\'s background, experience, and focus areas.', image: IMAGES.founder4 },
];

const APPROACH = [
  { title: 'Clarity', desc: 'Understand before we search.' },
  { title: 'Relevance', desc: 'Focus on the right requirements.' },
  { title: 'People', desc: 'Behind every resume is a person.' },
];

const WHY_US = [
  { title: 'Listen First', desc: 'We understand the requirement.' },
  { title: 'Look for Fit', desc: 'We focus on relevance.' },
  { title: 'Keep it Human', desc: 'People are more than resumes.' },
  { title: 'Keep it Clear', desc: 'Straightforward communication.' },
];

function FounderCard({ founder }: { founder: typeof FOUNDERS[0] }) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-smooth ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Image */}
      <div className="overflow-hidden aspect-[4/5] mb-5">
        <img
          src={founder.image}
          alt={`${founder.role} portrait placeholder`}
          loading="lazy"
          className={`w-full h-full object-cover transition-all duration-[1.2s] ease-snap ${
            visible ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
          }`}
        />
      </div>
      {/* Number */}
      <span className="text-label uppercase tracking-[0.18em] text-grey">
        Founder {founder.num}
      </span>
      {/* Name */}
      <h3 className="text-subhead font-bold tracking-tight mt-2 mb-1">
        {founder.name}
      </h3>
      {/* Role */}
      <p className="text-body text-grey-dark mb-3">{founder.role}</p>
      {/* Bio */}
      <p className="text-body text-grey-dark">{founder.bio}</p>
    </div>
  );
}

export default function About() {
  return (
    <>
      <SEO
        title="About The Office Hire"
        description="We believe hiring is about people. Meet the team behind The Office Hire."
      />
      <PageLayout>
        {/* HERO */}
        <section className="bg-white px-5 sm:px-8 lg:px-12 pt-12 pb-16 lg:pt-20 lg:pb-24">
          <div className="max-w-7xl mx-auto">
            <Reveal>
              <SectionLabel>About</SectionLabel>
            </Reveal>
            <Reveal delay={1}>
              <h1 className="text-hero font-bold tracking-tight leading-[0.92] mt-5 mb-6">
                WE BELIEVE
                <br />
                HIRING IS
                <br />
                ABOUT PEOPLE.
              </h1>
            </Reveal>
            <Reveal delay={2}>
              <p className="text-body-lg text-grey-dark max-w-lg">
                The Office Hire is a recruitment consultancy focused on finding the right people for the right roles — without the noise of a traditional agency.
              </p>
            </Reveal>
          </div>
        </section>

        {/* OUR APPROACH */}
        <section className="bg-black text-white px-5 sm:px-8 lg:px-12 py-20 lg:py-32">
          <div className="max-w-7xl mx-auto">
            <Reveal>
              <SectionLabel variant="light">Our Approach</SectionLabel>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="text-display font-bold tracking-tight mt-4 mb-12 lg:mb-16">
                Our Approach
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-8 border-t border-white/15">
              {APPROACH.map((item, i) => (
                <Reveal key={item.title} delay={(i + 1) as 1 | 2 | 3} className="pt-8 border-t border-white/15 md:border-t-0">
                  <h3 className="text-subhead font-bold tracking-tight mb-3">{item.title}</h3>
                  <p className="text-body text-white/60">{item.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FOUR FOUNDERS */}
        <section className="bg-white px-5 sm:px-8 lg:px-12 py-20 lg:py-32">
          <div className="max-w-7xl mx-auto">
            <Reveal>
              <SectionLabel>The Team</SectionLabel>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="text-display font-bold tracking-tight mt-4 mb-12 lg:mb-16 max-w-3xl">
                Meet the People
                <br />
                Behind The Office Hire.
              </h2>
            </Reveal>

            {/* Desktop: 4 columns, Mobile: 2 columns */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {FOUNDERS.map((founder) => (
                <FounderCard key={founder.num} founder={founder} />
              ))}
            </div>

            <p className="text-sm text-grey mt-12">
              Founder details are placeholders. Replace names, titles, photos, and biographies with the actual information.
            </p>
          </div>
        </section>

        {/* WHY US */}
        <section className="bg-white-light px-5 sm:px-8 lg:px-12 py-20 lg:py-32">
          <div className="max-w-7xl mx-auto">
            <Reveal>
              <SectionLabel>Why Us</SectionLabel>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="text-display font-bold tracking-tight mt-4 mb-12 lg:mb-16">
                Why Us
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-8 border-t border-black/10">
              {WHY_US.map((item, i) => (
                <Reveal key={item.title} delay={((i % 2) + 1) as 1 | 2} className="pt-8 border-t border-black/10 md:border-t-0">
                  <h3 className="text-subhead font-bold tracking-tight mb-3">{item.title}</h3>
                  <p className="text-body text-grey-dark">{item.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTASection
          headline={<>LET'S BUILD<br />THE RIGHT TEAM.</>}
          buttonText="Get in Touch"
          buttonTo="/contact"
          variant="black"
        />
      </PageLayout>
    </>
  );
}
