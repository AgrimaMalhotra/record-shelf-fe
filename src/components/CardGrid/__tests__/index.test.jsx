import React from 'react';
import { screen, render, waitFor } from '@testing-library/react';
import CardGrid from '..';
import mockAllSongsData from '../../../mocks/allSongsData.js';
import Card from '../../Card';
jest.mock('../../Card');
describe('CardGrid', () => {
  it('should render correctly', () => {
    const { container } = render(<CardGrid allSongsData={mockAllSongsData} />);
    expect(container).toMatchSnapshot();
  });
  // it('should render 2 cards',async()=>{
  //   render(<CardGrid allSongsData={mockAllSongsData}/>);
  //   const card=screen.getByTestId('test-card');
  //   expect(card).toBeInTheDocument();
  //   const cardElements = screen.queryAllByTestId('test-card');
  //   expect(cardElements.length).toBe(mockAllSongsData.length);

  // })
});
