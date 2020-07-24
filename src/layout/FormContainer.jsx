import React from 'react';
import { Container } from '@material-ui/core';

const FormContainer = ({ children }) => {
  return (
    <Container maxWidth='sm' style={{ textAlign: 'left' }}>
      {children}
    </Container>
  );
};

export default FormContainer;
