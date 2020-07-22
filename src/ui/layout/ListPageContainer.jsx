import React from 'react';
import { Container, Paper } from '@material-ui/core';

const ListPageContainer = ({ children }) => {
  return (
    <Container maxWidth='md'>
      <Paper>{children}</Paper>
    </Container>
  );
};

export default ListPageContainer;
