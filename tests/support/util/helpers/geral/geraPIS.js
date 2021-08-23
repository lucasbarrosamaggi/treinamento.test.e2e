/**
 * Arquivo: geraPIS.ts
 * Data: 09/11/2018
 * Author: Fernanda Ferreira
 */

const fs = require('fs');
let path = require('path');
let pisGravado, data, toFile, stringFile;

class GeraPIS {

    geraPISAleatorio() {
        var aleatorio = '0123456789';
        var pis = '';
        var tamanho = 11;
        for (var i = 0; i < tamanho; i++) {
            var rnum = Math.floor(Math.random() * aleatorio.length);
            pis += aleatorio.substring(rnum, rnum + 1);
        }

        pisGravado = {
            pisG: pis
        };

        data = JSON.stringify(pisGravado);
        toFile = path.join(__dirname, '../../support/util/helpers/gravados/pis.json');
        stringFile = toFile.toString();
        fs.writeFile(stringFile, data, (err) => {
            if (err) throw err;
        });

        return pis;
    }

    formataPis(v) {
        v = v.replace(/\D/g, "");                                      //Remove tudo o que não é dígito
        v = v.replace(/^(\d{3})(\d)/, "$1.$2");                        //Coloca ponto entre o terceiro e o quarto dígitos
        v = v.replace(/^(\d{3})\.(\d{5})(\d)/, "$1.$2.$3");            //Coloca ponto entre o quinto e o sexto dígitos
        v = v.replace(/(\d{3})\.(\d{5})\.(\d{2})(\d)/, "$1.$2.$3-$4"); //Coloca traço entre o décimo e o décimo primeiro dígitos
        return v;
    }
}
module.exports = GeraPIS;