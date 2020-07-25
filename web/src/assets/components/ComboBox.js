import React, {useState, useEffect} from 'react';
import { TextField, CircularProgress } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

const ComboBox = ({ estilo, set }) => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const loading = open && options.length === 0;
  const classes = estilo;

  useEffect(() => {
    let active = true;
    if (!loading) return undefined;

    (async () => {
      const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/regioes/3/municipios');
      const cities = await response.json();
      if (active) {
        setOptions(cities.map(city => ({name: `${city.nome} / ${city.microrregiao.mesorregiao.UF.sigla}`})));
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <Autocomplete
      id="combo-box"
      className={classes.comboBox}
      open={open}
      noOptionsText="Cidade não encontrada"
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      onChange={(event) => set(event.target.innerText)}
      getOptionSelected={(option, value) => option.name === value.name}
      getOptionLabel={(option) => option.name}
      options={options}
      loading={loading}
      loadingText="Carregando..."
      renderInput={(params) => (
        <TextField
          {...params}
          label="Digite sua cidade"
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
}

export default ComboBox;