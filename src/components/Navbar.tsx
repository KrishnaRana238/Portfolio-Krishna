import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { Link } from 'react-router-dom';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Resume', href: '#resume' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine if current path is the home page
  const isHomePage = window.location.pathname === '/';

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        scrolled ? 'glass py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold cyber-text">KRISHNA PORTFOLIO</Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <React.Fragment key={link.name}>
                {link.href.startsWith('/') ? (
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium"
                  >
                    {link.name}
                  </Link>
                ) : (
                  isHomePage ? (
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={`/${link.href}`}
                      className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium"
                    >
                      {link.name}
                    </Link>
                  )
                )}
              </React.Fragment>
            ))}
            <ThemeToggle />
          </nav>
          
          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button 
              className="text-gray-300 hover:text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="glass md:hidden absolute top-full left-0 w-full py-4 px-4">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <React.Fragment key={link.name}>
                {link.href.startsWith('/') ? (
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ) : (
                  isHomePage ? (
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={`/${link.href}`}
                      className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )
                )}
              </React.Fragment>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
