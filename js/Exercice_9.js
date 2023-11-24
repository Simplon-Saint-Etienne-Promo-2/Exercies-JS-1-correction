let nombre = prompt("Veuillez saisir un nombre :");

function tableMultiplication(nb){
    let message = "";

    for(let decompte = 1; decompte <= 10; decompte += 1 ){
        message += nb + " x " + decompte + " = "  + decompte * nb + "\n";
    }

    return message;
}

alert(tableMultiplication(nombre));