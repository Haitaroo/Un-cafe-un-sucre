import React, { useEffect } from 'react';
import { Coffee, ShoppingBag, Sun, Moon } from 'lucide-react';
import { useStore } from './store';
import { Hero } from './components/Hero';
import { Menu } from './components/Menu';
import { Cart } from './components/Cart';
import { FeaturedProducts } from './components/FeaturedProducts';
import { ProductGallery } from './components/ProductGallery';
import { Footer } from './components/Footer';
import { About } from './components/About';
import { Contact } from './components/Contact';

function App() {
  const { theme, toggleTheme, cart } = useStore();
  const [showMenu, setShowMenu] = React.useState(false);
  const [showCart, setShowCart] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState<'home' | 'about' | 'contact'>('home');

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Apply theme class to document
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return (
          <>
            <Hero onOrder={() => setShowMenu(true)} />
            <FeaturedProducts />
            <ProductGallery />
          </>
        );
    }
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center gap-8">
              <div 
                className="flex items-center cursor-pointer"
                onClick={() => setCurrentPage('home')}
              >
                <Coffee className="h-8 w-8 text-amber-600" />
                <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">Un café, un sucre</span>
              </div>
              <div className="hidden md:flex items-center gap-6">
                <button 
                  onClick={() => setShowMenu(true)}
                  className="text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-600"
                >
                  Commander
                </button>
                <button 
                  onClick={() => setCurrentPage('about')}
                  className="text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-600"
                >
                  À Propos
                </button>
                <button 
                  onClick={() => setCurrentPage('contact')}
                  className="text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-600"
                >
                  Contact
                </button>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
                aria-label={theme === 'dark' ? 'Mode Clair' : 'Mode Sombre'}
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              <button 
                onClick={() => setShowCart(true)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 relative"
                aria-label="Panier"
              >
                <ShoppingBag className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        {renderPage()}
        {showMenu && <Menu onClose={() => setShowMenu(false)} />}
        <Cart isOpen={showCart} onClose={() => setShowCart(false)} />
      </main>

      <Footer />
    </div>
  );
}

export default App;