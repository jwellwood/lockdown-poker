import React from 'react';
import { ListItemSecondaryAction, Typography } from '@material-ui/core';

const ListValueText = ({ children }) => {
  return (
    <ListItemSecondaryAction>
      <Typography variant='h6' component='span'>
        {children}
      </Typography>
    </ListItemSecondaryAction>
  );
};

export default ListValueText;
