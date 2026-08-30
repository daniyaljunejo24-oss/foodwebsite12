import { useState, useMemo } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { products, categories, type Category } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';

type Filter = 'All' | Category;

export function MenuPage() {
  const [filter, setFilter] = useState<Filter>('All');
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState<'popular' | 'price-low' | 'price-high' | 'rating'>('popular');

  const filtered = useMemo(() => {
    let result = products;
    if (filter !== 'All') {
      result = result.filter((p) => p.category === filter);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }
    switch (sortBy) {
      case 'price-low':
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result = [...result].sort((a, b) => b.rating - a.rating);
        break;
      default:
        result = [...result].sort((a, b) => Number(b.popular) - Number(a.popular));
    }
    return result;
  }, [filter, search, sortBy]);

  const filters: Filter[] = ['All', ...categories.map((c) => c.name)];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-white/5 bg-charcoal-900/30 py-16 lg:py-20">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.pexels.com/photos/7440380/pexels-photo-7440380.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="section-container relative">
          <span className="eyebrow mb-3 block">Our Menu</span>
          <h1 className="mb-4 font-serif text-display font-bold text-white">
            Explore Our Dishes
          </h1>
          <p className="max-w-xl text-lg text-charcoal-300">
            From flame-grilled burgers to wood-fired pizza and handcrafted desserts — every dish is made fresh to order.
          </p>
        </div>
      </section>

      {/* Controls */}
      <section className="sticky top-16 z-30 border-b border-white/5 bg-charcoal-950/90 backdrop-blur-xl lg:top-20">
        <div className="section-container py-4">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            {/* Search */}
            <div className="relative w-full lg:max-w-xs">
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal-400" />
              <input
                type="text"
                placeholder="Search dishes..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="input-field pl-10"
              />
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="h-4 w-4 text-charcoal-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                className="rounded-xl border border-white/10 bg-charcoal-900/50 px-3 py-2.5 text-sm text-white transition-all focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Category filters */}
          <div className="no-scrollbar mt-4 flex gap-2 overflow-x-auto pb-1">
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

      {/* Products grid */}
      <section className="py-12 lg:py-16">
        <div className="section-container">
          <p className="mb-6 text-sm text-charcoal-400">
            Showing {filtered.length} {filtered.length === 1 ? 'dish' : 'dishes'}
            {filter !== 'All' && ` in ${filter}`}
          </p>
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white/5">
                <Search className="h-9 w-9 text-charcoal-400" />
              </div>
              <h3 className="mb-1 font-serif text-xl text-white">No dishes found</h3>
              <p className="mb-6 text-sm text-charcoal-400">Try a different search or category.</p>
              <button
                onClick={() => {
                  setSearch('');
                  setFilter('All');
                }}
                className="btn-primary"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
