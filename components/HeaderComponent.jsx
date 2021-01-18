import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  makeStyles,
  Tabs,
  Tab,
  useMediaQuery,
  useTheme,
  SwipeableDrawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Slide,
  useScrollTrigger,
  Menu,
  MenuItem,
  Typography,
  Grid,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Link from 'next/link';
import { useEffect } from 'react';
import logo from '../images/flisabillogo.png';
import Colors from '../config/colors';

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Header = (props) => {
  const [forsideCurrent, setForsideCurrent] = useState(Colors.MenuTabs);
  const [usedCarsCurrent, setUsedCarsCurrent] = useState(Colors.MenuTabs);
  const [carParts, setCarParts] = useState(Colors.MenuTabs);
  const [contactCurrent, setContactCurrent] = useState(Colors.MenuTabs);
  const useStyles = makeStyles((theme) => ({
    toolbarMargin: {
      ...theme.mixins.toolbar,
      marginBottom: '2em',
      [theme.breakpoints.down('md')]: {
        marginBottom: '3em',
      },
      [theme.breakpoints.down('sm')]: {
        marginBottom: '3em',
      },
      [theme.breakpoints.down('xs')]: {
        marginBottom: '3em',
      },
    },
    header: {
      height: '6rem',
      background: Colors.header,

      [theme.breakpoints.down('md')]: {
        height: '8em',
      },
      [theme.breakpoints.down('xs')]: {
        height: '7em',
      },
    },
    appbar: {
      zIndex: theme.zIndex.modal + 1,
      boxShadow: 'none',
    },
    tabContainer: {
      marginLeft: 'auto',
      '&:last-child': {
        marginRight: '2rem',
      },
    },
    tab: {
      ...theme.typography.tab,
      color: Colors.MenuTabs,
      [theme.breakpoints.down('lg')]: {
        marginLeft: '1px',
        fontSize: '0.9rem',
      },
    },
    forsideTab: {
      color: forsideCurrent,
    },
    usedCarsTab: {
      color: usedCarsCurrent,
    },
    carPartsTab: {
      color: carParts,
    },
    contactTab: {
      color: contactCurrent,
    },
    drawerIcon: {
      height: '40px',
      width: '60px;',
      color: theme.palette.secondary.main,
    },
    logo: {
      height: '2rem',
      paddingLeft: '4rem',
      [theme.breakpoints.down('lg')]: {
        height: '3em',
        paddingLeft: '4rem',
      },
      [theme.breakpoints.down('md')]: {
        height: '6em',
        paddingLeft: '1rem',
      },
      [theme.breakpoints.down('xs')]: {
        height: '3em',
        paddingLeft: '1rem',
      },
      [theme.breakpoints.down('md')]: {
        height: '3em',
      },
    },
    drawerIconContainer: {
      marginLeft: 'auto',
      '&:hover': {
        background: 'transparent',
      },
    },
    drawer: {
      background: theme.palette.primary.main,

      width: '12rem',
    },
    drawerItem: {
      ...theme.typography.tab,
      color: theme.palette.secondary.main,
      fontSize: '1.2rem',
      fontStyle: 'italic',
    },
    logoType: {
      fontFamily: 'Ruda',
      fontStyle: 'italic',
      fontSize: '2rem',
      fontWeight: 900,
      lineHeight: 0.5,
      letterSpacing: -0.6,
      color: Colors.logoBil,
    },
    logoTypeFlisa: {
      marginRight: '.5rem',
      color: Colors.logoFlisa,
    },
    underTextLogo: {
      fontSize: '.6rem',
      fontFamily: 'Ruda',
      fontStyle: 'italic',
      letterSpacing: -0.6,
      color: Colors.logoUnderText,
    },
  }));
  const classes = useStyles();
  const themes = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(themes.breakpoints.down('md'));

  const [openDrawer, setOpenDrawer] = useState(false);

  const [openMenu, setOpenMenu] = useState(false);

  const [activeTab, setActiveTab] = useState(0);

  const changeActiveTab = (e, value) => {
    setActiveTab(value);
  };

  useEffect(() => {
    if (window.location.pathname === '/') {
      setForsideCurrent(Colors.activeTab);
    } else if (
      window.location.pathname === '/bruktbiler' ||
      window.location.pathname === '/finn_bruktbiler'
    ) {
      setUsedCarsCurrent(Colors.activeTab);
    } else if (window.location.pathname === '/bildeler') {
      setCarParts(Colors.activeTab);
    } else if (window.location.pathname === '/Produkter' && activeTab !== 3) {
      setActiveTab(3);
    } else if (window.location.pathname === '/contact') {
      setContactCurrent(Colors.activeTab);
    } else if (window.location.pathname === '/stilling') {
      setActiveTab(5);
    } else if (
      window.location.pathname === '/salgsbetingelser' &&
      activeTab !== 5
    ) {
      setActiveTab(5);
    } else if (
      window.location.pathname === '/slipeservice' &&
      activeTab !== 5
    ) {
      setActiveTab(5);
    }
  }, [activeTab]);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const tabs = (
    <Tabs
      value={activeTab}
      className={classes.tabContainer}
      onChange={changeActiveTab}
      indicatorColor="primary"
    >
      <Link href="/">
        <Tab
          className={`${classes.tab} ${classes.forsideTab}`}
          label="forside"
        />
      </Link>

      <Link href="/bruktbiler">
        <Tab
          className={`${classes.tab} ${classes.usedCarsTab}`}
          label="bruktbiler"
        />
      </Link>
      <Link href="/bildeler">
        <Tab
          className={`${classes.tab} ${classes.carPartsTab}`}
          label="bildeler"
        />
      </Link>
      <Link href="https://bilxtra.no">
        <Tab className={classes.tab} label="bilxtra" />
      </Link>
      <Link href="contact">
        <Tab
          className={`${classes.tab} ${classes.contactTab}`}
          label="Kontakt oss"
        />
      </Link>
    </Tabs>
  );

  const drawer = (
    <>
      <SwipeableDrawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          <ListItem onClick={() => setOpenDrawer(false)} divider button>
            <Link href="/">
              <ListItemText className={classes.drawerItem} disableTypography>
                Hjem
              </ListItemText>
            </Link>
          </ListItem>

          <ListItem onClick={() => setOpenDrawer(false)} divider button>
            <Link href="/bruktbiler">
              <ListItemText className={classes.drawerItem} disableTypography>
                Bruktbiler
              </ListItemText>
            </Link>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)} divider button>
            <Link href="/bildeler">
              <ListItemText className={classes.drawerItem} disableTypography>
                Bildeler
              </ListItemText>
            </Link>
          </ListItem>

          <ListItem onClick={() => setOpenDrawer(false)} divider button>
            <Link href="https://bilxtra.no">
              <ListItemText className={classes.drawerItem} disableTypography>
                Bilxtra
              </ListItemText>
            </Link>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)} divider button>
            <Link href="contact">
              <ListItemText className={classes.drawerItem} disableTypography>
                Kontakt oss
              </ListItemText>
            </Link>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </>
  );

  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar position="fixed" className={classes.appbar}>
          <Toolbar className={classes.header}>
            {/* <img className={classes.logo} src={logo} /> */}
            <Grid item>
              <Grid container>
                <Grid item>
                  <Typography
                    className={`${classes.logoType} ${classes.logoTypeFlisa}`}
                  >
                    Flisa
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography className={classes.logoType}>Bil</Typography>
                </Grid>
              </Grid>
              <typography className={classes.underTextLogo}>
                62 95 19 10 - www.flisabil.no
              </typography>
            </Grid>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
};

export default Header;
