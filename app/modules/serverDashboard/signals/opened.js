import copy from 'cerebral-addons/copy';
import getServerIP from '../actions/getServerIP';
import getStoredGamePath from '../actions/getStoredGamePath';

export default [
  getServerIP, {
    success: [copy('input:/serverIP', 'state:/serverDashboard.serverIP')]
  },
  getStoredGamePath, {
    success: [copy('input:/gamePath', 'state:/serverDashboard.gamePath')]
  }
];
