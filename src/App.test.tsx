import { render } from '@testing-library/react';
// import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  // const linkElement = screen.getByText(/book bay drag/i);
  // expect(linkElement).not.toBeInTheDocument();
});
