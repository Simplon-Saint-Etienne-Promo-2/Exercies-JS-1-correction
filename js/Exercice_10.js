let mot = prompt("Veuillez saisir un mot :");


function motEnColonne(word){
    let message = "";
    
    for(let positionLettre = 0; positionLettre < word.length; positionLettre += 1){
        message += word[positionLettre] + "\n";
    }

    return message;
}



alert(motEnColonne(mot));


 