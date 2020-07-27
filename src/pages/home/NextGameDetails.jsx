import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Input from '@material-ui/core/Input';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import IconButton from '@material-ui/core/IconButton';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Typography from '@material-ui/core/Typography';
import FileCopyRounded from '@material-ui/icons/FileCopyRounded';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const useStyles = makeStyles((theme) => ({
  linksContainer: {
    marginTop: theme.spacing(1),
    maxWidth: '400px',
    margin: '0 auto',
  },
  input: {
    margin: theme.spacing(0, 1),
  },
  icon: {
    color: 'black',
  },
  copiedMessage: {
    width: '100%',
    margin: 0,
    padding: 0,
    fontSize: '8px',
    color: 'green',
    lineHeight: 0,
  },
  listItemText: {
    marginLeft: theme.spacing(1),
  },
}));

const NextGameDetails = ({ nextGameData, onCopy }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.linksContainer}>
      <List>
        {nextGameData.map(
          ({
            icon,
            text,
            textFromDb,
            inputValue,
            copyId,
            copiedStatus,
            copyButton,
            copiedMessage,
          }) => (
            <div key={text}>
              <ListItem className={classes.listItem}>
                <ListItemIcon className={classes.icon}>{icon}</ListItemIcon>
                <ListItemText>{text}</ListItemText>
                {inputValue && !textFromDb ? (
                  <Input className={classes.input} value={inputValue} />
                ) : (
                  <ListItemText className={classes.listItemText} variant='h6'>
                    {textFromDb}
                  </ListItemText>
                )}
                <ListItemSecondaryAction>
                  {copyButton && (
                    <CopyToClipboard
                      onCopy={() => onCopy(copyId)}
                      text={inputValue}>
                      <IconButton className={classes.icon}>
                        <FileCopyRounded
                          style={{
                            color: copiedStatus ? 'green' : 'initial',
                          }}
                        />
                      </IconButton>
                    </CopyToClipboard>
                  )}
                </ListItemSecondaryAction>
              </ListItem>
              {copiedStatus && (
                <div className={classes.copiedMessage}>
                  <Typography variant='caption'>{copiedMessage}</Typography>
                </div>
              )}
              <Divider variant='middle' />
            </div>
          )
        )}
      </List>
    </Grid>
  );
};

NextGameDetails.propTypes = {
  nextGameData: PropTypes.array.isRequired,
  onCopy: PropTypes.func.isRequired,
};

export default NextGameDetails;
