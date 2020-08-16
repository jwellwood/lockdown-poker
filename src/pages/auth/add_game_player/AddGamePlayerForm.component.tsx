import React from 'react';
import { useForm } from 'react-hook-form';
import {
  playerNameOptions,
  finalPositionOptions,
  buyBackOptions,
} from 'shared/utils';
import SelectInput from 'components/inputs/SelectInput';
import { FormContainer } from 'shared/layout';
import SubmitButton from 'components/buttons/SubmitButton';
import { IGame } from 'shared/utils/customTypes';
import { DocumentData } from '@firebase/firestore-types';

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  players: [];
  game: IGame | DocumentData;
}

const AddGamePlayerForm: React.FC<Props> = ({
  onChange,
  onSubmit,
  players,
  game,
}) => {
  const { register, handleSubmit, errors } = useForm();

  return (
    <FormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SelectInput
          inputName='name'
          label='Name'
          onChange={onChange}
          validators={register({ required: true })}
          errors={errors.preferredPayment || null}
          options={playerNameOptions(players, game)}
        />
        <SelectInput
          inputName='buyIns'
          label='Buy ins'
          onChange={onChange}
          validators={register({ required: true })}
          errors={errors.preferredPayment || null}
          options={buyBackOptions()}
        />
        <SelectInput
          inputName='finalPosition'
          label='Final Positions'
          onChange={onChange}
          validators={register({ required: true })}
          errors={errors.finalPosition || null}
          options={finalPositionOptions(players)}
        />

        <SubmitButton />
      </form>
    </FormContainer>
  );
};

export default AddGamePlayerForm;
