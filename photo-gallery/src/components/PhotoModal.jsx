import { useEffect } from 'react';

function PhotoModal({ photo, onClose }) {
  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4
                 bg-black/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-2xl
                   max-w-lg w-full max-h-[90vh] overflow-y-auto scrollbar-thin
                   animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center
                     rounded-full bg-red-500 hover:bg-red-600 text-white font-bold
                     shadow-lg transition-all duration-200 hover:rotate-90"
        >
          ✕
        </button>

        <img
          src={photo.url}
          alt={photo.title}
          className="w-full h-auto rounded-t-2xl"
        />

        <div className="p-5 space-y-3">
          <h2 className="text-base sm:text-lg font-bold capitalize 
                         text-slate-800 dark:text-slate-100">
            {photo.title}
          </h2>

          <div className="flex flex-wrap gap-2">
            <span className="text-xs font-bold px-3 py-1.5 rounded-full
                             bg-indigo-100 text-indigo-700 
                             dark:bg-indigo-500/20 dark:text-indigo-300">
              Photo ID: {photo.id}
            </span>
            <span className="text-xs font-bold px-3 py-1.5 rounded-full
                             bg-purple-100 text-purple-700 
                             dark:bg-purple-500/20 dark:text-purple-300">
              Album ID: {photo.albumId}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoModal;