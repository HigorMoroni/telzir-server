import React, { useState } from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import { Box, Button, CssBaseline, Collapse, IconButton } from '@material-ui/core';
import { Save as SaveIcon, Close as CloseIcon } from '@material-ui/icons';
import { Alert } from '@material-ui/lab';

import ComboBox from '../assets/components/ComboBox';

import useStyles from '../assets/styles/useStyles';

import Logo from '../assets/images/telzir-logo.png';

const Splash = () => {
  const classes = useStyles();

  const [selectedCity, setSelectedCity] = useState('');
  const [alerta, setAlerta] = useState(false);

  const handleSubmit = (event) => {
    const city = selectedCity;
    if (city.length < 1) {
      event.preventDefault();
      setAlerta(true);
    }
    localStorage.setItem('@telzir-app/city', city);
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Collapse in={alerta}>
        <Alert severity="error" action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
              setAlerta(false);
            }}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }>
            Digite uma cidade para continuar
        </Alert>
      </Collapse>
      <Box className={classes.splash}>
        <img src={Logo} alt="Logo" className={classes.logoSplash}/>
        <ComboBox
          estilo={{...classes}}
          set={setSelectedCity.bind(this)}
        />
        
        <LinkRouter to="/" onClick={(event) => handleSubmit(event)}>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            size="large"
            startIcon={<SaveIcon />}
          >
            Salvar Meu Local
          </Button>
        </LinkRouter>
      </Box>
    </React.Fragment>
  );
}

export default Splash;