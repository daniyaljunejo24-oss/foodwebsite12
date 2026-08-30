import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from '@/context/Router';

export function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, clearCart, subtotal, itemCount } = useCart();

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[60] bg-charcoal-950/70 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <aside
        className={`fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-charcoal-900 shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="h-5 w-5 text-primary-400" />
            <h2 className="font-serif text-lg font-bold text-white">Your Cart</h2>
            {itemCount > 0 && (
              <span className="rounded-full bg-primary-500/15 px-2.5 py-0.5 text-xs font-semibold text-primary-400">
                {itemCount} {itemCount === 1 ? 'item' : 'items'}
              </span>
            )}
          </div>
          <button
            onClick={closeCart}
            className="flex h-9 w-9 items-center justify-center rounded-full text-charcoal-200 transition-colors hover:bg-white/5 hover:text-white"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white/5">
                <ShoppingBag className="h-9 w-9 text-charcoal-400" />
              </div>
              <h3 className="mb-1 font-serif text-lg text-white">Your cart is empty</h3>
              <p className="mb-6 text-sm text-charcoal-400">Add some delicious dishes to get started.</p>
              <Link to="/menu" onClick={closeCart} className="btn-primary">
                Explore Menu
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-3 rounded-2xl border border-white/5 bg-charcoal-800/50 p-3"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="h-20 w-20 flex-shrink-0 rounded-xl object-cover"
                  />
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="text-sm font-semibold text-white">{item.product.name}</h4>
                        <p className="text-xs text-charcoal-400">{item.product.category}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-charcoal-400 transition-colors hover:bg-error-500/10 hover:text-error-400"
                        aria-label="Remove item"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-2">
                      <div className="flex items-center gap-1 rounded-full border border-white/10 bg-charcoal-900/50">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="flex h-7 w-7 items-center justify-center rounded-full text-charcoal-200 transition-colors hover:text-white"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="w-6 text-center text-sm font-semibold text-white">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="flex h-7 w-7 items-center justify-center rounded-full text-charcoal-200 transition-colors hover:text-white"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <span className="text-sm font-bold text-primary-400">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              <button
                onClick={clearCart}
                className="mt-2 flex items-center justify-center gap-1.5 rounded-xl py-2 text-xs font-medium text-charcoal-400 transition-colors hover:text-error-400"
              >
                <Trash2 className="h-3.5 w-3.5" />
                Clear cart
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-white/10 px-5 py-4">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm text-charcoal-300">Subtotal</span>
              <span className="font-serif text-2xl font-bold text-white">
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <p className="mb-3 text-center text-xs text-charcoal-400">
              Taxes and delivery calculated at checkout. This is a demo — no real payment is processed.
            </p>
            <button className="btn-primary w-full" disabled>
              Proceed to Checkout
            </button>
            <button
              onClick={closeCart}
              className="mt-2 w-full rounded-full py-2 text-sm font-medium text-charcoal-300 transition-colors hover:text-white"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
