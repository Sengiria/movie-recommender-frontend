import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import App from '../App';
import * as api from '../api';
import { describe, it, expect, vi } from 'vitest';

const mockMovies = [
  { id: 1, title: 'Inception', genres: ['Action'], overview: 'Mind-bending.', release_date: '2010-01-01' },
  { id: 2, title: 'Interstellar', genres: ['Sci-Fi'], overview: 'Space adventure.', release_date: '2014-01-01' },
];

const mockRecs = [
  { id: 3, title: 'Tenet', genres: ['Action'], overview: 'Time inversion.', release_date: '2020-01-01' },
];

vi.mock('../api', async () => {
  const actual = await vi.importActual<typeof api>('../api');
  return {
    ...actual,
    fetchMovies: vi.fn(),
    fetchRecommendations: vi.fn(),
  };
});

describe('App integration', () => {
  it('shows loading and then movies', async () => {
    (api.fetchMovies as any).mockResolvedValue(mockMovies);

    render(<App />);
    expect(screen.getByText(/Loading movies.../i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText('Inception')).toBeInTheDocument();
      expect(screen.getByText('Interstellar')).toBeInTheDocument();
    });
  });

  it('shows recommendations after clicking Recommend', async () => {
    (api.fetchMovies as any).mockResolvedValue(mockMovies);
    (api.fetchRecommendations as any).mockResolvedValue(mockRecs);

    render(<App />);
    await waitFor(() => screen.getByText('Inception'));

    fireEvent.click(screen.getAllByText('Recommend')[0]);

    await waitFor(() => {
      expect(screen.getByText(/Movies similar to "Inception"/)).toBeInTheDocument();
      expect(screen.getByText('Tenet')).toBeInTheDocument();
    });
  });

  it('resets back to all movies after clicking Back', async () => {
    (api.fetchMovies as any).mockResolvedValue(mockMovies);
    (api.fetchRecommendations as any).mockResolvedValue(mockRecs);

    render(<App />);
    await waitFor(() => screen.getByText('Inception'));

    fireEvent.click(screen.getAllByText('Recommend')[0]);

    await waitFor(() => screen.getByText('Tenet'));

    fireEvent.click(screen.getByText(/Back to Movies/));

    await waitFor(() => {
      expect(screen.getByText('Inception')).toBeInTheDocument();
    });
  });
});
