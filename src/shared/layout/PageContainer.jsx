import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper, Typography, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import BackButton from '../../components/buttons/BackButton.component';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage:
      'linear-gradient(45deg, rgba(151, 4,4, 0.5) 4.17%, #ffffff 4.17%, #ffffff 45.83%, rgba(31,9,4, 0.5) 45.83%, rgba(31,9,4, 0.5) 50%, rgba(151, 4,4, 0.5) 50%,rgba(151, 4,4, 0.5) 54.17%, #ffffff 54.17%, #ffffff 95.83%,rgba(31,9,4, 0.5) 95.83%, rgba(31,9,4, 0.5) 100%)',
    backgroundSize: '320px 320px',
    padding: theme.spacing(1),
    minHeight: '100vh',
    height: '100%',
    width: '100%',
    textAlign: 'center',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
  },
  paper: {
    margin: theme.spacing(1),
    //Stops bottom navigation hiding content
    marginBottom: theme.spacing(8),
    width: '90%',
    color: theme.typography.color,
    boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'left',
    margin: theme.spacing(1, 1, 0),
    padding: theme.spacing(0, 1, 0),
    color: theme.palette.primary.main,
  },
  backButton: {
    float: 'right',
  },
  divider: {
    margin: theme.spacing(0, 1),
  },
}));

const PageContainer = ({ title, children, hasBackButton }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container direction='column'>
          <Grid item xs={12} className={classes.title}>
            <Typography variant='subtitle1'>{title}</Typography>
            {hasBackButton && (
              <BackButton className={classes.backButton}>Back</BackButton>
            )}
          </Grid>
          <Divider
            className={classes.divider}
            style={{
              background:
                'linear-gradient(to right, rgba(69,16,11, 0.5), rgba(255,255,255)',
            }}
          />

          <Grid container direction='column'>
            {children}
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

PageContainer.propTypes = {
  title: PropTypes.string.isRequired,
  hasBackButton: PropTypes.bool,
};

export default PageContainer;
