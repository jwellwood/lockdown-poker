import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CustomDivider from '../../components/dividers/CustomDivider';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      marginTop: theme.spacing(2),
      padding: theme.spacing(1),
    },
    title: {
      textAlign: 'center',
      textTransform: 'uppercase',
      letterSpacing: theme.spacing(1),
    },
  })
);

interface Props {
  children: React.ReactNode;
}

const NextGameContainer: React.FC<Props> = ({ children }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <div className={classes.title}>
        <Typography variant='h6'>Next Game</Typography>
      </div>
      <CustomDivider />
      {children}
    </Paper>
  );
};

export default NextGameContainer;
