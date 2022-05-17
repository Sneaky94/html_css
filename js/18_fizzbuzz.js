//  on initialise rachid / si rachid inferieur ou egale a 100 ont incremente
for (var rachid = 1; rachid <= 100; rachid++) {
  // si rachid % 3 et rachid % 5 sont strictement egale a 0 on affiche Fizzbuzz
  if (rachid % 3 === 0 && rachid % 5 === 0)
    document.write(
      "<p style='background-color:red;text-align:center; width:400px;'> FizzBuzz " +
        "(" +
        rachid +
        ")" +
        " nombres divisibles à la fois par 3 et par 5.</p>"
    );
  // si rachid % 3 est strictement egale a 0 on affiche fizz
  else if (rachid % 3 === 0)
    document.write(
      "<p style='background-color:lightskyblue;text-align:center;width:200px;'>Fizz " +
        "(" +
        rachid +
        ")" +
        " est divisable par 3 </p>"
    );
  // si rachid % 5 est strictement egale a 0 on affiche buzz
  else if (rachid % 5 === 0)
    document.write(
      "<p style='background-color:lightsteelblue;text-align:center; width:200px;'>Buzz " +
        "(" +
        rachid +
        ")" +
        " est divisable par 5 </p>"
    );
  // sinon on affiche rachid
  else
    document.write(
      "<p style='background-color:gray;text-align:center; width:50px;'>" +
        rachid +
        "</p>"
    );
}
