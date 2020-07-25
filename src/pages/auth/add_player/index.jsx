import React from 'react';
import PageContainer from 'shared/layout/PageContainer';
import { useAuth } from 'shared/hooks/useAuth';
import { SIGN_IN } from 'router';
import { Redirect } from 'react-router-dom';
import AddPlayer from './AddPlayer.container';

const AddPlayerPage = () => {
  const { isAuth } = useAuth();

  if (!isAuth) {
    return <Redirect to={SIGN_IN} />;
  }
  return (
    <PageContainer title='Add Player'>
      <AddPlayer />
    </PageContainer>
  );
};

export default AddPlayerPage;
