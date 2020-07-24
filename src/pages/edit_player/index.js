import React from 'react';
import EditPlayerForm from '../../forms/EditPlayerForm';
import PageContainer from '../../ui/layout/PageContainer';

const EditPlayerPage = () => {
  return (
    <PageContainer title='Edit Player'>
      <EditPlayerForm />
    </PageContainer>
  );
};

export default EditPlayerPage;
