import React from 'react';
import { makeStyles } from '@material-ui/core';
import HeaderComponent from '../HeaderComponent';
import FooterComponent from '../FooterComponent';
import CarPartsContent from './CarPartsContent';

const useStyles = makeStyles((theme) => ({}));
const BildelerStartPage = () => {
  const classes = useStyles();
  return (
    <div>
      <HeaderComponent />
      <CarPartsContent />
      <FooterComponent />
    </div>
  );
};

export default BildelerStartPage;
