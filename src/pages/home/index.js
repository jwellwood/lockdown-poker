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
  Typography,
  Divider,
  Icon,
  IconButton,
  TextField,
} from '@material-ui/core';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const useStyles = makeStyles((theme) => ({
  logo: {
    maxHeight: '50%',
  },
  icon: {},
  linksContainer: {
    marginTop: theme.spacing(1),
    maxWidth: '400px',
    margin: '0 auto',
  },
  appTitle: { margin: theme.spacing(1, 0) },
  text: {},
  link: {},
  copyButton: {},
  individualLinkContainer: {},
}));

const HomePage = () => {
  const { isEmpty, isLoaded } = useSelector((state) => state.firebase.auth);
  const classes = useStyles();
  const [zoomInputValue, setZoomInputValue] = useState({
    value: '',
    copied: false,
  });
  const [gameInputValue, setGameInputValue] = useState({
    value: '',
    copied: false,
  });

  //@TODO get real date from firebase
  const exampleDate = '24-7-2020 9:30PM';

  const exampleZoomValue = 'https://www.zoom.us';
  const exampleGameValue = 'https://www.bbc.com/hhashashdhashdhashdhasdhahsd';
  // @TODO Add these values from firebase in useEffect
  useEffect(() => {
    setZoomInputValue({ ...zoomInputValue, value: exampleZoomValue });
    setGameInputValue({ ...gameInputValue, value: exampleGameValue });
  }, []);

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
      date: exampleDate,
    },
    {
      icon: <VideoCamRounded />,
      text: 'Zoom Link:',
      inputValue: zoomInputValue.value,
      copyButton: true,
      copyId: 'zoom',
      copiedStatus: zoomInputValue.copied,
      copiedMessage: 'Copied!',
    },
    {
      icon: <LinkRounded />,
      text: 'Game Link:',
      inputValue: gameInputValue.value,
      copyButton: true,
      copyId: 'game',
      copiedStatus: gameInputValue.copied,
      copiedMessage: 'Copied!',
    },
  ];
  return (
    <PageContainer title='Home'>
      {!isEmpty && isLoaded ? (
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
        <Grid container className={classes.linksContainer}>
          {homeLinks.map((link) => (
            <Grid
              key={link.text}
              className={classes.individualLinkContainer}
              container
              direction='row'
              alignItems='center'>
              <Grid className={classes.icon} item xs={1}>
                <Icon>{link.icon}</Icon>
              </Grid>
              <Grid className={classes.text} item xs={4}>
                <Typography>{link.text}</Typography>
              </Grid>
              <Grid className={classes.link} item xs={6}>
                {link.inputValue && !link.date ? (
                  <TextField value={link.inputValue} />
                ) : (
                  <Typography>{link.date}</Typography>
                )}
              </Grid>
              {link.copyButton && (
                <Grid className={classes.copyButton} item xs={1}>
                  <CopyToClipboard
                    onCopy={() => onCopy(link.copyId)}
                    text={link.inputValue}>
                    <IconButton>
                      <FileCopyRounded />
                    </IconButton>
                  </CopyToClipboard>
                  {link.copiedStatus ? <p>{link.copiedMessage}</p> : null}
                </Grid>
              )}
            </Grid>
          ))}
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default HomePage;
