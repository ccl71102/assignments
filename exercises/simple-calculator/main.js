
var resultAdd = document.getElementById("result-add");
var resultSub = document.getElementById("result-sub");
var resultMul = document.getElementById("result-mul");

formAdd.addEventListener("submit", addNumbers);
formSub.addEventListener("submit", subNumbers);
formMul.addEventListener("submit", mulNumbers);



function addNumbers(event) {
    event.preventDefault();
    if(isNaN(formAdd.firstDigit.value) || isNaN(formAdd.secondDigit.value) || formAdd.firstDigit.value === "" || formAdd.secondDigit.value === "") {
        alert("Invalid inputs. Only numbers are allowed.");
        clearInputs();
        return;
    }
    document.getElementById("result-add").innerHTML = "";
    var output = document.createElement("div");
    output.textContent = "Result: " + (Number(formAdd.firstDigit.value) + Number(formAdd.secondDigit.value));
    resultAdd.style.color = "#F5F0F0";
    resultAdd.style.fontFamily = "Arial";
    resultAdd.appendChild(output);
    clearInputs();
}

function subNumbers(event) {
    event.preventDefault();
    if(isNaN(formSub.firstDigit.value) || isNaN(formSub.secondDigit.value) || formSub.firstDigit.value === "" || formSub.secondDigit.value === "") {
        alert("Invalid inputs. Only numbers are allowed.");
        clearInputs();
        return;
    }
    document.getElementById("result-sub").innerHTML = "";
    var output = document.createElement("div");
    output.textContent = "Result: " + (Number(formSub.firstDigit.value) - Number(formSub.secondDigit.value));
    resultSub.style.color = "#F5F0F0";
    resultSub.style.fontFamily = "Arial";
    resultSub.appendChild(output);
    clearInputs();
}

function mulNumbers(event) {
    event.preventDefault();
    if(isNaN(formMul.firstDigit.value) || isNaN(formMul.secondDigit.value) || formMul.firstDigit.value === "" || formMul.secondDigit.value === "") {
        alert("Invalid inputs. Only numbers are allowed.");
        clearInputs();
        return;
    }
    document.getElementById("result-mul").innerHTML = "";
    var output = document.createElement("div");
    output.textContent = "Result: " + (Number(formMul.firstDigit.value) * Number(formMul.secondDigit.value));
    resultMul.style.color = "#F5F0F0";
    resultMul.style.fontFamily = "Arial";
    resultMul.appendChild(output);
    clearInputs();
}

function clearInputs(){
    formAdd.firstDigit.value = "";
    formAdd.secondDigit.value = "";
    formSub.firstDigit.value = "";
    formSub.secondDigit.value = "";
    formMul.firstDigit.value = "";
    formMul.secondDigit.value = "";
}


