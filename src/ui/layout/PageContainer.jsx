import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper, Typography, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage:
      'linear-gradient(45deg, rgba(151, 4,4, 0.5) 4.17%, #ffffff 4.17%, #ffffff 45.83%, rgba(31,9,4, 0.5) 45.83%, rgba(31,9,4, 0.5) 50%, rgba(151, 4,4, 0.5) 50%,rgba(151, 4,4, 0.5) 54.17%, #ffffff 54.17%, #ffffff 95.83%,rgba(31,9,4, 0.5) 95.83%, rgba(31,9,4, 0.5) 100%)',
    backgroundSize: '320px 320px',
    padding: theme.spacing(1),
    height: '100vh',
    width: '100%',
    textAlign: 'center',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
  },
  paper: {
    margin: theme.spacing(1),
    width: '90%',
    boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
  },
  title: {
    display: 'inline',
    textAlign: 'left',
    margin: theme.spacing(1),
    color: theme.palette.primary.main,
  },
}));

const PageContainer = ({ title, children }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container direction='column'>
          <Grid item xs={12} className={classes.title}>
            <Typography>{title}</Typography>
            <Divider
              style={{
                background:
                  'linear-gradient(to right, rgba(69,16,11, 0.5), rgba(255,255,255)',
              }}
            />
          </Grid>
          <Grid container>{children}</Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

PageContainer.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageContainer;
