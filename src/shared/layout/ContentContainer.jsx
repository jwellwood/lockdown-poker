import React from 'react';
import { Container } from '@material-ui/core';

const ContentContainer = ({ children }) => {
  return <Container maxWidth='sm'>{children}</Container>;
};

export default ContentContainer;
