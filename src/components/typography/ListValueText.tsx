import React from 'react';
import { ListItemSecondaryAction, Typography } from '@material-ui/core';

interface Props {
  children: React.ReactNode;
}

const ListValueText: React.FC<Props> = ({ children }) => {
  return (
    <ListItemSecondaryAction>
      <Typography variant='h6' component='span'>
        {children}
      </Typography>
    </ListItemSecondaryAction>
  );
};

export default ListValueText;
