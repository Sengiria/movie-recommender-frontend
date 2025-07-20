import { fetchMovies, fetchRecommendations } from '../api';
import { describe, it, expect, vi, beforeEach } from 'vitest';

describe('api.ts', () => {
  beforeEach(() => {
    global.fetch = vi.fn();
  });

  it('fetchMovies returns data on success', async () => {
    const mockMovies = [{ id: 1, title: 'Test Movie' }];
    (fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => mockMovies,
    });

    const result = await fetchMovies();
    expect(fetch).toHaveBeenCalledWith('https://movie-recommender-backend-lhjn.onrender.com/movies');
    expect(result).toEqual(mockMovies);
  });

  it('fetchMovies throws on error', async () => {
    (fetch as any).mockResolvedValueOnce({ ok: false });

    await expect(fetchMovies()).rejects.toThrow('Failed to fetch movies');
  });

  it('fetchRecommendations returns data on success', async () => {
    const mockRecs = [{ id: 2, title: 'Recommended Movie' }];
    (fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => mockRecs,
    });

    const result = await fetchRecommendations(1);
    expect(fetch).toHaveBeenCalledWith('https://movie-recommender-backend-lhjn.onrender.com/recommend?movie_id=1');
    expect(result).toEqual(mockRecs);
  });

  it('fetchRecommendations throws on error', async () => {
    (fetch as any).mockResolvedValueOnce({ ok: false });

    await expect(fetchRecommendations(1)).rejects.toThrow('Failed to fetch recommendations');
  });
});
