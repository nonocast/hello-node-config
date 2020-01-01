require('dotenv').config();
const config = require('config');
const debug = require('debug')('app');

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'development';
}

debug(process.env.NODE_ENV);
debug(config.get('msg'));

debug(process.env.DB_USER);
debug(process.env.DB_PASS);