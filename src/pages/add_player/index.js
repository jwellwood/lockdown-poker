import React from 'react';
import AddPlayerForm from '../../forms/AddPlayerForm';
import PageContainer from '../../ui/layout/PageContainer';

const AddPlayerPage = () => {
  return (
    <PageContainer title='Add Player'>
      <div>
        <AddPlayerForm />
      </div>
    </PageContainer>
  );
};

export default AddPlayerPage;
