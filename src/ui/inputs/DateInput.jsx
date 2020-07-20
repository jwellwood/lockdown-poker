import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
// MUI
import { DatePicker } from '@material-ui/pickers';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import FormErrorMessage from './FormErrorMessage';

const DateInput = ({
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
        <DatePicker
          disableFuture
          color='secondary'
          inputVariant='filled'
          value={defaultValue}
          onChange={onChange}
          openTo='date'
          format='dd/MM/yyyy'
          label={label}
          name={inputName}
          views={['year', 'month', 'date']}
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

export default DateInput;
