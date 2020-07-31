const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const helmet = require('helmet');

const app = express();
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line
  require('dotenv').config({ path: 'server/config/variables.env' });
  const cors = require('cors');
  app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
}

// routes
app.use('/', require('./routes'));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log('server run'));
