/**
 * Arquivo: geraCnh.ts
 * Data: 30/10/2018
 * Author: Fernanda Ferreira
 */

const fs = require('fs');
let path = require('path');

let cnhGravado, data, toFile, stringFile;

class GeraCnh {
    // Valida número da CNH gerado
    IsValid(cnh) {
        if (cnh == null || cnh.length != 11)
            return false;

        var soma1 = 0;
        var soma2 = 0;
        var dsc = 0;
        var ultimoChar = '\0';
        var todosCharsIdenticos = true;

        for (
            var i = 0;
            i < cnh.length;
            i++) {
            var c = cnh[i];
            var e = '0';
            var d = c - e;

            if (d < 0 || d > 9)
                return false;

            if (i != 0 && ultimoChar != c)
                todosCharsIdenticos = false;

            ultimoChar = c;

            if (i < 9) {
                soma1 += d * (9 - i); // multiplicador 1
                soma2 += d * (1 + i); // multiplicador 2
            }

            if (i == 9) {
                var dv1 = soma1 % 11;
                if (dv1 > 9) {
                    dv1 = 0;
                    dsc = -2;
                }

                if (d != dv1)
                    return false;
            }

            if (i == 10) {
                if (todosCharsIdenticos)
                    return false;

                var resto = soma2 % 11;
                var restoComIncrDig2 = resto + dsc;

                var dv2 = restoComIncrDig2 < 0
                    ? 11 + resto + dsc
                    : restoComIncrDig2;

                if (dv2 > 9)
                    dv2 = 0;

                return d == dv2;
            }
        }
        return false;
    }

    //Gera numeros
    geraRandon(n) {
        var ranNum = Math.round(Math.random() * n);
        return ranNum;
    }

    //Retorna 11 caracteres gerados randomicamente
    CNH() {
        var n = Math.round(Math.random() * 9 + 0); // Gera nr entre 9 e 0
        var n1 = this.geraRandon(n);
        var n2 = this.geraRandon(n);
        var n3 = this.geraRandon(n);
        var n4 = this.geraRandon(n);
        var n5 = this.geraRandon(n);
        var n6 = this.geraRandon(n);
        var n7 = this.geraRandon(n);
        var n8 = this.geraRandon(n);
        var n9 = this.geraRandon(n);
        var n10 = this.geraRandon(n);

        return '' + n + n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + n10;
    }

    //Retorna CNH valida
    geraCnhValida() {
        do {
            var cnh = GeraCnh.CNH();
            var cond = GeraCnh.IsValid(cnh);
        } while (cond == false);

        cnhGravado = {
            cnhG: cnh
        };

        data = JSON.stringify(cnhGravado);
        toFile = path.join(__dirname, '../../support/util/helpers/gravados/cnh.json');
        stringFile = toFile.toString();
        fs.writeFile(stringFile, data, (err) => {
            if (err) throw err;
        });

        return cnh;
    }
}
module.exports = GeraCnh;