import React from 'react';
import PageContainer from '../../../layout/PageContainer';
import { useAuth } from '../../../shared/hooks/useAuth';
import { Redirect } from 'react-router-dom';
import { SIGN_IN } from '../../../router';
import AddPlayerToGame from './AddPlayerToGame.container';

const AddPlayerToGamePage = () => {
  const { isAuth } = useAuth();

  if (!isAuth) {
    return <Redirect to={SIGN_IN} />;
  }
  return (
    <PageContainer title='Add Player to Game'>
      <AddPlayerToGame />
    </PageContainer>
  );
};

export default AddPlayerToGamePage;
