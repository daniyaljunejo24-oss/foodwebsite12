import { useState, useEffect } from 'react';
import { ArrowRight, Star, Clock, MapPin, Phone, Leaf, Award, Heart, Users, Quote } from 'lucide-react';
import { Link } from '@/context/Router';
import { products, categories, reviews, restaurantInfo, heroImages, type Product } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';
import { useInView } from '@/hooks/useInView';

export function HomePage() {
  const [heroIdx, setHeroIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIdx((i) => (i + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const featuredProducts = products.filter((p) => p.popular).slice(0, 4);

  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden">
        {/* Background images */}
        {heroImages.map((src, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === heroIdx ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img src={src} alt="" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950 via-charcoal-950/80 to-charcoal-950/30" />
          </div>
        ))}

        <div className="section-container relative z-10 pt-20">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm animate-fade-in-down">
              <Star className="h-3.5 w-3.5 fill-primary-400 text-primary-400" />
              <span className="text-xs font-medium text-charcoal-200">
                Rated 4.9 by 2,300+ happy diners
              </span>
            </div>
            <h1 className="mb-5 font-serif text-display font-bold text-white text-balance animate-fade-in-up">
              Good Food.<br />
              <span className="text-primary-400">Great Moments.</span>
            </h1>
            <p className="mb-8 max-w-lg text-lg leading-relaxed text-charcoal-200 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Fresh ingredients, bold flavors, and unforgettable meals. Welcome to your new favorite table.
            </p>
            <div className="flex flex-wrap gap-3 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Link to="/menu" className="btn-primary">
                Explore Menu
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/menu" className="btn-secondary">
                Order Now
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block">
          <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/20 p-1.5">
            <div className="h-2 w-1 animate-bounce rounded-full bg-white/40" />
          </div>
        </div>
      </section>

      {/* ===== FEATURED DISHES ===== */}
      <FeaturedDishes products={featuredProducts} />

      {/* ===== POPULAR CATEGORIES ===== */}
      <PopularCategories />

      {/* ===== ABOUT PREVIEW ===== */}
      <AboutPreview />

      {/* ===== WHY CHOOSE US ===== */}
      <WhyChooseUs />

      {/* ===== REVIEWS ===== */}
      <Reviews />

      {/* ===== HOURS & LOCATION ===== */}
      <HoursLocation />

      {/* ===== FINAL CTA ===== */}
      <FinalCTA />
    </div>
  );
}

function FeaturedDishes({ products }: { products: Product[] }) {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="py-20 lg:py-28">
      <div className="section-container">
        <div className="mb-12 text-center">
          <span className="eyebrow mb-3 block">Chef's Selection</span>
          <h2 className="mb-4 font-serif text-heading font-bold text-white">
            Featured Dishes
          </h2>
          <p className="mx-auto max-w-xl text-charcoal-400">
            A handpicked selection of our most-loved plates, crafted with care and served with pride.
          </p>
        </div>
        <div
          className={`grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 ${
            inView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/menu" className="btn-secondary">
            View Full Menu
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function PopularCategories() {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="bg-charcoal-900/30 py-20 lg:py-28">
      <div className="section-container">
        <div className="mb-12 text-center">
          <span className="eyebrow mb-3 block">Browse by Taste</span>
          <h2 className="mb-4 font-serif text-heading font-bold text-white">
            Popular Categories
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((cat, i) => (
            <Link
              key={cat.name}
              to="/menu"
              className={`group flex flex-col items-center gap-3 rounded-2xl border border-white/5 bg-charcoal-900/50 p-6 text-center transition-all duration-500 hover:border-primary-500/30 hover:bg-charcoal-900 hover:-translate-y-1 ${
                inView ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <span className="text-4xl transition-transform duration-300 group-hover:scale-110">
                {cat.icon}
              </span>
              <div>
                <h3 className="font-serif text-base font-semibold text-white">{cat.name}</h3>
                <p className="mt-0.5 text-xs text-charcoal-400">{cat.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutPreview() {
  return (
    <section className="py-20 lg:py-28">
      <div className="section-container">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <img
                src="https://images.pexels.com/photos/4253300/pexels-photo-4253300.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Urban Bites kitchen"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-white/10 bg-charcoal-900 p-5 shadow-2xl sm:block">
              <p className="font-serif text-3xl font-bold text-primary-400">10+</p>
              <p className="text-xs text-charcoal-400">Years of serving</p>
            </div>
          </div>
          <div>
            <span className="eyebrow mb-3 block">Our Story</span>
            <h2 className="mb-5 font-serif text-heading font-bold text-white">
              A Neighborhood Favorite Since 2015
            </h2>
            <p className="mb-4 leading-relaxed text-charcoal-300">
              Urban Bites started as a small kitchen with a big idea: that great food
              does not need to be complicated. It just needs to be made with care, from
              real ingredients, by people who love what they do.
            </p>
            <p className="mb-8 leading-relaxed text-charcoal-400">
              Today, we are proud to be a gathering place for our community — a spot
              for first dates, family dinners, and everything in between.
            </p>
            <Link to="/about" className="btn-primary">
              Read Our Story
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const features = [
    { icon: Leaf, title: 'Fresh Ingredients', desc: 'Locally sourced produce, delivered daily. No shortcuts, no compromises.' },
    { icon: Award, title: 'Award-Winning Chef', desc: 'Every dish is crafted by our team of passionate, experienced chefs.' },
    { icon: Heart, title: 'Made with Love', desc: 'We treat every plate like we are cooking for our own family.' },
    { icon: Users, title: 'Community First', desc: 'A welcoming space for everyone — families, friends, and solo diners.' },
  ];
  return (
    <section className="bg-charcoal-900/30 py-20 lg:py-28">
      <div className="section-container">
        <div className="mb-12 text-center">
          <span className="eyebrow mb-3 block">Why Dine With Us</span>
          <h2 className="mb-4 font-serif text-heading font-bold text-white">
            Why Customers Choose Us
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-white/5 bg-charcoal-900/50 p-7 transition-all duration-500 hover:border-primary-500/20 hover:bg-charcoal-900 hover:-translate-y-1"
              style={{ animationDelay: `${i * 0.1}s` }}
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
  );
}

function Reviews() {
  return (
    <section className="py-20 lg:py-28">
      <div className="section-container">
        <div className="mb-12 text-center">
          <span className="eyebrow mb-3 block">Guest Love</span>
          <h2 className="mb-4 font-serif text-heading font-bold text-white">
            What Our Customers Say
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r) => (
            <div
              key={r.id}
              className="flex flex-col rounded-2xl border border-white/5 bg-charcoal-900/50 p-6 transition-all duration-500 hover:border-white/10 hover:bg-charcoal-900"
            >
              <Quote className="mb-4 h-7 w-7 text-primary-500/40" />
              <p className="mb-5 flex-1 text-sm leading-relaxed text-charcoal-300">
                {r.text}
              </p>
              <div className="flex items-center gap-3 border-t border-white/5 pt-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-500/15 font-serif text-sm font-bold text-primary-400">
                  {r.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{r.name}</p>
                  <p className="text-xs text-charcoal-400">{r.role}</p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-warning-400 text-warning-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HoursLocation() {
  return (
    <section className="bg-charcoal-900/30 py-20 lg:py-28">
      <div className="section-container">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Hours */}
          <div className="rounded-3xl border border-white/5 bg-charcoal-900/50 p-8 lg:p-10">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-400">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-white">Opening Hours</h3>
            </div>
            <ul className="space-y-4">
              {restaurantInfo.hours.map((h) => (
                <li
                  key={h.day}
                  className="flex items-center justify-between border-b border-white/5 pb-4 last:border-0 last:pb-0"
                >
                  <span className="text-sm font-medium text-charcoal-200">{h.day}</span>
                  <span className="text-sm text-charcoal-400">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div className="rounded-3xl border border-white/5 bg-charcoal-900/50 p-8 lg:p-10">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-400">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-white">Find Us</h3>
            </div>
            <p className="mb-4 text-sm leading-relaxed text-charcoal-300">
              {restaurantInfo.address}
            </p>
            <div className="mb-6 flex items-center gap-2 text-sm text-charcoal-400">
              <Phone className="h-4 w-4 text-primary-400" />
              {restaurantInfo.phone}
            </div>
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <div className="relative h-48 w-full bg-charcoal-800">
                <iframe
                  title="Urban Bites location"
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
  );
}

function FinalCTA() {
  return (
    <section className="py-20 lg:py-28">
      <div className="section-container">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-primary-600/20 via-charcoal-900 to-charcoal-900 p-10 text-center lg:p-16">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary-500/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-primary-500/10 blur-3xl" />
          <div className="relative">
            <h2 className="mb-4 font-serif text-heading font-bold text-white">
              Hungry? Let's Fix That.
            </h2>
            <p className="mx-auto mb-8 max-w-lg text-charcoal-300">
              Order online for pickup or delivery, or reserve a table for a memorable dining experience.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/menu" className="btn-primary">
                Order Now
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
  );
}
