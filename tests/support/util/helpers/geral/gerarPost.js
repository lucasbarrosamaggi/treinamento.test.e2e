/**
 * Arquivo: gerarPost.js
 * Data: 15/07/2020
 * Author: Fernanda Ferreira
 */

let { sample } = require('underscore');
let produto = require('../dados/produto/produto.json');

class GerarPost {

    geraAleatorio() {
        var aleatorio = '0123456789';
        var sufixo = '';
        var tamanho = 3;
        for (var i = 0; i < tamanho; i++) {
            var rnum = Math.floor(Math.random() * aleatorio.length);
            sufixo += aleatorio.substring(rnum, rnum + 1);
        }
        return sufixo;
    }

    geraTextPost() {
        let post;
        post = sample(produto).split(' ')[0];
        return ("Esta plantação irá gerar um(a) excelente "+post + " " + this.geraAleatorio());
    }
}
module.exports = GerarPost;