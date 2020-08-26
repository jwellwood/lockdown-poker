import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import LogoImageBox from '../LogoImageBox';

describe('Logo image specs', () => {
  it('should render', () => {
    render(<LogoImageBox />);
  });
});
