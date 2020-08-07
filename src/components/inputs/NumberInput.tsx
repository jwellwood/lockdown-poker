import React from 'react';
// MUI
import TextField from '@material-ui/core/TextField';
// Internal
import FormErrorMessage from './FormErrorMessage';

interface Props {
  inputName: string;
  defaultValue: number;
  onChange: () => void;
  label: string;
  // @TODO - find types for validators and errors
  validators?: any;
  errors?: any;
  disabled: boolean;
}

const NumberInput: React.FC<Props> = ({
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
