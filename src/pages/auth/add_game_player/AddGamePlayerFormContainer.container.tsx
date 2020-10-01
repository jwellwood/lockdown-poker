import React, { useState, useEffect } from 'react';
import { useFirestore, useFirestoreConnect } from 'react-redux-firebase';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, RootStateOrAny } from 'react-redux';
import Spinner from 'components/spinners/Spinner.component';
import AddGamePlayerForm from './AddGamePlayerForm.component';
import { DocumentData } from '@firebase/firestore-types';
import { IGame } from 'types';

const AddGamePlayerFormContainer: React.FC = () => {
  const { id } = useParams();
  const fireStore = useFirestore();
  const history = useHistory();
  const [game, setGame] = useState<IGame | DocumentData>();
  const [input, setInput] = useState({});
  useFirestoreConnect('players');

  const { players } = useSelector(
    (state: RootStateOrAny) => state.firestore.ordered
  );
  const gameRef = fireStore.collection('games').doc(id);

  useEffect(() => {
    const gameRef = fireStore.collection('games').doc(id);
    gameRef.get().then((doc) => {
      setGame(doc.data());
    });
  }, [fireStore, id]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    });

  const onSubmit = () => {
    const data = { ...input };

    gameRef.update({
      participants: fireStore.FieldValue.arrayUnion(data),
    });

    history.goBack();
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
