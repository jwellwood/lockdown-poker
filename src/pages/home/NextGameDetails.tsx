import React from 'react';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import VideoCamRounded from '@material-ui/icons/VideocamRounded';
import LinkRounded from '@material-ui/icons/LinkRounded';
import AttachMoneyRounded from '@material-ui/icons/AttachMoneyRounded';
import EventAvailableRounded from '@material-ui/icons/EventAvailableRounded';
import CopyButton from './CopyButton';
import { parseDateAndTime } from 'shared/utils';
import { IGame } from 'shared/utils/customTypes';
import { shortenTextLength } from 'shared/utils/shortenTextLength';
import NextGameContainer from './NextGameContainer';

interface Props {
  nextGameData: IGame;
}

const NextGameDetails: React.FC<Props> = ({ nextGameData }) => {
  const listData = [
    {
      icon: <EventAvailableRounded />,
      primary: 'Date',
      secondary: parseDateAndTime(nextGameData.date),
    },
    {
      icon: <AttachMoneyRounded />,
      primary: 'Buy-in',
      secondary: `€${nextGameData.buyIn}`,
    },
    {
      icon: <VideoCamRounded />,
      primary: 'Zoom Link',
      secondary: shortenTextLength(nextGameData.zoomLink),
      action: <CopyButton text={nextGameData.zoomLink} />,
    },
    {
      icon: <LinkRounded />,
      primary: 'Game Link',
      secondary: shortenTextLength(nextGameData.gameLink),
      action: <CopyButton text={nextGameData.gameLink} />,
    },
  ];

  return (
    <Container maxWidth='xs'>
      <NextGameContainer>
        <List>
          {listData.map((item) => (
            <ListItem key={item.primary} alignItems='flex-start'>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.primary} secondary={item.secondary} />
              <ListItemSecondaryAction>{item.action}</ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </NextGameContainer>
    </Container>
  );
};

export default NextGameDetails;
