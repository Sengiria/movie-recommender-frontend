import { render, screen } from '@testing-library/react';
import GenreTag from '../GenreTag';
import { describe, expect, it } from 'vitest';

describe('GenreTag', () => {
  it('renders the genre text', () => {
    render(<GenreTag genre="Action" />);
    expect(screen.getByText('Action')).toBeInTheDocument();
  });

  it('applies correct styling', () => {
    render(<GenreTag genre="Drama" />);
    const tag = screen.getByText('Drama');
    expect(tag).toHaveClass('bg-blue-100');
    expect(tag).toHaveClass('text-blue-800');
  });
});
