import React from 'react';
import { Container, List } from '@material-ui/core';

interface Props {
  children: React.ReactNode;
  dense?: boolean;
}

const ListContainer: React.FC<Props> = ({ children, dense }) => {
  return (
    <Container maxWidth='sm'>
      <List dense={dense}>{children}</List>
    </Container>
  );
};

export default ListContainer;
