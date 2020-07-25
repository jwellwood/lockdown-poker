import React, { useState, useEffect } from 'react';
import { useFirestore, useFirestoreConnect } from 'react-redux-firebase';
import { useHistory, useParams } from 'react-router-dom';
import { GAMES } from 'router';
import { useSelector } from 'react-redux';
import Spinner from 'components/spinners/Spinner.component';
import AddGamePlayerForm from './AddGamePlayerForm.component';

const AddGamePlayerFormContainer = () => {
  const { id } = useParams();
  const fireStore = useFirestore();
  const history = useHistory();
  const [game, setGame] = useState({});
  const [input, setInput] = useState({});
  useFirestoreConnect('players');

  const { players } = useSelector((state) => state.firestore.ordered);
  const gameRef = fireStore.collection('games').doc(id);

  useEffect(() => {
    const gameRef = fireStore.collection('games').doc(id);
    gameRef.get().then((doc) => {
      setGame(doc.data());
    });
  }, [fireStore, id]);

  const onChange = (e) =>
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    });

  const onSubmit = (e) => {
    const data = { ...input };

    gameRef.update({
      participants: fireStore.FieldValue.arrayUnion(data),
    });

    history.push(GAMES);
  };
  return players && game ? (
    <AddGamePlayerForm
      onChange={onChange}
      onSubmit={onSubmit}
      players={players}
      game={game}
    />
  ) : (
    <Spinner />
  );
};

export default AddGamePlayerFormContainer;
