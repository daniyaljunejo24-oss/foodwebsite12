import { useState, useEffect } from 'react';
import { Plus, Minus, Star, ArrowLeft, ShoppingBag, Check } from 'lucide-react';
import { products } from '@/data/products';
import { Link, useRouter } from '@/context/Router';
import { useCart } from '@/context/CartContext';
import { ProductCard } from '@/components/ProductCard';

export function ProductDetailPage({ id }: { id: string }) {
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();
  const { navigate } = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    setQuantity(1);
    setAdded(false);
  }, [id]);

  if (!product) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center pt-20 text-center">
        <h1 className="mb-4 font-serif text-3xl font-bold text-white">Dish not found</h1>
        <p className="mb-6 text-charcoal-400">The dish you are looking for is not on the menu.</p>
        <Link to="/menu" className="btn-primary">
          Back to Menu
        </Link>
      </div>
    );
  }

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const handleAdd = () => {
    addItem(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="pt-16 lg:pt-20">
      {/* Breadcrumb */}
      <div className="section-container py-5">
        <button
          onClick={() => navigate('/menu')}
          className="inline-flex items-center gap-1.5 text-sm text-charcoal-400 transition-colors hover:text-primary-400"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Menu
        </button>
      </div>

      {/* Product detail */}
      <section className="pb-12 lg:pb-16">
        <div className="section-container">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Image */}
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src={product.image}
                alt={product.name}
                className="aspect-square w-full object-cover"
              />
              {product.tags[0] && (
                <span className="absolute left-4 top-4 rounded-full bg-primary-500/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                  {product.tags[0]}
                </span>
              )}
            </div>

            {/* Info */}
            <div className="flex flex-col justify-center">
              <div className="mb-3 flex items-center gap-3">
                <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-charcoal-300">
                  {product.category}
                </span>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.round(product.rating)
                          ? 'fill-warning-400 text-warning-400'
                          : 'text-charcoal-600'
                      }`}
                    />
                  ))}
                  <span className="ml-1 text-sm text-charcoal-400">{product.rating}</span>
                </div>
              </div>

              <h1 className="mb-3 font-serif text-4xl font-bold text-white lg:text-5xl">
                {product.name}
              </h1>

              <p className="mb-6 leading-relaxed text-charcoal-300">
                {product.longDescription}
              </p>

              <div className="mb-6 flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-charcoal-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mb-6">
                <span className="font-serif text-4xl font-bold text-primary-400">
                  ${product.price.toFixed(2)}
                </span>
              </div>

              {/* Quantity + Add */}
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-1 rounded-full border border-white/10 bg-charcoal-900/50 p-1">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="flex h-10 w-10 items-center justify-center rounded-full text-charcoal-200 transition-colors hover:bg-white/5 hover:text-white"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-10 text-center text-lg font-semibold text-white">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="flex h-10 w-10 items-center justify-center rounded-full text-charcoal-200 transition-colors hover:bg-white/5 hover:text-white"
                    aria-label="Increase quantity"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>

                <button
                  onClick={handleAdd}
                  className={`flex-1 min-w-[200px] ${added ? 'btn-primary !bg-success-500' : 'btn-primary'}`}
                >
                  {added ? (
                    <>
                      <Check className="h-4 w-4" />
                      Added to Cart
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="h-4 w-4" />
                      Add to Cart — ${(product.price * quantity).toFixed(2)}
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="border-t border-white/5 bg-charcoal-900/30 py-16">
          <div className="section-container">
            <h2 className="mb-8 font-serif text-2xl font-bold text-white">
              You Might Also Like
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
