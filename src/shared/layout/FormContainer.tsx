import React from 'react';
import { Container } from '@material-ui/core';

interface Props {
  children: any;
}

const FormContainer: React.FC<Props> = ({ children }) => {
  return (
    <Container maxWidth='sm' style={{ textAlign: 'left' }}>
      {children}
    </Container>
  );
};

export default FormContainer;
