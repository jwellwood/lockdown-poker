import React from 'react';
import PageContainer from 'shared/layout/PageContainer';
import { useAuth } from 'shared/hooks/useAuth';
import { Redirect } from 'react-router-dom';
import { SIGN_IN } from 'router';
import AddGame from './AddGame.container';

const AddGamePage = () => {
  const { isAuth } = useAuth();

  if (!isAuth) {
    return <Redirect to={SIGN_IN} />;
  }
  return (
    <PageContainer title='Add Game'>
      <AddGame />
    </PageContainer>
  );
};

export default AddGamePage;
