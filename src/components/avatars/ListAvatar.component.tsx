import React from 'react';
import { ListItemAvatar, Avatar, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.secondary.main,
    border: `2px solid ${theme.palette.primary.main}`,
  },
}));

interface Props {
  children: React.ReactNode;
}

const ListAvatar: React.FC<Props> = ({ children }) => {
  const classes = useStyles();
  return (
    <ListItemAvatar>
      <Avatar className={classes.root}>{children}</Avatar>
    </ListItemAvatar>
  );
};

export default ListAvatar;
