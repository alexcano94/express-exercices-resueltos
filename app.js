const express = require('express');
const app = express();
const port = 8000;
app.use(express.json());

const calculadora = require('./src/routes/calculadora');
const listado = require('./src/routes/listado');
const texto = require('./src/routes/texto');

app.use('/calculadora', calculadora);
app.use('/listado', listado);
app.use('/text', texto);

app.listen(port, '', () => {
  console.log(`The app is running on port ${port}!`);
});
