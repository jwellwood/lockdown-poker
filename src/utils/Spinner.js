import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
}));

export default function CircularIndeterminate() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CircularProgress size={40} thickness={7.2} />
    </div>
  );
}
