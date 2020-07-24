import React from 'react';
import AddPlayerToGameForm from '../../forms/AddPlayerToGameForm';
import PageContainer from '../../ui/layout/PageContainer';

const AddPlayerToGamePage = () => {
  return (
    <PageContainer title='Add Player to Game'>
      <AddPlayerToGameForm />
    </PageContainer>
  );
};

export default AddPlayerToGamePage;
