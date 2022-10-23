function onloaded (){
    const inicio = document.getElementById('divContenedor');

    let img = document.createElement('img');
    img.setAttribute('src','../img/logo.png');

    img.style.width = '200px'
    img.style.height = '200px'
    
    inicio.appendChild(img);

    inicio.style.width  = '100%';
    inicio.style.height = window.innerHeight + "px";
    inicio.style.display = 'flex';
    inicio.style.alignItems = 'center';
    inicio.style.justifyContent = 'center';

    img.style.position = 'absolute';
    
}
onloaded();
setTimeout(creaDivs, 1500);

function creaDivs() {

    document.getElementById('divContenedor').remove();

    const cmain = document.createElement("div");
    cmain.setAttribute('id','divMain');

    document.body.appendChild(cmain);
    cmain.style.position = 'absolute';
    cmain.style.width = '100%';
    cmain.style.height = '90%';
    cmain.style.margin = '0px';

    // ================ HEADER  ================ //
    var newDiv = document.createElement('div');
    newDiv.setAttribute('id','divHeader');

    cmain.appendChild(newDiv);
    // ================ HEADER  ================ //
    var newDiv2 = document.createElement('div');
    newDiv2.setAttribute('id','divMapa');

    cmain.appendChild(newDiv2);

    newDiv2.style.position = 'absolute';
    newDiv2.style.backgroundColor = 'gray';
    newDiv2.style.width = '75%';
    newDiv2.style.height = '98%';

    var newDiv3 = document.createElement('div');
    newDiv3.setAttribute('id','divFormulario');

    newDiv3.innerHTML = '<form method="post" action="/send">'+
    '<div id="divTitulo">' +
        '<p>Titulo</p>' +
        '<input type="text" name="reporteTitulo" id="inpTitulo" class="inpReporte" placeholder="Titulo">' +
    '</div>' + 
    '<div id="divDescripcion">' +
        '<p>Descripcion</p>' +
        '<textarea name="reporteDescripion" id="inpDescripcion" cols="20" rows="10" placeholder="Descripcion"></textarea>' +
    '</div>' +
    '<div id="divLatlng">' +
        '<p>Latitud</p>' +
        '<input type="text" name="reporteLatitud" class="inpReporte" id="mapLat">' +
        '<p>Longitud</p>' +
        '<input type="text" name="reporteLongitud" class="inpReporte" id="mapLng">' +
    '</div>' +
    '<div id="divArchivos">' +
        '<p>Evidencia</p>' +
        '<input type="file" name="reporteEvidencia">' +
    '</div>' +
    '<input type="submit">' +
    '</form>';

    cmain.appendChild(newDiv3);

    crearMapa();
}