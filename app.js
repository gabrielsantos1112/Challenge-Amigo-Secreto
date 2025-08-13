//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let arrayDeAmigos = [];

function adicionarAmigo () {
    let amigo = document.querySelector ('input').value;

    if (amigo == "") {
        alert("Por favor, insira um nome válido.");
    } else {
        arrayDeAmigos.push(amigo);
        atualizaListaDeAmigos();
        limparCampo();
    }
}

function limparCampo() {
    amigo = document.querySelector('input');
    amigo.value = "";
}

function atualizaListaDeAmigos () {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i = 0; i < arrayDeAmigos.length; i++) {
        let nome = arrayDeAmigos[i];
        let itemDeLista = document.createElement('li');
        itemDeLista.textContent = nome;
        lista.appendChild(itemDeLista);
    }
}

function sortearAmigo () {
    if (arrayDeAmigos.length === 0) {
        alert("Insira nomes para que o sorteio seja realizado!");
    } else {
        let indiceAleatorio = Math.floor(Math.random() * arrayDeAmigos.length);
        let amigoSorteado = arrayDeAmigos [indiceAleatorio];
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `O amigo secreto sorteado é: <strong>${amigoSorteado}</strong>`;
    }
}