const router = require('express').Router();

router.post('/suma', (req, res, next) => {
  const { a, b } = req.body;

  if (typeof a !== 'number' || typeof b !== 'number') {
    res.status(400).json({ message: "Formato incorrecto" });
  }
  res.json({ suma: a + b });
});

router.post('/porcentaje', (req, res, next) => {
  const { percentage, x } = req.body;

  if (typeof percentage !== 'number' || typeof x !== 'number') {
    res.status(400).json({ message: "Formato incorrecto" });
  }

  res.json({ percentage: x * percentage / 100 });
});

const restaLista = (lista) => {
  let valor = 0;
  lista.forEach(numero => {
    if (valor === 0) {
      valor += numero;
    } else {
      valor -= numero;
    }
  });
  return valor;
}

const multLista = (lista) => {
  let valor = 0;
  lista.forEach(numero => {
    if (valor === 0) {
      valor += numero;
    } else {
      valor *= numero;
    }
  });
  return valor;
}

const divLista = (lista) => {
  let valor = 0;
  lista.forEach(numero => {
    if (valor === 0) {
      valor += numero;
    } else {
      valor = valor / numero;
    }
  });
  return valor;
}


router.post('/opera', (req, res, next) => {
  const { operator, numbers } = req.body;
  const error = numbers.some(number => typeof number !== 'number');
  if (error) {
    res.status(400).json({ message: "Formato incorrecto" });
  }
  let valor = 0;
  switch (operator) {
    case '+':
      valor = numbers.reduce((number, valor) => valor + number);
      break;
    case '-':
      valor = restaLista(numbers);
      break;
    case '*':
      valor = multLista(numbers);
      break;
    case '/':
      valor = divLista(numbers);
      break;
  }
  
  res.json({ valor });
});

module.exports = router;