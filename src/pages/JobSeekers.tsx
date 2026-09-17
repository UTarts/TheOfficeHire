import { useState, type FormEvent } from 'react';
import SEO from '@/components/SEO';
import PageLayout from '@/components/PageLayout';
import Button from '@/components/Button';
import SectionLabel from '@/components/SectionLabel';
import Reveal from '@/components/Reveal';
import ImageBlock from '@/components/ImageBlock';
import ProcessStep from '@/components/ProcessStep';
import CTASection from '@/components/CTASection';
import { Check } from 'lucide-react';
import { IMAGES } from '@/data/images';

const initialForm = {
  fullName: '',
  email: '',
  phone: '',
  location: '',
  currentRole: '',
  yearsExperience: '',
  preferredRole: '',
  message: '',
};

export default function JobSeekers() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.fullName.trim()) e.fullName = 'Please enter your full name';
    if (!form.email.trim()) e.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email';
    if (!form.phone.trim()) e.phone = 'Please enter your phone number';
    if (!form.preferredRole.trim()) e.preferredRole = 'Please enter your preferred role';
    return e;
  };

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) {
      setSubmitted(true);
    }
  };

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const fieldClass = (field: string) =>
    `w-full bg-transparent border-b px-0 py-3.5 text-body text-black placeholder-grey transition-colors duration-200 focus:outline-none ${
      errors[field] ? 'border-grey-dark' : 'border-black/20 focus:border-black'
    }`;

  return (
    <>
      <SEO
        title="Find Your Next Opportunity | The Office Hire"
        description="Submit your profile and let us help you find the right role. Your next opportunity starts here."
      />
      <PageLayout>
        {/* HERO */}
        <section className="bg-white px-5 sm:px-8 lg:px-12 pt-12 pb-16 lg:pt-20 lg:pb-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-7">
                <Reveal>
                  <SectionLabel>For Job Seekers</SectionLabel>
                </Reveal>
                <Reveal delay={1}>
                  <h1 className="text-hero font-bold tracking-tight leading-[0.92] mt-5 mb-6">
                    YOUR NEXT
                    <br />
                    OPPORTUNITY
                    <br />
                    STARTS HERE.
                  </h1>
                </Reveal>
                <Reveal delay={2}>
                  <p className="text-body-lg text-grey-dark max-w-md mb-8">
                    Submit your profile and tell us the kind of role you're looking for. We'll be in touch when something relevant comes up.
                  </p>
                </Reveal>
                <Reveal delay={3}>
                  <a href="#resume-form" className="inline-block">
                    <Button to="/job-seekers#resume-form" variant="primary">
                      Submit Your Resume
                    </Button>
                  </a>
                </Reveal>
              </div>
              <div className="lg:col-span-5 lg:pt-8">
                <ImageBlock
                  src={IMAGES.interview3}
                  alt="Professional in a friendly business meeting"
                  ratio="portrait"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* WHAT HAPPENS NEXT */}
        <section className="bg-black text-white px-5 sm:px-8 lg:px-12 py-20 lg:py-32">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
              <div className="lg:col-span-4">
                <Reveal>
                  <SectionLabel variant="light">What Happens Next?</SectionLabel>
                </Reveal>
                <Reveal delay={1}>
                  <h2 className="text-display font-bold tracking-tight mt-4">
                    What
                    <br />
                    Happens
                    <br />
                    Next?
                  </h2>
                </Reveal>
              </div>
              <div className="lg:col-span-7 lg:col-start-6">
                <ProcessStep number="01" title="Send Your Profile" description="Submit your resume and professional details." variant="light" />
                <ProcessStep number="02" title="We Review It" description="We assess your experience and preferences." variant="light" />
                <ProcessStep number="03" title="Relevant Opportunities" description="We match you with suitable roles as they come up." variant="light" />
                <ProcessStep number="04" title="Next Steps" description="We reach out when there's a fit worth discussing." variant="light" isLast />
              </div>
            </div>
          </div>
        </section>

        {/* RESUME FORM */}
        <section id="resume-form" className="bg-white px-5 sm:px-8 lg:px-12 py-20 lg:py-32">
          <div className="max-w-2xl mx-auto">
            <Reveal>
              <SectionLabel>Submit Your Profile</SectionLabel>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="text-headline font-bold tracking-tight mt-4 mb-12">
                Submit Your Profile
              </h2>
            </Reveal>

            {submitted ? (
              <div className="border border-black/15 p-8 lg:p-12 animate-fade-up">
                <div className="w-12 h-12 bg-black flex items-center justify-center mb-6">
                  <Check size={24} strokeWidth={1.5} className="text-white" />
                </div>
                <h3 className="text-subhead font-bold tracking-tight mb-3">
                  Profile Received.
                </h3>
                <p className="text-body text-grey-dark mb-6">
                  Thank you, {form.fullName.split(' ')[0]}. We've received your profile and will be in touch if a relevant opportunity comes up.
                </p>
                <button
                  onClick={() => {
                    setForm(initialForm);
                    setSubmitted(false);
                  }}
                  className="text-label uppercase tracking-[0.15em] font-medium text-black border-b border-black pb-1 hover:gap-2 transition-all"
                >
                  Submit Another Profile
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-label uppercase tracking-[0.15em] font-medium text-grey mb-1">
                    Full Name *
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    value={form.fullName}
                    onChange={(e) => handleChange('fullName', e.target.value)}
                    className={fieldClass('fullName')}
                    placeholder="Your full name"
                  />
                  {errors.fullName && <p className="text-sm text-grey-dark mt-2">{errors.fullName}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-label uppercase tracking-[0.15em] font-medium text-grey mb-1">
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className={fieldClass('email')}
                    placeholder="you@example.com"
                  />
                  {errors.email && <p className="text-sm text-grey-dark mt-2">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-label uppercase tracking-[0.15em] font-medium text-grey mb-1">
                    Phone *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    className={fieldClass('phone')}
                    placeholder="+91 XXXXX XXXXX"
                  />
                  {errors.phone && <p className="text-sm text-grey-dark mt-2">{errors.phone}</p>}
                </div>

                {/* Location */}
                <div>
                  <label htmlFor="location" className="block text-label uppercase tracking-[0.15em] font-medium text-grey mb-1">
                    Location
                  </label>
                  <input
                    id="location"
                    type="text"
                    value={form.location}
                    onChange={(e) => handleChange('location', e.target.value)}
                    className={fieldClass('location')}
                    placeholder="City, Country"
                  />
                </div>

                {/* Current Role */}
                <div>
                  <label htmlFor="currentRole" className="block text-label uppercase tracking-[0.15em] font-medium text-grey mb-1">
                    Current Role
                  </label>
                  <input
                    id="currentRole"
                    type="text"
                    value={form.currentRole}
                    onChange={(e) => handleChange('currentRole', e.target.value)}
                    className={fieldClass('currentRole')}
                    placeholder="Your current position"
                  />
                </div>

                {/* Years of Experience */}
                <div>
                  <label htmlFor="yearsExperience" className="block text-label uppercase tracking-[0.15em] font-medium text-grey mb-1">
                    Years of Experience
                  </label>
                  <input
                    id="yearsExperience"
                    type="text"
                    value={form.yearsExperience}
                    onChange={(e) => handleChange('yearsExperience', e.target.value)}
                    className={fieldClass('yearsExperience')}
                    placeholder="e.g. 3–5"
                  />
                </div>

                {/* Preferred Role */}
                <div>
                  <label htmlFor="preferredRole" className="block text-label uppercase tracking-[0.15em] font-medium text-grey mb-1">
                    Preferred Role *
                  </label>
                  <input
                    id="preferredRole"
                    type="text"
                    value={form.preferredRole}
                    onChange={(e) => handleChange('preferredRole', e.target.value)}
                    className={fieldClass('preferredRole')}
                    placeholder="The role you're looking for"
                  />
                  {errors.preferredRole && <p className="text-sm text-grey-dark mt-2">{errors.preferredRole}</p>}
                </div>

                {/* Resume Upload */}
                <div>
                  <label htmlFor="resume" className="block text-label uppercase tracking-[0.15em] font-medium text-grey mb-1">
                    Resume Upload
                  </label>
                  <div className="border-b border-black/20 py-3.5">
                    <input
                      id="resume"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="text-body text-grey file:mr-4 file:py-2.5 file:px-4 file:bg-black file:text-white file:border-0 file:text-label file:uppercase file:tracking-[0.12em] file:font-medium file:cursor-pointer file:transition-all file:duration-300 hover:file:bg-white hover:file:text-black hover:file:border hover:file:border-black"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-label uppercase tracking-[0.15em] font-medium text-grey mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    className={fieldClass('message') + ' resize-none'}
                    placeholder="Tell us about the kind of role you're looking for"
                  />
                </div>

                {/* Submit */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-black text-white text-label uppercase tracking-[0.15em] font-medium transition-all duration-300 ease-smooth hover:bg-white hover:text-black border border-black w-full sm:w-auto"
                  >
                    Submit Profile
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </button>
                </div>

                <p className="text-sm text-grey">
                  Submitting a profile does not guarantee placement.
                </p>
              </form>
            )}
          </div>
        </section>
      </PageLayout>
    </>
  );
}
