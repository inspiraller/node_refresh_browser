const express = require('express');
const bodyParser  = require('body-parser');
const morgan      = require('morgan');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.get('/', (req, res) => res.send('<html><head></head><body>Hello world!</body></html>'));
app.listen(3000, () => console.log('Example app listening on port 3000!'));
