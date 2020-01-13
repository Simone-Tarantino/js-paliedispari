// L’utente sceglie pari o dispari e un numero
// da 1 a 5.
// Generiamo un numero random (sempre da 1
// a 5) per il computer.
// Sommiamo i due numeri e dichiariamo chi ha
// vinto.

// var userOddEven = prompt("Pari o dispari?");
var userNumber = parseInt(prompt("Scegli un numero da 1 a 5"));
var randomCPUNumber = Math.floor((Math.random() * 5) + 1);
var totalNumber = userNumber + randomCPUNumber;
