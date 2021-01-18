import React from 'react';
import { makeStyles } from '@material-ui/core';
import BildelerStartPage from '../components/bildeler/BildelerStartPage';

const useStyles = makeStyles((theme) => ({}));
const bildeler = () => {
  const classes = useStyles();
  return (
    <div>
      <BildelerStartPage />
    </div>
  );
};

export default bildeler;
