import React from 'react';
import AddGameForm from '../../forms/AddGameForm';
import PageContainer from '../../ui/layout/PageContainer';

const AddGamePage = () => {
  return (
    <PageContainer>
      Add game
      <div>
        <AddGameForm />
      </div>
    </PageContainer>
  );
};

export default AddGamePage;
