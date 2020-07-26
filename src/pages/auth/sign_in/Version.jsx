import React from 'react';
import { Typography } from '@material-ui/core';
import { version } from 'shared/assets/data/version';
const Version = () => {
  return <Typography variant='caption'>v{version}</Typography>;
};

export default Version;
