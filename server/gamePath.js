/* eslint strict: 0 */
'use strict';

const dialog = require('electron').dialog;
const config = require('./config');
let gamePath = config.get('gamePath') || null;

module.exports = {
  set: (event) => {
    dialog.showOpenDialog({
      title: 'rFactor path',
      properties: ['openDirectory']
    }, (fileNames) => {
      gamePath = fileNames[0];
      config.set({gamePath: gamePath});
      event.sender.send('setGamePath', {
        gamePath: gamePath
      });
    });
  },
  get: () => {
    return gamePath;
  }
};
