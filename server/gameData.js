/* eslint strict: 0 */
'use strict';
const fs = require('fs');
const merge = require('merge');
const gamePath = require('./gamePath').get();

module.exports = {
  get: (event) => {
    fs.readFile(gamePath + 'ExampleInternalsTelemetryOutput.txt', 'utf8', (telemetryError, telemetryData) => {
      let result = {};
      try {
        result = JSON.parse(telemetryData);
      } catch (e) {
        // Do nothing
      }
      fs.readFile(gamePath + 'ExampleInternalsScoringOutput.txt', 'utf8', (scoringError, scoringData) => {
        try {
          result = merge(result, JSON.parse(scoringData));
          event.sender.send('getGameData', result);
        } catch (e) {
          event.sender.send('getGameData', {
            error: 'Wrong data format in rFactor plugin file',
            e: e
          });
        }
      });
    });
  }
};
