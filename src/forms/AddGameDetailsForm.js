import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@material-ui/core';

const AddGameDetailsForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const [input, setInput] = useState({});

  const onChange = (e) =>
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    });

  const onSubmit = (e) => {
    console.log('submit');
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      Add game details form here <Button type='submit'>Submit</Button>
    </form>
  );
};

export default AddGameDetailsForm;
