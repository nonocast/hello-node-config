require('dotenv').config({ path: '.env.test' });
const config = require('config');
const debug = require('debug')('app');

debug(process.env.NODE_ENV);
debug(config.get('msg'));

debug(process.env.DB_USER);
debug(process.env.DB_PASS);