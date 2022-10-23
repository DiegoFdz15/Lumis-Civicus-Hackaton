var a = (e) => {
    var a = e;
    for (var i = 0; i < a.length; i++){
        console.log(e[i]);
        
        var divPub = document.createElement('div');
        divPub.setAttribute('class','divPublicacion');

        var divM = document.getElementById('divLeft');
        divM.appendChild(divPub);

        var img = document.createElement('img');
        img.setAttribute('class','imgPublicacion');
        img.src = e[i].reporteEvidencia

        var pTitulo = document.createElement('p');
        pTitulo.setAttribute('class','pTitulo');
        pTitulo.textContent = e[i].reporteTitulo;

        var pDescripcion = document.createElement('p');
        pDescripcion.setAttribute('class','pDescripcion');
        pDescripcion.textContent = e[i].reporteDescripcion;

        var fecha = document.createElement('p');
        fecha.textContent = e[i].reporteFecha;

        divPub.appendChild(img);
        divPub.appendChild(pTitulo);
        divPub.appendChild(pDescripcion);
        divPub.appendChild(fecha);
    }
}

fetch('http://localhost:3000/db').then(x => x.json()).then(a);