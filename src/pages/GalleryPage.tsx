import { useState } from 'react';
import { X } from 'lucide-react';
import { galleryImages, type GalleryImage } from '@/data/products';

type GalleryFilter = 'All' | 'Food' | 'Interior' | 'Drinks' | 'Desserts';

export function GalleryPage() {
  const [filter, setFilter] = useState<GalleryFilter>('All');
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null);

  const filters: GalleryFilter[] = ['All', 'Food', 'Interior', 'Drinks', 'Desserts'];

  const filtered =
    filter === 'All' ? galleryImages : galleryImages.filter((img) => img.category === filter);

  const spanClass = (span?: string) => {
    switch (span) {
      case 'large':
        return 'sm:col-span-2 sm:row-span-2';
      case 'wide':
        return 'sm:col-span-2';
      case 'tall':
        return 'sm:row-span-2';
      default:
        return '';
    }
  };

  return (
    <div className="pt-16 lg:pt-20">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-white/5 bg-charcoal-900/30 py-16 lg:py-20">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.pexels.com/photos/24247771/pexels-photo-24247771.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="section-container relative">
          <span className="eyebrow mb-3 block">Gallery</span>
          <h1 className="mb-4 font-serif text-display font-bold text-white">
            A Feast for the Eyes
          </h1>
          <p className="max-w-xl text-lg text-charcoal-300">
            A glimpse into the dishes, drinks, and atmosphere that make Urban Bites special.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8">
        <div className="section-container">
          <div className="no-scrollbar flex gap-2 overflow-x-auto pb-1">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`flex-shrink-0 rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                  filter === f
                    ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                    : 'border border-white/10 bg-white/5 text-charcoal-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-20 lg:pb-28">
        <div className="section-container">
          <div className="grid auto-rows-[200px] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {filtered.map((img) => (
              <button
                key={img.id}
                onClick={() => setLightbox(img)}
                className={`group relative overflow-hidden rounded-2xl ${spanClass(img.span)}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 p-4 text-left opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="rounded-full bg-primary-500/80 px-2.5 py-0.5 text-xs font-medium text-white backdrop-blur-sm">
                    {img.category}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-charcoal-950/90 p-4 backdrop-blur-md animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="max-h-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-h-[80vh] w-full rounded-2xl object-contain"
            />
            <p className="mt-4 text-center text-sm text-charcoal-300">{lightbox.alt}</p>
          </div>
        </div>
      )}
    </div>
  );
}
