import { render } from '@testing-library/react';
import * as React from 'react';
import ErrorMessage from '..';

describe('Error Page', () => {
  it('should render correctly ', () => {
    const { container } = render(<ErrorMessage />);
    expect(container).toMatchSnapshot();
  });
});
