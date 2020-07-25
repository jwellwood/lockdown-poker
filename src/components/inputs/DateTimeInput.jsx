import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
// MUI
import { DateTimePicker } from '@material-ui/pickers';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import FormErrorMessage from './FormErrorMessage';

const DateTimeInput = ({
  inputName,
  defaultValue,
  onChange,
  label,
  validators,
  errors,
}) => {
  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DateTimePicker
          color='secondary'
          inputVariant='filled'
          value={defaultValue}
          onChange={onChange}
          openTo='dateTime'
          label={label}
          name={inputName}
          variant='filled'
          margin='normal'
          fullWidth
          inputRef={validators}
        />
      </MuiPickersUtilsProvider>
      {errors ? <FormErrorMessage type={label} error={errors} /> : null}
    </>
  );
};

export default DateTimeInput;
