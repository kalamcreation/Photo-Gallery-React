import { useState, useEffect } from 'react';
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

  // Fetch first 100 photos
  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        setLoading(true);
        const res = await fetch('https://jsonplaceholder.typicode.com/photos');
        if (!res.ok) throw new Error('Failed to fetch photos');
        const data = await res.json();
        setPhotos(data.slice(0, 100));
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPhotos();
  }, []);

  // Apply dark mode class to <html>
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  // Filtering
  const filteredPhotos = photos.filter((photo) => {
    const matchSearch = photo.title.toLowerCase().includes(search.toLowerCase());
    const matchAlbum =
      selectedAlbum === 'all' || photo.albumId === Number(selectedAlbum);
    return matchSearch && matchAlbum;
  });

  const albums = ['all', ...new Set(photos.map((p) => p.albumId))];

  return (
    <div className="min-h-screen flex flex-col">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
              🔍
            </span>
            <input
              type="text"
              placeholder="Search by title..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl
                         bg-white dark:bg-slate-800
                         border border-slate-200 dark:border-slate-700
                         text-slate-800 dark:text-slate-100
                         placeholder-slate-400 dark:placeholder-slate-500
                         focus:outline-none focus:ring-2 focus:ring-indigo-500 
                         focus:border-transparent
                         transition-all duration-200 shadow-sm"
            />
          </div>

          <select
            value={selectedAlbum}
            onChange={(e) => setSelectedAlbum(e.target.value)}
            className="px-4 py-3 rounded-xl min-w-[180px]
                       bg-white dark:bg-slate-800
                       border border-slate-200 dark:border-slate-700
                       text-slate-800 dark:text-slate-100
                       focus:outline-none focus:ring-2 focus:ring-indigo-500 
                       focus:border-transparent
                       transition-all duration-200 shadow-sm cursor-pointer"
          >
            {albums.map((a) => (
              <option key={a} value={a}>
                {a === 'all' ? '🎯 All Albums' : `📁 Album ${a}`}
              </option>
            ))}
          </select>
        </div>

        {/* Result count */}
        {!loading && !error && (
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
            Showing{' '}
            <span className="font-bold text-indigo-600 dark:text-indigo-400">
              {filteredPhotos.length}
            </span>{' '}
            of {photos.length} photos
          </p>
        )}

        {/* States */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-14 h-14 border-4 border-indigo-200 border-t-indigo-600 
                            rounded-full animate-spin mb-4" />
            <p className="text-slate-600 dark:text-slate-400 font-medium">
              Loading photos...
            </p>
          </div>
        )}

        {error && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="text-6xl mb-4">❌</div>
            <p className="text-lg font-semibold text-red-500 mb-2">
              Oops! Something went wrong
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">{error}</p>
          </div>
        )}

        {!loading && !error && <PhotoGallery photos={filteredPhotos} />}
      </main>

      <Footer />
    </div>
  );
}

export default App;