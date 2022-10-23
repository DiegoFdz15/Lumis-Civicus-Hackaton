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
    cmain.style.width = '99%';
    cmain.style.height = '90%';
    cmain.style.margin = '0px';

    // ================ HEADER  ================ //
    var newDiv = document.createElement('div');
    newDiv.setAttribute('id','divHeader');

    newDiv.innerHTML = '<header id="header" class="fixed-top d-flex align-items-center cabeza">' +
    '<div class="container d-flex align-items-center">' + 
      '<div class="logo me-auto" >' +
         '<a href="./index.html" target="_blank"><h1 class="container limus" ><img src="img/logo.png" class="img-fluid logo-foto" alt="imagen error"> Lumis</h1></a>' +
      '</div>' +
      '<nav id="navbar" class="navbar order-last order-lg-2 ">' +
        '<ul>'+ 
          '<li><a href="/" class="nav-link scrollto" >Menu</a></li>' + 
          '<li><a href="/publicaciones" class="nav-link scrollto" >Publicaciones</a></li>' +
        '</ul>' +
      '</nav>' + 
    '</div>' +
  '</header>'

    cmain.appendChild(newDiv);
    // ================ HEADER  ================ //
    var newDiv2 = document.createElement('div');
    newDiv2.setAttribute('id','divMapa');

    cmain.appendChild(newDiv2);

    newDiv2.style.position = 'absolute';
    newDiv2.style.backgroundColor = 'gray';
    newDiv2.style.width = '74%';
    newDiv2.style.height = '98%';

    var newDiv3 = document.createElement('div');
    newDiv3.setAttribute('id','divFormulario');

    newDiv3.innerHTML = '<form method="post" action="/send">'+
    '<div id="divTitulo">' +
        '<p>Titulo</p>' +
        '<input type="text" name="reporteTitulo" id="inpTitulo" style="margin-left:24px" class="inpReporte form-control" placeholder="Titulo" required>' +
    '</div>' + 
    '<div id="divDescripcion">' +
        '<p>Descripcion</p>' +
        '<textarea name="reporteDescripcion" id="inpDescripcion" class="form-control" style="margin-left:24px" cols="20" rows="10" placeholder="Descripcion" required></textarea>' +
    '</div>' +
    '<div id="divLatlng">' +
        '<p>Latitud</p>' +
        '<input required type="text" name="reporteLatitud" class="inpReporte" id="mapLat">' +
        '<p>Longitud</p>' +
        '<input required type="text" name="reporteLongitud" class="inpReporte" id="mapLng">' +
    '</div>' +
    '<div id="divArchivos">' +
        '<p>Evidencia</p>' +
        '<input type="file" name="reporteEvidencia">' +
    '</div>' +
    '<input class="btn btn-primary" type="submit">' +
    '</form>';

    cmain.appendChild(newDiv3);

    crearMapa();
}