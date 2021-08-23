/**
 * File: resultadoPage.js
 * Autor: Fernanda Ferreira
 * Data: 09/08/2020
 */
 const expect = require('chai').expect;
 
 class ResultadoPage {
     // define os elementos
     get feedbackLbl() { return $('div#rhs h2 > span') }
 
     //Metodos dos elementos de ação
     validaResultadoPesquisa(feedback){
         this.feedbackLbl.waitForDisplayed(); 
         expect(this.feedbackLbl.getText()).to.equal(feedback);
     }
 }
 
 module.exports = ResultadoPage;