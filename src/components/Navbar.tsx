/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Heritage', href: '#story' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Ingredients', href: '#ingredients' },
    { name: 'The Ritual', href: '#how-to-use' },
    { name: 'Reviews', href: '#reviews' },
  ];

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cream/95 backdrop-blur-md shadow-sm border-b border-forest/10 py-3.5'
          : 'bg-cream/60 backdrop-blur-xs py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center font-sans">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <span className="font-serif text-2xl font-bold tracking-tight text-forest group-hover:text-amber transition-colors duration-150">
            PREMADAV
          </span>
          <span className="hidden sm:flex text-[10px] font-semibold tracking-wider bg-forest/5 text-forest px-2.5 py-1 rounded border border-forest/15 items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-amber" /> 100% NATURAL
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-widest font-semibold text-earth hover:text-forest transition-colors duration-150"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Button with crisp Editorial rounded corner */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#order"
            className="flex items-center gap-1.5 px-6 py-3 rounded bg-forest text-cream text-xs uppercase tracking-widest font-bold hover:bg-forest-light transform hover:-translate-y-0.5 active:translate-y-0 active:scale-98 transition-all duration-150"
          >
            ORDER NOW
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-forest focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-sand-light border-b border-forest/15 overflow-y-auto max-h-[calc(100vh-90px)]"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-semibold uppercase tracking-wider text-earth hover:text-forest py-2 border-b border-forest/5"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#order"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-2 w-full text-center py-3.5 rounded bg-forest text-cream text-xs font-bold uppercase tracking-widest hover:bg-forest-light flex items-center justify-center gap-2"
              >
                ORDER NOW
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
