import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';

interface Props {
  children: React.ReactNode;
  type?: any;
  color?: any;
}

const BackButton: React.FC<Props> = ({
  children,
  type = 'text',
  color = 'default',
}) => {
  let history = useHistory();
  return (
    <Button variant={type} onClick={() => history.goBack()} color={color}>
      {children}
    </Button>
  );
};

export default BackButton;
