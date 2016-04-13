/* eslint strict: 0 */
'use strict';

const fs = require('fs');
const path = require('path');
const merge = require('merge');
const configFile = path.join(__dirname, 'config.json');

module.exports = {
  set: (data) => {
    const currentConfig = require('./config.json');
    fs.writeFile(configFile, JSON.stringify(merge(currentConfig, data)), (err) => {
      if (err) {
        return console.log('Config file could not be updated', err);
      }
      console.log('Config file updated!');
    });
  },
  get: (data) => {
    const currentConfig = require('./config.json');
    if (!data) {
      return currentConfig;
    }
    return currentConfig[data] || '';
  }
};
