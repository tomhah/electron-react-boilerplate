import setGamePath from '../actions/setGamePath';
import copy from 'cerebral-addons/copy';

export default [
  setGamePath, {
    success: [
      copy('input:/gamePath', 'state:/serverDashboard.gamePath')
    ],
    error: []
  }
];
