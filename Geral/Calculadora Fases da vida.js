function verificarFaseDaVida() {
    let nome = document.getElementById("nome").value;
    let idade = parseInt(document.getElementById("idade").value);
    let fase = "";

    if (idade >= 0 && idade <= 12) {
        fase = "Infância";
    } else if (idade >= 13 && idade <= 19) {
        fase = "Adolescência";
    } else if (idade >= 20 && idade <= 59) {
        fase = "Adulto";
    } else if (idade >= 60) {
        fase = "Idoso";
    } else {
        fase = "Idade inválida";
    }

    document.getElementById("resultado").innerHTML = "Nome: " + nome + "<br>Idade: " + idade + "<br>Fase da vida: " + fase;
}

function validarNome() {
    let input = document.getElementById("nome");
    input.value = input.value.replace(/[^a-zA-Z]/g, "");
}

function validarIdade() {
    let input = document.getElementById("idade");
    input.value = input.value.replace(/[^0-9]/g, "");
}