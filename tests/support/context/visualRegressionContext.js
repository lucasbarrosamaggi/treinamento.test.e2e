/**
 * file: visualRegressionContext.ts
 * Author: Fernanda Ferreira
 * Date: 22/06/2020
 */
const expect = require('chai').expect;
const path = require('path');
const WdioImageComparisonService = require('wdio-image-comparison-service').default;
let wdioImageComparisonService = new WdioImageComparisonService({});

class VisualRegressionContext {

    isToleranceChecked(elemento, nameImg) {
        console.log('<<< VISUAL REGRESSION TESTS STARTED >>>');
        
        const methodOptions = {// informa onde será salva as imagens
            actualFolder: path.join(process.cwd(), './tests/reports/screenshots/actual'),
            baselineFolder: path.join(process.cwd(), './tests/reports/screenshots/baseline'),
            diffFolder: path.join(process.cwd(), './tests/reports/screenshots/diff')
        };

        global.browser = browser;
        wdioImageComparisonService.defaultOptions.autoSaveBaseline = true;
        browser.defaultOptions = wdioImageComparisonService.defaultOptions;
        browser.folders = wdioImageComparisonService.folders;
        wdioImageComparisonService.before(browser.capabilities);

        // or use this for ONLY saving a screenshot
        browser.saveElement((elemento), nameImg, methodOptions, {});
        expect(browser.checkElement((elemento), nameImg, methodOptions, {})).to.equal(0);
    }
}

module.exports = VisualRegressionContext;