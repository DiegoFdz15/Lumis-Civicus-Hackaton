const express = require("express");
const path = require('path');
const app = express();

const puerto = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/reportar', (req,res) => {
    res.sendFile(path.join(__dirname, 'public', 'reportar.html'));
});

app.get('/publicaciones', (req,res) => {
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