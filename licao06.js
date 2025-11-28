// Estrutura de Repetição
// while.
// calcular a soma dos números de 1 a 100 utilizando a estrutura

let numero = 1; // variavel inicializadora
let soma = 0;

// condicao
while (numero <= 100) { // Esta somando os numeros
    soma = soma + numero; //incremento de cada volta
    numero++; // incremento
}

alert("A soma dos números de 1 a 100 é: " + soma);