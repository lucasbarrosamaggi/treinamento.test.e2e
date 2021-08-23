/**
 * Arquivo: gerarLocais.ts
 * Data: 07/01/2019
 * Author: Fernanda Ferreira
 */

let { sample } = require('underscore');
let primeiroLocalCompl = require('../util/helpers/dados/localizacao/complemento');
let segundoLocalBairro = require('../util/helpers/dados/localizacao/bairro');

class GerarLocal {

    geraPrimeiroLocal() {
        let primeiroLocal;
        let localDoMeio;
        primeiroLocal = sample(primeiroLocalCompl).split(' ')[0];
        localDoMeio = sample(primeiroLocalCompl).split(' ')[0];
        var primeiroMeioLocal = [primeiroLocal, localDoMeio].join(' ');
        return primeiroMeioLocal;
    }

    geraSegundoLocal() {
        let segundoLocal;
        segundoLocal = sample(segundoLocalBairro).split(' ')[0];
        return segundoLocal;
    }

    geraLocalCompleto() {
        var localCompleto;
        localCompleto = (GeraLocais.geraPrimeiroLocal() + " " + GeraLocais.geraSegundoLocal());
        return localCompleto;
    }
}
module.exports = GerarLocal;