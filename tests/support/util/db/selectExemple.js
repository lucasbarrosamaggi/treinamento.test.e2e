/**
 * Arquivo: selectExemple.js
 * Data: 04/01/2020
 * Author: Fernanda Ferreira
 */

let Connection = require('tedious').Connection;
let Request = require('tedious').Request;
const fs = require('fs');
let path = require('path');
var exempleGravado, exempleG, data, toFile, stringFile;
var cpfGravado, cpfG, cpfs, cpfResult2, cpf;
let ceps = require('../helpers/gravados/cpf.json');

cpfGravado = {
    cpfG: cpfs
};

data = JSON.stringify(cpfGravado);
toFile = path.join(__dirname, '../helpers/gravados/cpf.json');
stringFile = toFile.toString();

fs.readFile(stringFile, (err, data) => {
    if (err) throw err;
    cpfG = JSON.parse(data);
    var str = JSON.stringify(cpfG);
    var cpfResult1 = str.split(/[\:\}]/g)[1];
    cpfResult2 = cpfResult1.replace(/[\\"]/g, '');
    cpf = cpfResult2;
    console.log("Valor no read: " + cpf);
});

// Create connection to database
const config = {
    authentication: {
        options: {
            userName: "sa", // update me
            password: "@treinamento1234" // update me
        },
        type: "default"
    },
    server: "localhost", // update me
    options: {
        database: "Treinamento", //update me
        port: 1434,
        encrypt: true
    }
};

const connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
connection.on("connect", err => {
    if (err) {
        console.error(err.message);
    } else {
        queryDatabase();

    }
});

function queryDatabase() {
    console.log("Reading rows from the Table...");
    
    // Read all rows from table
    const request = new Request(
        `SELECT ExempleId FROM Exemple where Exemple.Cpf = ${cpf};`,
        (err, rowCount) => {
            if (err) {
                console.error(err.message);
            } else {
                console.log(`${rowCount} row(s) returned`);
            }
        }
    );

    request.on("row", columns => {
        columns.forEach(column => {
            var result = column.value;
            console.log("%s\t%s", column.metadata.colName, column.value);
            console.log("O valor de result: " + result);
            connection.close();
            //Grava resultado da query
            exempleGravado = {
                exempleG: result
            };

            data = JSON.stringify(exempleGravado);
            toFile = path.join(__dirname, '../helpers/gravados/exemple.json');
            stringFile = toFile.toString();
            fs.writeFile(stringFile, data, (err) => {
                if (err) throw err;
            });
        });
    });

    connection.execSql(request);
}