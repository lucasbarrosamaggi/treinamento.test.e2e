const { config: common } = require('./local.conf');

exports.config = Object.assign(common, {

  // Test runner services
  // Services take over a specific job you don't want to take care of. They enhance
  // your test setup with almost no effort. Unlike plugins, they don't add new
  // commands. Instead, they hook themselves up into the test process.
  // sync: true,
  logLevel: 'trace',
  deprecationWarnings: true,

  // capabilities: [{
  //   browserName: 'chrome',
  //   acceptInsecureCerts: true,
  //   // 'goog:chromeOptions': {
  //   //   args: ['--window-size=1800,1500']
  //   // },
  // }],

  baseUrl: (process.env.BASE_URL),

  services: [
    [
      'applitools', {
        // My applitools key
        key: 'cqDwm102zk9a1071ywA976cqB3QfCf9z7yTekY9ht2Uu6WDI110',
      }
    ],
    'chromedriver'
  ],
  maxInstances: 5,
  timeout: 60000,

  onPrepare: () => {
    // Remove the `tmp/` folder that holds the json report files
    // require('dotenv').config();
    // removeSync(jsonTmpDirectory);
    // if (!fs.existsSync(jsonTmpDirectory)) {
    //     fs.mkdirSync(jsonTmpDirectory);
    // }
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
},
});
