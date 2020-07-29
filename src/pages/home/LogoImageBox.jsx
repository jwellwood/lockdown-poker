import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import logo from 'shared/assets/images/logo.jpg';
import MainHeader from 'components/headers/MainHeader';

const useStyles = makeStyles((theme) => ({
  logo: {
    margin: theme.spacing(4),
  },
}));

const LogoImageBox = () => {
  const classes = useStyles();
  return (
    <div>
      <img className={classes.logo} src={logo} alt='site logo' />
      <MainHeader>Welcome!</MainHeader>
    </div>
  );
};

export default LogoImageBox;
