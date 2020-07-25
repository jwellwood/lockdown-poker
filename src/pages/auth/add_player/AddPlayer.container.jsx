import React from 'react';
import { PageContainer } from 'shared/layout';
import { useAuth } from 'shared/hooks';
import { SIGN_IN } from 'router';
import { Redirect } from 'react-router-dom';
import AddPlayerFormContainer from './AddPlayerFormContainer.container';

export default () => {
  const { isAuth } = useAuth();

  if (!isAuth) {
    return <Redirect to={SIGN_IN} />;
  }
  return (
    <PageContainer title='Add Player'>
      <AddPlayerFormContainer />
    </PageContainer>
  );
};
