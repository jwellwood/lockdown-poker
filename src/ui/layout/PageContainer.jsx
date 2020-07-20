import React from 'react';
import { Container } from '@material-ui/core';

const PageContainer = ({ children }) => {
  return (
    <Container maxWidth='md' style={{ padding: '10px' }}>
      {children}
    </Container>
  );
};

export default PageContainer;
