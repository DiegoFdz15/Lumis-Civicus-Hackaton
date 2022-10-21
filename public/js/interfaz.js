function onloaded (){
    const inicio = document.getElementById('divContenedor');

    let img = document.createElement('img');
    img.setAttribute('src','../anim/gif/frame\ (1).jpg');

    var i = 1;

    setInterval(() => {
        i ++;

        img.src = '../anim/gif/frame\ ('+i+').jpg';

        if (i == 32){
            i = 1;
        }
    }, 50);

    inicio.appendChild(img);

    inicio.style.width  = '100%';
    inicio.style.height = window.innerHeight + "px";
    inicio.style.backgroundColor = 'black';
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
    cmain.style.backgroundColor = "white";
    cmain.style.width = '100%';
    cmain.style.height = '100%';
    cmain.style.margin = '0';

    var newDiv2 = document.createElement('div');
    newDiv2.setAttribute('id','divMapa');
    cmain.appendChild(newDiv2);

    newDiv2.style.position = 'absolute';
    newDiv2.style.backgroundColor = 'gray';
    newDiv2.style.width = '100%';
    newDiv2.style.height = '90%';

    var newDiv3 = document.createElement('div');
    newDiv3.setAttribute('id','divFooter');
    cmain.appendChild(newDiv3);

    newDiv3.style.width = '100%';
    newDiv3.style.height = "10%";
    newDiv3.style.backgroundColor = 'black';
    newDiv3.style.position = 'absolute';
    newDiv3.style.bottom = 0;

    crearMapa();
    gLocation();
}