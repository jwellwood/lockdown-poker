import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  Grid,
  Paper,
  ListItemIcon,
} from '@material-ui/core';
import PaymentIcon from '@material-ui/icons/Payment';
import EuroIcon from '@material-ui/icons/Euro';
import { IPlayer } from 'shared/utils/customTypes';

interface Props {
  player: IPlayer;
}

const PaymentDetails: React.FC<Props> = ({ player }) => {
  const { preferredPayment, iban } = player;
  const data = [
    {
      primary: 'Preferred payment method',
      secondary: preferredPayment,
      icon: <EuroIcon />,
    },
    { primary: 'IBAN', secondary: iban, icon: <PaymentIcon /> },
  ];

  return (
    <Paper style={{ margin: '10px' }}>
      <Grid container>
        {data.map(({ primary, secondary, icon }, i) => (
          <Grid item xs={12} sm={6} key={secondary + i}>
            <List dense>
              <ListItem>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={primary} secondary={secondary} />
              </ListItem>
            </List>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default PaymentDetails;
