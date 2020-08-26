import React from 'react';
import { render } from '@testing-library/react';
import MainHeader from '../MainHeader';

describe('page title specs', () => {
  it('renders with children as string', () => {
    const children = 'test';
    render(<MainHeader>{children}</MainHeader>);
  });
  it('renders as h5', () => {
    const children = 'test';
    const { getByText } = render(<MainHeader>{children}</MainHeader>);
    const element = getByText('test');
    expect(element.tagName).toEqual('H5');
  });
});
