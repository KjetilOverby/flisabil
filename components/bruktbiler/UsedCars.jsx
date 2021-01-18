import React from 'react';
import {
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import Iframe from 'react-iframe';
import HeaderComponent from '../HeaderComponent';
import FooterComponent from '../FooterComponent';
import Link from 'next/link';
import Colors from '../../config/colors';

const useStyles = makeStyles((theme) => ({
  background: {
    background:
      'linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url("https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1447&q=80")',
    height: '50vh',
    backgroundPosition: '0 180%',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    [theme.breakpoints.down('md')]: {
      backgroundPosition: '0 50%',
      height: '25rem',
    },
    [theme.breakpoints.down('sm')]: {
      backgroundPosition: '0 50%',
      height: '25rem',
      backgroundAttachment: 'initial',
    },
    [theme.breakpoints.down('xs')]: {
      backgroundPosition: '50% 50%',
      height: '15rem',
    },
  },
  container: {
    [theme.breakpoints.down('sm')]: {
      padding: 0,
    },
  },
  finnButton: {
    backgroundColor: Colors.finnbutton,
  },
  header: {
    margin: '5rem',
    color: '#eee',
    [theme.breakpoints.down('sm')]: {
      margin: '3rem 0',
      fontSize: '1.5rem',
    },
  },
  iframe: {
    padding: '1rem',
    border: 'none',
    width: '95%',
    [theme.breakpoints.up('md')]: {
      boxShadow: '5px 5px 20px #dbdbdb',
    },
    [theme.breakpoints.down('sm')]: {
      border: 'none',
      padding: 0,
      width: '100%',
    },
  },
  iframeContainer: {
    height: '100vh',
    width: '50%',
    margin: '10rem 0',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: '100vh',
      marginBottom: '4rem',
    },
  },
  iframeTextContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
    },
  },
  headerAndTextContainer: {
    [theme.breakpoints.down('md')]: {},
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {},
    [theme.breakpoints.down('sm')]: {
      marginBottom: '5rem',
    },
  },
  textHeaderContainer: {
    width: '45vw',
    marginTop: '5rem',

    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
}));
const UsedCars = () => {
  const classes = useStyles();
  return (
    <Grid container direction="column" className={classes.container}>
      <Grid item>
        <HeaderComponent />
      </Grid>
      <Grid container justify="center" className={classes.background}>
        <Grid item>
          <Typography variant="h4" className={classes.header}>
            Bruktbilsalg
          </Typography>
        </Grid>
        <Grid item>
          <Link href="/finn_bruktbiler">
            <Button className={classes.finnButton} variant="contained">
              Finn.no
            </Button>
          </Link>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container className={classes.iframeTextContainer}>
          <Grid item className={classes.textHeaderContainer}>
            <Grid
              container
              direction="column"
              alignItems="center"
              className={classes.headerAndTextContainer}
            >
              <Container maxWidth="lg" className={classes.textContainer}>
                <Grid item>
                  <Typography style={{ marginBottom: '4rem' }} variant="h5">
                    Kjøpe bruktbil?
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography style={{ marginBottom: '1rem' }}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Reiciendis culpa enim blanditiis unde, a dolore omnis
                    reprehenderit! Eum iste consectetur tenetur? Qui laboriosam
                    harum culpa dolorum, dolore eveniet maiores placeat! Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Vel
                    recusandae vitae veritatis ipsam quasi possimus, atque, ex
                    iure rem ipsum voluptatibus enim voluptatem minima odio illo
                    quo. Alias, natus tenetur!
                  </Typography>
                  <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quam nostrum illo numquam, cumque placeat cum quo
                    praesentium voluptate. Deleniti ad dolores quos maiores nisi
                    debitis eius ullam cumque ut explicabo. Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Quis reprehenderit
                    iusto omnis dicta soluta consequuntur quia aliquam
                    distinctio qui repellendus, eveniet ducimus. Doloremque
                    eaque suscipit sunt laborum dolores quis accusantium?
                  </Typography>
                </Grid>
              </Container>
            </Grid>
          </Grid>
          <Grid item className={classes.iframeContainer}>
            <Iframe
              url="https://www.finn.no/pw/search/car-norway?orgId=1180510454"
              width="100%"
              height="100%"
              id="myId"
              className={classes.iframe}
              display="initial"
              position="relative"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <FooterComponent />
      </Grid>
    </Grid>
  );
};

export default UsedCars;
