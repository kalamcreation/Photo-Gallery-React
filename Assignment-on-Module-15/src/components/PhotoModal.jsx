function PhotoModal({ photo, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>
        <img src={photo.url} alt={photo.title} />
        <h2>{photo.title}</h2>
        <p>
          <strong>Photo ID:</strong> {photo.id}
        </p>
        <p>
          <strong>Album ID:</strong> {photo.albumId}
        </p>
      </div>
    </div>
  );
}

export default PhotoModal;