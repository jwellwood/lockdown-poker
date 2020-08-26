import React from 'react';
import { Typography } from '@material-ui/core';

interface Props {
  children: string;
}

const PageTitle: React.FC<Props> = ({ children }) => {
  return <Typography variant='h6'>{children}</Typography>;
};

export default PageTitle;
