const express = require('express');
const cors = require('cors');
const calculo = require('./calculo');


const app = express();

app.use(cors());
app.use(express.json());

app.post('/simulation', (request, response) => {
  const data = request.body;
  const resposta = calculo(data);
  return response.json(resposta);
})

app.listen(process.env.PORT || 3333);