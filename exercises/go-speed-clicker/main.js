
initialize();
document.getElementById("clicker").addEventListener("click", count);

function count(){

    let counter = 0;
    //check if there is something saved already
    if(localStorage.getItem("count") === null) 
        localStorage.setItem("count", 0);
    else
        counter = localStorage.getItem("count");
    counter++;
    document.getElementById("counter").textContent = counter;
    localStorage.setItem("count", counter);
}

function initialize() {
    //check if there is something saved already
    if(localStorage.getItem("count") === null) 
        document.getElementById("counter").textContent = 0;
    else
        document.getElementById("counter").textContent = localStorage.getItem("count");
}