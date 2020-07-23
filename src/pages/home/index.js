import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import VideoCamRounded from '@material-ui/icons/VideocamRounded';
import LinkRounded from '@material-ui/icons/LinkRounded';
import EventAvailableRounded from '@material-ui/icons/EventAvailableRounded';
import FileCopyRounded from '@material-ui/icons/FileCopyRounded';
import PageContainer from '../../ui/layout/PageContainer';
import { useSelector } from 'react-redux';
import LinkButton from '../../ui/buttons/LinkButton.component';
import { ADD_GAME_DETAILS } from '../../router';
import logo from '../../assets/images/logo.jpg';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Input,
  ListItemSecondaryAction,
  Typography,
  Divider,
  IconButton,
} from '@material-ui/core';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';
import { parseDate } from '../../utils/parseDate';
import Spinner from '../../ui/spinners/Spinner.component';

const useStyles = makeStyles((theme) => ({
  logo: {
    maxHeight: '50%',
  },
  icon: {
    color: 'black',
  },
  linksContainer: {
    marginTop: theme.spacing(1),
    maxWidth: '400px',
    margin: '0 auto',
  },
  appTitle: { margin: theme.spacing(1, 0) },
  input: {
    margin: theme.spacing(0, 1),
  },
  copiedMessage: {
    width: '100%',
    margin: 0,
    padding: 0,
    fontSize: '8px',
    color: 'green',
    lineHeight: 0,
  },
}));

const HomePage = () => {
  const { isEmpty, isLoaded } = useSelector((state) => state.firebase.auth);
  const classes = useStyles();
  const [gameDate, setGameDate] = useState('');
  const [loading, setLoading] = useState(true);
  const [zoomInputValue, setZoomInputValue] = useState({
    value: '',
    copied: false,
  });
  const [gameInputValue, setGameInputValue] = useState({
    value: '',
    copied: false,
  });

  useFirestoreConnect([
    {
      collection: 'gamepreviews',
      orderBy: ['date'],
      limit: 1,
    },
  ]);
  const gamePreview = useSelector(
    (state) => state.firestore.ordered.gamepreviews
  );
  console.log(isLoaded);

  //@TODO get real date from firebase
  const exampleDate = '24-7-2020 9:30PM';

  const exampleZoomValue = 'https://www.zoom.us';
  const exampleGameValue = 'https://www.bbc.com/hhashashdhashdhashdhasdhahsd';
  // @TODO Add these values from firebase in useEffect
  useEffect(() => {
    const getNextGame = async () => {
      if (!gamePreview) return;
      else {
        await setGameDate(parseDate(gamePreview[0].date));
        await setZoomInputValue({
          ...zoomInputValue,
          value: gamePreview[0].zoomLink,
        });
        await setGameInputValue({
          ...gameInputValue,
          value: gamePreview[0].gameLink,
        });
        setLoading(false);
      }
    };
    getNextGame();
  }, [gamePreview]);

  const onCopy = (copyId) => {
    if (copyId === 'zoom')
      setZoomInputValue({ ...zoomInputValue, copied: true });
    if (copyId === 'game')
      setGameInputValue({ ...gameInputValue, copied: true });
  };

  const homeLinks = [
    {
      icon: <EventAvailableRounded />,
      text: 'Next Game:',
      copyButton: false,
      date: gameDate,
    },
    {
      icon: <VideoCamRounded />,
      text: 'Zoom Link:',
      inputValue: zoomInputValue.value,
      copyButton: true,
      copyId: 'zoom',
      copiedStatus: zoomInputValue.copied,
      copiedMessage: 'Zoom link copied!',
    },
    {
      icon: <LinkRounded />,
      text: 'Game Link:',
      inputValue: gameInputValue.value,
      copyButton: true,
      copyId: 'game',
      copiedStatus: gameInputValue.copied,
      copiedMessage: 'Game link copied!',
    },
  ];
  return (
    <PageContainer title='Home'>
      {loading ? (
        <Spinner />
      ) : !isEmpty && isLoaded ? (
        <LinkButton type='outlined' color='inherit' to={ADD_GAME_DETAILS}>
          Add details for a new game
        </LinkButton>
      ) : null}
      <Grid className={classes.logo} container>
        <Grid item xs={12}>
          <img src={logo} alt='site logo' />
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.appTitle} variant='h5'>
            Lockdown Poker
          </Typography>
        </Grid>
        <Divider variant='middle'></Divider>
        {loading ? (
          <Spinner />
        ) : (
          <Grid container className={classes.linksContainer}>
            <List>
              {homeLinks.map((link) => (
                <div key={link.text}>
                  <ListItem>
                    <ListItemIcon className={classes.icon}>
                      {link.icon}
                    </ListItemIcon>

                    <ListItemText>{link.text}</ListItemText>
                    {link.inputValue && !link.date ? (
                      <Input
                        className={classes.input}
                        value={link.inputValue}
                      />
                    ) : (
                      <ListItemText variant='h6'>{link.date}</ListItemText>
                    )}

                    <ListItemSecondaryAction>
                      {link.copyButton && (
                        <CopyToClipboard
                          onCopy={() => onCopy(link.copyId)}
                          text={link.inputValue}>
                          <IconButton className={classes.icon}>
                            <FileCopyRounded
                              style={{
                                color: link.copiedStatus ? 'green' : 'initial',
                              }}
                            />
                          </IconButton>
                        </CopyToClipboard>
                      )}
                    </ListItemSecondaryAction>
                  </ListItem>
                  {link.copiedStatus ? (
                    <div className={classes.copiedMessage}>
                      <Typography variant='caption'>
                        {link.copiedMessage}
                      </Typography>
                    </div>
                  ) : null}
                  <Divider variant='middle' />
                </div>
              ))}
            </List>
          </Grid>
        )}
      </Grid>
    </PageContainer>
  );
};

export default HomePage;
