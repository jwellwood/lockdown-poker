import React from 'react';
import PageContainer from 'shared/layout/PageContainer';
import { useAuth } from 'shared/hooks/useAuth';
import { Redirect } from 'react-router-dom';
import { SIGN_IN } from 'router';
import EditPlayer from './EditPlayer.container';

const EditPlayerPage = () => {
  const { isAuth } = useAuth();

  if (!isAuth) {
    return <Redirect to={SIGN_IN} />;
  }
  return (
    <PageContainer title='Edit Player'>
      <EditPlayer />
    </PageContainer>
  );
};

export default EditPlayerPage;
