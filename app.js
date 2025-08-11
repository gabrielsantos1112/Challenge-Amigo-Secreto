//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let arrayDeAmigos = [];

function adicionarAmigo () {
    let amigo = document.querySelector ('input').value;

    if (amigo == "") {
        alert("Por favor, insira um nome válido.");
    } else {
        arrayDeAmigos.push(amigo);
        console.log(arrayDeAmigos);
        limparCampo();
    }
}

function limparCampo() {
    amigo = document.querySelector('input');
    amigo.value = "";
}