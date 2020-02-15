import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Testing hello world page for challenge of DTP ENGLISH CLUB!', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Hello World!/i);
  expect(linkElement).toBeInTheDocument();
});
