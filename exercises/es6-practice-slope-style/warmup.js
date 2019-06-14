


function randomPasswordGenerator(number){
    let password = "";
    for(let i = 0; i < number; i++) {
        password += String.fromCharCode(Math.floor(Math.random() * (126 - 33) + 33 ));
    }
    return password;
}

console.log(randomPasswordGenerator(10));
