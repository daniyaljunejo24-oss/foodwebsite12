import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Search } from 'lucide-react';
import { Link, useRouter } from '@/context/Router';
import { useCart } from '@/context/CartContext';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Menu', to: '/menu' },
  { label: 'About', to: '/about' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount, openCart } = useCart();
  const { path } = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [path]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const isActive = (to: string) => (to === '/' ? path === '/' : path.startsWith(to));

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-charcoal-950/90 backdrop-blur-xl shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <nav className="section-container flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-500 text-lg font-bold text-white transition-transform duration-300 group-hover:scale-110 lg:h-10 lg:w-10">
              U
            </span>
            <span className="font-serif text-xl font-bold tracking-tight text-white lg:text-2xl">
              Urban<span className="text-primary-400">Bites</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive(link.to)
                    ? 'text-primary-400'
                    : 'text-charcoal-200 hover:text-white'
                }`}
              >
                {link.label}
                {isActive(link.to) && (
                  <span className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-primary-400" />
                )}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              to="/menu"
              className="hidden h-10 w-10 items-center justify-center rounded-full text-charcoal-200 transition-colors hover:bg-white/5 hover:text-white sm:flex"
              aria-label="Search menu"
            >
              <Search className="h-5 w-5" />
            </Link>

            <button
              onClick={openCart}
              className="relative flex h-10 w-10 items-center justify-center rounded-full text-charcoal-200 transition-colors hover:bg-white/5 hover:text-white"
              aria-label="Open cart"
            >
              <ShoppingBag className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary-500 px-1 text-[11px] font-bold text-white">
                  {itemCount}
                </span>
              )}
            </button>

            <Link to="/menu" className="btn-primary hidden lg:inline-flex">
              Order Now
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/5 lg:hidden"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden ${
          mobileOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div
          className={`absolute inset-0 bg-charcoal-950/80 backdrop-blur-sm transition-opacity duration-300 ${
            mobileOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-charcoal-900 shadow-2xl transition-transform duration-300 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex h-16 items-center justify-between px-5">
            <span className="font-serif text-lg font-bold text-white">Menu</span>
            <button
              onClick={() => setMobileOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-full text-charcoal-200 hover:bg-white/5 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="flex flex-col gap-1 px-3 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`rounded-xl px-4 py-3.5 text-base font-medium transition-colors ${
                  isActive(link.to)
                    ? 'bg-primary-500/10 text-primary-400'
                    : 'text-charcoal-100 hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/menu" className="btn-primary mt-4 w-full">
              Order Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
