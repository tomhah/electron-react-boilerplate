/* eslint strict: 0 */
'use strict';
const fs = require('fs');
const gamePath = require('./gamePath');

module.exports = {
  get: () => {
    const getTelemetry = new Promise((resolve, reject) => {
      fs.readFile(gamePath.get() + '/ExampleInternalsTelemetryOutput.txt', 'utf8', (telemetryError, telemetryData) => {
        if (telemetryError) {
          reject(telemetryError);
        }
        resolve(telemetryData);
      });
    }).then((data) => {
      return JSON.parse(data);
    });

    const getScoring = new Promise((resolve, reject) => {
      fs.readFile(gamePath.get() + '/ExampleInternalsScoringOutput.txt', 'utf8', (scoringError, scoringData) => {
        if (scoringError) {
          reject(scoringError);
        }
        resolve(scoringData);
      });
    }).then((data) => {
      return JSON.parse(data);
    });

    return Promise.all([getTelemetry, getScoring]);
  }
};
