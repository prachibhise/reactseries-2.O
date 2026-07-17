function MovieCard({ movie }) {
  return (
    <div className="card">
      <div className="poster-container">
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/300x450?text=No+Image"
          }
          alt={movie.Title}
        />

        <button className="watch">
          ▶ View Details
        </button>
      </div>

      <div className="card-content">
        <h3>{movie.Title}</h3>

        <div className="details">
          <span className="year">{movie.Year}</span>
          <span className="type">{movie.Type}</span>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;