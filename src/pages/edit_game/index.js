import React from 'react';
import EditGameForm from '../../forms/EditGameForm';
import PageContainer from '../../ui/layout/PageContainer';
import GamePlayerTable from './GamePlayerTable';

const EditGamePage = () => {
  return (
    <PageContainer title='Edit Game'>
      <EditGameForm />
      <GamePlayerTable players={[]} />
    </PageContainer>
  );
};

export default EditGamePage;
