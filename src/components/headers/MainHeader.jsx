import React from 'react';
import { Typography } from '@material-ui/core';

const MainHeader = ({ children }) => {
  return <Typography variant='h5'>{children}</Typography>;
};

export default MainHeader;
