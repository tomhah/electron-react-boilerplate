/* eslint strict: 0 */
'use strict';

const os = require('os');
const ifaces = os.networkInterfaces();

module.exports = {
  get: (event) => {
    let serverIP = 'No local IP found';
    Object.keys(ifaces).forEach((ifname) => {
      let alias = 0;

      ifaces[ifname].forEach((iface) => {
        if (iface.family !== 'IPv4' || iface.internal !== false) {
          // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
          return;
        }

        if (alias >= 1) {
          serverIP = iface.address; // TODO: Handle more IPs
          // console.log(ifname + ':' + alias, iface.address);
        } else {
          // this interface has only one ipv4 adress
          serverIP = iface.address;
        }
        ++alias;
      });
    });
    event.sender.send('getServerIP', {
      serverIP: serverIP
    });
  }
};
