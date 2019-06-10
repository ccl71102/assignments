
document.myForm.addEventListener("submit", formAlert);

function formAlert(e) {
    e.preventDefault();
    var firstName = document.myForm.elements["firstName"].value;
    var lastName = document.myForm.elements["lastName"].value;
    var age = document.myForm.elements["age"].value;
    var gender = document.myForm.elements["gender"].value;
    var location = document.myForm.elements["travel-location"].value;
    var diet = [];

    if (document.myForm.elements['vegan'].checked) {
        diet.push(document.getElementById('vegan').value);
    }
    if (document.myForm.elements['gluten'].checked) {
        diet.push(document.getElementById('gluten').value);
    }
    if (document.myForm.elements['paleo'].checked) {
        diet.push(document.getElementById('paleo').value);
    }


    alert("First Name: " + firstName + 
    "\nLast Name: " + lastName + "\nAge: " + 
    age + "\nGender: " + gender + 
    "\nTravel Location: " + location + 
    "\nDiet: " + diet + 
    "\nAwesome, now if you die, it won't be an accident..");
}


