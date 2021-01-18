import React from 'react';
import { makeStyles } from '@material-ui/core';

import mapImage from '../../images/map.png';

const useStyles = makeStyles((theme) => ({
  img: {
    height: '30rem',
    marginTop: '10rem',
    [theme.breakpoints.down('xs')]: {
      height: '15rem',
    },
  },
}));
const MapComponent = () => {
  const classes = useStyles();
  return <div></div>;
};

export default MapComponent;
