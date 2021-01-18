import React from 'react';
import { Grid, makeStyles, TextField, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    margin: '5rem',
    [theme.breakpoints.down('xs')]: {},
  },
  header: {
    margin: '2rem 0',
    [theme.breakpoints.down('xs')]: {
      margin: 0,
    },
  },
  textfields: {
    width: '45rem',
    marginBottom: '1rem',
    [theme.breakpoints.down('lg')]: {
      width: '40em',
    },
    [theme.breakpoints.down('md')]: {
      width: '30em',
    },
    [theme.breakpoints.down('xs')]: {
      width: '25em',
    },
    [theme.breakpoints.down(350)]: {
      width: '20em',
    },
  },
}));
const ContactForm = () => {
  const classes = useStyles();
  return (
    <form style={{ display: 'flex', justifyContent: 'center' }}>
      <Grid className={classes.container} direction="column" container>
        <Grid item>
          <Typography className={classes.header} variant="h4">
            Kontaktskjema
          </Typography>
        </Grid>
        <Grid item>
          <TextField
            className={classes.textfields}
            variant="outlined"
            label="Navn"
            required
            type="text"
          />
        </Grid>
        <Grid item>
          <TextField
            className={classes.textfields}
            variant="outlined"
            label="Email"
            required
            type="email"
          />
        </Grid>
        <Grid item>
          <TextField
            className={classes.textfields}
            variant="outlined"
            label="Telefon"
            type="text"
          />
        </Grid>
        <Grid item>
          <TextField
            className={classes.textfields}
            variant="outlined"
            label="Melding"
            multiline
            rows={10}
            required
            type="text"
          />
        </Grid>
      </Grid>
    </form>
  );
};

export default ContactForm;
