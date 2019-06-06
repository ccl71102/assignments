
document.formTotal.addEventListener("submit",calculateReward);

function calculateReward(e) {
    e.preventDefault();
    var totalSum = (Number(document.formTotal.inputGoomba.value) * 5) + (Number(document.formTotal.inputBobomb.value) * 7) + (Number(document.formTotal.inputCheepCheep.value) * 11);
    alert(totalSum);
}