import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const AuthLinkButton = ({ children, isAuth, to, type, color }) => {
  return isAuth ? (
    <Button
      variant={type || 'contained'}
      component={RouterLink}
      to={to}
      color={color || 'default'}
    >
      {children}
    </Button>
  ) : null;
};

export default AuthLinkButton;
