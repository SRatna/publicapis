import { act, render, screen } from '@testing-library/react';
import PublicApisTable from '../PublicApisTable';
import '@testing-library/jest-dom';

global.fetch = jest.fn();

describe('PublicApisTable', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders error state', async () => {
    // Mock the fetch to reject with an error
    (fetch as jest.Mock).mockRejectedValueOnce(new Error());

    await act(async () => {
      render(<PublicApisTable />);
    });

    expect(screen.getByText('Public APIs')).toBeInTheDocument();
    expect(screen.getByText('Something went wrong!')).toBeInTheDocument();

    // Ensure that fetch was called with the correct URL
    expect(fetch).toHaveBeenCalledWith('https://api.publicapis.org/entries');
  });
})