import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    text: {
      letterSpacing: theme.spacing(1),
      textTransform: 'uppercase',
    },
  })
);

const NoGamesYet: React.FC = () => {
  const classes = useStyles();
  return (
    <Typography className={classes.text} variant='h6'>
      No Games Yet
    </Typography>
  );
};

export default NoGamesYet;
