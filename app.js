const { json } = require("express");
const express = require("express");
const path = require('path');
const app = express();

const puerto = 3000;

var db = [{
    reporteTitulo: "Reporte de Bache",
    reporteDescripcion: "Bache que molesta el paso de los autos",
    reporteLatitud: "-25.484532514135278",
    reporteLongitud: "-54.66015250306938",
    reporteEvidencia: "img/imagenPrueba.jpg",
    reporteFecha: '18/10/22'
}, {
    reporteTitulo: "Reporte de luz",
    reporteDescripcion: "Oscuridad inmensa en las noches, asaltos y robos con frecuencia",
    reporteLatitud: "-25.48453214135278",
    reporteLongitud: "-54.66015250306938",
    reporteEvidencia: "img/imagenPrueba.jpg",
    reporteFecha: '22/10/22'
}]

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

    let f = new Date();
    let a = f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear()
    var tmp = {
        reporteTitulo: req.body.reporteTitulo,
        reporteDescripcion: req.body.reporteDescripcion,
        reporteLatitud: req.body.reporteLatitud,
        reporteLongitud: req.body.reporteLongitud,
        reporteEvidencia: req.body.reporteEvidencia,
        reporteFecha: a
    }

    db.push(tmp);
    res.redirect('/publicaciones');
});

app.get('*', (req,res) => {
    res.send('Error, pagina no encontrada.');
});

app.listen(puerto, () => {
    console.log("Servidor a la escucha en el puerto " + puerto);
});