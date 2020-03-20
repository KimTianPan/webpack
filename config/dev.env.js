'use strict';
const merge = require('webpack-merge');
const prodEnv = require('./prod.env');

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_ROOT: '"http://180.76.159.172:8090"',
  API_DEV: '"development"'
});
