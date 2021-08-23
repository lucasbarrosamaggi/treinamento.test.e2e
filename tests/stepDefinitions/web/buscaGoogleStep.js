/**
 * File: buscaGoogleStep.js
 * Author: Fernanda Ferreira
 * Date: 09/08/2020
 */
const { Given, When, Then } = require('cucumber');
const HomePage = require('../../pages/web/homePage');
const ResultadoPage = require('../../pages/web/resultadoPage');

const homePage = new HomePage();
const resultadoPage = new ResultadoPage();

Given(/^estou na página de busca do google$/, () => {
    homePage.open();
    homePage.validaHomeGoogle();
});

When(/^informo o framework desejado "([^"]*)"$/, (framework) => {
    homePage.informaDadosPesquisa(framework);
    homePage.pesquisarClick();
});

Then(/^visualizo o Feedback do google sobre a pesquisa "([^"]*)"$/, (feedback) => {
    resultadoPage.validaResultadoPesquisa(feedback);
});