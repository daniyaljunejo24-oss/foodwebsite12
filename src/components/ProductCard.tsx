import { Plus, Star } from 'lucide-react';
import type { Product } from '@/data/products';
import { Link } from '@/context/Router';
import { useCart } from '@/context/CartContext';

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-charcoal-900/50 transition-all duration-500 hover:border-white/10 hover:bg-charcoal-900 hover:shadow-2xl hover:shadow-primary-500/10">
      <Link to={`/product/${product.id}`} className="relative block aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 via-transparent to-transparent" />
        {product.tags[0] && (
          <span className="absolute left-3 top-3 rounded-full bg-primary-500/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
            {product.tags[0]}
          </span>
        )}
        {product.popular && (
          <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-charcoal-950/80 px-2.5 py-1 text-xs font-semibold text-warning-400 backdrop-blur-sm">
            <Star className="h-3 w-3 fill-warning-400" />
            Popular
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="mb-1 font-serif text-lg font-semibold text-white transition-colors group-hover:text-primary-400">
            {product.name}
          </h3>
        </Link>
        <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-charcoal-400">
          {product.description}
        </p>
        <div className="mt-auto flex items-center justify-between">
          <span className="font-serif text-xl font-bold text-white">
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={() => addItem(product)}
            className="flex items-center gap-1.5 rounded-full bg-primary-500 px-4 py-2 text-xs font-semibold text-white transition-all duration-300 hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-500/30 active:scale-95"
          >
            <Plus className="h-3.5 w-3.5" />
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
