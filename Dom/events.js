let elementoBtn = document.getElementById ("btn");


elementoBtn.addEventListener("click" , () => {
alert("Voce clicou no botao");


elementoBtn.style.backgroundColor = "purple"


let novoElemento = document.createElement("a");
novoElemento.textContent = "DE NOVO | BOLOFOFOS";
novoElemento.href = "https://www.youtube.com/watch?v=5JIVd8wVeBA&list=R2op2l2b0lVDw&index=2";

elementoBtn.addEventListener("click", () => {
    // alert("Você clicou no botão");
    elementoBtn.style.backgroundColor = "purple";

 document.body.appendChild(novoElemento)
});
})