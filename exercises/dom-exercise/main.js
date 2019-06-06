

document.getElementById("button-do-stuff").addEventListener("click", doStuff);

function doStuff() {

    var headingH1 = document.createElement("h1");

    headingH1.textContent ="I Added This Here With DOM";
    headingH1.style.fontSize = "40px";
    headingH1.style.fontFamily = "Arial";

    document.body.appendChild(headingH1);

    var imageImg = document.createElement("img");

    imageImg.src = "https://www.supercars.net/blog/wp-content/uploads/2016/05/1982_lancia_037_group_b_2_0.jpg";
    imageImg.alt = "image of a Lancia 037";
    imageImg.style.width = "600px";
    imageImg.style.display = "block";

    document.body.appendChild(imageImg);

    var parP = document.createElement("p");

    parP.textContent = "I added that image, too. Neat.";
    parP.style.fontSize = "20px";
    parP.style.fontFamily = "Arial";

    document.body.appendChild(parP);
}
