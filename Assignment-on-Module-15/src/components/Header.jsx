function Header({ darkMode, setDarkMode }) {
  return (
    <header className="header">
      <h1 className="logo">📸 Photo Gallery</h1>
      <button
        className="theme-btn"
        onClick={() => setDarkMode(!darkMode)}
        aria-label="Toggle theme"
      >
        {darkMode ? '☀️ Light' : '🌙 Dark'}
      </button>
    </header>
  );
}

export default Header;