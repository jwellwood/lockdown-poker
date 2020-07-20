import React from 'react';
// MUI
import TextField from '@material-ui/core/TextField';
// Internal
import FormErrorMessage from './FormErrorMessage';

const TextInput = ({
  inputName,
  defaultValue,
  onChange,
  label,
  validators,
  errors,
  isPassword,
  multiline,
}) => {
  return (
    <>
      <TextField
        color='secondary'
        type={isPassword ? 'password' : 'text'}
        multiline={multiline}
        rows={3}
        name={inputName}
        defaultValue={defaultValue}
        onChange={onChange}
        label={label}
        variant='filled'
        margin='normal'
        fullWidth
        inputRef={validators}
      />
      {errors ? <FormErrorMessage type={label} error={errors} /> : null}
    </>
  );
};

export default TextInput;
