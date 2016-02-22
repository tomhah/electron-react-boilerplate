import copy from 'cerebral-addons/copy';
import getServerIP from '../actions/getServerIP';

export default [
  getServerIP, {
    success: [
      copy('input:/serverIP', 'state:/serverDashboard.serverIP'),
    ]
  }
];
