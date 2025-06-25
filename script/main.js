
function multiply() {
  var nombre1 = parseFloat(document.getElementById("nombre1").value);
  var nombre2 = parseFloat(document.getElementById("nombre2").value);
  var nombre3 = parseFloat(document.getElementById("nombre3").value);
  var nombre4 = parseFloat(document.getElementById("nombre4").value);
  var resultat = nombre1*nombre2*nombre3*nombre4
  document.getElementById("resultat").innerHTML = resultat;
}