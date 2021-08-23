/**
 * Arquivo: geraChassi.ts
 * Data: 06/11/2018
 * Author: Fernanda Ferreira
 */

class GeraChassi {

    geraAleatorio() {
        var aleatorio = '123456789ABCDEFGHJKLMNPRSTUVWXTZ';
        var codigoAleatorio = '';
        var tamanho = 11;
        for (var i = 0; i < tamanho; i++) {
            var rnum = Math.floor(Math.random() * aleatorio.length);
            codigoAleatorio += aleatorio.substring(rnum, rnum + 1);
        }

        return codigoAleatorio;
    }

    geraRandon(n) {
        var ranNum = Math.round(Math.random() * n);

        return ranNum;
    }

    geraNumeroAleatorio() {
        var n = Math.round(Math.random() * 9 + 0); // Gera nr entre 9 e 0
        var n1 = this.geraRandon(n);
        var n2 = this.geraRandon(n);
        var n3 = this.geraRandon(n);
        var n4 = this.geraRandon(n);
        var n5 = this.geraRandon(n);

        return '' + n + n1 + n2 + n3 + n4 + n5;
    }

    geraChassiVeiculo() {
        var chassiCompleto = GeraChassi.geraAleatorio() + GeraChassi.geraNumeroAleatorio();

        return chassiCompleto;
    }
}
module.exports = GeraChassi;