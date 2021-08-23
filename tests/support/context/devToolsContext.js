/**
 * file: devToolsContext.ts
 * Author: Fernanda Ferreira
 * Date: 09/06/2020
 */
const expect = require('chai').expect;
let metrics, score;

class DevToolsContext {

    enablePerformance(enable) {
        browser.enablePerformanceAudits();
    }

    disablePerformance(disable) {
        browser.disablePerformanceAudits();
    }

    reportPerformance(report) {
        metrics = browser.getMetrics();
        score = browser.getPerformanceScore();
        console.log(browser.getMetrics());
        console.log(browser.getDiagnostics());
        console.log(browser.getMainThreadWorkBreakdown());
        // console.log("Speed Index >>>>>>>>>>>>>>>>>> " + metrics.speedIndex);
        // // expect(metrics.speedIndex).to.be.below(4.2 * 1000);
        // console.log("First Contentful Paint >>>>>>>>>>>>> " + metrics.firstContentfulPaint);
        // console.log("First CPU Idle >>>>>>>>>>>>>>>>>>>>> " + metrics.firstCPUIdle);
        console.log("Score Performance >>>>>>>>>>>>>>>>>> " + score);
        expect(score).to.be.above(0.44);
        browser.disablePerformanceAudits();
    }
}

module.exports = DevToolsContext;