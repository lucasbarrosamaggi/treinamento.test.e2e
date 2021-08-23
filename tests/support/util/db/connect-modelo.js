/**
 * Arquivo: connect-localhost.js
 * Data: 03/01/2020
 * Author: Fernanda Ferreira
 */

var Connection = require('tedious').Connection;

// Create connection to database
var config = {
    server: 'localhost',
    authentication: {
        type: 'default',
        options: {
            userName: 'sa', // update me
            password: '@treinamento1234' // update me
        }
    },
    options: {
        database: 'Treinamento',
        port: 1434
    }
};
var connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
connection.on('connect', function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected Treinamento');
    }
});