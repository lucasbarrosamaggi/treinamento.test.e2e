/**
 * Arquivo: retornaDataAtual.ts
 * Data: 01/08/2018
 * Author: Fernanda Ferreira
 */

var data, dia, dia_sem, mes, ano2, ano4, str_data, str_dia, str_mes, tamanhoDia, tamanhoMes, dia_sem_format, str_data_dia, diaD, mesD;
var dataFuso, hora;

class RetornaDataAtual {

    retornarDataAtualBackOffice() {
        data = new Date();
        dia = data.getDate();
        dia_sem = data.getDay();
        mes = data.getMonth();
        ano2 = data.getYear();
        ano4 = data.getFullYear();

        var d = dia.toString();
        var tamanhoDia = d.length;

        var mes = mes + 1;
        var m = mes.toString();
        var tamanhoMes = m.length;

        if (tamanhoDia = 1) {
            dia = ("0" + dia);
        }

        if (tamanhoMes = 1) {
            mes = ("0" + mes);
        }

        str_data = dia + '/' + mes + '/' + ano4;
        var str_dataSemFormat = str_data.replaceAll("[^\\d ]", "");

        return str_dataSemFormat;

    }



    retornarDataHoje() {
        data = new Date();
        dia = data.getDate();
        dia_sem = data.getDay();
        mes = data.getMonth();
        ano2 = data.getYear();
        ano4 = data.getFullYear();

        var d = dia.toString();
        tamanhoDia = d.length;

        var mes = mes + 1;
        var m = mes.toString();
        tamanhoMes = m.length;

        if (tamanhoDia == 1) {
            dia = ("0" + dia);
        }

        if (tamanhoMes == 1) {
            mes = ("0" + mes);
        }

        str_data = dia + '/' + mes + '/' + ano4;

        return str_data;
    }

    retornarDataHojeEua() {
        data = new Date();
        dia = data.getDate();
        dia_sem = data.getDay();
        mes = data.getMonth();
        ano2 = data.getYear();
        ano4 = data.getFullYear();

        var d = dia.toString();
        tamanhoDia = d.length;

        var mes = mes + 1;
        var m = mes.toString();
        tamanhoMes = m.length;

        if (tamanhoDia == 1) {
            dia = ("0" + dia);
        }

        if (tamanhoMes == 1) {
            mes = ("0" + mes);
        }

        str_data = ano4 + '-' + mes + '-' + dia;

        return str_data;
    }

    retornarDataHojeSformat() {
        data = new Date();
        dia = data.getDate();
        dia_sem = data.getDay();

        var d = dia.toString();
        tamanhoDia = d.length;

        if (tamanhoDia == 1) {
            dia = ("0" + dia);
        }

        str_data = dia;

        return str_data;
    }

    retornarAnoHoje() {
        data = new Date();
        dia = data.getDate();
        dia_sem = data.getDay();
        mes = data.getMonth();
        ano2 = data.getYear();
        ano4 = data.getFullYear();
        var ano = ano4.toString();

        return ano;
    }

    retornarDataHojeDiaSemana() {
        data = new Date();
        dia = data.getDate();
        dia_sem = data.getDay();
        mes = data.getMonth();
        ano2 = data.getYear();
        ano4 = data.getFullYear();

        var d = dia.toString();
        tamanhoDia = d.length;

        var mes = mes + 1;
        var m = mes.toString();
        tamanhoMes = m.length;

        if (tamanhoDia == 1) {
            dia = ("0" + dia);
        }

        if (tamanhoMes == 1) {
            mes = ("0" + mes);
        }

        switch (dia_sem) {
            case 1: {
                dia_sem_format = "Segunda-feira";
                break;
            }
            case 2: {
                dia_sem_format = "Terça-feira";
                break;
            }
            case 3: {
                dia_sem_format = "Quarta-feira";
                break;
            }
            case 4: {
                dia_sem_format = "Quinta-feira";
                break;
            }
            case 5: {
                dia_sem_format = "Sexta-feira";
                break;
            }
            case 6: {
                dia_sem_format = "Sábado";
                break;
            }
            case 0: {
                dia_sem_format = "Domingo";
                break;
            }
            default: {
                console.log("Incluir novo caso");
                break;
            }
        }

        str_data_dia = dia + '/' + mes + '/' + ano4 + ' - ' + dia_sem_format;

        return str_data_dia;
    }

    adicionarDiaEmData(dias) {

        var hoje = new Date();
        if (dias == 0) {
            var dataUltima = new Date(hoje.getTime());
        } else {
            var dataUltima = new Date(hoje.getTime() + (dias * 24 * 60 * 60 * 1000));
        }
        var diaSem = dataUltima.getDay();

        diaD = (dataUltima.getDate());
        mesD = (dataUltima.getMonth() + 1);
        var d = diaD.toString();
        tamanhoDia = d.length;

        var m = mesD.toString();
        tamanhoMes = m.length;

        if (tamanhoDia == 1) {
            diaD = ("0" + diaD);
        }

        if (tamanhoMes == 1) {
            mesD = ("0" + mesD);
        }

        switch (diaSem) {
            case 0: {
                dia_sem_format = "Domingo";
                break;
            }
            case 1: {
                dia_sem_format = "Segunda-feira";
                break;
            }
            case 2: {
                dia_sem_format = "Terça-feira";
                break;
            }
            case 3: {
                dia_sem_format = "Quarta-feira";
                break;
            }
            case 4: {
                dia_sem_format = "Quinta-feira";
                break;
            }
            case 5: {
                dia_sem_format = "Sexta-feira";
                break;
            }
            case 6: {
                dia_sem_format = "Sábado";
                break;
            }
            default: {
                console.log("Incluir novo caso");
                break;
            }
        }

        var result = diaD + "/" + mesD + "/" + dataUltima.getFullYear() + " - " + dia_sem_format;

        return result;
    }

    adicionarDiaEmDataOferta(dias) {

        var hoje = new Date();
        if (dias == 0) {
            var dataUltima = new Date(hoje.getTime());
        } else {
            var dataUltima = new Date(hoje.getTime() + (dias * 24 * 60 * 60 * 1000));
        }
        var diaSem = dataUltima.getDay();

        diaD = (dataUltima.getDate());
        mesD = (dataUltima.getMonth() + 1);
        var d = diaD.toString();
        tamanhoDia = d.length;

        var m = mesD.toString();
        tamanhoMes = m.length;

        if (tamanhoDia == 1) {
            diaD = ("0" + diaD);
        }

        if (tamanhoMes == 1) {
            mesD = ("0" + mesD);
        }

        switch (diaSem) {
            case 0: {
                dia_sem_format = "Domingo";
                break;
            }
            case 1: {
                dia_sem_format = "Segunda-feira";
                break;
            }
            case 2: {
                dia_sem_format = "Terça-feira";
                break;
            }
            case 3: {
                dia_sem_format = "Quarta-feira";
                break;
            }
            case 4: {
                dia_sem_format = "Quinta-feira";
                break;
            }
            case 5: {
                dia_sem_format = "Sexta-feira";
                break;
            }
            case 6: {
                dia_sem_format = "Sábado";
                break;
            }
            default: {
                console.log("Incluir novo caso");
                break;
            }
        }

        var result = diaD + " - " + dia_sem_format;

        return result;
    }

    addDiaEmDataSemFormat(dias) {

        var hoje = new Date();
        var dataUltima = new Date(hoje.getTime() + (dias * 24 * 60 * 60 * 1000));
        var diaSem = dataUltima.getDay();

        diaD = (dataUltima.getDate());
        mesD = (dataUltima.getMonth() + 1);
        var d = diaD.toString();
        tamanhoDia = d.length;

        var m = mesD.toString();
        tamanhoMes = m.length;

        if (tamanhoDia == 1) {
            diaD = ("0" + diaD);
        }

        if (tamanhoMes == 1) {
            mesD = ("0" + mesD);
        }

        var result = diaD + "" + mesD + "" + dataUltima.getFullYear();

        return result;
    }

    addDiaEmData(dias) {

        var hoje = new Date();
        var dataUltima = new Date(hoje.getTime() + (dias * 24 * 60 * 60 * 1000));
        var diaSem = dataUltima.getDay();

        diaD = (dataUltima.getDate());
        mesD = (dataUltima.getMonth() + 1);
        var d = diaD.toString();
        tamanhoDia = d.length;

        var m = mesD.toString();
        tamanhoMes = m.length;

        if (tamanhoDia == 1) {
            diaD = ("0" + diaD);
        }

        if (tamanhoMes == 1) {
            mesD = ("0" + mesD);
        }

        var result = diaD + "/" + mesD + "/" + dataUltima.getFullYear();

        return result;
    }

    retornarDiaZeroAtualBackOffice() {
        data = new Date();
        dia = data.getDate();

        var d = dia.toString();
        var tamanhoDia = d.length;

        if (tamanhoDia = 1) {
            dia = ("0" + dia);
        }

        str_dia = dia;

        return str_dia;
    }

    retornarDiaAtualBackOffice() {
        data = new Date();
        dia = data.getDate();

        var d = dia.toString();
        var tamanhoDia = d.length;

        if (tamanhoDia = 1) {
            dia = ("0" + dia);
        }

        str_dia = dia;

        return str_dia;
    }

    retornarMesAtualBackOffice() {
        data = new Date();
        mes = data.getMonth();

        var mes = mes + 1;
        var m = mes.toString();
        var tamanhoMes = m.length;

        if (tamanhoMes = 1) {
            mes = ("0" + mes);
        }

        str_mes = mes;

        return str_mes;
    }

    retornarMesAnoAtualText() {
        data = new Date();
        mes = data.getMonth();

        var mes = mes + 1;
        var m = mes.toString();
        var tamanhoMes = m.length;

        var str_mesAnoText = mes;

        data = new Date();
        dia = data.getDate();
        dia_sem = data.getDay();
        mes = data.getMonth();
        ano2 = data.getYear();
        ano4 = data.getFullYear();
        var ano = ano4.toString();

        switch (str_mesAnoText) {
            case 1:
                str_mesAnoText = "JANEIRO - " + ano;
                break;

            case 2:
                str_mesAnoText = "FEVEREIRO - " + ano;
                break;

            case 3:
                str_mesAnoText = "MARÇO - " + ano;
                break;

            case 4:
                str_mesAnoText = "ABRIL - " + ano;
                break;

            case 5:
                str_mesAnoText = "MAIO - " + ano;
                break;

            case 6:
                str_mesAnoText = "JUNHO - " + ano;
                break;

            case 7:
                str_mesAnoText = "JUNHO - " + ano;
                break;

            case 8:
                str_mesAnoText = "AGOSTO - " + ano;
                break;

            case 9:
                str_mesAnoText = "SETEMBRO - " + ano;
                break;

            case 10:
                str_mesAnoText = "OUTUBRO - " + ano;
                break;

            case 11:
                str_mesAnoText = "NOVEMBRO - " + ano;
                break;

            case 12:
                str_mesAnoText = "DEZEMBRO - " + ano;
                break;

            default:
                console.log("Outro caso não identificado do mês da cadência da oferta");
                break;
        }

        return str_mesAnoText;
    }

    retornarHoraAtualFuso() {
        data = new Date();
        data = data.toString();
        var fuso = data.includes("GMT-0400");

        if (fuso == true) {
            dataFuso = new Date();
            dataFuso.setMinutes(dataFuso.getMinutes() + 60);
            dataFuso = dataFuso.toString();
            hora = dataFuso.substring(16, (data.length - 18));
        } else {
            hora = data.substring(16, (data.length - 18));
        }

        return hora;
    }
}
module.exports = RetornaDataAtual;