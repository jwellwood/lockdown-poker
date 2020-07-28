import React from 'react';
import { Button } from '@material-ui/core';

const SubmitButton = () => {
  return (
    <Button
      type='submit'
      variant='contained'
      color='primary'
      style={{ float: 'right' }}
    >
      Submit
    </Button>
  );
};

export default SubmitButton;
