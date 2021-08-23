/**
 * Arquivo: geraRG.ts
 * Data: 08/03/2019
 * Author: Fernanda Ferreira
 */

const fs = require('fs');
let path = require('path');

let rgGravado, data, toFile, stringFile;

class GeraRG {

    geraRG() {
        var aleatorio = '0123456789';
        var rg = '';
        var tamanho = 8;
        for (var i = 0; i < tamanho; i++) {
            var rnum = Math.floor(Math.random() * aleatorio.length);
            rg += aleatorio.substring(rnum, rnum + 1);
        }

        rgGravado = {
            rgG: rg
        };

        data = JSON.stringify(rgGravado);
        toFile = path.join(__dirname, '../../support/util/helpers/gravados/rg.json');
        stringFile = toFile.toString();
        fs.writeFile(stringFile, data, (err) => {
            if (err) throw err;
        });

        return rg;
    }
}

module.exports = GeraRG;