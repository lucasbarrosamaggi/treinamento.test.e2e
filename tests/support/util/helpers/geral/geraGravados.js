/**
 * Arquivo: geraGravados.ts
 * Data: 10/07/2019
 * Author: Fernanda Ferreira
 */

const fs = require('fs');
let path = require('path');
let data, toFile, stringFile, cpfGravado;

class GeraGravados {

    gravaCPF(cpf) {

        cpfGravado = {
            cpfG: cpf
        };

        data = JSON.stringify(cpfGravado);
        toFile = path.join(__dirname, '../gravados/exemplo.json');
        stringFile = toFile.toString();
        fs.writeFile(stringFile, data, (err) => {
            if (err) throw err;
        });
    }
}
module.exports = GeraGravados;