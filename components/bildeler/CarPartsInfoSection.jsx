import React from 'react';
import { Container, Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    margin: '5rem 0',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.5rem',
      margin: '3rem 0',
    },
  },
  text: {
    marginBottom: '1rem',
  },
  textBox: {
    marginBottom: '5rem',
  },
}));
const CarPartsInfoSection = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="sm">
      <Grid container className={classes.container}>
        <Grid item>
          <Typography className={classes.header} variant="h4">
            Trenger du deler til bilen din?
          </Typography>
        </Grid>
        <Grid item className={classes.textBox}>
          <ul>
            <li className={classes.text}>
              Vi lagerfører Bremseklosser, filtre, reimer, termostater,
              vannpumper, forstillingsdeler, hjullager, drivledd, eksos,
              plugger, drivstoffslanger og batterier.
            </li>
            <li className={classes.text}>
              I tillegg kan i levere alt av originaldeler, Amerikanske bildeler,
              og andre slitedeler fra 1-4 virkedager.
            </li>
          </ul>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CarPartsInfoSection;
