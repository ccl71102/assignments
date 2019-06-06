
document.travelForm.addEventListener("submit", capture);

function capture(e){
    e.preventDefault();
    var firstName = document.travelForm.firstName.value;
    var lastName = document.travelForm.lastName.value;
    var age = document.travelForm.age.value;
    var gender = document.travelForm.gender.value;
    var destination = document.travelForm.destinations.value;
    var diets = document.travelForm.diet;
    var checkedDiet = [];

    for(var i = 0; i < diets.length; i++){
        if(diets[i].checked)
            checkedDiet.push(diets[i].value);
    }
    

    alert("Name: " + firstName + " " + lastName +
        "\nAge: " + age +
        "\nGender: " + gender +
        "\nDestination: " + destination +
        "\nDietary Restrictions: " + checkedDiet
    );
}

