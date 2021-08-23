/**
 * Arquivo: geraEmail.ts
 * Data: 01/08/2018
 * Author: Fernanda Ferreira
 */

class GeraEmail {
    
    rand() {
        var x = Math.floor((Math.random() * 100) + 1);
        return x;
    }

    emailEmbarcador() {
        var emailEmb = "embarcador.at" + GeraEmail.rand() + GeraEmail.rand() + "@gmail.com";
        return emailEmb;
    }

    emailEmbarcadorTransp() {
        var emailEmbTransp = "embarcador.transportador.at" + GeraEmail.rand() + GeraEmail.rand() + "@gmail.com";
        return emailEmbTransp;
    }

    emailTransportador() {
        var emailTransp = "transportador.at" + GeraEmail.rand() + GeraEmail.rand() + "@gmail.com";
        return emailTransp;
    }

    emailTenant() {
        var emailTenant = "tenant.at" + GeraEmail.rand() + GeraEmail.rand() + "@gmail.com";
        return emailTenant;
    }

    emailParceiro() {
        var emailParceiro = "parceiro.at" + GeraEmail.rand() + GeraEmail.rand() + "@gmail.com";
        return emailParceiro;
    }

}
module.exports = GeraEmail;