let n1 = parseInt(prompt("Digite sua primeira nota "))

let n2 = parseInt(prompt("Digite sua segunda nota "))

let n3 = parseInt(prompt("Digite sua terceira nota "))

let n4 = parseInt(prompt("Digite sua quarta nota "))

// Calculando a média

let soma = (n1 + n2 + n3 + n4) / 4;

console.log(soma)

if (soma >= 7.0) {
    console.log("APROVADO");

} else if (soma >= 5.0) {
    console.log("RECUPERAÇÃO");
} else {
    console.log("REPROVADO");
}