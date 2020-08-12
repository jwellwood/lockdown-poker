import React from 'react';
import { Button } from '@material-ui/core';

interface Props {
  submitBtnText?: string;
}

const SubmitButton: React.FC<Props> = ({ submitBtnText = 'Submit' }) => {
  return (
    <Button
      type='submit'
      variant='contained'
      color='primary'
      style={{ float: 'right' }}>
      {submitBtnText}
    </Button>
  );
};

export default SubmitButton;
