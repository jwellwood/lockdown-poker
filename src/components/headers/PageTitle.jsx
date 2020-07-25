import React from 'react';
import { Typography, Divider } from '@material-ui/core';

const PageTitle = ({ children }) => {
  return (
    <>
      <Typography>{children}</Typography>
      <Divider
        style={{
          background:
            'linear-gradient(to right, rgba(69,16,11, 0.5), rgba(255,255,255)',
        }}
      />
    </>
  );
};

export default PageTitle;
