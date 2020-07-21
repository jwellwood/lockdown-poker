import React from 'react';
import PageContainer from '../../ui/layout/PageContainer';
import { useSelector } from 'react-redux';
import LinkButton from '../../ui/buttons/LinkButton.component';
import { ADD_GAME_DETAILS } from '../../router';

const HomePage = () => {
  const { isEmpty, isLoaded } = useSelector((state) => state.firebase.auth);
  return (
    <PageContainer title='Home'>
      {!isEmpty && isLoaded ? (
        <LinkButton type='outlined' color='inherit' to={ADD_GAME_DETAILS}>
          Add details for a new game
        </LinkButton>
      ) : null}
    </PageContainer>
  );
};

export default HomePage;
