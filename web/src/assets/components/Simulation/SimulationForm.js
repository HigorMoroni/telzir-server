import React from 'react';
import { 
  TextField,
  Select, 
  MenuItem, 
  InputLabel,
  FormControl, 
  Grid, 
  Button
} from '@material-ui/core';

const SimulationForm = ({ next, change, values, estilo }) => {
  const classes = estilo;

  const proximo = (e) => {
    e.preventDefault();
    next();
  }

  return (
    <Grid container spacing={4} className={classes.form}>
      <Grid item xs={12} >
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="origem">DDD de Origem</InputLabel>
          <Select
            id="origem"
            defaultValue={values.dddOrigem}
            onChange={(e) => change(e, 'origem')}
            label="DDD de Origem"
          >
            <MenuItem value={'11'}>011</MenuItem>
            <MenuItem value={'16'}>016</MenuItem>
            <MenuItem value={'17'}>017</MenuItem>
            <MenuItem value={'18'}>018</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} >
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="destino">DDD de Destino</InputLabel>
          <Select
            id="destino"
            defaultValue={values.dddDestino}
            onChange={(e) => change(e, 'destino')}
            label="DDD de Destino"
          >
            <MenuItem value={'11'}>011</MenuItem>
            <MenuItem value={'16'}>016</MenuItem>
            <MenuItem value={'17'}>017</MenuItem>
            <MenuItem value={'18'}>018</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} >
        <TextField
          label="Tempo de ligação (em minutos)"
          type="number"
          variant="outlined"
          className={classes.formControl}
          onChange={(e) => change(e, 'tempo')}
          defaultValue={values.tempoLigacao}
        />
      </Grid>
      <Grid item xs={12} >
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="plano">Plano Escolhido</InputLabel>
          <Select
            id="plano"
            defaultValue={values.plano}
            onChange={(e) => change(e, 'plano')}
            label="Plano Escolhido"
          >
            <MenuItem value={'30'}>FaleMais 30</MenuItem>
            <MenuItem value={'60'}>FaleMais 60</MenuItem>
            <MenuItem value={'120'}>FaleMais 120</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Button
        onClick={(e) => proximo(e)}
        color="primary"
        variant="contained"
        className={classes.buttonForm}
      >
        Simular
      </Button>
    </Grid>
  )
}

export default SimulationForm;