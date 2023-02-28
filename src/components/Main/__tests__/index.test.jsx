import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import * as React from 'react';
import Main from '..';
import makeRequest from '../../../utils/makeRequest/makeRequest';
import {
  mockAllSongsData,
  mockJustSongDetail,
} from '../../../mocks/allSongsData';

jest.mock('react-router-dom', () => ({ useNavigate: () => jest.fn() }));
jest.mock('../../../utils/makeRequest/makeRequest');

describe('Main', () => {
  it('should render correctly', () => {
    makeRequest.mockResolvedValueOnce(mockJustSongDetail);
    const fetchLikesData = jest.fn();
    fetchLikesData.mockResolvedValueOnce(mockAllSongsData);
    const { container } = render(<Main />);
    expect(container).toMatchSnapshot();
  });

  it('should show grid with all songs when data is fetched', async () => {
    makeRequest.mockResolvedValueOnce(mockJustSongDetail);
    const fetchLikesData = jest.fn();
    fetchLikesData.mockResolvedValueOnce(mockAllSongsData);
    await render(<Main />);
    await waitFor(() => {
      expect(screen.getByText('all songs')).toBeTruthy();
    });
    expect(screen.getByTestId('card-grid')).toBeInTheDocument();
  });

  it('should show grid with genre when genre icon is clicked', async () => {
    makeRequest.mockResolvedValueOnce(mockJustSongDetail);
    const fetchLikesData = jest.fn();
    fetchLikesData.mockResolvedValue(mockAllSongsData);
    await render(<Main />);
    expect(screen.getByText('all songs')).toBeTruthy();
    const genreIconButton = screen.getByTestId('test-genre-icon-button');
    fireEvent.click(genreIconButton);
    await waitFor(() => {
      expect(screen.getByText('genres')).toBeTruthy();
    });
  });
});
