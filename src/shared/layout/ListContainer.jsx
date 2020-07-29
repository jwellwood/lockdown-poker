import React from 'react';
import { Container, List } from '@material-ui/core';

const ListContainer = ({ children, dense }) => {
  return (
    <Container maxWidth='sm'>
      <List dense={dense}>{children}</List>
    </Container>
  );
};

export default ListContainer;
