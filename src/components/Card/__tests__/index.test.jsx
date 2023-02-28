import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import * as React from 'react';
import Card from '..';
import { mockSongDetail } from '../../../mocks/allSongsData';
import makeRequest from '../../../utils/makeRequest/makeRequest';
const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
}));
afterEach(() => {
  jest.clearAllMocks();
});

jest.mock('../../../utils/makeRequest/makeRequest')

describe('Card', () => {
  it('should render correctly ', () => {
    const { container } = render(<Card songDetail={mockSongDetail} />);
    expect(container).toMatchSnapshot();
  });
  it('should increase like count on clicking like button', async () => {
    makeRequest.mockResolvedValue({
      data:{
        count:2,
        like:true
      }
    });
    render(<Card songDetail={mockSongDetail} />);
    const likeCount = screen.getByTestId('test-like-count');
    const likeButton = screen.getByTestId('test-likes');
    expect(likeCount.innerHTML).toContain('1');
    fireEvent.click(likeButton);
    await waitFor(() => {
      expect(likeCount.innerHTML).toContain('2');
    });
  });
  it('should change heart color to red on clicking it',async()=>{
makeRequest.mockResolvedValue({
  data:{
    count:2,
    like:true
  }
});
    render(<Card songDetail={mockSongDetail}/>);
    const heartIcon=screen.getByTestId('test-heart-image');
    const likeButton = screen.getByTestId('test-likes');
expect(heartIcon.src).toContain('heart-gray.svg');
fireEvent.click(likeButton);
await waitFor(()=>{
  expect(heartIcon.src).toContain('heart-red.svg');
})
  })
});
