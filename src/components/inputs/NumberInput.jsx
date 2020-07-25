import React from 'react';
// MUI
import TextField from '@material-ui/core/TextField';
// Internal
import FormErrorMessage from './FormErrorMessage';

const NumberInput = ({
  inputName,
  defaultValue,
  onChange,
  label,
  validators,
  errors,
  disabled,
}) => {
  return (
    <>
      <TextField
        type='number'
        color='secondary'
        name={inputName}
        defaultValue={defaultValue}
        onChange={onChange}
        label={label}
        variant='filled'
        margin='normal'
        fullWidth
        inputRef={validators}
        disabled={disabled}
      />
      {errors ? <FormErrorMessage type={label} error={errors} /> : null}
    </>
  );
};

export default NumberInput;
