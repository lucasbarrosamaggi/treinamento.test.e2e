/**
 * Arquivo: eyesTest.js
 * Data: 17/06/2020
 * Author: Fernanda Ferreira
 */
const { remote } = require('webdriverio');
const {
    Eyes,
    Target,
    ClassicRunner,
    Configuration,
    BatchInfo
} = require('@applitools/eyes-webdriverio');

class EyesTest {

    runEyesTest(driver, setAppName, informarDados, checkDados) {
        // Open a Chrome browser.
        // const chrome = {
        //     capabilities: {
        //         browserName: process.env.TEST_BROWSER_NAME, 'goog:chromeOptions': { args: ['--window-size=1800,1500'] }
        //     }
        // };

        // // // Initialize the eyes SDK
        const eyes = new Eyes(new ClassicRunner());

        try {
            const configuration = new Configuration();
            configuration.setAppName(setAppName);
            configuration.setTestName(informarDados);
            console.log("Passou de configuration.setTestName(informarDados);");

            // eyes.setApiKey('Your API Key');
            configuration.setApiKey(process.env.APPLITOOLS_API_KEY);
            eyes.setConfiguration(configuration);

            // eyes.open(browser);
            driver = eyes.open(driver);

            console.log("Passou de await eyes.open(browser)");

            // Visual checkpoint #1.
            // await eyes.check('Vamos Conversar', Target.window().fully()); // Para tela inteira
            eyes.check(checkDados, Target.region({ left: 140, top: 6000, width: 0, height: 0 }));

            console.log("Passou do Check");
            // End the test.
            const results = eyes.closeAsync(); // will return only first TestResults, but as we have two browsers, we need more result
            console.log(results);

        } catch (e) {
            console.log(`Error ${e}`);

        } finally {
            eyes.abortIfNotClosed();
        }
    }
};



// async function runEyesTest(browser, setAppName, informarDados, checkDados) {

//     // Open a Chrome browser.
//     const chrome = {
//         capabilities: {
//             browserName: process.env.TEST_BROWSER_NAME, 'goog:chromeOptions': { args: ['--window-size=1800,1500'] }
//         }
//     };
//     // // // Initialize the eyes SDK
//     const eyes = new Eyes(new ClassicRunner());

//     try {
//         const configuration = new Configuration();
//         configuration.setAppName(setAppName);
//         configuration.setTestName(informarDados);
//         console.log("Passou de configuration.setTestName(informarDados);")

//         // eyes.setApiKey('Your API Key');
//         configuration.setApiKey(process.env.APPLITOOLS_API_KEY);
//         eyes.setConfiguration(configuration);

//         browser = await eyes.open(browser);

//         console.log("Passou de await eyes.open(browser)")

//         // Visual checkpoint #1.
//         // await eyes.check('Vamos Conversar', Target.window().fully()); // Para tela inteira
//         await eyes.check(checkDados, Target.region({ left: 140, top: 6000, width: 0, height: 0 }))

//         // End the test.
//         const results = await eyes.closeAsync(); // will return only first TestResults, but as we have two browsers, we need more result
//         console.log(results);

//     } catch (e) {
//         console.log(`Error ${e}`);

//     } finally {
//         await eyes.abortIfNotClosed();
//     }
// }

module.exports = EyesTest;