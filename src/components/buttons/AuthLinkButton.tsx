import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: theme.palette.warning.main,
  },
}));

interface Props {
  children: React.ReactNode;
  isAuth: boolean;
  to: string;
}

const AuthLinkButton: React.FC<Props> = ({ children, isAuth, to }) => {
  const classes = useStyles();

  return isAuth ? (
    <Button
      variant='contained'
      component={RouterLink}
      to={to}
      className={classes.button}>
      {children}
    </Button>
  ) : null;
};

export default AuthLinkButton;
