/* eslint strict: 0 */
'use strict';
const fs = require('fs');
const gamePath = require('./gamePath');

module.exports = {
  get: () => {
    const getTelemetry = new Promise((resolve, reject) => {
      fs.readFile(gamePath.get() + '/liveDataTelemetryOutput.txt', 'utf8', (telemetryError, telemetryData) => {
        if (telemetryError) {
          reject(telemetryError);
        }
        resolve(telemetryData);
      });
    }).then((data) => {
      try {
        return JSON.parse(data);
      } catch (e) {
        return {};
      }
    });

    const getScoring = new Promise((resolve, reject) => {
      fs.readFile(gamePath.get() + '/liveDataScoringOutput.txt', 'utf8', (scoringError, scoringData) => {
        if (scoringError) {
          reject(scoringError);
        }
        resolve(scoringData);
      });
    }).then((data) => {
      try {
        return JSON.parse(data);
      } catch (e) {
        return {};
      }
    });

    return Promise.all([getTelemetry, getScoring]);
  }
};
