import type { Movie } from "../interface";
import MovieCard from "./MovieCard";

interface MovieListProps {
    movies: Movie[];
    title?: string;
    onRecommend: (movie: Movie) => void;
}

const MovieList: React.FC<MovieListProps> = ({ movies, title = "Recommended Movies", onRecommend }) => {
    return (
        <div className="my-6">
            <h2 className="text-xl font-semibold mb-4">{title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {movies.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        movie={movie}
                        onRecommend={onRecommend}
                    />
                ))}
            </div>
        </div>
    );
};

export default MovieList;