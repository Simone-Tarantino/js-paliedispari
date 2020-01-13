// L’utente sceglie pari o dispari e un numero
// da 1 a 5.
// Generiamo un numero random (sempre da 1
// a 5) per il computer.
// Sommiamo i due numeri e dichiariamo chi ha
// vinto.

function evenOrOdd(numero) {
  if (numero % 2 == 0) {
    risultato = "pari";
    return risultato;
  } else {
    risultato = "dispari";
    return risultato;
  }
}

function winOrLose(valore1, valore2) {
  if (valore1 == valore2) {
    return "Hai vinto";
  } else {
    return "Hai perso";
  }
}

var userEvenOdd = prompt("Pari o dispari?");
console.log("Hai scommesso che il numero è " + userEvenOdd);
var userNumber = parseInt(prompt("Scegli un numero da 1 a 5"));
console.log("Il numero che hai scelto è il " + userNumber);
var randomCPUNumber = Math.floor((Math.random() * 5) + 1);
console.log("Il numero del computer è " + randomCPUNumber);
var totalNumber = userNumber + randomCPUNumber;
console.log("Il numero totale è " + totalNumber);
var evenOddResult = evenOrOdd(totalNumber);
console.log("Il numero totale è " + evenOddResult);
var gameResult = winOrLose(userEvenOdd, evenOddResult);
console.log(gameResult);
