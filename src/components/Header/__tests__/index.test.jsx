import { fireEvent, render, screen } from '@testing-library/react';
import * as React from 'react';
import Header from '..';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
}));

describe('Header', () => {
  it('should render correctly ', () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
  it('should have clickable header', () => {
    render(<Header />);
    const clickableHeader = screen.getByTestId('page-title');
    fireEvent.click(clickableHeader);
    expect(mockNavigate).toHaveBeenCalledTimes(1);
  });
});
