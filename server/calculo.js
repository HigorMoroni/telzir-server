const calculo = ({ dddOrigem, dddDestino, tempoLigacao, plano }) =>  {
  let tempoReal = Number(tempoLigacao) - Number(plano);
  if (tempoReal < 0) tempoReal = 0;
  const tarifaMinuto = [];
  tarifaMinuto[16] = 1.9;
  tarifaMinuto[17] = 1.7;
  tarifaMinuto[18] = 0.9;
  const minutoDestino = tarifaMinuto[dddDestino];
  const minutoOrigem = tarifaMinuto[dddOrigem]+1;
  let comFaleMais = 0;
  let semFaleMais = 0;
  if (dddOrigem === '11') {
    comFaleMais = (minutoDestino + (minutoDestino * 0.1)) * tempoReal;
    semFaleMais = minutoDestino * tempoLigacao;
  } else {
    comFaleMais = (minutoOrigem + (minutoOrigem * 0.1)) * tempoReal;
    semFaleMais = minutoOrigem * tempoLigacao;
  }
  return [comFaleMais,semFaleMais];
}

module.exports = calculo;