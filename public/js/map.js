var crearMapa = () => {

    var map = L.map('divMapa');

    var userLatlng = [-25.499043617816383, -54.665130117763056];

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition((p) => {
            userLatlng[0] = p.coords.latitude
            userLatlng[1] = p.coords.longitude
            map.setView([userLatlng[0], userLatlng[1]], 13);
        }, (err) => {
            if (err){
                map.setView([-25.499043617816383, -54.665130117763056], 13);
                alert('Geolocalizacion desactivada.');
            }
            
        });
    
    } else {
    
        alert('Geolocation is not supported in your browser');
    
    }
    map.doubleClickZoom.disable();

    L.tileLayer('https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=ALOuFh0PaTr2QERnkqaw', {}).addTo(map);

    var a = L.marker([userLatlng[0],userLatlng[1]],{}).addTo(map)
    .bindPopup('Tu estas aqui.')
    .openPopup();
    
    map.on('dblclick', (e) => {
        // Console testing
        var latlng = []
        latlng[0] = e.latlng.lat;
        latlng[1] = e.latlng.lng;
        console.log("1. " + latlng);

        a.setLatLng([e.latlng.lat,e.latlng.lng ]);
        a.bindPopup(form(latlng), {
            minWidth:300,
        });
        a.addTo(map);

    });
}

var form = (latlng) => {

    const d = new Date();

    let f = '\
    <form method="post" action="/send">\
    <h2 id="h2Titulo">Agregar Punto</h2>\
    <p>Titulo</p>\
    <input type="text" name="mapTitle" class="inputMap" placeholder="Titulo">\
    <p>Latitud</p>\
    <input type="text" name="mapLat" class="inputMap" placeholder="Latitud" value="' +  latlng[0] + '">\
    <p>Longitud</p>\
    <input type="text" name="mapLng" class="inputMap" placeholder="Longitud" value="' +  latlng[1] + '">\
    <p>Descripción</p>\
    <textarea name="mapDescripcion" id="mapDescripcion" class="inputMap" placeholder="Descripción"></textarea>\
    <p>Agregar Imagen</p>\
    <input type="file" name="mapImage"></br></br><p id="p_date">' + d.getDate()  + "/" + 
    (d.getMonth() + 1) + "/" + d.getFullYear() + '</p>\
    <input type="submit" name="mapImage">\
    </form>';
    return f;
}

var gLocation = () => {
    
}