function validarFormulario () {
    var
        nome = document.getElementById ("nome").value,
        email = document.getElementById ("email").value,
        mensagem = document.getElementById ("mensagem").value;

    if (nome == "" || email == "" || mensagem == "") {
        alert ("NOME, E-MAIL e MENSAGEM precisam estar preenchidos!");
    }

    if (nome != "" && email != "" && mensagem != ""){
        alert ("Dados enviados!");
    }
}