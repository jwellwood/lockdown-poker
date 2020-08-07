import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

interface Props {
  children: React.ReactNode;
  to: string;
}

const LinkButton: React.FC<Props> = ({ children, to }) => {
  return (
    <Button variant='outlined' component={RouterLink} to={to} color='primary'>
      {children}
    </Button>
  );
};

export default LinkButton;
