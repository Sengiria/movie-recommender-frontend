import { useEffect, useRef, useState } from 'react';
import './App.css';
import { fetchMovies, fetchRecommendations } from './api';
import type { Movie } from './interface';
import MovieList from './components/MovieList';
import LoadingSpinner from './components/LoadingSpinner';

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [recommendations, setRecommendations] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [visibleCount, setVisibleCount] = useState(6);
  const [loading, setLoading] = useState(true);
  const loaderRef = useRef(null);

  // Lazy Loading for perf
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && visibleCount < movies.length) {
        setVisibleCount((prev) => prev + 6);
      }
    });
    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [visibleCount, movies.length]);

  useEffect(() => {
    fetchMovies()
      .then(setMovies)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const handleRecommend = async (movie: Movie) => {
    setSelectedMovie(movie);
    try {
      const recs = await fetchRecommendations(movie.id);
      setRecommendations(recs);
    } catch (err) {
      console.error("Error fetching recommendations:", err);
    }
  };

  const handleBack = () => {
    setRecommendations([]);
    setSelectedMovie(null);
    setVisibleCount(6);
  };

  const isShowingRecommendations = recommendations.length > 0 && selectedMovie;

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Movie Recommender</h1>
      <h2 className="text-base sm:text-xl mb-6 text-center">This application uses a Kaggle movie dataset, vector embeddings, and similarity matching to recommend movies you'll enjoy.</h2>

      {loading && <LoadingSpinner />}

      {isShowingRecommendations && (
        <button
          onClick={handleBack}
          className="bg-gradient-to-r border-1 bg-blue-500 hover:bg-blue-400 hover:text-black hover:border-1 cursor-pointer mb-4 px-4 py-2 text-white rounded transition"
        >
          ← Back to Movies
        </button>
      )}

      {!loading && <div
        key={isShowingRecommendations ? 'recs' : 'all'}
        className="transition-all duration-500 animate-fade-in"
      >
        <MovieList
          title={
            isShowingRecommendations
              ? `Movies similar to "${selectedMovie?.title}"`
              : 'All Movies'
          }
          movies={
            isShowingRecommendations
              ? recommendations
              : movies.slice(0, visibleCount)
          }
          onRecommend={handleRecommend}
        />
      </div>
      }

      {!isShowingRecommendations && <div ref={loaderRef} className="h-10" />}
    </main>
  );
}

export default App;
