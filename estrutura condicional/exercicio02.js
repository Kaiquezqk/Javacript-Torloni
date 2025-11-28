let num = prompt("Digite um número de 1 a 7 para representar um dia da semana:");

num = Number(num);

let dia;

switch (num) {
    case 1:
        dia = "Domingo";
        break;
    case 2:
        dia = "Segunda";
        break;
    case 3:
        dia = "Terça";
        break;
    case 4:
        dia = " Quarta";
        break;
    case 5:
        dia = "Quinta";
        break;
    case 6:
        dia = "Sexta";
        break;
    case 7:
        dia = "Sabado";
        break;
    default:
        dia = "Número inválido! Digite de 1 a 7.";
}

alert(dia);
