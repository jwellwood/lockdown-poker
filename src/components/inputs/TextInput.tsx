import React from 'react';
// MUI
import TextField from '@material-ui/core/TextField';
// Internal
import FormErrorMessage from './FormErrorMessage';

interface Props {
  inputName: string;
  defaultValue: string;
  onChange: () => void;
  label: string;
  //@TODO - check types of validators and errors
  validators?: any;
  errors?: any;
  isPassword: boolean;
  multiline: boolean;
}
const TextInput: React.FC<Props> = ({
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
