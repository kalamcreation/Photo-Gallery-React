import { useState, useEffect } from 'react';
import Header from './components/Header';
import PhotoGallery from './components/PhotoGallery';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedAlbum, setSelectedAlbum] = useState('all');

  // fetch() ব্যবহার করে API থেকে data আনা
  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        setLoading(true);
        const res = await fetch('https://jsonplaceholder.typicode.com/photos');
        if (!res.ok) throw new Error('Failed to fetch photos');
        const data = await res.json();
        // প্রথম ১০০টি photo নেওয়া
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

  // Filter logic: search + album
  const filteredPhotos = photos.filter((photo) => {
    const matchSearch = photo.title.toLowerCase().includes(search.toLowerCase());
    const matchAlbum =
      selectedAlbum === 'all' || photo.albumId === Number(selectedAlbum);
    return matchSearch && matchAlbum;
  });

  // Unique album list
  const albums = ['all', ...new Set(photos.map((p) => p.albumId))];

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="main">
        <div className="controls">
          <input
            type="text"
            placeholder="🔍 Search by title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />

          <select
            value={selectedAlbum}
            onChange={(e) => setSelectedAlbum(e.target.value)}
            className="album-filter"
          >
            {albums.map((a) => (
              <option key={a} value={a}>
                {a === 'all' ? 'All Albums' : `Album ${a}`}
              </option>
            ))}
          </select>
        </div>

        {loading && <p className="status">⏳ Loading photos...</p>}
        {error && <p className="status error">❌ {error}</p>}

        {!loading && !error && (
          <PhotoGallery photos={filteredPhotos} />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;