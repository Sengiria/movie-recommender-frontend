import { render, screen } from '@testing-library/react';
import MovieList from '../MovieList';
import { describe, it, expect } from 'vitest';
import type { Movie } from '../../interface';

const mockMovies: Movie[] = [
  {
    id: 1,
    title: 'Movie A',
    genres: ['Drama'],
    overview: 'Overview A',
    vote_average: 5,
    release_date: '2020-01-01',
  },
  {
    id: 2,
    title: 'Movie B',
    genres: ['Comedy'],
    overview: 'Overview B',
    vote_average: 5,
    release_date: '2021-01-01',
  },
];

describe('MovieList', () => {
  it('renders a title and multiple MovieCards', () => {
    render(<MovieList movies={mockMovies} title="Top Picks" onRecommend={() => {}} />);

    expect(screen.getByText('Top Picks')).toBeInTheDocument();
    expect(screen.getByText('Movie A')).toBeInTheDocument();
    expect(screen.getByText('Movie B')).toBeInTheDocument();
  });
});
