import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  highlightedText: {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
  },
  blueText: {
    color: '#1565c0',
    fontWeight: 'bold',
  },
  avgText: {
    color: '#00838f',
    fontWeight: 'bold',
  },
}));

const StatKeys = () => {
  const classes = useStyles();
  return (
    <>
      <Typography className={classes.highlightedText} variant='caption'>
        Played
      </Typography>{' '}
      |{' '}
      <Typography className={classes.blueText} variant='caption'>
        Buy backs
      </Typography>{' '}
      |{' '}
      <Typography className={classes.avgText} variant='caption'>
        Average
      </Typography>
    </>
  );
};

export default StatKeys;
