// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ModelEdge title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ModelEdge/i);
    expect(titleElement).toBeInTheDocument();
});
