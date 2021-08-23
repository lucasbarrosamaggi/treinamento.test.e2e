const { join } = require('path');

const { config: common } = require('./local.conf');

exports.config = Object.assign(common, {

  // Test runner services
  // Services take over a specific job you don't want to take care of. They enhance
  // your test setup with almost no effort. Unlike plugins, they don't add new
  // commands. Instead, they hook themselves up into the test process.
  sync: true,
  logLevel: 'silent',
  coloredLogs: true,
  // screenshotPath: './support/errorShots/',
  deprecationWarnings: true,

  services: [
    ['selenium-standalone', 'image-comparison',
      // The options
      {
        // Some options, see the docs for more
        baselineFolder: join(process.cwd(), './tests/screenshots/baseline/'),
        formatImageName: '{tag}-{logName}-{width}x{height}',
        screenshotPath: join(process.cwd(), './tests/screenshots/'),
        savePerInstance: true,
        autoSaveBaseline: true,
        blockOutStatusBar: true,
        blockOutToolBar: true,
        // NOTE: When you are testing a hybrid app please use this setting
        // isHybridApp: true,
        // Options for the tabbing image
        // tabbableOptions: {
        //   circle: {
        //     size: 18,
        //     fontSize: 18,
        //     // ...
        //   },
        //   line: {
        //     color: '#ff221a', // hex-code or for example words like `red|black|green`
        //     width: 3,
        //   },
        // }
      }],
  ],
  maxInstances: 1,
});
