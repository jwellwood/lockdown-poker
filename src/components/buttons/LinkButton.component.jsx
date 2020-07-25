import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const LinkButton = ({ children, to, type, color }) => {
  return (
    <Button
      variant={type || 'text'}
      component={RouterLink}
      to={to}
      color={color || 'secondary'}>
      {children}
    </Button>
  );
};

export default LinkButton;
