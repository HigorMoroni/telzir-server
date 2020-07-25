import React from 'react';
import {
  TableContainer, 
  Button, 
  Grid, 
  Paper, 
  Table, 
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from '@material-ui/core';

const SimulationResult = ({ back, values, estilo }) => {
  const classes = estilo;

  const anterior = (e) => {
    e.preventDefault();
    back();
  }

  return (
    <Grid container spacing={4} className={classes.form}>
      <Grid item xs={8} style={{marginLeft: '16%'}}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="caption table">
            <caption style={{textAlign:"center"}}>
              {`Uma economia de ${Math.round(((values.comFaleMais/values.semFaleMais-1)*(-100)))}% com o FaleMais`}
            </caption>
            <TableHead 
              style={{
                backgroundColor: values.plano === '30' ?'#26acdf' : 
                values.plano === '60' ? '#f9b233' : '#e02e30',
              }}>
              <TableRow>
                <TableCell 
                  colSpan={2}
                  align="center"
                  style={{
                    fontSize: 24,
                    color: 'white'
                  }}
                >
                  FaleMais {values.plano}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">DDD de Origem</TableCell>
                <TableCell align="right">{values.dddOrigem}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">DDD de Destino</TableCell>
                <TableCell align="right">{values.dddDestino}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">Duração da Chamada</TableCell>
                <TableCell align="right">{values.tempoLigacao} Minutos</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">Plano Escolhido</TableCell>
                <TableCell align="right">FaleMais {values.plano}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">Com FaleMais: </TableCell>
                <TableCell align="right">{values.comFaleMais}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">Sem FaleMais: </TableCell>
                <TableCell align="right">{values.semFaleMais}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Button
          onClick={(e) => anterior(e)}
          color="primary"
          variant="contained"
          className={classes.buttonForm}
        >
          Refazer
        </Button>
    </Grid>
  )
}

export default SimulationResult;