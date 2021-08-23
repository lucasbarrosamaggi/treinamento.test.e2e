/**
 * Arquivo: gerarPost.js
 * Data: 28/07/2020
 * Author: Fernanda Ferreira
 */

class Conversions {

    convertCoin(value) {
        let vlr = parseFloat(value);
        let number = vlr.toFixed(2).split('.');
        number[0] = "R$ " + number[0].split(/(?=(?:...)*$)/).join('.');
        let vlrConnvert = number.join(',');
        return vlrConnvert;
    }

    removeDecimais(value) {
        let str = value;
        let res = str.slice(0, 2);
        return res;
    }
    trocaPontoPorVirgula(value) {
        let vlr = parseFloat(value);
        let number = vlr.toFixed(2).split('.');
        number[0] = number[0].split(/(?=(?:...)*$)/).join('.');
        let vlrConnvert = number.join(',');
        return vlrConnvert;
    }

    convertCointoSemArrend(value) {
        let vlr = parseFloat(value);
        const ordemGrand = Math.pow(10, 3);
        let number = (Math.floor(vlr * ordemGrand) / ordemGrand);
        let vlrTxt = number.toString();
        let vlrConnvert = "R$ " + vlrTxt.split('.');
        return vlrConnvert;
    }
}
module.exports = Conversions;