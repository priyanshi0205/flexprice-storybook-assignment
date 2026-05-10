import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SearchBar from './SearchBar';
import { vi } from 'vitest';

describe('SearchBar', () => {
  it('calls onChange with debounce', async () => {
    const fn = vi.fn();
    render(<SearchBar value="" onChange={fn} debounceMs={100} />);

    fireEvent.change(screen.getByPlaceholderText('Search...'), {
      target: { value: 'hello' },
    });

    await waitFor(() => {
      expect(fn).toHaveBeenCalledWith('hello');
    });
  });

  it('clears input on click', () => {
    const fn = vi.fn();
    render(<SearchBar value="hello" onChange={fn} />);

    fireEvent.click(screen.getByTestId('clear-btn'));
    expect(fn).not.toHaveBeenCalledWith('hello');
  });
});
