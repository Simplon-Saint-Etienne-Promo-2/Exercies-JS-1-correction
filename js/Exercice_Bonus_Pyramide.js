// Crée une boucle for qui génère une pyramide de * dans la console. Par exemple, pour une pyramide de 5 étages, le résultat serait :

// *
// **
// ***
// ****
// *****

let pyramide = "";

for(let i = 1; i <= 5; i++){
    for(let j = 1; j <= i; j++){
        pyramide += "*";
    }
    pyramide += "\n";
    
}

console.log(pyramide);