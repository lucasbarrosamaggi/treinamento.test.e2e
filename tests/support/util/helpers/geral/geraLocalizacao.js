/**
 * Arquivo: geraLocalizacao.ts
 * Data: 13/11/2018
 * Author: Fernanda Ferreira
 */

let { sample } = require('underscore');
let logradouro = require('../util/helpers/dados/localizacao/logradouro');
let bairro = require('../util/helpers/dados/localizacao/bairro');
let complemento = require('../util/helpers/dados/localizacao/complemento');
const fs = require('fs');
let path = require('path');
let logradGravado, bairroGravado, complementoGravado, numeroGravado, pontoRefGravado, data, toFile, stringFile;

class GeraLocalizacao {

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

    geraNumero() {
        var aleatorio = '0123456789';
        var sufixo = '';
        var tamanho = 3;
        for (var i = 0; i < tamanho; i++) {
            var rnum = Math.floor(Math.random() * aleatorio.length);
            sufixo += aleatorio.substring(rnum, rnum + 1);
        }

        numeroGravado = {
            nrG: sufixo
        };

        data = JSON.stringify(numeroGravado);
        toFile = path.join(__dirname, '../../support/util/helpers/gravados/numero.json');
        stringFile = toFile.toString();
        fs.writeFile(stringFile, data, (err) => {
            if (err) throw err;
        });

        return sufixo;
    }

    geraLogradouro() {
        let lograd;
        lograd = sample(logradouro).split(' ')[0];

        logradGravado = {
            logradG: lograd
        };

        data = JSON.stringify(logradGravado);
        toFile = path.join(__dirname, '../../support/util/helpers/gravados/logradouro.json');
        stringFile = toFile.toString();
        fs.writeFile(stringFile, data, (err) => {
            if (err) throw err;
        });

        return lograd;
    }

    geraBairro() {
        let bairr;
        bairr = sample(bairro).split(' ')[0];

        bairroGravado = {
            bairroG: bairr
        };

        data = JSON.stringify(bairroGravado);
        toFile = path.join(__dirname, '../../support/util/helpers/gravados/bairro.json');
        stringFile = toFile.toString();
        fs.writeFile(stringFile, data, (err) => {
            if (err) throw err;
        });

        return bairr;
    }

    geraComplemento() {
        let comp;
        comp = sample(complemento).split(' ')[0];
        var comple = comp+" "+(this.geraAleatorio());

        complementoGravado = {
            compleG: comple
        };

        data = JSON.stringify(complementoGravado);
        toFile = path.join(__dirname, '../../support/util/helpers/gravados/complemento.json');
        stringFile = toFile.toString();
        fs.writeFile(stringFile, data, (err) => {
            if (err) throw err;
        });

        return comple;
    }

    geraPontoReferencia() {
        let pontoRef;
        pontoRef = sample(complemento).split(' ')[0];
        var pontoRefe = "Próximo ao "+pontoRef+" "+(this.geraAleatorio());

        pontoRefGravado = {
            pontoRefG: pontoRefe
        };

        data = JSON.stringify(pontoRefGravado);
        toFile = path.join(__dirname, '../../support/util/helpers/gravados/pontoRef.json');
        stringFile = toFile.toString();
        fs.writeFile(stringFile, data, (err) => {
            if (err) throw err;
        });

        return pontoRefe;
    }
}
module.exports = GeraLocalizacao;