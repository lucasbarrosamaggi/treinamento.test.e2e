/**
 * Arquivo: geraPlaca.ts
 * Data: 06/11/2018
 * Data Atualização: 14/02/19
 * Author: Fernanda Ferreira
 */

const fs = require('fs');
let path = require('path');

let placaGravada, data, toFile, stringFile;

class GeraPlaca {

    letraAleatoria() {
        var letras = 'ABCDEFGHIJKLMNOPQRSTUVWXTZ';
        var aleatorio = '';
        var tamanho = 3;
        for (var i = 0; i < tamanho; i++) {
            var rnum = Math.floor(Math.random() * letras.length);
            aleatorio += letras.substring(rnum, rnum + 1);
        }

        return aleatorio;
    }

    letraAleatoriaMercosul() {
        var letras = 'ABCDEFGHIJKLMNOPQRSTUVWXTZ';
        var aleatorioMercosul = '';
        var tamanho = 1;
        for (var i = 0; i < tamanho; i++) {
            var rnum = Math.floor(Math.random() * letras.length);
            aleatorioMercosul += letras.substring(rnum, rnum + 1);
        }

        return aleatorioMercosul;
    }

    geraRandon(n) {
        var ranNum = Math.round(Math.random() * n);

        return ranNum;
    }

    geraNumeroPlaca() {
        var n = Math.round(Math.random() * 9 + 0); // Gera nr entre 9 e 1
        var n1 = this.geraRandon(n);
        var n2 = this.geraRandon(n);
        var n3 = this.geraRandon(n);

        return '' + n + n1 + n2 + n3;
    }

    geraNumeroPlacaMercosul() {
        var n = Math.round(Math.random() * 9 + 0); // Gera nr entre 9 e 1

        return '' + n;
    }

    geraNumeroPlacaMercosul2() {
        var n = Math.round(Math.random() * 9 + 0); // Gera nr entre 9 e 1
        var n1 = this.geraRandon(n);

        return '' + n + n1;
    }

    geraPlacaCompleta() {
        var placaCompleta = GeraPlaca.letraAleatoria() + GeraPlaca.geraNumeroPlaca();

        placaGravada = {
            placaG: placaCompleta
        };

        data = JSON.stringify(placaGravada);
        toFile = path.join(__dirname, '../../support/util/helpers/gravados/placa.json');
        stringFile = toFile.toString();
        fs.writeFile(stringFile, data, (err) => {
            if (err) throw err;
        });

        return placaCompleta;
    }

    geraPlacaCompletaMercosul() {
        var placaCompletaMercosul = GeraPlaca.letraAleatoria() + GeraPlaca.geraNumeroPlacaMercosul() + GeraPlaca.letraAleatoriaMercosul() + GeraPlaca.geraNumeroPlacaMercosul2();

        placaGravada = {
            placaG: placaCompletaMercosul
        };

        data = JSON.stringify(placaGravada);
        toFile = path.join(__dirname, '../../support/util/helpers/gravados/placa.json');
        stringFile = toFile.toString();
        fs.writeFile(stringFile, data, (err) => {
            if (err) throw err;
        });

        return placaCompletaMercosul;
    }

    formatar(d) {

        d = d.replace(/(.{3})(\d)/, '$1-$2');
        return d;
    }
}
module.exports = GeraPlaca;