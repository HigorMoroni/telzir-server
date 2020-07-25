import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Link,
  Button,
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import { Link as LinkRoute, Redirect } from 'react-router-dom';

import Logo from '../images/telzir-logo.png';

const Menu = ({estilo}) => {
  const city = localStorage.getItem('@telzir-app/city');

  if (city === null) return <Redirect to="/localidade" />;

  const classes = estilo;
  return (
    <AppBar position="fixed" color="default" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
          <img src={Logo} alt="Telzir" className={classes.logoImage}/> 
        </Typography>
        <nav className={classes.navLinks}>
          <Link variant="button" color="textPrimary" href="#um" className={classes.link}>
            Features
          </Link>
          <Link variant="button" color="textPrimary" href="#falemais" className={classes.link}>
            FaleMais
          </Link>
          <Link variant="button" color="textPrimary" href="#tres" className={classes.link}>
            Support
          </Link>
        </nav>
        <LinkRoute to="/localidade">
          <Button color="primary" variant="contained" endIcon={<ExpandMore />} className={classes.button}>
            {city}
          </Button>
        </LinkRoute>
      </Toolbar>
    </AppBar>
  )
}

export default Menu;