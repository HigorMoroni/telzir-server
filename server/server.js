const express = require('express');
const cors = require('cors');


const app = express();

app.use(cors());
app.use(express.json());

app.post('/simulation', (request, response) => {
  const data = request.body;
  let comFaleMais = 0;
  let semFaleMais = 0;
  console.log(data)
  const calculo = ({ dddOrigem, dddDestino, tempoLigacao, plano }) =>  {
    let tempoReal = Number(tempoLigacao) - Number(plano);
    if (tempoReal < 0) tempoReal = 0;
    const tarifaMinuto = [];
    tarifaMinuto[16] = 1.9;
    tarifaMinuto[17] = 1.7;
    tarifaMinuto[18] = 0.9;
    const minutoDestino = tarifaMinuto[dddDestino];
    const minutoOrigem = tarifaMinuto[dddOrigem]+1;
    if (dddOrigem === '11') {
      comFaleMais = (minutoDestino + (minutoDestino * 0.1)) * tempoReal;
      semFaleMais = minutoDestino * tempoLigacao;
    } else {
      comFaleMais = (minutoOrigem + (minutoOrigem * 0.1)) * tempoReal;
      semFaleMais = minutoOrigem * tempoLigacao;
    }
    return [comFaleMais,semFaleMais];
  }
  const resposta = calculo(data);
  return response.json(resposta);
})

app.listen(3333, () => {
  console.log('Servidor rodando em http://localhost:3333')
})