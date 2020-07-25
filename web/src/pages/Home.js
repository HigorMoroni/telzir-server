import React from 'react';
import { CssBaseline, Container, Typography, CardContent, Card } from '@material-ui/core';

import Menu from '../assets/components/Menu';
import Cards from '../assets/components/Cards';
import Simulation from '../assets/components/Simulation/Simulation';
import WhatsAppButton from '../assets/components/WhatssAppButton';

import useStyles from '../assets/styles/useStyles';

import cincoG from '../assets/images/5G.jpg';
import Logo from '../assets/images/falemais-logo.png';

const Home = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Menu estilo={{ ...classes }}/>
      <img
        className={classes.banner}
        src={cincoG}
        alt="5G"
      />
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        TEXTO
      </Container>
      <Container id="falemais" maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography align="center">
          <img src={Logo} alt="Telzir" style={{width: '75%'}}/>
        </Typography>
        <br/>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          A Telzir Telecon está lançando o FaleMais da Telzir, um plano com franquia mensal para você
          fazer seu DDD sem precisar pensar na conta.
          Com o FaleMais da Telzir você pode falar de graça muitos minutos de acordo com seu plano e só
          paga pelos minutos excedentes*.
        </Typography>
        <Typography
          style={{fontSize: 12, float: 'right'}}
          color="textSecondary"
          component="span"
        >
          *Os minutos excedentes tem um acréscimo de 10% sobre a tarifa normal do minuto.
        </Typography>
      </Container>
      <Cards estilo={{ ...classes }} />
      <Container id="simulation" maxWidth="md" component="main" className={classes.simulation}>
        <Card>
          <CardContent>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Simulador FaleMais Telzir
            </Typography>
            <Typography
              variant="h5"
              align="center"
              style={{marginBottom: 30}}
              color="textSecondary"
              component="p"
            >
              Simule o custo das suas ligações de longa distancia com o FaleMais da Telzir
            </Typography>
            <Simulation estilo={{ ...classes }} />
          </CardContent>
        </Card>
      </Container>
      <WhatsAppButton estilo={{ ...classes }} />
    </React.Fragment>
  );
}

export default Home;