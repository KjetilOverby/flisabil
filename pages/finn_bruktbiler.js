import React from 'react';
import { makeStyles } from '@material-ui/core';
import HeaderComponent from '../components/HeaderComponent';
import Iframe from 'react-iframe';
const useStyles = makeStyles((theme) => ({
  iframe: {
    height: '100vh',
  },
}));
const finn_bruktbiler = () => {
  const classes = useStyles();
  return (
    <div>
      <HeaderComponent />
      <Iframe
        url="https://www.finn.no/pw/search/car-norway?orgId=1180510454"
        width="100%"
        height="100%"
        id="myId"
        className={classes.iframe}
        display="initial"
        position="relative"
      />
    </div>
  );
};

export default finn_bruktbiler;
