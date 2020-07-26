import React from 'react';
import { Card, List, ListItem, ListItemText } from '@material-ui/core';
const UserDetails = ({ player }) => {
  const { name, preferredPayment, iban, id } = player[0];
  return (
    <Card>
      <List>
        <ListItem>
          <ListItemText primary='Player ID' secondary={id} />
        </ListItem>
        <ListItem>
          <ListItemText primary='Name' secondary={name} />
        </ListItem>
        <ListItem>
          <ListItemText
            primary='Preferred Payment Method'
            secondary={preferredPayment}
          />
        </ListItem>
        <ListItem>
          <ListItemText primary='IBAN' secondary={iban} />
        </ListItem>
      </List>
    </Card>
  );
};

export default UserDetails;
