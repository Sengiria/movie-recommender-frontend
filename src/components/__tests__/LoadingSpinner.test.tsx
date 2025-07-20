import { render, screen } from '@testing-library/react';
import LoadingSpinner from '../LoadingSpinner';
import { describe, expect, it } from 'vitest';

describe('LoadingSpinner', () => {
  it('renders the spinner and text', () => {
    render(<LoadingSpinner />);
    expect(screen.getByText('Loading movies...')).toBeInTheDocument();
    expect(screen.getByRole('status')).toBeInTheDocument();
  });
});