import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import logo from 'shared/assets/images/logo.jpg';

const useStyles = makeStyles((theme) => ({
  logo: {
    maxHeight: '50%',
  },
  appTitle: { margin: theme.spacing(1, 0) },
}));

const LogoImageBox = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.logo} container>
      <Grid item xs={12}>
        <img src={logo} alt='site logo' />
      </Grid>
      <Grid item xs={12}>
        <Typography className={classes.appTitle} variant='h5'>
          Lockdown Poker
        </Typography>
      </Grid>
    </Grid>
  );
};

export default LogoImageBox;
