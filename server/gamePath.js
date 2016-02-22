/* eslint strict: 0 */
'use strict';

const dialog = require('electron').dialog;
let gamePath = null;

module.exports = {
  set: (event) => {
    dialog.showOpenDialog({
      title: 'rFactor path',
      properties: ['openDirectory']
    }, (fileNames) => {
      gamePath = fileNames[0];
      event.sender.send('setGamePath', {
        gamePath: fileNames[0]
      });
    });
  },
  get: () => {
    return gamePath;
  }
};
