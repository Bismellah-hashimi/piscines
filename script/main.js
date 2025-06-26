
function multiply() {
    document.getElementById("error").innerHTML = "";
  var nombre1 = parseFloat(document.getElementById("nombre1").value);
  var nombre2 = parseFloat(document.getElementById("nombre2").value);
  var nombre3 = parseFloat(document.getElementById("nombre3").value);
  
  if (isNaN(nombre1) || isNaN(nombre2) || isNaN(nombre3)) {
    document.getElementById("error").innerHTML = "Veuillez remplir tous les champs avec des nombres valides.";
    return;
  }
  var resultat_m3 = nombre1*nombre2*nombre3;

  console.log(resultat_m3);
  document.getElementById("nombre4").value = resultat_m3;

  var resultat_prix = resultat_m3 * 1000;
  
  document.getElementById("resultat").value = resultat_prix;
}