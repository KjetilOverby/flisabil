import React from 'react';
import { makeStyles } from '@material-ui/core';
import UsedCars from '../components/bruktbiler/UsedCars';

const useStyles = makeStyles((theme) => ({}));
const bruktbiler = () => {
  const classes = useStyles();
  return (
    <div>
      <UsedCars />
    </div>
  );
};

export default bruktbiler;
