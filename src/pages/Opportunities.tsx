import { useState, useMemo } from 'react';
import SEO from '@/components/SEO';
import PageLayout from '@/components/PageLayout';
import SectionLabel from '@/components/SectionLabel';
import Reveal from '@/components/Reveal';
import CTASection from '@/components/CTASection';
import { useReveal } from '@/hooks/useReveal';

interface JobListing {
  id: number;
  title: string;
  location: string;
  type: 'Full Time' | 'Part Time' | 'Internship';
  experience: string;
  company: string;
}

const LISTINGS: JobListing[] = [
  { id: 1, title: 'Marketing Executive', location: 'Delhi', type: 'Full Time', experience: '2–4 Years', company: 'Confidential Client' },
  { id: 2, title: 'Software Developer', location: 'Noida', type: 'Full Time', experience: '1–3 Years', company: 'Confidential Client' },
  { id: 3, title: 'HR Executive', location: 'Lucknow', type: 'Full Time', experience: '2–5 Years', company: 'Confidential Client' },
  { id: 4, title: 'Business Development Associate', location: 'Gurgaon', type: 'Full Time', experience: '1–2 Years', company: 'Confidential Client' },
  { id: 5, title: 'Content Writer', location: 'Remote', type: 'Part Time', experience: '2–3 Years', company: 'Confidential Client' },
  { id: 6, title: 'Design Intern', location: 'Delhi', type: 'Internship', experience: '0–1 Years', company: 'Confidential Client' },
];

const FILTERS = ['All', 'Full Time', 'Part Time', 'Internship'] as const;
type Filter = (typeof FILTERS)[number];

function JobRow({ job }: { job: JobListing }) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={`group relative border-t border-black/10 transition-all duration-700 ease-smooth ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      {/* Hover invert bg */}
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-smooth" />

      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-2 lg:gap-4 items-center py-6 lg:py-8 px-1 lg:px-2">
        {/* Title */}
        <div className="lg:col-span-4">
          <h3 className="text-subhead font-bold tracking-tight text-black group-hover:text-white transition-colors duration-300">
            {job.title}
          </h3>
          <p className="text-label uppercase tracking-[0.12em] text-grey group-hover:text-white/50 transition-colors duration-300 mt-1 lg:hidden">
            {job.company}
          </p>
        </div>

        {/* Location */}
        <div className="lg:col-span-3">
          <p className="text-body text-grey-dark group-hover:text-white/70 transition-colors duration-300">
            {job.location}
          </p>
        </div>

        {/* Type */}
        <div className="lg:col-span-2">
          <p className="text-body text-grey-dark group-hover:text-white/70 transition-colors duration-300">
            {job.type}
          </p>
        </div>

        {/* Experience */}
        <div className="lg:col-span-2">
          <p className="text-body text-grey-dark group-hover:text-white/70 transition-colors duration-300">
            {job.experience}
          </p>
        </div>

        {/* View Role */}
        <div className="lg:col-span-1 lg:text-right">
          <span className="inline-flex items-center gap-1.5 text-label uppercase tracking-[0.12em] font-medium text-black group-hover:text-white transition-colors duration-300">
            View Role
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Opportunities() {
  const [filter, setFilter] = useState<Filter>('All');

  const filtered = useMemo(() => {
    if (filter === 'All') return LISTINGS;
    return LISTINGS.filter((l) => l.type === filter);
  }, [filter]);

  return (
    <>
      <SEO
        title="Job Opportunities | The Office Hire"
        description="Browse current open opportunities. Sample prototype listings — connect with us for live roles."
      />
      <PageLayout>
        {/* HERO */}
        <section className="bg-white px-5 sm:px-8 lg:px-12 pt-12 pb-12 lg:pt-20 lg:pb-16">
          <div className="max-w-7xl mx-auto">
            <Reveal>
              <SectionLabel>Opportunities</SectionLabel>
            </Reveal>
            <Reveal delay={1}>
              <h1 className="text-hero font-bold tracking-tight leading-[0.92] mt-5 mb-6">
                OPEN
                <br />
                OPPORTUNITIES
              </h1>
            </Reveal>
            <Reveal delay={2}>
              <p className="text-body-lg text-grey-dark max-w-lg">
                Browse current openings below. These are sample prototype listings — reach out to discuss live roles.
              </p>
            </Reveal>
          </div>
        </section>

        {/* FILTERS + LISTINGS */}
        <section className="bg-white px-5 sm:px-8 lg:px-12 pb-20 lg:pb-32">
          <div className="max-w-7xl mx-auto">
            {/* Filter bar */}
            <Reveal>
              <div className="flex flex-wrap gap-2 lg:gap-3 mb-8 lg:mb-12 border-b border-black/10 pb-6">
                {FILTERS.map((f) => (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`px-4 py-2.5 text-label uppercase tracking-[0.12em] font-medium transition-all duration-300 border ${
                      filter === f
                        ? 'bg-black text-white border-black'
                        : 'bg-transparent text-black border-black/20 hover:border-black'
                    }`}
                  >
                    {f}
                  </button>
                ))}
                <div className="ml-auto hidden lg:flex items-center">
                  <span className="text-label uppercase tracking-[0.12em] text-grey">Location</span>
                </div>
              </div>
            </Reveal>

            {/* Listings */}
            <div className="border-b border-black/10">
              {filtered.length > 0 ? (
                filtered.map((job) => <JobRow key={job.id} job={job} />)
              ) : (
                <div className="py-16 text-center">
                  <p className="text-body-lg text-grey">No openings match this filter right now.</p>
                </div>
              )}
            </div>

            {/* Sample disclaimer */}
            <p className="text-sm text-grey mt-8">
              These are sample prototype listings. Contact us for current live opportunities.
            </p>
          </div>
        </section>

        {/* CTA */}
        <CTASection
          headline={<>DON'T SEE<br />THE RIGHT FIT?</>}
          buttonText="Get in Touch"
          buttonTo="/contact"
          variant="black"
        />
      </PageLayout>
    </>
  );
}
