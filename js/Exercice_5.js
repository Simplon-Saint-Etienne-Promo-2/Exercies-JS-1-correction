let nombreUtilisateur1 = prompt("veuillez rentrer un premier nombre à virgule");
let nombreUtilisateur2 = prompt("veuillez rentrer un deuxieme nombre à virgule");

// console.log(nombreUtilisateur1);
// console.log(nombreUtilisateur2);

// console.log(Math.trunc(nombreUtilisateur1));

// let partieEntierePremierNombre = Math.trunc(nombreUtilisateur1);

// alert(partieEntierePremierNombre * nombreUtilisateur2);


function exo5(nombreAVirgule1, nombreAVirgule2 ){
   return Math.trunc(nombreAVirgule1) * nombreAVirgule2;
}

alert(exo5(nombreUtilisateur1, nombreUtilisateur2));