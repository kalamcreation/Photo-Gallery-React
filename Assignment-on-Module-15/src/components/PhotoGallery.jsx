import { useState } from 'react';
import PhotoCard from './PhotoCard';
import PhotoModal from './PhotoModal';

function PhotoGallery({ photos }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  if (photos.length === 0) {
    return <p className="status">😕 No photos found.</p>;
  }

  return (
    <>
      <div className="gallery">
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