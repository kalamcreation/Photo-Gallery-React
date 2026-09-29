function PhotoCard({ photo, onViewDetails }) {
  return (
    <div
      className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden 
                 shadow-md hover:shadow-2xl hover:shadow-indigo-500/20
                 transition-all duration-300 hover:-translate-y-2
                 border border-slate-200 dark:border-slate-700
                 flex flex-col animate-fade-in"
    >
      {/* Image */}
      <div className="relative w-full h-44 sm:h-48 overflow-hidden bg-slate-200 dark:bg-slate-700">
        <img
          src={photo.url}
          alt={photo.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Body */}
      <div className="p-4 flex flex-col gap-3 flex-1">
        <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 
                       capitalize line-clamp-2 min-h-[2.5rem]">
          {photo.title}
        </h3>

        <div className="flex flex-wrap gap-2">
          <span className="text-[11px] font-bold px-2.5 py-1 rounded-full
                           bg-indigo-100 text-indigo-700 
                           dark:bg-indigo-500/20 dark:text-indigo-300">
            🆔 ID: {photo.id}
          </span>
          <span className="text-[11px] font-bold px-2.5 py-1 rounded-full
                           bg-purple-100 text-purple-700 
                           dark:bg-purple-500/20 dark:text-purple-300">
            📁 Album: {photo.albumId}
          </span>
        </div>

        <button
          onClick={() => onViewDetails(photo)}
          className="mt-auto w-full py-2 rounded-lg text-sm font-semibold
                     bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800
                     text-white shadow-sm hover:shadow-md
                     transition-all duration-200 hover:-translate-y-0.5"
        >
          View Details
        </button>
      </div>
    </div>
  );
}

export default PhotoCard;