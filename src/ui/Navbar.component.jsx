import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Link } from 'react-router-dom';
import { Avatar } from '@material-ui/core';
import logo from '../assets/images/logo.jpg';
import LinkButton from './buttons/LinkButton.component';
import { HOME, PLAYERS, GAMES, SIGN_IN } from '../router';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  nav: {
    background:
      'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(134,1,17,1) 0%, rgba(31,9,4,1) 79%)',
  },
  title: {
    marginLeft: theme.spacing(1),
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.nav} position='static'>
        <Toolbar>
          <Link to='/'>
            <Avatar src={logo} />
          </Link>
          <Typography variant='h6' className={classes.title}>
            Lockdown Poker
          </Typography>
          {auth && (
            <div>
              <IconButton
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleMenu}
                color='inherit'>
                <MenuIcon />
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}>
                <LinkButton style={{ display: 'inline' }} to={HOME}>
                  Home
                </LinkButton>
                <LinkButton style={{ display: 'inline' }} to={PLAYERS}>
                  Players
                </LinkButton>
                <LinkButton to={GAMES}>Games</LinkButton>
                <LinkButton to={SIGN_IN}>Admin</LinkButton>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
