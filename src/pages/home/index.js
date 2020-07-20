import React from 'react';
import PageContainer from '../../ui/layout/PageContainer';
import { useSelector } from 'react-redux';
import LinkButton from '../../ui/buttons/LinkButton.component';
import { ADD_GAME_DETAILS } from '../../router';

const HomePage = () => {
  const { isEmpty, isLoaded } = useSelector((state) => state.firebase.auth);
  return (
    <PageContainer>
      Home
      {!isEmpty && isLoaded ? (
        <LinkButton to={ADD_GAME_DETAILS}>
          Add details for a new game
        </LinkButton>
      ) : null}
    </PageContainer>
  );
};

export default HomePage;
