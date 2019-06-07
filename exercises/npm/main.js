//  Intro to Node and NPM

//NPM: node package manager

//1. initialize node project:

//npm init -y; <--- in node console, accept all options

//adds a package.json

//2. install readline-sync package  -  to install packages overall: npm install <package-name>

//npm i readline-sync <--- i = install

//do not push node_modules into github

//- create file called .gitignore
//- in file, type "node_modules"

const readline = require("readline-sync"); //force program to look for package before running
const answer = readline.question("Hello?\n");
console.log(answer);