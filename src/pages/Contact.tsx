import { useState, type FormEvent } from 'react';
import SEO from '@/components/SEO';
import PageLayout from '@/components/PageLayout';
import SectionLabel from '@/components/SectionLabel';
import Reveal from '@/components/Reveal';
import { Check } from 'lucide-react';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  enquiryType: 'Employers',
  company: '',
  message: '',
};

const ENQUIRY_TYPES = ['Employers', 'Job Seekers', 'General Enquiries'];

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Please enter your name';
    if (!form.email.trim()) e.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email';
    if (!form.message.trim()) e.message = 'Please enter a message';
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
        title="Contact The Office Hire"
        description="Get in touch — tell us what you're hiring for, what opportunity you're looking for, or simply say hello."
      />
      <PageLayout>
        {/* HERO - Black */}
        <section className="bg-black text-white px-5 sm:px-8 lg:px-12 pt-12 pb-16 lg:pt-20 lg:pb-24">
          <div className="max-w-7xl mx-auto">
            <Reveal>
              <SectionLabel variant="light">Contact</SectionLabel>
            </Reveal>
            <Reveal delay={1}>
              <h1 className="text-hero font-bold tracking-tight leading-[0.92] mt-5 mb-6">
                LET'S
                <br />
                TALK.
              </h1>
            </Reveal>
            <Reveal delay={2}>
              <p className="text-body-lg text-white/60 max-w-lg">
                Tell us what you're hiring for, what opportunity you're looking for, or simply get in touch.
              </p>
            </Reveal>
          </div>
        </section>

        {/* SPLIT LAYOUT */}
        <section className="bg-white px-5 sm:px-8 lg:px-12 py-16 lg:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              {/* LEFT: Contact info */}
              <div className="lg:col-span-4">
                <Reveal>
                  <SectionLabel>Contact</SectionLabel>
                </Reveal>
                <Reveal delay={1}>
                  <div className="mt-8 space-y-8">
                    <div>
                      <p className="text-label uppercase tracking-[0.15em] text-grey mb-2">Employers</p>
                      <a href="mailto:hello@theofficehire.com" className="text-body-lg text-black hover:text-grey transition-colors duration-200">
                        hello@theofficehire.com
                      </a>
                    </div>
                    <div>
                      <p className="text-label uppercase tracking-[0.15em] text-grey mb-2">Job Seekers</p>
                      <a href="mailto:hello@theofficehire.com" className="text-body-lg text-black hover:text-grey transition-colors duration-200">
                        info@theofficehire.com
                      </a>
                    </div>
                    <div>
                      <p className="text-label uppercase tracking-[0.15em] text-grey mb-2">General Enquiries</p>
                      <a href="tel:+919211023617" className="block text-body-lg text-black hover:text-grey transition-colors duration-200">
                        +91 92110 23617
                      </a>
                      <p className="text-body-lg text-grey-dark mt-1">
                        City, India
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* RIGHT: Form */}
              <div className="lg:col-span-7 lg:col-start-6">
                {submitted ? (
                  <div className="border border-black/15 p-8 lg:p-12 animate-fade-up">
                    <div className="w-12 h-12 bg-black flex items-center justify-center mb-6">
                      <Check size={24} strokeWidth={1.5} className="text-white" />
                    </div>
                    <h3 className="text-subhead font-bold tracking-tight mb-3">
                      Message Sent.
                    </h3>
                    <p className="text-body text-grey-dark mb-6">
                      Thank you, {form.name.split(' ')[0]}. We've received your enquiry and will get back to you shortly.
                    </p>
                    <button
                      onClick={() => {
                        setForm(initialForm);
                        setSubmitted(false);
                      }}
                      className="text-label uppercase tracking-[0.15em] font-medium text-black border-b border-black pb-1 transition-all"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    {/* Name */}
                    <div className="mb-6">
                      <label htmlFor="name" className="block text-label uppercase tracking-[0.15em] font-medium text-grey mb-1">
                        Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={form.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        className={fieldClass('name')}
                        placeholder="Your name"
                      />
                      {errors.name && <p className="text-sm text-grey-dark mt-2">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div className="mb-6">
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
                    <div className="mb-6">
                      <label htmlFor="phone" className="block text-label uppercase tracking-[0.15em] font-medium text-grey mb-1">
                        Phone
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        className={fieldClass('phone')}
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>

                    {/* Enquiry Type */}
                    <div className="mb-6">
                      <label htmlFor="enquiryType" className="block text-label uppercase tracking-[0.15em] font-medium text-grey mb-3">
                        Enquiry Type
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {ENQUIRY_TYPES.map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => handleChange('enquiryType', type)}
                            className={`px-4 py-2.5 text-label uppercase tracking-[0.12em] font-medium transition-all duration-300 border ${
                              form.enquiryType === type
                                ? 'bg-black text-white border-black'
                                : 'bg-transparent text-black border-black/20 hover:border-black'
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Company */}
                    <div className="mb-6">
                      <label htmlFor="company" className="block text-label uppercase tracking-[0.15em] font-medium text-grey mb-1">
                        Company
                      </label>
                      <input
                        id="company"
                        type="text"
                        value={form.company}
                        onChange={(e) => handleChange('company', e.target.value)}
                        className={fieldClass('company')}
                        placeholder="Company name (optional)"
                      />
                    </div>

                    {/* Message */}
                    <div className="mb-8">
                      <label htmlFor="message" className="block text-label uppercase tracking-[0.15em] font-medium text-grey mb-1">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        value={form.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        className={fieldClass('message') + ' resize-none'}
                        placeholder="Tell us what you're hiring for or what role you're looking for"
                      />
                      {errors.message && <p className="text-sm text-grey-dark mt-2">{errors.message}</p>}
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-black text-white text-label uppercase tracking-[0.15em] font-medium transition-all duration-300 ease-smooth hover:bg-white hover:text-black border border-black w-full sm:w-auto"
                    >
                      Send Enquiry
                      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </PageLayout>
    </>
  );
}
