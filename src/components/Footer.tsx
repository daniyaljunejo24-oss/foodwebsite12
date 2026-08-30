import { Instagram, Facebook, Twitter, Youtube, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Link } from '@/context/Router';
import { restaurantInfo } from '@/data/products';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-charcoal-950">
      <div className="section-container py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="group mb-4 flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-500 text-lg font-bold text-white">
                U
              </span>
              <span className="font-serif text-xl font-bold text-white">
                Urban<span className="text-primary-400">Bites</span>
              </span>
            </Link>
            <p className="mb-5 max-w-xs text-sm leading-relaxed text-charcoal-400">
              Fresh ingredients, bold flavors, and unforgettable meals. Serving the neighborhood since 2015.
            </p>
            <div className="flex gap-2">
              {[
                { icon: Instagram, href: restaurantInfo.socials.instagram, label: 'Instagram' },
                { icon: Facebook, href: restaurantInfo.socials.facebook, label: 'Facebook' },
                { icon: Twitter, href: restaurantInfo.socials.twitter, label: 'Twitter' },
                { icon: Youtube, href: restaurantInfo.socials.youtube, label: 'YouTube' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-charcoal-300 transition-all duration-300 hover:border-primary-500/30 hover:bg-primary-500/10 hover:text-primary-400"
                  aria-label={s.label}
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Explore</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', to: '/' },
                { label: 'Menu', to: '/menu' },
                { label: 'About Us', to: '/about' },
                { label: 'Gallery', to: '/gallery' },
                { label: 'Contact', to: '/contact' },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-charcoal-400 transition-colors hover:text-primary-400"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-white">
              <Clock className="h-4 w-4 text-primary-400" />
              Hours
            </h4>
            <ul className="space-y-2.5">
              {restaurantInfo.hours.map((h) => (
                <li key={h.day}>
                  <p className="text-sm font-medium text-charcoal-200">{h.day}</p>
                  <p className="text-xs text-charcoal-400">{h.time}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-charcoal-400">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary-400" />
                {restaurantInfo.address}
              </li>
              <li>
                <a
                  href={`tel:${restaurantInfo.phone}`}
                  className="flex items-center gap-2.5 text-sm text-charcoal-400 transition-colors hover:text-primary-400"
                >
                  <Phone className="h-4 w-4 flex-shrink-0 text-primary-400" />
                  {restaurantInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${restaurantInfo.email}`}
                  className="flex items-center gap-2.5 text-sm text-charcoal-400 transition-colors hover:text-primary-400"
                >
                  <Mail className="h-4 w-4 flex-shrink-0 text-primary-400" />
                  {restaurantInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="section-container flex flex-col items-center justify-between gap-3 py-5 sm:flex-row">
          <p className="text-xs text-charcoal-500">
            &copy; {new Date().getFullYear()} Urban Bites. All rights reserved.
          </p>
          <p className="text-xs text-charcoal-500">
            Crafted with passion in Portland, Oregon.
          </p>
        </div>
      </div>
    </footer>
  );
}
