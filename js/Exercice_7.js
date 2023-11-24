let pointure = prompt("Veuillez saisir votre pointure");
let annee = prompt("Veuillez saisir votre année de naissance");


function exo7(point, ann){


   return ((((point * 2) + 5) * 50) - ann) + 1766 ;
}

alert(exo7(pointure, annee));