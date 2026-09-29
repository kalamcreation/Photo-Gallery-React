function PhotoCard({ photo, onViewDetails }) {
  return (
    <div className="photo-card">
      <div className="image-wrapper">
        <img src={photo.url} alt={photo.title} loading="lazy" />
      </div>
      <div className="card-body">
        <h3 className="card-title">{photo.title}</h3>
        <div className="card-meta">
          <span className="badge">🆔 ID: {photo.id}</span>
          <span className="badge">📁 Album: {photo.albumId}</span>
        </div>
        <button
          className="details-btn"
          onClick={() => onViewDetails(photo)}
        >
          View Details
        </button>
      </div>
    </div>
  );
}

export default PhotoCard;