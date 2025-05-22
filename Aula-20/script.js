function mostraridade() {
    var idade;
    idade = document.getElementById("idade").value;
    if (idade < 0){
        alert ('Idade inválida')
    }
    else if (idade = 0){
        alert ('recém nascido')
    }
    else if (idade > 0 && idade < 10){
        alert ('criança')
    }
    else if (idade > 9 && idade < 16){
        alert ('adolescente')
    }
    else if (idade > 15 && idade < 25){
        alert ('jovem')
    }
    else if (idade > 24 && idade < 60){
        alert ('adulto')
    }
    else if (idade > 59){
        alert ('idoso')
    }
    else if (idade = ''){
        alert ('Não digitou nada')
    }
}

