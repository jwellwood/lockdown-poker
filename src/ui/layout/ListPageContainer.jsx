import React from 'react';
import { Container, Paper } from '@material-ui/core';
import PageTitle from '../headers/PageTitle';

const ListPageContainer = ({ children, title }) => {
  return (
    <Container maxWidth='md'>
      <Paper>
        <PageTitle>{title}</PageTitle>
        {children}
      </Paper>
    </Container>
  );
};

export default ListPageContainer;
