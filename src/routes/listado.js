const router = require('express').Router();
const lista = ['apple', 'house', 2, 30008, 'FullstackDevelopment', 'Nuclio Digital School'];

const sortList = (list) => {
  const numbers = [];
  const listaStrings = list.filter(elem => {
    const string = typeof elem === 'string';
    if (!string) numbers.push(elem);
    return string;
  });

  const numbersSorted = numbers.sort().reverse();
  const stringsSorted = listaStrings.sort((a, b) => a.length < b.length).reverse();

  return [...numbersSorted, ...stringsSorted];
}

router.get('/', (req, res, next) => {
  res.json({ lista });
});

router.get('/sorted', (req, res, next) => {
  res.json({ lista: sortList(lista) });
});

router.patch('/substitute/:posicion', (req, res, next) => {
  const { posicion } = req.params;
  const { element } = req.body;
  if (posicion > lista.length - 1) {
    res.status(404).json({ message: 'El elemento no existe' });
  }
  lista[posicion] = element;

  res.json({ lista });
});

router.get('/:posicion', (req, res, next) => {
  console.log('entra');
  const { posicion } = req.params;
  console.log(posicion);
  if (posicion > lista.length - 1) {
    res.status(404).json({ message: 'El elemento no existe' });
  }
  res.json({ elemento: lista[posicion] });
});

module.exports = router;