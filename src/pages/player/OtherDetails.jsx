import React from 'react';
import { Card, Divider, List, ListItem, ListItemText } from '@material-ui/core';

const OtherDetails = ({ player }) => {
  return (
    <Card>
      <h3>Other Details</h3>
      <Divider />
      <List>
        <ListItem>
          <ListItemText primary='IBAN' secondary={player.iban} />
        </ListItem>
        <ListItem>
          <ListItemText primary='Bizum' secondary='' />
        </ListItem>
        <ListItem>
          <ListItemText primary='PayPal' secondary='' />
        </ListItem>
        <ListItem>
          <ListItemText primary='Other' secondary='' />
        </ListItem>
      </List>
    </Card>
  );
};

export default OtherDetails;
