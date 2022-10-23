var a = (e) => {
    console.log(e);
}

fetch('http://localhost:3000/db').then(x => x.json()).then(a);