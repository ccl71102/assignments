
document.formTotal.addEventListener("submit",calculateReward);

function calculateReward(e) {
    e.preventDefault();
    console.log("run");
    var div = document.getElementById('result-text');
    while(div.firstChild){
        
        div.removeChild(div.firstChild);
    }   
    let totalSum = (Number(document.formTotal.inputGoomba.value) * 5) + (Number(document.formTotal.inputBobomb.value) * 7) + (Number(document.formTotal.inputCheepCheep.value) * 11);
    
    const result = document.createElement("div");
    const node = document.createTextNode("Total Reward: " + totalSum);
    result.appendChild(node);
    result.style.width = "100px";
    result.style.display = "inline";
    
    const coin = document.createElement("img");
    coin.src = "./images/coin.png";
    coin.style.width = "14px";
    coin.style.display = "inline";
    coin.style.marginLeft = "2px";


    document.getElementById("result-text").appendChild(result);
    document.getElementById("result-text").appendChild(coin);

    document.formTotal.inputGoomba.value = "";
    document.formTotal.inputBobomb.value = "";
    document.formTotal.inputCheepCheep.value = "";
}