import React from 'react';
import { makeStyles } from '@material-ui/core';
import HeaderComponent from '../HeaderComponent';
import BackgroundImage from '../startpage/BackgroundImage';
import AboutSection from './AboutSection';
import FooterComponent from '../FooterComponent';

const useStyles = makeStyles((theme) => ({}));
const StartPage = ({ setGetPathName }) => {
  const classes = useStyles();
  return (
    <div>
      <HeaderComponent />
      <BackgroundImage />
      <AboutSection />
      <FooterComponent />
    </div>
  );
};

export default StartPage;
