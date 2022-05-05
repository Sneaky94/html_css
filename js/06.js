// alert('test');

// L'opérateur de comparaison == signifie 'egal à'
// il permet de vérifier que les VALEURS de 2 variables sont identiques
var nb1 = 123;
var nb2 = "123";
if (nb1 == nb2) {
    var result = nb1 + "<br>" + nb2;
    document.write("result " + result);
}
if (nb1 === nb2) {
    var result2 = nb1 + "<br>" + nb2;
    document.write("result2 " + result2);
}

document.write("result2 " + "<br>" + result2);
document.write("result " + "<br>" + result);


if (nb1 != nb2) {
    var result3 = nb1 + "<br>" + nb2;
    document.write("result3 " + result3);
}

if (nb1 !== nb2) {
    var result4 = nb1 + "<br>" + nb2;
    document.write("result4 " + result4);
}

document.write("result4 " + result4);