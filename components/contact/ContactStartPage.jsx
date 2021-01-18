import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import FooterComponent from '../FooterComponent';
import HeaderComponent from '../HeaderComponent';
import ContactForm from '../contact/ContactForm';
import MapComponent from './MapComponent';

const useStyles = makeStyles((theme) => ({}));
const ContactStartPage = () => {
  const classes = useStyles();
  return (
    <div>
      <HeaderComponent />

      <ContactForm />

      <FooterComponent />
    </div>
  );
};

export default ContactStartPage;
