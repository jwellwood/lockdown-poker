import React from 'react';
import { Card, List, ListItem, ListItemText } from '@material-ui/core';
const UserDetails = ({ player, id }) => {
  const { name } = player;
  return (
    <Card>
      <h3>User Details</h3>
      <List>
        <ListItem>
          <ListItemText primary='Player ID' secondary={id} />
        </ListItem>
        <ListItem>
          <ListItemText primary='Name' secondary={name} />
        </ListItem>
      </List>
    </Card>
  );
};

export default UserDetails;
