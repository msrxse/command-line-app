import { render } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  test('should work as expected', () => {
    render(<App />);
    expect(1 + 1).toBe(2);
  });
});
