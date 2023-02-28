import { render } from '@testing-library/react';
import * as React from 'react';
import PageNotFound from '..';

describe('Page Not Found', () => {
  it('should render correctly ', () => {
    const { container } = render(<PageNotFound />);
    expect(container).toMatchSnapshot();
  });
});
