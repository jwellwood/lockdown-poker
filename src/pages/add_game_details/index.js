import React from 'react';
import AddGameDetailsForm from '../../forms/AddGameDetailsForm';
import PageContainer from '../../ui/layout/PageContainer';

const AddGameDetailsPage = () => {
  return (
    <PageContainer>
      Game details
      <div>
        <AddGameDetailsForm />
      </div>
    </PageContainer>
  );
};

export default AddGameDetailsPage;
