let nombre = prompt("veuillez saisir un nombre compris entre 1 et 10 :");

while(nombre < 1 || nombre > 10){
    nombre = prompt("Veuillez mettre un nombre entre 1 et 10");
}


if( nombre > 5 ){
    alert("Le nombre est plus grand que 5");
}

if( parseInt(nombre) === 0 ){
    alert("Le nombre est égal à 5");
}

if( nombre < 5 ){
    alert("Le nombre est plus petit que 5");
}