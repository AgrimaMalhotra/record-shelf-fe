import {render, screen, waitFor} from '@testing-library/react';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Main from '..';
import makeRequest from '../../../utils/makeRequest/makeRequest';
import { mockAllSongsData, mockJustSongDetail } from '../../../mocks/allSongsData';
jest.mock('react-router-dom',()=>({useNavigate:()=>jest.fn()})
);
jest.mock('../../../utils/makeRequest/makeRequest');
describe('Main',()=>{
  it('should render correctly',()=>{
    const {container}= render(<Main/>);
    expect(container).toMatchSnapshot();
  });
  it('should show loading when data is still being fetched',()=>{
makeRequest.mockResolvedValueOnce(mockJustSongDetail);
const fetchLikesData = jest.fn();
fetchLikesData.mockResolvedValueOnce(mockAllSongsData)
    render(<Main/>);
await waitFor(()=>{
  expect(screen.getByText('all songs')).
})
  })
})