import { render, screen } from '@testing-library/react';
import Hero from '../components/Hero/Hero';

describe('Hero', () => {
  it('renders name and role', () => {
    render(<Hero />);
    expect(screen.getByText(/Panji Hanum/i)).toBeInTheDocument();
    expect(screen.getByText(/Full-stack Developer/i)).toBeInTheDocument();
  });
});
