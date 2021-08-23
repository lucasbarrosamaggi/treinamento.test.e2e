const { config: common } = require('./local.conf');

exports.config = Object.assign(common, {
  // If you have trouble getting all important capabilities together, check out the
  // Sauce Labs platform configurator - a great tool to configure your capabilities:
  // https://docs.saucelabs.com/reference/platforms-configurator
  //
  capabilities: [{
    browserName: 'chrome',
    'cjson:metadata': {
      browser: {
        name: 'chrome',
      },
      device: 'MacBook Pro',
      platform: {
        name: 'OSX',
        version: '10.15.5',
      },
    },
    acceptInsecureCerts: true,
    'goog:chromeOptions': {
      // to run chrome headless the following flags are required
      // (see https://developers.google.com/web/updates/2017/04/headless-chrome)
      args: [
        '--headless',
        '--disable-gpu',
        '--no-sandbox',
        '--disable-dev-shm-usage'
        // '--disable-software-rasterizer',
      ],
    },
  }],

  // Test runner services
  // Services take over a specific job you don't want to take care of. They enhance
  // your test setup with almost no effort. Unlike plugins, they don't add new
  // commands. Instead, they hook themselves up into the test process.
  services: ['devtools', 'chromedriver'],
  maxInstances: 5,

  logLevel: 'silent',
  waitforTimeout: 60000,
  // logs
  // chromeDriverLogs: common.outputDir
});
