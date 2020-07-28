import React from 'react';
import { Typography } from '@material-ui/core';

const PageTitle = ({ children }) => {
  return <Typography variant='h6'>{children}</Typography>;
};

export default PageTitle;
