import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
// MUI
import { DateTimePicker } from '@material-ui/pickers';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import FormErrorMessage from './FormErrorMessage';

interface Props {
  inputName: string;
  defaultValue: Date;
  onChange: any;
  label: string;
  // @TODO - find types for validators and errors
  validators?: any;
  errors?: any;
}

const DateTimeInput: React.FC<Props> = ({
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
          openTo='date'
          label={label}
          name={inputName}
          variant='dialog'
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
