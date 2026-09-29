function Header({ darkMode, setDarkMode }) {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <h1 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-2xl sm:text-3xl">📸</span>
          <span className="bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">
            Photo Gallery
          </span>
        </h1>

        <button
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle theme"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 hover:bg-white/30 
                     text-white text-sm font-semibold backdrop-blur-sm border border-white/30
                     transition-all duration-300 hover:scale-105 active:scale-95"
        >
          {darkMode ? (
            <>
              <span>☀️</span>
              <span className="hidden sm:inline">Light</span>
            </>
          ) : (
            <>
              <span>🌙</span>
              <span className="hidden sm:inline">Dark</span>
            </>
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;