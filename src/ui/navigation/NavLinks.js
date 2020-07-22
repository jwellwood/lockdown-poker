import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import CasinoRounded from '@material-ui/icons/CasinoRounded';
import HomeRounded from '@material-ui/icons/HomeRounded';
import SupervisedUserRounded from '@material-ui/icons/SupervisedUserCircleRounded';
import GroupRounded from '@material-ui/icons/GroupRounded';
import { HOME, PLAYERS, GAMES, SIGN_IN } from '../../router';

const useStyles = makeStyles({
  topNav: {
    width: '50%',
    float: 'right',
    top: 0,
    left: 'calc(100vw/2)',
    background: 'none',
    position: 'fixed',
  },
  bottomNav: {
    zIndex: 1000,
    width: '100%',
    bottom: 0,
    position: 'fixed',
  },
});

const NavLinks = ({ navType }) => {
  const classes = useStyles();
  let { pathname } = useLocation();
  const [value, setValue] = React.useState(pathname);
  const navValues = ['/home', '/players', '/games', '/sign_in'];
  if (!navValues.filter((value) => pathname === value).length)
    pathname = '/home';
  useEffect(() => {
    setValue(pathname);
  }, [pathname]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const navigationActions = [
    { link: HOME, label: 'Home', value: '/home', icon: <HomeRounded /> },
    {
      link: PLAYERS,
      label: 'Players',
      value: '/players',
      icon: <GroupRounded />,
    },
    { link: GAMES, label: 'Games', value: '/games', icon: <CasinoRounded /> },
    {
      link: SIGN_IN,
      label: 'Admin',
      value: '/sign_in',
      icon: <SupervisedUserRounded />,
    },
  ];

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={navType === 'topNav' ? classes.topNav : classes.bottomNav}>
      {navigationActions.map((action) => (
        <BottomNavigationAction
          key={action.link}
          component={Link}
          to={action.link}
          label={action.label}
          value={action.value}
          icon={action.icon}
        />
      ))}
    </BottomNavigation>
  );
};

NavLinks.propTypes = {
  navType: PropTypes.string.isRequired,
};

export default NavLinks;
