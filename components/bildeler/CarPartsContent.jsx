import React from 'react';
import { Container, Grid, makeStyles, Typography } from '@material-ui/core';
import CarPartsInfoSection from './CarPartsInfoSection';

const useStyles = makeStyles((theme) => ({
  container: {
    background:
      'linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.5)), url("https://images.unsplash.com/photo-1593081727404-575eeb723999?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80")',
    width: '100vw',
    backgroundRepeat: 'none',
    backgroundSize: 'cover',
    backgroundPosition: '0 70%',
    display: 'flex',
    alignItems: 'center',
    padding: '2rem 0',
    flexDirection: 'column',
    height: '55vh',
    [theme.breakpoints.down('md')]: {
      backgroundAttachment: 'initial',
      backgroundPosition: '0 60%',
      flexDirection: 'row',
      justifyContent: 'center',
      height: '35vh',
    },
    [theme.breakpoints.down('xs')]: {
      backgroundAttachment: 'initial',
      backgroundPosition: '0 60%',
      flexDirection: 'row',
      justifyContent: 'center',
      height: '25vh',
    },
  },
  header: {
    color: '#fff',
    fontWeight: 'bold',
    margin: '5rem',
    [theme.breakpoints.down('xs')]: {
      margin: 0,
    },
  },
  text: {
    color: 'white',
    marginBottom: '1rem',
    fontSize: '1rem',
  },
}));
const CarPartsContent = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.container}>
        <Grid item>
          <Typography className={classes.header} variant="h3">
            Bildeler
          </Typography>
        </Grid>
      </Grid>
      <CarPartsInfoSection />
    </>
  );
};

export default CarPartsContent;
