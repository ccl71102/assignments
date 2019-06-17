

document.getElementById("planetsButton").addEventListener("click", getPlanets);
document.getElementById("personButton").addEventListener("click", getPerson);

function getPlanets(e){
    
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById("container").innerHTML = "";
            displayPlanets(JSON.parse(xhr.responseText));
        }
    }

    xhr.open("GET", "https://swapi.co/api/planets/");
    xhr.send();

    function displayPlanets(data) {
        const planetArr = data.results;
        const div = document.getElementById("container");

        for(let i = 0; i <planetArr.length; i++) {
            const p = document.createElement("p");
            
            p.textContent = planetArr[i].name;
            div.appendChild(p);
        }

        document.body.appendChild(div);
    }
}

function getPerson(e) {

    
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById("container").innerHTML = "";
            displayPerson(JSON.parse(xhr.responseText));
        }
    }

    xhr.open("GET", "https://swapi.co/api/people/1/");
    xhr.send();

    function displayPerson(data) {

            const div = document.getElementById("container");
            const p = document.createElement("p");
            p.textContent = data.name;
            div.appendChild(p);
            document.body.appendChild(div);
    }
}

function getVSchoolItem() {

}

function deleteVSchoolItem() {

}

function putVSchoolItem() {
    
}


