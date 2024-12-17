const path = require('path');

module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'local',
      providerOptions: {
        sizeLimit: 100000000,  // Max. Dateigröße
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
    // Custom Verzeichnis für Railway
    folderPath: path.join('/mnt/data/uploads'),
  },
});