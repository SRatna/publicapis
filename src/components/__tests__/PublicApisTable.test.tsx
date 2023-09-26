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
    expect(screen.getByText('Oh no, something went wrong!')).toBeInTheDocument();

    // Ensure that fetch was called with the correct URL
    expect(fetch).toHaveBeenCalledWith('https://api.publicapis.org/entries');
  });

  it('renders data', async () => {
    // Mock the data response
    const mockData = {
      count: 2,
      entries: [
        {
          API: 'API 1',
          Description: 'Description 1',
          Auth: 'api key',
          HTTPS: true,
          Cors: 'yes',
          Category: 'category1',
          Link: 'https://example.com/api1',
        },
        {
          API: 'API 2',
          Description: 'Description 2',
          Auth: 'oauth',
          HTTPS: false,
          Cors: 'no',
          Category: 'category2',
          Link: 'https://example.com/api2',
        },
      ],
    };

    (fetch as jest.Mock).mockResolvedValueOnce({
      json: async () => mockData,
    });

    await act(async () => {
      render(<PublicApisTable />);
    });

    // Check if the table headers and data are rendered
    expect(screen.getByText('Public APIs')).toBeInTheDocument();
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    expect(screen.queryByText('Something went wrong!')).not.toBeInTheDocument();

    // Check if table data is displayed
    expect(screen.getByText('API 1')).toBeInTheDocument();
    expect(screen.getByText('Description 1')).toBeInTheDocument();
    expect(screen.getByText('api key')).toBeInTheDocument();
    expect(screen.getByText('Yes')).toBeInTheDocument();
    expect(screen.getByText('yes')).toBeInTheDocument();
    expect(screen.getByText('category1')).toBeInTheDocument();
    expect(screen.getByText('API 2')).toBeInTheDocument();
    expect(screen.getByText('Description 2')).toBeInTheDocument();
    expect(screen.getByText('oauth')).toBeInTheDocument();
    expect(screen.getByText('No')).toBeInTheDocument();
    expect(screen.getByText('no')).toBeInTheDocument();
    expect(screen.getByText('category2')).toBeInTheDocument();

    // Check if link rendering works
    const link1 = screen.getByText('https://example.com/api1');
    const link2 = screen.getByText('https://example.com/api2');
    expect(link1).toBeInTheDocument();
    expect(link2).toBeInTheDocument();
    expect(link1).toHaveAttribute('href', 'https://example.com/api1');
    expect(link2).toHaveAttribute('href', 'https://example.com/api2');
  });
})