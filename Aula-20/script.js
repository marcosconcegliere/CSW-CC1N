function calcular() {
    var idade = document.getElementById("idade").value;

    if (idade == ''){
        alert('Não digitou nada');
        document.getElementById ('mostrar').innerHTML = 'Não digitou nada';}
    else{
        idade = Number(idade);
    }
   
    if (idade < 0){
        document.getElementById ('mostrar').innerHTML = 'idade inválida';
    }
    else if (idade === 0){
        document.getElementById ('mostrar').innerHTML = 'recém nascido';
    }
    else if (idade > 0 && idade <= 9){
         document.getElementById ('mostrar').innerHTML = 'criança';
    }
    else if (idade >= 10 && idade <= 15){
         document.getElementById ('mostrar').innerHTML = 'adolescente';
    }
    else if (idade >= 16 && idade <= 25){
         document.getElementById ('mostrar').innerHTML = 'jovem';
    }
    else if (idade >= 26 && idade < 60){
         document.getElementById ('mostrar').innerHTML = 'adulto';
    }
    else if (idade > 59){
         document.getElementById ('mostrar').innerHTML = 'idoso';
    }
    
}

