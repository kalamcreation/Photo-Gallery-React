import { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import PhotoGallery from './components/PhotoGallery';
import Footer from './components/Footer';

function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedAlbum, setSelectedAlbum] = useState('all');
  const searchInputRef = useRef(null);

  // Fetch photos
  useEffect(() => {
    const controller = new AbortController();

    const fetchPhotos = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(
          'https://jsonplaceholder.typicode.com/photos',
          { signal: controller.signal }
        );
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
        const data = await res.json();
        setPhotos(data.slice(0, 100));
      } catch (err) {
        if (err.name !== 'AbortError') setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
    return () => controller.abort();
  }, []);

  // Dark mode toggle
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  // Scroll to search on navbar search click
  const handleSearchClick = () => {
    searchInputRef.current?.focus();
    searchInputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  // Filtering
  const filteredPhotos = photos.filter((photo) => {
    const matchSearch = photo.title.toLowerCase().includes(search.toLowerCase());
    const matchAlbum =
      selectedAlbum === 'all' || photo.albumId === Number(selectedAlbum);
    return matchSearch && matchAlbum;
  });

  const albums = ['all', ...new Set(photos.map((p) => p.albumId))];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900 
                    transition-colors duration-300">
      {/* Navbar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onSearchClick={handleSearchClick}
      />

      {/* Hero Header */}
      <Header />

      {/* Main Content */}
      <main
        id="gallery"
        className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12"
      >
        {/* Section Title */}
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 
                         dark:text-slate-100">
            🎨 Gallery
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Browse, search and filter through the collection
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
              🔍
            </span>
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search by title..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-white dark:bg-slate-800
                         border border-slate-200 dark:border-slate-700
                         text-slate-800 dark:text-slate-100
                         placeholder-slate-400 dark:placeholder-slate-500
                         focus:outline-none focus:ring-2 focus:ring-indigo-500
                         focus:border-transparent transition-all shadow-sm"
            />
          </div>

          <select
            value={selectedAlbum}
            onChange={(e) => setSelectedAlbum(e.target.value)}
            className="px-4 py-3 rounded-xl min-w-[180px] bg-white dark:bg-slate-800
                       border border-slate-200 dark:border-slate-700
                       text-slate-800 dark:text-slate-100
                       focus:outline-none focus:ring-2 focus:ring-indigo-500
                       focus:border-transparent transition-all shadow-sm cursor-pointer"
          >
            {albums.map((a) => (
              <option key={a} value={a}>
                {a === 'all' ? '🎯 All Albums' : `📁 Album ${a}`}
              </option>
            ))}
          </select>
        </div>

        {/* Result Count */}
        {!loading && !error && photos.length > 0 && (
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
            Showing{' '}
            <span className="font-bold text-indigo-600 dark:text-indigo-400">
              {filteredPhotos.length}
            </span>{' '}
            of {photos.length} photos
          </p>
        )}

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-14 h-14 border-4 border-indigo-200 border-t-indigo-600 
                            rounded-full animate-spin mb-4" />
            <p className="text-slate-600 dark:text-slate-400 font-medium">
              Loading photos...
            </p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="text-6xl mb-4">❌</div>
            <p className="text-lg font-semibold text-red-500 mb-2">
              Failed to load photos
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 px-6 py-2 bg-indigo-600 hover:bg-indigo-700
                         text-white rounded-lg font-semibold transition-colors"
            >
              Retry
            </button>
          </div>
        )}

        {/* Gallery */}
        {!loading && !error && <PhotoGallery photos={filteredPhotos} />}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;