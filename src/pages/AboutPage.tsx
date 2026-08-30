import { Leaf, Award, Heart, Users, ArrowRight, Target, Eye } from 'lucide-react';
import { Link } from '@/context/Router';
import { teamMembers } from '@/data/products';

export function AboutPage() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5 py-16 lg:py-24">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/28575445/pexels-photo-28575445.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Restaurant interior"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal-950/80" />
        </div>
        <div className="section-container relative text-center">
          <span className="eyebrow mb-3 block">About Us</span>
          <h1 className="mb-4 font-serif text-display font-bold text-white">
            Our Story
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-charcoal-200">
            From a small neighborhood kitchen to a beloved local institution — this is the Urban Bites journey.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 lg:py-28">
        <div className="section-container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative">
              <div className="overflow-hidden rounded-3xl">
                <img
                  src="https://images.pexels.com/photos/2977514/pexels-photo-2977514.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Chef at work"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-white/10 bg-charcoal-900 p-5 shadow-2xl sm:block">
                <p className="font-serif text-3xl font-bold text-primary-400">2015</p>
                <p className="text-xs text-charcoal-400">The year we opened</p>
              </div>
            </div>
            <div>
              <span className="eyebrow mb-3 block">How It Began</span>
              <h2 className="mb-5 font-serif text-heading font-bold text-white">
                A Passion Turned Into a Restaurant
              </h2>
              <div className="space-y-4 leading-relaxed text-charcoal-300">
                <p>
                  Urban Bites was born from a simple belief: that everyone deserves
                  a great meal, made with real ingredients, served by people who care.
                  Our founder, Marco Bellini, opened the doors in 2015 with just a
                  handful of recipes and a lot of heart.
                </p>
                <p>
                  What started as a 12-seat counter has grown into a full-service
                  restaurant serving hundreds of guests every day. But our philosophy
                  has never changed — cook with integrity, source locally, and treat
                  every guest like family.
                </p>
                <p>
                  Today, Urban Bites is a gathering place for the community. A spot
                  for celebrations, quiet weeknight dinners, and everything in between.
                  We are proud to be part of your story.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-charcoal-900/30 py-20 lg:py-28">
        <div className="section-container">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-white/5 bg-charcoal-900/50 p-8 lg:p-10">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-400">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="mb-3 font-serif text-2xl font-bold text-white">Our Mission</h3>
              <p className="leading-relaxed text-charcoal-300">
                To serve fresh, flavorful food that brings people together. We are
                committed to sourcing locally, cooking with care, and creating a
                welcoming space where every guest feels at home.
              </p>
            </div>
            <div className="rounded-3xl border border-white/5 bg-charcoal-900/50 p-8 lg:p-10">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-400">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="mb-3 font-serif text-2xl font-bold text-white">Our Vision</h3>
              <p className="leading-relaxed text-charcoal-300">
                To be the neighborhood's most loved dining destination — a place known
                not just for great food, but for warmth, consistency, and the kind of
                hospitality that turns first-time visitors into lifelong regulars.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28">
        <div className="section-container">
          <div className="mb-12 text-center">
            <span className="eyebrow mb-3 block">Our Values</span>
            <h2 className="mb-4 font-serif text-heading font-bold text-white">
              Why Customers Choose Us
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Leaf, title: 'Fresh & Local', desc: 'We source from local farms and producers to ensure every ingredient is at its peak.' },
              { icon: Award, title: 'Crafted Quality', desc: 'Every dish is made from scratch by our team of experienced, passionate chefs.' },
              { icon: Heart, title: 'Genuine Hospitality', desc: 'We treat every guest like family. Your experience matters from the moment you arrive.' },
              { icon: Users, title: 'Community Minded', desc: 'We are proud to support our neighborhood through events, partnerships, and giving back.' },
            ].map((f) => (
              <div
                key={f.title}
                className="group rounded-2xl border border-white/5 bg-charcoal-900/50 p-7 transition-all duration-500 hover:border-primary-500/20 hover:bg-charcoal-900 hover:-translate-y-1"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-400 transition-all duration-300 group-hover:bg-primary-500 group-hover:text-white">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-serif text-lg font-semibold text-white">{f.title}</h3>
                <p className="text-sm leading-relaxed text-charcoal-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-charcoal-900/30 py-20 lg:py-28">
        <div className="section-container">
          <div className="mb-12 text-center">
            <span className="eyebrow mb-3 block">Meet the Team</span>
            <h2 className="mb-4 font-serif text-heading font-bold text-white">
              The People Behind the Plate
            </h2>
            <p className="mx-auto max-w-xl text-charcoal-400">
              A small, dedicated team that pours their heart into every dish and every guest experience.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="group overflow-hidden rounded-3xl border border-white/5 bg-charcoal-900/50 transition-all duration-500 hover:border-white/10 hover:-translate-y-1"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="mb-1 font-serif text-xl font-bold text-white">{member.name}</h3>
                  <p className="mb-3 text-sm font-medium text-primary-400">{member.role}</p>
                  <p className="text-sm leading-relaxed text-charcoal-400">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <div className="section-container">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-primary-600/20 via-charcoal-900 to-charcoal-900 p-10 text-center lg:p-16">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary-500/10 blur-3xl" />
            <div className="relative">
              <h2 className="mb-4 font-serif text-heading font-bold text-white">
                Come Taste the Difference
              </h2>
              <p className="mx-auto mb-8 max-w-lg text-charcoal-300">
                We would love to welcome you. Book a table or browse our menu to see what we are cooking today.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link to="/menu" className="btn-primary">
                  Explore Menu
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/contact" className="btn-secondary">
                  Reserve a Table
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
