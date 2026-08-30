import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Check } from 'lucide-react';
import { restaurantInfo } from '@/data/products';

export function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: typeof errors = {};
    if (!form.name.trim()) newErrors.name = 'Please enter your name';
    if (!form.email.trim()) newErrors.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = 'Please enter a valid email';
    if (!form.message.trim()) newErrors.message = 'Please enter a message';

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <div className="pt-16 lg:pt-20">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-white/5 bg-charcoal-900/30 py-16 lg:py-20">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.pexels.com/photos/27138849/pexels-photo-27138849.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="section-container relative">
          <span className="eyebrow mb-3 block">Get in Touch</span>
          <h1 className="mb-4 font-serif text-display font-bold text-white">
            Contact Us
          </h1>
          <p className="max-w-xl text-lg text-charcoal-300">
            Have a question, want to book a table, or planning a private event? We would love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact grid */}
      <section className="py-16 lg:py-24">
        <div className="section-container">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Form */}
            <div>
              <h2 className="mb-2 font-serif text-3xl font-bold text-white">Send a Message</h2>
              <p className="mb-8 text-charcoal-400">
                Fill out the form below and we will get back to you within 24 hours.
              </p>

              {submitted && (
                <div className="mb-6 flex items-center gap-3 rounded-2xl border border-success-500/30 bg-success-500/10 p-4 animate-fade-in">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-success-500 text-white">
                    <Check className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Message sent successfully!</p>
                    <p className="text-xs text-charcoal-300">We will be in touch soon.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-charcoal-200">
                    Name
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your full name"
                    className="input-field"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-error-400">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-charcoal-200">
                    Email
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                    className="input-field"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-error-400">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-charcoal-200">
                    Message
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="How can we help you?"
                    rows={5}
                    className="input-field resize-none"
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-error-400">{errors.message}</p>
                  )}
                </div>
                <button type="submit" className="btn-primary w-full">
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Info */}
            <div className="flex flex-col gap-6">
              <div className="rounded-3xl border border-white/5 bg-charcoal-900/50 p-8">
                <h3 className="mb-6 font-serif text-2xl font-bold text-white">Visit Us</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-400">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Address</p>
                      <p className="text-sm text-charcoal-400">{restaurantInfo.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-400">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Phone</p>
                      <a
                        href={`tel:${restaurantInfo.phone}`}
                        className="text-sm text-charcoal-400 transition-colors hover:text-primary-400"
                      >
                        {restaurantInfo.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-400">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Email</p>
                      <a
                        href={`mailto:${restaurantInfo.email}`}
                        className="text-sm text-charcoal-400 transition-colors hover:text-primary-400"
                      >
                        {restaurantInfo.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/5 bg-charcoal-900/50 p-8">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-400">
                    <Clock className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white">Opening Hours</h3>
                </div>
                <ul className="space-y-3">
                  {restaurantInfo.hours.map((h) => (
                    <li
                      key={h.day}
                      className="flex items-center justify-between border-b border-white/5 pb-3 last:border-0 last:pb-0"
                    >
                      <span className="text-sm font-medium text-charcoal-200">{h.day}</span>
                      <span className="text-sm text-charcoal-400">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Map */}
              <div className="overflow-hidden rounded-3xl border border-white/5">
                <div className="relative h-64 w-full bg-charcoal-800">
                  <iframe
                    title="Urban Bites location map"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=-122.68%2C45.50%2C-122.62%2C45.54&layer=mapnik"
                    className="h-full w-full grayscale invert-[0.92] opacity-80"
                    style={{ border: 0 }}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
