const { json } = require("express");
const express = require("express");
const path = require('path');
const app = express();

const puerto = 3000;

var db = [{a:'a'}]

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
//app.set('view engine', 'ejs');
app.use(express.urlencoded());

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/reportar', (req,res) => {
    res.sendFile(path.join(__dirname, 'public', 'reportar.html'));
});

app.get('/publicaciones', (req,res) => {
    res.sendFile(path.join(__dirname, 'public', 'publicaciones.html'));
});

app.get('/db', (req,res) => {
    res.send(db);
});

app.post('/send', (req,res) => {
    db.push(req.body);
    res.redirect('/publicaciones');
});

app.get('*', (req,res) => {
    res.send('Error, pagina no encontrada.');
});

app.listen(puerto, () => {
    console.log("Servidor a la escucha en el puerto " + puerto);
});