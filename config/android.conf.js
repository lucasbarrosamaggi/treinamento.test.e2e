
/**
 * WebdriverIO config file to run tests on native mobile apps.
 * Config file helps us configure all the settings and setup environments 
 * to run our tests.
 */

const host = '127.0.0.1';   // default appium host
const port = 4730;          // default appium port

const waitforTimeout = 30 * 30000;
const commandTimeout = 30 * 30000;
const { generate } = require('multiple-cucumber-html-reporter');
const { FAILED } = require('wdio-cucumberjs-json-reporter/build/constants');
const cucumberJson = require('wdio-cucumberjs-json-reporter').default;
const attachmentError = `image/png`;
const dataTimeInicio = new Date();

exports.config = {
    debug: false,
    specs: [
        './tests/features/app/*.feature',
    ],

    reporters: [
        [
            'cucumberjs-json', {
                jsonFolder: './tests/reports/json',
                language: 'en',
            }
        ]
    ],

    host: host,
    port: port,

    maxInstances: 1,

    capabilities: [
        {
            noReset: true,
            appiumVersion: '1.8.1',                 // Appium module version
            browserName: '',                        // browser name is empty for native apps
            'cjson:metadata': {
                browser: {
                    name: '',
                    version: '',
                },
                device: 'Pixel 2 API 29',
                platform: {
                    name: 'Android',
                    version: '10',
                },
            },
            platformName: 'Android',
            app: './app/android/app-release.apk',          // Path to your native app
            appPackage: 'br.com.treinamento',  // Package name of your app
            appActivity: 'br.com.treinamento.MainActivity', // App activity of the app
            isHeadless: process.env.TEST_IS_HEADLESS || true,
            ignoreUnimportantViews: process.env.TEST_IGNORE_VIEWS || true,
            disableAndroidWatchers: process.env.TEST_DISABLE_WATCHERS || true,
            disableWindowAnimation: process.env.TEST_DISABLE_ANIMATION || true,
            platformVersion: '10',              // Android platform version of the device
            platformVersion: process.env.TEST_PLATFORM_VERSION, // Configurado no script do package - Android platform version of the device
            deviceName: 'emulator-5554',             // device name of the mobile device
            waitforTimeout: waitforTimeout,
            commandTimeout: commandTimeout,
            newCommandTimeout: 30 * 30000,
        }
    ],

    services: ['appium'],
    appium: {
        waitStartTime: 9000,
        waitforTimeout: waitforTimeout,
        command: 'appium',
        logPath: './tests/support/logs',
        logFileName: 'appium.log',
        args: {
            address: host,
            port: port,
            commandTimeout: commandTimeout,
            sessionOverride: true,
            debugLogSpacing: true,
        }
    },

    /**
     * test configurations
     */
    logLevel: 'info',
    screenshotPath: './tests/support/errorShots',
    coloredLogs: true,
    framework: 'cucumber',  // cucumber framework specified 
    cucumberOpts: {
        backtrace: true,
        failFast: false,
        timeout: 5 * 30 * 60000,
        tagExpression: '', // <string> (expression) only execute the features or scenarios with tags matching the expression
        require: [
            './tests/stepDefinitions/app/android/*.js',
            './tests/stepDefinitions/api/*.js',
        ]      // importing/requiring step definition files
    },

    /**
     * hooks help us execute the repeatitive and common utilities 
     * of the project.
     */
    onPrepare: function () {
        require('dotenv').config();
        console.log('<<< APP TESTS STARTED ANDROID >>>');
    },

    afterScenario: function (uri, feature, scenario, result, sourceLocation) {
        if (result.status === FAILED) {
            cucumberJson.attach(browser.takeScreenshot(), attachmentError);
        }
    },

    onComplete: function (exitCode, config, capabilities, results) {
        console.log('<<< TESTING FINISHED ANDROID >>>');
        const dataTimeFim = new Date();
        generate({
            jsonDir: './tests/reports/json',
            reportPath: './tests/reports/html',
            pageTitle: process.env.PROJECT_NAME,
            reportName: process.env.REPORT_NAME,
            pageFooter: '<div class="created-by"> <p>' + process.env.PROJECT_NAME + ' - Treinamento</p> <a href="https://www.google.com.br/" target="_blank"><i class="fa fa-rss-square fa-2x"></i></a> <a href="https://github.com/fcffc/treinamento.test.e2e/' + process.env.REPORT_NAME + '" target="_blank"><i class="fa fa-github-square fa-2x"></i></a> <a href="https://www.linkedin.com/" target="_blank"><i class="fa fa-linkedin-square fa-2x"></i></a> <a href="https://www.youtube.com/" target="_blank"><i class="fa fa-youtube-play fa-2x"></i></a> </div>',
            saveCollectedJSON: true,
            displayDuration: true,
            customData: {
                title: 'Run info',
                data: [
                    { label: 'Project', value: process.env.PROJECT_NAME },
                    { label: 'Release', value: process.env.RELEASE },
                    { label: 'Sprint', value: process.env.SPRINT_NAME },
                    { label: 'Run Start Time', value: dataTimeInicio },
                    { label: 'Run End Time', value: dataTimeFim },
                ]
            },
            openReportInBrowser: true
        });
    }
};
