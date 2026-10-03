import { useState } from 'react';

function Navbar({ darkMode, setDarkMode, onSearchClick }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Albums', href: '#gallery' },
    { name: 'About', href: '#about' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="text-2xl group-hover:scale-110 transition-transform">📸</span>
            <span className="text-lg font-bold bg-gradient-to-r from-indigo-600 to-purple-600 
                             dark:from-indigo-400 dark:to-purple-400 
                             bg-clip-text text-transparent">
              PhotoGallery
            </span>
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="px-4 py-2 rounded-lg text-sm font-medium
                             text-slate-700 dark:text-slate-300
                             hover:bg-indigo-50 dark:hover:bg-slate-800
                             hover:text-indigo-600 dark:hover:text-indigo-400
                             transition-all duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            {/* Search Icon (desktop) */}
            <button
              onClick={onSearchClick}
              aria-label="Search"
              className="hidden md:flex w-9 h-9 items-center justify-center rounded-lg
                         text-slate-600 dark:text-slate-300
                         hover:bg-slate-100 dark:hover:bg-slate-800
                         transition-colors"
            >
              🔍
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle theme"
              className="w-9 h-9 flex items-center justify-center rounded-lg
                         text-slate-600 dark:text-slate-300
                         hover:bg-slate-100 dark:hover:bg-slate-800
                         transition-colors"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>

            {/* CTA Button */}
            <a
              href="#gallery"
              className="hidden sm:inline-flex px-4 py-2 rounded-lg text-sm font-semibold
                         bg-gradient-to-r from-indigo-600 to-purple-600 text-white
                         hover:from-indigo-700 hover:to-purple-700
                         shadow-sm hover:shadow-md transition-all duration-200
                         hover:-translate-y-0.5"
            >
              Explore
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg
                         text-slate-600 dark:text-slate-300
                         hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {mobileOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden py-3 border-t border-slate-200 dark:border-slate-800 animate-fade-in">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-2.5 rounded-lg text-sm font-medium
                               text-slate-700 dark:text-slate-300
                               hover:bg-indigo-50 dark:hover:bg-slate-800
                               hover:text-indigo-600 dark:hover:text-indigo-400
                               transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;