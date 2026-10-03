function Header() {
  return (
    <header
      id="about"
      className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600
                 text-white"
    >
      {/* Decorative Background Blobs */}
      <div className="absolute top-0 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 text-center">
        <div className="inline-block px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm 
                        border border-white/25 text-xs sm:text-sm font-semibold mb-6 animate-fade-in">
          ✨ Explore 100 Beautiful Photos
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-5 
                       animate-slide-up">
          Discover Amazing
          <span className="block bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-200 
                           bg-clip-text text-transparent">
            Photo Collection
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-sm sm:text-base lg:text-lg text-white/85 
                      mb-8 leading-relaxed animate-slide-up">
          Browse through a curated gallery of stunning images. Search, filter by album, 
          and enjoy a fully responsive experience.
        </p>

        <div className="flex flex-wrap gap-3 justify-center animate-slide-up">
          <a
            href="#gallery"
            className="px-6 py-3 rounded-xl bg-white text-indigo-700 font-bold text-sm
                       hover:bg-indigo-50 hover:scale-105 shadow-lg 
                       transition-all duration-200"
          >
            🚀 Browse Gallery
          </a>
          <a
            href="https://jsonplaceholder.typicode.com/photos"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-xl bg-white/15 backdrop-blur-sm border border-white/30
                       text-white font-bold text-sm hover:bg-white/25 hover:scale-105
                       transition-all duration-200"
          >
            📡 View API
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto mt-12">
          {[
            { num: '100', label: 'Photos' },
            { num: '5K+', label: 'Total' },
            { num: '∞', label: 'Inspiration' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-extrabold">{s.num}</div>
              <div className="text-xs sm:text-sm text-white/70 font-medium mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;