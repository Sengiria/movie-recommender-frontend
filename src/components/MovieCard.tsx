import React from "react";
import type { Movie } from "../interface";
import GenreTag from "./GenreTag";
import RecommendButton from "./RecommendButton";

interface MovieCardProps {
  movie: Movie;
  onRecommend: (movie: Movie) => void;
}

const MovieCard: React.FC<MovieCardProps> = ({
  movie,
  onRecommend,
}) => {
  const { title, genres, overview, release_date } = movie;
  return (
    <div
      className="bg-white border border-slate-200 shadow-md rounded-xl p-4 space-y-2 hover:shadow-lg transition-transform duration-300 hover:-translate-y-1 animate-[var(--animate-fade-in)] hover:shadow-xl transition-shadow"
    >
      <h2 className="text-xl font-bold">{title}</h2>
      {genres && (
        <div className="flex flex-wrap gap-1">
          {genres.map((g, index) => (
            <GenreTag key={index} genre={g} />
          ))}
        </div>
      )}
      {release_date && (
        <p className="text-sm text-gray-400">
          Released: {new Date(release_date).getFullYear()}
        </p>
      )}
      {overview && <p className="text-sm align-right">{overview.slice(0, 200)}...</p>}
      <RecommendButton onClick={() => onRecommend(movie)} />

    </div>
  );
};

export default MovieCard;