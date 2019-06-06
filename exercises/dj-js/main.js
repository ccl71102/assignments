
var square = document.getElementById("square");
var heading = document.getElementById("heading");

square.addEventListener("mouseover", turnBlue);
square.addEventListener("mouseout", turnDefault);
square.addEventListener("mousedown", turnRed);
square.addEventListener("mouseup", turnYellow);
square.addEventListener("dblclick", turnGreen);

window.addEventListener("wheel",turnOrange);
window.addEventListener("keydown", myKeys);

function turnBlue() {
    square.style.backgroundColor = "blue";
    heading.style.color = "blue";
}

function turnDefault() {
    square.style.backgroundColor = "gray";
    heading.style.color = "gray";
}

function turnRed() {
    square.style.backgroundColor = "red";
    heading.style.color = "red";
}

function turnYellow() {
    square.style.backgroundColor = "yellow";
    heading.style.color = "yellow";
}

function turnGreen() {
    square.style.backgroundColor = "green";
    heading.style.color = "green";
}

function turnOrange() {
    square.style.backgroundColor = "orange";
    heading.style.color = "orange";
}

function turnPurple() {
    square.style.backgroundColor = "purple";
    heading.style.color = "purple";
}

function turnMagenta() {
    square.style.backgroundColor = "magenta";
    heading.style.color = "magenta"; 
}

function turnCyan() {
    square.style.backgroundColor = "cyan";
    heading.style.color = "cyan"; 
}

function turnTeal () {
    square.style.backgroundColor = "teal";
    heading.style.color = "teal"; 
}

function turnSalmon() {
    square.style.backgroundColor = "salmon";
    heading.style.color = "salmon";    
}

function turnAqua() {
    square.style.backgroundColor = "aqua";
    heading.style.color = "aqua";  
}

function turnDodgerBlue() {
    square.style.backgroundColor = "#1E90FF";
    heading.style.color = "#1E90FF"; 
}

function turnEmerald() {
    square.style.backgroundColor = "#7cfc00";
    heading.style.color = "#7cfc00";    
}

function turnFirebrick() {
    square.style.backgroundColor = "#b22222";
    heading.style.color = "#b22222";     
}

function turnHoneydew() {
    square.style.backgroundColor = "#F0FFF0";
    heading.style.color = "#F0FFF0";
}

function turnIvory() {
    square.style.backgroundColor = "#FFFFF0";
    heading.style.color = "#FFFFF0";    
}

function turnNavajoWhite() {
    square.style.backgroundColor = "#FFDEAD";
    heading.style.color = "#FFDEAD";     
}

function turnKhaki() {
    square.style.backgroundColor = "#F0E68C";
    heading.style.color = "#F0E68C";  
}

function turnLime() {
    square.style.backgroundColor = "#00FF00";
    heading.style.color = "#00FF00";     
}

function turnNavy() {
    square.style.backgroundColor = "#000080";
    heading.style.color = "#000080"; 
}

function turnBisque() { 
    square.style.backgroundColor = "#FFE4C4";
    heading.style.color = "#FFE4C4"; 
}

function turnSlateBlue() {
    square.style.backgroundColor = "#6A5ACD";
    heading.style.color = "#6A5ACD"; 
}

function turnViolet() {
    square.style.backgroundColor = "#EE82EE";
    heading.style.color = "#EE82EE"; 
}

function turnWheat() {
    square.style.backgroundColor = "#F5DEB3";
    heading.style.color = "#F5DEB3"; 
}

function turnHotPink(){
    square.style.backgroundColor = "#FF69B4";
    heading.style.color = "#FF69B4";    
}

function turnAzure() {
    square.style.backgroundColor = "#F0FFFF";
    heading.style.color = "#F0FFFF"; 
}

function myKeys(event){
    switch(event.which) {
        case 65:
            turnAqua();
            break;
        case 66: 
            turnBlue();
            break;
        case 67:
            turnCyan();
            break;
        case 68: 
            turnDodgerBlue();
            break;
        case 69:
            turnEmerald();
            break;
        case 70:
            turnFirebrick();
            break;
        case 71:
            turnGreen();
            break;
        case 72:
            turnHoneydew();
            break;
        case 73:
            turnIvory();
            break;
        case 74:
            turnNavajoWhite();
            break;
        case 75:
            turnKhaki();
            break;
        case 76:
            turnLime();
            break;
        case 77:
            turnMagenta();
            break;
        case 78:
            turnNavy();
            break;
        case 79:
            turnOrange();
            break;
        case 80:
            turnPurple();
            break;
        case 81:
            turnBisque();
            break;
        case 82: 
            turnRed();
            break;
        case 83:
            turnSalmon();
            break;
        case 84:
            turnTeal();
            break;
        case 85:
            turnSlateBlue();
            break;
        case 86:
            turnViolet();
            break;
        case 87:
            turnWheat();
            break;
        case 88:
            turnHotPink();
            break;
        case 89: 
            turnYellow();
            break;
        case 90:
            turnAzure();
            break;
        default:
            break;        
    }
}
