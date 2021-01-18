import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import footerLogo from '../images/flisabilas-logo.png';

const useStyles = makeStyles((theme) => ({
  adressContainer: {
    margin: '0 4rem',
    [theme.breakpoints.down('sm')]: {
      margin: '0 2rem',
    },
    [theme.breakpoints.down('xs')]: {
      margin: '0 1.5rem',
    },
  },
  container: {
    background: '#eee',
    width: '100vw',
    display: 'flex',
    padding: '2rem 0',
    justifyContent: 'space-around',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  contactContainer: {
    [theme.breakpoints.down('sm')]: {
      margin: ' 2rem',
    },
    [theme.breakpoints.down('xs')]: {
      margin: '1rem 1.5rem',
    },
  },
  logo: {
    height: '1rem',
  },
  text: {
    fontStyle: 'italic',
  },
  headers: {
    fontFamily: 'Ruda',
    fontSize: '1.2rem',
    fontStyle: 'italic',
  },
  timeOpenContainer: {
    [theme.breakpoints.down('md')]: {
      margin: '1rem 2rem',
    },
  },
}));
const FooterComponent = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item className={classes.adressContainer}>
        {/* <img className={classes.logo} src={footerLogo} alt="" /> */}
        <Typography className={classes.headers}>Flisa Bil AS</Typography>
        <Typography className={classes.text}>Nergardsveien 8</Typography>
        <Typography className={classes.text}>2270 Flisa</Typography>
      </Grid>
      <Grid item className={classes.contactContainer}>
        <Typography className={classes.headers}>Kontaktinformasjon:</Typography>
        <Typography className={classes.text}>Telefon: 62951910</Typography>
        <Typography className={classes.text}>
          Email: flisabil@online.no
        </Typography>
      </Grid>
      <Grid item className={classes.timeOpenContainer}>
        <Typography className={classes.headers}>Åpningstider:</Typography>
        <Typography className={classes.text}>Man-Fre: 08:00-16:30</Typography>
        <Typography className={classes.text}>Lørdag: 10:00-13:00</Typography>
        <Typography className={classes.text}>Søndag: Stengt</Typography>
      </Grid>
    </Grid>
  );
};

export default FooterComponent;
