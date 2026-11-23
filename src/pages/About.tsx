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
  { num: '01', name: 'Vaidehi Singh Suryavanshi', role: 'Co-Founder', bio: 'Vaidehi leads the development of comprehensive strategic frameworks and operational blueprints at The Office Hire. By translating high-level business goals into precise, actionable execution plans, she ensures the agency scales with clarity, efficiency, and a structured approach that cuts through conventional noise.', image: IMAGES.founder1 },
  { num: '02', name: 'Ansh Mishra', role: 'Co-Founder', bio: 'Ansh oversees the entire operational lifecycle at The Office Hire, ensuring that every moving part—from initial client intake to final execution—runs with absolute precision and zero friction. His focus is on eliminating administrative bottlenecks and streamlining workflows to consistently deliver seamless, high-impact recruitment and PR solutions.', image: IMAGES.founder2 },
  { num: '03', name: 'Priyansh Mundra', role: 'Co-Founder', bio: "Priyansh manages the financial health and fiscal strategy of The Office Hire, balancing disciplined resource allocation with sustainable business expansion. His goal is to back the agency's creative and operational ambitions with sound financial architecture, ensuring transparency and long-term economic stability.", image: IMAGES.founder3 },
  { num: '04', name: 'Krishna Saraswat', role: 'Co-Founder', bio: "Krishna Heads the  communications and strategic alliances, and the outlook of the organisation. building meaningful, long-term relationships with clients and collaborators. His priority is ensuring the brand's voice remains clear, authentic, and deeply aligned with the human-centric values that define how the agency operates. he also operates after media presence of the organisation.", image: IMAGES.founder4 },
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
          </div>
        </section>

        {/* WHY US */}
        <section className="bg-white-light px-5 sm:px-8 lg:px-12 py-20 lg:py-32">
          <div className="max-w-7xl mx-auto">
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
