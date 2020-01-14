// Scrivi una funzione per capire se la parola è palindroma

function isPalindroma (parola) {
  var parolaArray = [];
  var parolaArrayReverse =[];
  var pali = false;
  for (var i = 0; i < parola.length; i++) {
    var lettera = parolaArray.push(parola[i]);
    var letteraReverse = parolaArrayReverse.push(parola[i]);
  }
  parolaArrayReverse.reverse();
  for (var j = 0; j < parolaArray.length; j++) {
    if (parolaArray[j] == parolaArrayReverse[j]) {
      pali = true;
    } else {
      pali = false;
    }
  }
  return pali;
}
var palindroma = isPalindroma(prompt("Inserisci una parola"));
if (palindroma == true) {
  console.log("La parola è palindroma");
} else {
  console.log("La parola non è palindroma");
}


// correzione
//
// var parola = prompt("Inserisci una parola");
// var parolaReverse = "";
// for (var i = parola.lenght - 1; i >= 0; i--) {
//   console.log(parola[i]);
//   parolaReverse += parola [i];
//   console.log(parolaReverse);
// }
// if (parolaReverse == parola) {
//   alert("è palindroma");
// } else {
//   alert("non è palindroma");
// }
