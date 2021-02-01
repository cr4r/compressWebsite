const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const app = express();

const shouldCompress = (req, res) => {
  if (req.headers['x-no-compression']) {
    return false
  }
  return compression.filter(req, res);
}

app.use(compression({
  filter: shouldCompress,
  level: 7,
}));

app.use(bodyParser.json());

app.get('/', (req, res) => {
  const foo = 'goyang mama muda';
  res.send(foo.repeat(1200));
});
app.listen(1200);
