const express = require("express");
const path = require('path');
const app = express();
const mysql = require('mysql');

const conn = require('express-myconnection');
const puerto = 3000;

const dbOptions = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'db123',
    database: 'reportes'
}

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded());
app.use(conn(mysql, dbOptions, 'single'));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/send', (req,res) => {
    res.send(req.body);
});

app.get('*', (req,res) => {
    res.send('Error, pagina no encontrada.');
});

app.listen(puerto, () => {
    console.log("Servidor a la escucha en el puerto " + puerto);
});