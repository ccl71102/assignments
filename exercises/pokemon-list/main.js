const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200) {
        const responseObj = JSON.parse(xhr.responseText);
        showAll(responseObj);
    }
}

xhr.open("GET", "https://api.vschool.io/pokemon");
xhr.send();

function showAll(obj) {

    const h1 = document.createElement("h1");
    h1.textContent = "Pokemon List";
    h1.style.fontSize = "80px";
    h1.style.fontFamily = "sans-serif";
    h1.style.textAlign = "center";
    document.body.appendChild(h1);

    for(let i = 0; i < obj.objects[0].pokemon.length; i++) {
        const pokemon = obj.objects[0].pokemon[i];
        const p = document.createElement("p");
        p.textContent = ((pokemon.name).toUpperCase()).charAt(0) + pokemon.name.substring(1,pokemon.name.length);
        p.style.fontSize = "40px";
        p.style.fontFamily = "sans-serif";
        p.style.textAlign = "center";
        document.body.appendChild(p);
    }
}