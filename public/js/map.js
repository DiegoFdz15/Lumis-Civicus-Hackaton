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

    fetch('http://localhost:3000/db').then(x => x.json()).then((ltlg) => {
        for (var i = 0; i < ltlg.length; i++){
            L.marker([ltlg[i].reporteLatitud,ltlg[i].reporteLongitud],{}).addTo(map)
            console.log([ltlg[i].reporteLatitud,ltlg[i].reporteLongitud]);
        }
    });

    var a = L.marker([userLatlng[0],userLatlng[1]],{}).addTo(map)
    .bindPopup('Tu estas aqui.')
    .openPopup();

    document.getElementById('mapLat').value = userLatlng[0];
    document.getElementById('mapLng').value = userLatlng[1];
    
    map.on('dblclick', (e) => {
        // Console testing
        var latlng = []
        latlng[0] = e.latlng.lat;
        latlng[1] = e.latlng.lng;
        console.log("1. " + latlng);

        document.getElementById('mapLat').value = latlng[0];
        document.getElementById('mapLng').value = latlng[1];

        a.setLatLng([e.latlng.lat,e.latlng.lng ]);
        a.bindPopup(e.latlng.lat + ", " + e.latlng.lng, {
            minWidth:300,
        });
        a.addTo(map);

    });
}