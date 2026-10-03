function Footer() {
  const year = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'About', href: '#about' },
  ];

  const resources = [
    { label: 'JSONPlaceholder', href: 'https://jsonplaceholder.typicode.com/photos' },
    { label: 'React Docs', href: 'https://react.dev' },
    { label: 'Tailwind CSS', href: 'https://tailwindcss.com' },
  ];

  const socials = [
    { icon: '🐙', label: 'GitHub', href: 'https://github.com' },
    { icon: '🐦', label: 'Twitter', href: 'https://twitter.com' },
    { icon: '💼', label: 'LinkedIn', href: 'https://linkedin.com' },
  ];

  return (
    <footer
      id="footer"
      className="bg-slate-900 dark:bg-slate-950 text-slate-300 border-t border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">📸</span>
              <span className="text-lg font-bold bg-gradient-to-r from-indigo-400 to-purple-400 
                               bg-clip-text text-transparent">
                PhotoGallery
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              A modern, responsive photo gallery built with React, Vite, and Tailwind CSS.
            </p>
            <div className="flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 flex items-center justify-center rounded-lg
                             bg-slate-800 hover:bg-indigo-600 
                             transition-colors duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-indigo-400 transition-colors"
                  >
                    → {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Resources
            </h3>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-slate-400 hover:text-indigo-400 transition-colors"
                  >
                    → {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Stay Updated
            </h3>
            <p className="text-sm text-slate-400 mb-3">
              Get notified about new collections.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex gap-2"
            >
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-3 py-2 text-sm rounded-lg bg-slate-800 
                           border border-slate-700 text-white
                           placeholder-slate-500
                           focus:outline-none focus:ring-2 focus:ring-indigo-500 
                           focus:border-transparent transition-all"
              />
              <button
                type="submit"
                className="px-3 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700
                           text-white text-sm font-semibold transition-colors"
              >
                →
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-slate-800 
                        flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 text-center sm:text-left">
            © {year}{' '}
            <span className="font-semibold text-indigo-400">PhotoGallery</span>. 
            All rights reserved. Built with React ⚛️ + Vite + Tailwind 🎨
          </p>
          <p className="text-xs text-slate-500">
            Data from{' '}
            <a
              href="https://jsonplaceholder.typicode.com/photos"
              target="_blank"
              rel="noreferrer"
              className="text-indigo-400 hover:text-indigo-300 hover:underline"
            >
              JSONPlaceholder
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;