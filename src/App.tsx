import { RouterProvider, useRouter } from '@/context/Router';
import { CartProvider } from '@/context/CartContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CartDrawer } from '@/components/CartDrawer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { HomePage } from '@/pages/HomePage';
import { MenuPage } from '@/pages/MenuPage';
import { ProductDetailPage } from '@/pages/ProductDetailPage';
import { AboutPage } from '@/pages/AboutPage';
import { GalleryPage } from '@/pages/GalleryPage';
import { ContactPage } from '@/pages/ContactPage';

function Routes() {
  const { path } = useRouter();

  let page;
  if (path === '/') {
    page = <HomePage />;
  } else if (path === '/menu') {
    page = <MenuPage />;
  } else if (path.startsWith('/product/')) {
    const id = path.replace('/product/', '');
    page = <ProductDetailPage id={id} />;
  } else if (path === '/about') {
    page = <AboutPage />;
  } else if (path === '/gallery') {
    page = <GalleryPage />;
  } else if (path === '/contact') {
    page = <ContactPage />;
  } else {
    page = (
      <div className="flex min-h-[70vh] flex-col items-center justify-center pt-20 text-center">
        <h1 className="mb-4 font-serif text-6xl font-bold text-primary-400">404</h1>
        <p className="mb-2 text-xl text-white">Page not found</p>
        <p className="mb-6 text-charcoal-400">The page you are looking for does not exist.</p>
        <a href="/" className="btn-primary">Back Home</a>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">{page}</main>
      <Footer />
      <CartDrawer />
    </div>
  );
}

function App() {
  return (
    <RouterProvider>
      <CartProvider>
        <Routes />
      </CartProvider>
    </RouterProvider>
  );
}

export default App;
