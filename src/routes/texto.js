const router = require('express').Router();
const texto = `Retro crucifix enamel pin normcore sartorial seitan DIY adipisicing consectetur
ipsum nulla vexillologist cillum. Scenester tattooed lumbersexual green juice, bitters
qui fixie. Tacos consectetur post-ironic, cred before they sold out skateboard coloring
book biodiesel. Drinking vinegar officia blog, exercitation nulla qui raclette vape irure.
Aesthetic ad shoreditch put a bird on it gentrify dolor shabby chic you probably
haven't heard of them helvetica farm-to-table blue bottle kitsch.`;

router.get('/greetings', (req, res, next) => {
  res.json({ messsage: 'Hello!' });
});

router.post('/greetings', (req, res, next) => {
  const { name } = req.body;
  if (typeof name !== 'string') {
    res.status(400).json({ message: 'Formato incorrecto' });
  }

  res.json({ messsage: `Hello ${name}!` });
});

router.post('/search', (req, res, next) => {
  const { search } = req.body;
  if (typeof search !== 'string' || search.length < 5) {
    res.status(400).json({ message: 'Formato incorrecto' });
  }

  res.json(texto.includes(search));
});

router.get('/slice/:position', (req, res, next) => {
  const { position } = req.params;
  if (texto.length < position || position < 0) {
    res.status(400).json({ message: 'Formato incorrecto' });
  }

  res.json(texto.slice(position));
});


module.exports = router;