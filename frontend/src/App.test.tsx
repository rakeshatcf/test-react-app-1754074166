import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App Component', () => {
  test('renders home page by default', () => {
    render(<App />);
    expect(screen.getByText(/Home Page/i)).toBeInTheDocument();
  });

  test('layout wrapper is present', () => {
    render(<App />);
    const layoutElement = screen.getByTestId('layout-wrapper');
    expect(layoutElement).toBeInTheDocument();
  });

  test('routing works correctly', async () => {
    render(<App />);
    const user = userEvent.setup();
    const homeLink = screen.getByText(/Home/i);
    await user.click(homeLink);
    expect(window.location.pathname).toBe('/');
  });
});