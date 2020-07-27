import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const BackButton = ({ children, type, color }) => {
  let history = useHistory();
  return (
    <Button
      variant={type || 'text'}
      onClick={() => history.goBack()}
      color={color || 'default'}>
      {children}
    </Button>
  );
};

export default BackButton;
