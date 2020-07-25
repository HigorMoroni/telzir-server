import React, { useState } from 'react';
import SimulationForm from './SimulationForm';
import SimulationResult from './SimulationResult';

import api from '../../../services/api';

const Simulation = ({ estilo }) => {
  const classes = estilo;
  const [step, setStep] = useState(1);
  const [dddOrigem, setDddOrigem] = useState('');
  const [dddDestino, setDddDestino] = useState('');
  const [tempoLigacao, setTempoLigacao] = useState('');
  const [plano, setPlano] = useState('');
  const [comFaleMais, setComFaleMais] = useState(0);
  const [semFaleMais, setSemFaleMais] = useState(0);

  const values = {dddOrigem, dddDestino, tempoLigacao, plano}

  const next = async () => {
    api.post('simulation', values).then((response) => {
      const [comFaleMais, semFaleMais] = response;
      setSemFaleMais(semFaleMais);
      setComFaleMais(comFaleMais);
    });
    setStep(step + 1)
  };
  const back = () => setStep(step - 1);

  const handleChange = (e, input) => {
    switch(input) {
      case 'origem': setDddOrigem(e.target.value); break
      case 'destino': setDddDestino(e.target.value); break
      case 'tempo': setTempoLigacao(e.target.value); break
      case 'plano': setPlano(e.target.value); break
      default: break
    }
  }
  switch(step) {
    case 1:
      return <SimulationForm next={next} change={handleChange} values={values} estilo={classes} />
    case 2:
      return <SimulationResult back={back} values={{...values, comFaleMais, semFaleMais}} estilo={classes} />
    default: break
  }
}

export default Simulation;