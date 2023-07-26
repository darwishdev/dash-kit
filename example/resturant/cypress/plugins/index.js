const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin');
const { addVideoRecorderPlugin } = require('cypress-video');

module.exports = (on, config) => {
  addMatchImageSnapshotPlugin(on, config);
  addVideoRecorderPlugin(on, config);
};