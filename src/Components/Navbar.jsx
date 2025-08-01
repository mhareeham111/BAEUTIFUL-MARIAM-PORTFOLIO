import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle.jsx';

const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Project', href: '#project' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        // Slightly deeper and more opaque background with blur
        'fixed top-0 left-0 w-full z-50 backdrop-blur-3xl bg-white/10 dark:bg-[ffffff]/70 border-b border-white/10 shadow-sm transition-all duration-300',
        isScrolled ? 'py-3' : 'py-5'
      )}
    >
      <div className="container max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="relative text-white z-10">
            Enny <span className="text-glow  text-foreground"></span> Portfolio
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 mx-auto">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-white dark:text-white/80 hover:text-blue-500 transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
          {/* Theme toggle beside nav items */}
          <div className="ml-4">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-white"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Slightly deeper and more opaque background with blur */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full md:backdrop-blur-sm backdrop-blur-3xl bg-purple-900 dark:bg-[ffffff]/70 shadow-md z-40">
          <div className="container mx-auto py-6 flex flex-col items-center space-y-6">
            {/* Dark Mode Toggle - inside mobile menu */}
            <div className="self-start px-4">
              <ThemeToggle />
            </div>

            {/* Nav Items */}
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-white dark:text-white/90 hover:text-blue-500 transition-colors text-lg"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
