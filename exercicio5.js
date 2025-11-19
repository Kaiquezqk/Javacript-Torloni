let n1 = parseFloat(prompt("Digite o primeiro número:"));
let n2 = parseFloat(prompt("Digite o segundo número:"));
let n3 = parseFloat(prompt("Digite o terceiro número:"));

if (n1 < n2 && n2 < n3) {
    alert("Os números estão em ordem crescente.");
} else {
    alert("Os números NÃO estão em ordem crescente.");
}
