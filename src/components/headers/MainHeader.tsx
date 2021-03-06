import React from 'react';
import { Typography } from '@material-ui/core';

interface Props {
  children: string;
}
const MainHeader: React.FC<Props> = ({ children }) => {
  return <Typography variant='h5'>{children}</Typography>;
};

export default MainHeader;
