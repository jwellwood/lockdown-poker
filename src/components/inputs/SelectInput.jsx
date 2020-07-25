import React from 'react';
// MUI
import TextField from '@material-ui/core/TextField';
// Internal
import FormErrorMessage from './FormErrorMessage';

const SelectInput = ({
  inputName,
  defaultValue,
  onChange,
  label,
  validators,
  errors,
  options,
  data_id,
}) => {
  return (
    <>
      <TextField
        select
        SelectProps={{
          native: true,
        }}
        data-id={data_id}
        color='secondary'
        name={inputName}
        defaultValue={defaultValue}
        onChange={onChange}
        label={label}
        variant='filled'
        margin='normal'
        fullWidth
        inputRef={validators}
      >
        {options.map((option) => (
          <option
            key={option.text}
            disabled={option.disabled}
            value={option.value}
          >
            {option.text}
          </option>
        ))}
      </TextField>
      {errors ? <FormErrorMessage type={label} error={errors} /> : null}
    </>
  );
};

export default SelectInput;
