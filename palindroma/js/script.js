// Scrivi una funzione per capire se la parola è palindroma

// var word = prompt("parola");
// var palindroma = false;
// for (var i = 0; i < Math.ceil(word.length/2) && palindroma == true; i++ ) {
//   if (word[i] == word[-i]) {
//     palindroma = true;
//     console.log(palindroma);
//   } else {
//     palindroma = false;
//     console.log(palindroma);
//   }
// }
// console.log(palindroma);

var wordArray = [];
var word = prompt("parola");
for (var i = 0; i < word.length; i++) {
  var digit = wordArray.push(word[i]);
}
console.log(wordArray);
