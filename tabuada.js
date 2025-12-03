function exibirTabuadaEscolhida() {
    let tabuadaEscolhida = parseInt(prompt("Digite o número da Tabuada desejada:"))


    console.log(`=====TABUADA ${tabuadaEscolhida}=====`)

    for (let i = 1; i <= 10; i++) {
        //       2 X 4 = ?
        console.log(tabuadaEscolhida + " X " + i + " = " + (tabuadaEscolhida * i));
    }
}

//chama a funcao
// exibirTabuadaEscolhida();

//crie uma função para que solicite o nome da pessoa e exiba-o

function exibirNomeSolicitado() {
    let nomeSolicitado = prompt("Digite seu nome")

    return nomeSolicitado;
}
// let nome = exibirNomeSolicitado();

// alert(nome);

function somarDoisNumeros(numero1, numero2) {

    console. log(numero1+numero2);
}

somarDoisNumeros(10, 10);
 
//Crie função para o exercicio 08 de Estrutura Condicional
//passa via paramentro o peso e a aultura

function exibirIMC() {
    
}