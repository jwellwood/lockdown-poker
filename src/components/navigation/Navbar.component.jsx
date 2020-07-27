import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { Avatar } from '@material-ui/core';
import logo from 'shared/assets/images/logo.jpg';
import { HOME } from 'router';
import NavLinks from './NavLinks';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  nav: {
    position: 'fixed',
    top: 0,
    width: '100%',
    background:
      'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(134,1,17,1) 25%, rgba(255,255,255,1) 55%)',
  },
  mobileNav: {
    position: 'fixed',
    top: 0,
    width: '100%',
    background:
      'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(134,1,17,1) 60%, rgba(255,255,255,1) 90%)',
  },
  title: {
    marginLeft: theme.spacing(1),
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const bigScreen = useMediaQuery('(min-width: 769px)');
  const smallScreen = useMediaQuery('(max-width: 768px)');

  return (
    <div className={classes.root}>
      <AppBar className={bigScreen ? classes.nav : classes.mobileNav}>
        <Toolbar>
          <Link to={HOME}>
            <Avatar src={logo} />
          </Link>
          <Typography variant='h6' className={classes.title}>
            Lockdown Poker
          </Typography>
          {/* //@TODO @Joe - why this auth? */}
          {<div>{bigScreen && <NavLinks navType='topNav' />}</div>}
        </Toolbar>
      </AppBar>
      {/* //Stops app bar covering content */}
      <Toolbar
        style={{
          background: 'pink',
          width: '100%',
        }}
      />
      <footer>{smallScreen && <NavLinks navType='bottomNav' />}</footer>
    </div>
  );
}
