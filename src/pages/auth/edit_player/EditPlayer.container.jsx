import React from 'react';
import { PageContainer } from 'shared/layout';
import { useAuth } from 'shared/hooks';
import { Redirect } from 'react-router-dom';
import { SIGN_IN } from 'router';
import EditPlayerFormContainer from './EditPlayerFormContainer.container';

export default () => {
  const { isAuth } = useAuth();

  if (!isAuth) {
    return <Redirect to={SIGN_IN} />;
  }
  return (
    <PageContainer title='Edit Player'>
      <EditPlayerFormContainer />
    </PageContainer>
  );
};
