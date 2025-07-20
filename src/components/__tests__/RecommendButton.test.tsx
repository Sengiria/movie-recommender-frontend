import { render, screen, fireEvent } from '@testing-library/react';
import RecommendButton from '../RecommendButton';
import { describe, it, expect, vi } from 'vitest';

describe('RecommendButton', () => {
  it('renders button text and hidden image initially', () => {
    render(<RecommendButton onClick={() => {}} />);

    expect(screen.getByText('Recommend')).toBeInTheDocument();
    const img = screen.getByAltText('popcorn');
    expect(img).toBeInTheDocument();
    expect(img).toHaveClass('h-6');
  });

  it('calls onClick when clicked', () => {
    const onClick = vi.fn();
    render(<RecommendButton onClick={onClick} />);
    fireEvent.click(screen.getByText('Recommend'));
    expect(onClick).toHaveBeenCalled();
  });
});
