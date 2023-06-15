
/*
 Resultado abaixo de 17 - Muito abaixo do peso;<br>
            Resultado entre 17 e 18,49 - Abaixo do peso;<br>
            Resultado entre 18,5 e 24,9 - Peso ideal;<br>
            Resultado entre 25 e 29,9 - Sobrepeso;<br>
            Resultado entre 30 e 34,9- Obesidade grau I;<br>
            Resultado entre 35 e 39,9 - Obesidade grau II (severa);<br>
            Resultado acima de 40 - Obesidade grau III (morbida);<br>
*/
var altura;
var peso;
var imc;
var resultado;

function calcular(event) {
    event.preventDefault();

    peso = parseFloat(document.getElementById("peso").value);
    altura = parseFloat(document.getElementById("altura").value);

    imc = peso / (altura * altura);

    console.log(imc);

    resultado = document.getElementById("resultado");

    if (imc < 17) {
        resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> Cuidado!!! Você está muito abaixo do peso!";
    }
    if (imc >= 17 && imc <= 18.49) {
        resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> Abaixo do peso!";
    }
    if (imc >= 18.5 && imc <= 24.99) {
        resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> Parabéns! Você está no peso ideal!";
    }
    if (imc >= 25 && imc <= 29.99) {
        resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> Você está com sobrepeso!";
    }
    if (imc >= 30 && imc <= 34.99) {
        resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> Cuidado! Obesidade grau I!";
    }
    if (imc >= 35 && imc <= 39.99) {
        resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> Cuidado! Obesidade grau II!";
    }
    if (imc > 39.99) {
        resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> Cuidado!!! Obesidade grau III!";
    }

    document.getElementById("peso").value="";
    document.getElementById("altura").value="";
}