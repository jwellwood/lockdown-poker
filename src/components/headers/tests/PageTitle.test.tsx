import React from 'react';
import { render } from '@testing-library/react';
import PageTitle from '../PageTitle';

describe('page title specs', () => {
  it('renders with children as string', () => {
    const children = 'test';
    render(<PageTitle>{children}</PageTitle>);
  });
  it('renders as h6', () => {
    const children = 'test';
    const { getByText } = render(<PageTitle>{children}</PageTitle>);
    const element = getByText('test');
    expect(element.tagName).toEqual('H6');
  });
});
