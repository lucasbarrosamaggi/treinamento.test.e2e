/**
 * Arquivo: recuperaUrl.ts
 * Data: 18/09/2019
 * Author: Fernanda Ferreira
 */

const fs = require('fs');
let path = require('path');

let idViagemGravado, data, toFile, stringFile, id, idViagem;

class RecuperaUrl {

    IdViagem(urlViagem) {

        var tamanho = urlViagem.length;

        if (tamanho > 80) {

            id = urlViagem.slice(64);

        } else {
            if (tamanho < 76) {

                id = urlViagem.slice(56);


            } else {
                id = urlViagem.slice(58);
            }
        }

        idViagemGravado = {
            id_viagem: id
        };

        data = JSON.stringify(idViagemGravado);
        toFile = path.join(__dirname, '../gravados/idViagem.json');
        stringFile = toFile.toString();
        fs.writeFile(stringFile, data, (err) => {
            if (err) throw err;
        });

        return id;
    }
}
module.exports = RecuperaUrl;