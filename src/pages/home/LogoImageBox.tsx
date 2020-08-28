import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import logo from 'shared/assets/images/logo.jpg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    logo: {
      margin: theme.spacing(4, 2, 2),
    },
  })
);

const LogoImageBox: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      <img className={classes.logo} src={logo} alt='site logo' />
      {/* <MainHeader>Welcome!</MainHeader> */}
    </div>
  );
};

export default LogoImageBox;
