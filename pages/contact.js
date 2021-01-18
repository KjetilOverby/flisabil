import React from 'react';
import { makeStyles } from '@material-ui/core';
import ContactStartPage from '../components/contact/ContactStartPage';

const useStyles = makeStyles((theme) => ({}));
const contact = () => {
  const classes = useStyles();
  return (
    <div>
      <ContactStartPage />
    </div>
  );
};

export default contact;
