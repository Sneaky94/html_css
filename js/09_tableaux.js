// var tableauFruit = ['Pomme', 'Orange', 'Melon', 'Pasteque'];
// var tableauPays = ['France', 'Maroc', 'pakistan', 'Benin'];
// var tableauChiffre = [25, 50, 75, 100];

// console.log(tableauFruit, tableauPays, tableauChiffre);
// console.log(tableauFruit[0], tableauPays[3], tableauChiffre[2]);
// console.log()

var tableauMitra = [
  " prénom ",
  " nom ",
  " adresseMail ",
  " age ",
  " 11/05/2022 ",
];
console.log(tableauMitra);

tableauMitra.pop();
console.log(tableauMitra);

tableauMitra.unshift(" 11/05/2022 ");
console.log(tableauMitra);

var position1 = tableauMitra.indexOf(" nom ");
var position2 = tableauMitra.indexOf(" adresseMail ");
console.log(tableauMitra);

var nom_mail = tableauMitra.splice(2, 2, " monAdresse ", " password ");
console.log(nom_mail);
console.log(tableauMitra);

tableauMitra.push(" adresseMail ");
console.log(tableauMitra);

tableauMitra.splice(1, 0, nom_mail[0]);
console.log(tableauMitra);

for (var i = 0; i < tableauMitra.length; i++) {
  console.log(tableauMitra[i]);
  document.write(tableauMitra[i]);
}
