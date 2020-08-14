import React from 'react';
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
import CopyToClipboard from 'react-copy-to-clipboard';
import { INextGameData } from 'shared/utils/customTypes';

interface Props {
  nextGameData: INextGameData[];
  onCopy: (copyId: string) => void;
}

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

const NextGameDetails: React.FC<Props> = ({ nextGameData, onCopy }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.linksContainer}>
      <List>
        {nextGameData.map((data) => (
          <div key={data.text}>
            <ListItem>
              <ListItemIcon className={classes.icon}>{data.icon}</ListItemIcon>
              <ListItemText>{data.text}</ListItemText>
              {data.inputValue && !data.textFromDb ? (
                <Input className={classes.input} value={data.inputValue} />
              ) : (
                <ListItemText className={classes.listItemText}>
                  {data.textFromDb}
                </ListItemText>
              )}
              <ListItemSecondaryAction>
                {data.copyButton && (
                  <CopyToClipboard
                    onCopy={() => onCopy(data.copyId || '')}
                    text={data.inputValue}>
                    <IconButton className={classes.icon}>
                      <FileCopyRounded
                        style={{
                          color: data.copiedStatus ? 'green' : 'initial',
                        }}
                      />
                    </IconButton>
                  </CopyToClipboard>
                )}
              </ListItemSecondaryAction>
            </ListItem>
            {data.copiedStatus && (
              <div className={classes.copiedMessage}>
                <Typography variant='caption'>{data.copiedMessage}</Typography>
              </div>
            )}
            <Divider variant='middle' />
          </div>
        ))}
      </List>
    </Grid>
  );
};

export default NextGameDetails;
