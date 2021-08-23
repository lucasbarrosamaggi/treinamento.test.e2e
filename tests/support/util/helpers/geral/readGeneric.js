/**
 * Arquivo: writeGeneric.ts
 * Data: 26/07/2019
 * Author: Fernanda Ferreira
 */

const fs = require('fs');
let path = require('path');
let toFile, stringFile;

class ReadGeneric {

    readExemplos() {

        toFile = path.join(__dirname, '../gravados/exemplo.json');
        stringFile = toFile.toString();
        let rawdata = fs.readFileSync(stringFile);
        let exemplo = JSON.parse(rawdata);
        var str = JSON.stringify(exemplo);
        var vlrExemploResult = str.split(/[\:\}]/g)[1];
        exemplo = vlrExemploResult.replace(/[\\"]/g, '');
        return exemplo;
    }
}
module.exports = ReadGeneric;