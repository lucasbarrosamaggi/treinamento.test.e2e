/**
 * Arquivo: geraRenavam.ts
 * Data: 06/11/2018
 * Author: Fernanda Ferreira
 */

class GeraRenavam {

    geraRandon(n) {
        var ranNum = Math.round(Math.random() * n);

        return ranNum;
    }

    geraRenavamVeiculo() {
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
}
module.exports = GeraRenavam;