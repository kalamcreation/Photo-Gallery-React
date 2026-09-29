import { useState } from 'react';
import PhotoCard from './PhotoCard';
import PhotoModal from './PhotoModal';

function PhotoGallery({ photos }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  if (photos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="text-6xl mb-4">😕</div>
        <p className="text-lg font-semibold text-slate-600 dark:text-slate-400">
          No photos found
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5">
        {photos.map((photo) => (
          <PhotoCard
            key={photo.id}
            photo={photo}
            onViewDetails={setSelectedPhoto}
          />
        ))}
      </div>

      {selectedPhoto && (
        <PhotoModal
          photo={selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
        />
      )}
    </>
  );
}

export default PhotoGallery;