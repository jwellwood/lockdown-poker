import React, { useState, useEffect } from 'react';
import { useFirestore } from 'react-redux-firebase';
import { useHistory, useParams } from 'react-router-dom';
import { PLAYERS } from 'router';
import Spinner from 'components/spinners/Spinner.component';
import EditPlayerForm from './EditPlayerForm.component';
import { IPlayer } from 'types';

const EditPlayerFormContainer: React.FC = () => {
  const { id } = useParams();
  const history = useHistory();
  const fireStore = useFirestore();

  const playerRef = fireStore.collection('players').doc(id);
  const [player, setPlayer] = useState<IPlayer>();
  const [input, setInput] = useState<IPlayer>({
    iban: '',
    name: '',
    preferredPayment: '',
  });

  useEffect(() => {
    const playerRef = fireStore.collection('players').doc(id);
    playerRef.get().then((doc) => {
      const docData = doc.data();
      if (docData) setPlayer(docData as IPlayer);
    });
  }, [fireStore, id]);
  useEffect(() => {
    if (player) {
      const { name, preferredPayment, iban } = player;
      setInput({ name, preferredPayment, iban });
    }
  }, [player]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    });

  const onSubmit = () => {
    const data = { ...input };
    playerRef.update({ ...data });
    history.push(PLAYERS);
  };

  const onDelete = () => {
    playerRef.delete();
    history.push(PLAYERS);
  };
  return player && input.name ? ( // TODO Improve this. Don't rely on just name
    <EditPlayerForm
      onChange={onChange}
      onSubmit={onSubmit}
      onDelete={onDelete}
      input={input}
    />
  ) : (
    <Spinner />
  );
};

export default EditPlayerFormContainer;
