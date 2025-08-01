import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Layout';

describe('Layout Component', () => {
  const renderWithRouter = (ui: React.ReactElement) => {
    return render(<BrowserRouter>{ui}</BrowserRouter>);
  };

  test('renders header and footer', () => {
    renderWithRouter(<Layout><div>Test Content</div></Layout>);
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  test('renders children content', () => {
    renderWithRouter(<Layout><div>Test Content</div></Layout>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});