// Scrivi una funzione per capire se la parola è palindroma

var wordArray = [];
var wordArrayReverse =[];
var word = prompt("parola");
var pali = false;
for (var i = 0; i < word.length; i++) {
  var digit = wordArray.push(word[i]);
  var digitReverse = wordArrayReverse.push(word[i]);
}
console.log(wordArray);
wordArrayReverse.reverse();
console.log(wordArrayReverse);
for (var j = 0; j < wordArray.length; j++) {
  if (wordArray[j] == wordArrayReverse[j]) {
    pali = true;
  } else {
    pali = false;
  }
}
console.log(pali);
