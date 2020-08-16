import React from 'react';
import { Grid, Paper, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import BackButton from '../../components/buttons/BackButton.component';
import PageTitle from 'components/headers/PageTitle';
import CustomDivider from '../../components/dividers/CustomDivider';

interface Props {
  title: string;
  hasBackButton?: boolean;
  //@TODO Find out why it's not accepting React.ReactNode for children
  children: any;
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `linear-gradient(45deg, ${theme.palette.primary.main} 4.17%, ${theme.palette.common.white} 4.17%, ${theme.palette.common.white} 45.83%, ${theme.palette.common.black} 45.83%, ${theme.palette.common.black} 50%, ${theme.palette.primary.main}  50%,${theme.palette.primary.main}  54.17%, ${theme.palette.common.white} 54.17%, ${theme.palette.common.white} 95.83%,${theme.palette.common.black} 95.83%, ${theme.palette.common.black} 100%)`,
    backgroundSize: '320px 320px',
    padding: theme.spacing(1),
    minHeight: '100vh',
    height: '100%',
    width: '100%',
    textAlign: 'center',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
  },
  paper: {
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    //Stops bottom navigation hiding content
    marginBottom: theme.spacing(8),
    width: '100%',
    // @TODO check this
    color: theme.palette.text.primary,
    boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'left',
    margin: theme.spacing(1, 1, 0),
    padding: theme.spacing(0, 1, 0),
    color: theme.palette.secondary.main,
  },
  backButton: {
    float: 'right',
  },
  divider: {
    margin: theme.spacing(0, 1, 1),
  },
}));

const PageContainer: React.FC<Props> = ({ title, children, hasBackButton }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container direction='column'>
          <Grid item xs={12} className={classes.title}>
            <PageTitle>{title}</PageTitle>
            {hasBackButton && (
              <div className={classes.backButton}>
                <BackButton color='inherit' type='text'>
                  Back
                </BackButton>
              </div>
            )}
          </Grid>
          <div className={classes.divider}>
            <CustomDivider />
          </div>
          <Grid container direction='column'>
            <Container maxWidth='md'>{children}</Container>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default PageContainer;
