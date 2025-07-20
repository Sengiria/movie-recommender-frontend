import { render, screen, fireEvent } from '@testing-library/react';
import MovieCard from '../MovieCard';
import { describe, it, expect, vi } from 'vitest';
import type { Movie } from '../../interface';

const mockMovie: Movie = {
  id: 1,
  title: 'Inception',
  genres: ['Action', 'Sci-Fi'],
  overview: 'Random Overview.',
  release_date: '2010-07-16',
  vote_average: 5
};

describe('MovieCard', () => {
  it('renders movie title, genres, release year, and overview', () => {
    render(<MovieCard movie={mockMovie} onRecommend={() => {}} />);

    expect(screen.getByText('Inception')).toBeInTheDocument();
    expect(screen.getByText('Action')).toBeInTheDocument();
    expect(screen.getByText('Sci-Fi')).toBeInTheDocument();
    expect(screen.getByText('Released: 2010')).toBeInTheDocument();
    expect(screen.getByText(/Random Overview/i)).toBeInTheDocument();
    expect(screen.getByText('Recommend')).toBeInTheDocument();
  });

  it('calls onRecommend when the button is clicked', () => {
    const onRecommend = vi.fn();
    render(<MovieCard movie={mockMovie} onRecommend={onRecommend} />);

    fireEvent.click(screen.getByText('Recommend'));
    expect(onRecommend).toHaveBeenCalledWith(mockMovie);
  });
});