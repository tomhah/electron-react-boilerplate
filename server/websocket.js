/* eslint strict: 0 */
'use strict';
let wss = null;

module.exports = {
  broadcast: (url, data) => {
    wss.clients.forEach((client) => {
      client.send(JSON.stringify({
        message: url,
        data
      }));
    });
  },
  initialize: (wsObject) => {
    wss = wsObject;
  }
};
