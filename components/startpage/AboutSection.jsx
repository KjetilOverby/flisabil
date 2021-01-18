import React from 'react';
import { Container, Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    margin: '5rem 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {},
    [theme.breakpoints.down('xs')]: {
      margin: '0',
    },
  },
  header: {
    margin: '2rem 0 6rem 0',
    fontFamily: 'Ruda',
    color: '#555',
    fontStyle: 'italic',
    [theme.breakpoints.down('sm')]: {},
    [theme.breakpoints.down('xs')]: {
      fontSize: '2rem',
      margin: '3rem 0 3rem 0',
    },
  },
  imageContainer: {
    marginBottom: '3rem',
  },
  text: {
    marginBottom: '1rem',
    color: '#555',
    fontStyle: 'italic',
  },
  picture: {
    marginTop: '3rem',
    height: '20rem',
    margin: '0 1rem 0 0',
    [theme.breakpoints.down('xs')]: {
      height: '15rem',
    },
  },
}));
const AboutSection = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Grid container className={classes.container}>
        <Grid item>
          <Typography variant="h3" className={classes.header}>
            OM OSS
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.text}>
            Midt mellom Kongsvinger og Elverum ligger Flisa Bil AS i Negardsvn 8
            NÆR Flisa sentrum vis a vis Politistasjonen/KLUBBEN/MAXBO.
          </Typography>
          <Typography className={classes.text}>
            Vi driver med kjøp og salg av alle typer biler, bilverksted for alle
            merker, periodisk kjøretøykontroll, alt innen glasskader og
            frontruter, service, ac fylling, diagnoser, 4-hjulsmåling,
            småskader, osv.
          </Typography>
          <Typography className={classes.text}>
            {' '}
            Våren 2011 ble vi Bilxtra butikk, med nyoppussede lokaler og økt
            vareutvalg. Som bildels GROSSIST kan vi tilby gode rabatter til deg
            som kunde eller til deg som driver eget verksted.
          </Typography>
          <Typography className={classes.text}>
            Vi har også utleiebiler.
          </Typography>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="row"
            justify="center"
            className={classes.imageContainer}
          >
            <Grid item>
              <img
                className={classes.picture}
                src="http://www.flisabil.no/file/thumb/file/5/568650&width=519&height=388&zwidth=519&zheight=388&x=260&y=195.jpg"
                alt="building"
              />
            </Grid>
            <Grid item>
              <img
                className={classes.picture}
                src="http://www.flisabil.no/file/thumb/file/5/568651&width=521&height=390&zwidth=521&zheight=390&x=261&y=195.jpg"
                alt="building"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutSection;
