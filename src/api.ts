import type { Movie } from "./interface";

const BASE_URL = "https://movie-recommender-backend-lhjn.onrender.com";

export const fetchMovies = async (): Promise<Movie[]> => {
  const res = await fetch(`${BASE_URL}/movies`);
  if (!res.ok) throw new Error("Failed to fetch movies");
  return await res.json();
};

export const fetchRecommendations = async (movieId: number): Promise<Movie[]> => {
  const res = await fetch(`${BASE_URL}/recommend?movie_id=${movieId}`);
  if (!res.ok) throw new Error("Failed to fetch recommendations");
  return await res.json();
};
