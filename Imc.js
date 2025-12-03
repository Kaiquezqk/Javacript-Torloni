function calcularIMC(peso, altura) {

    //2 - Copiar do IMC
    //3 - Colar o código do IMC dentro da função
    let imc = peso / (altura * altura);
    let classificacao = "";

    if (imc < 15.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 25) {
        classificacao = "Peso normal";
    } else if (imc < 30) {
        classificacao = "Sobrepeso";
    } else if (imc < 35) {
        classificacao = "Obesidade Grau I";
    } else if (imc < 40) {
        classificacao = "Obesidade Grau II";
    } else {
        classificacao = "Obesidade Grau III ou Mórbida";
    }

    //Retornando o resultado
    return `IMC: ${imc.toFixed(2)} - Classificação: ${classificacao}`;
}

//4 - Chamar a função e atribuir peso e altura
let resultado = calcularIMC(80, 1.75);
console.log(resultado);