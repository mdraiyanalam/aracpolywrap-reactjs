import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the packaging landing page and product range', () => {
  render(<App />);

  expect(
    screen.getByRole('heading', { name: /the right film for every application/i })
  ).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /stretch film/i })).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { name: /custom-made films/i })
  ).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /contact us/i })).toHaveAttribute(
    'href',
    '#ContactUs'
  );
});
