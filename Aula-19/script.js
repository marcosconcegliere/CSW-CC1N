function abrepagina()
{
    window.open("index_aula19.html", "_blank");
}

function enviadados()
{
    document.getElementById("inputusuario").innerHTML = "Nome enviado foi:" + window.prompt("digite seu nome");
}

function exibedados()
{
    window.alert("Nome digitado foi:" + document.getElementById("nome").value);
}