import { fireEvent, render, screen } from '@testing-library/react';
import * as React from 'react';
import Sync from '..';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
}));
describe('Sync', () => {
  it('should render correctly ', () => {
    const { container } = render(<Sync />);
    expect(container).toMatchSnapshot();
  });
  it('should navigate to songs page on clicking sync button', async () => {
    render(<Sync />);
    const button = screen.getByTestId('sync-button');
    fireEvent.click(button);
    expect(mockNavigate).toHaveBeenCalledTimes(1);
  });
});
