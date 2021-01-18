import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import Colors from '../../config/colors';
//https://images.unsplash.com/photo-1561131506-3c48296e2c20?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80

//https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80
const useStyles = makeStyles((theme) => ({
  container: {
    background:
      'linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url("https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80")',
    width: '100vw',
    backgroundRepeat: 'none',
    backgroundSize: 'cover',
    backgroundPosition: '0 100%',
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundAttachment: 'fixed',
    [theme.breakpoints.down('md')]: {
      backgroundAttachment: 'initial',
      backgroundPosition: '0 50%',
      height: '35rem',
    },
    [theme.breakpoints.down('sm')]: {
      backgroundAttachment: 'initial',
      backgroundPosition: '0 50%',
      height: '30rem',
    },
    [theme.breakpoints.down('xs')]: {
      backgroundPosition: '50% 0',
      height: '15rem',
    },
  },
  header: {
    color: Colors.headerStartPage,
    fontWeight: 'bold',
    marginTop: '4rem',
    fontFamily: 'Ruda',
    fontStyle: 'italic',
    fontSize: '4.5rem',

    [theme.breakpoints.down('sm')]: {
      fontSize: '2.5rem',
      marginTop: '5rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.5rem',
      marginTop: '2rem',
    },
  },
  logo: {
    height: '1.5rem',

    [theme.breakpoints.down('xs')]: {
      height: '.5rem',
    },
  },
  logoContainer: {
    background: '',
    padding: '1rem',
    borderRadius: '5px',
    marginLeft: '2%',
    marginTop: '15%',
    [theme.breakpoints.down('xs')]: {
      padding: '.5rem',
    },
  },
  masterContainer: {
    height: '70vh',
    [theme.breakpoints.down('md')]: {
      height: '75vh',
    },
    [theme.breakpoints.down('sm')]: {
      height: '45vh',
    },
    [theme.breakpoints.down('xs')]: {
      height: '30vh',
    },
  },

  text: {
    color: '#fff',
  },
}));
const BackgroundImage = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.masterContainer}>
      <Grid container className={classes.container}>
        <Grid item>
          <Typography variant="h1" className={classes.header}>
            Velkommen til oss
          </Typography>
        </Grid>
        <Grid container>
          <Grid item className={classes.logoContainer}>
            <img
              className={classes.logo}
              src="https://usbl.fordelerformedlemmer.no/-/media/Local-Chains/bilxtra_verksted_usbl/Logo/Bilxtra_Logo.png?h=357&w=1883&la=nb-NO&hash=676E117A17FD3854C099B50C62A031221E19FD05"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BackgroundImage;
// background:
// 'url("https://images.unsplash.com/photo-1561131506-3c48296e2c20?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")',
