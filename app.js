let listaAmigos = [];
const inputAmigo = document.getElementById('amigo');
const NombreAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

function agregarAmigo() {

    if (inputAmigo.value === '') {
        alert('Debes ingresar un nombre válido');
        inputAmigo.value = '';
        return;
    }
    else if (listaAmigos.includes(inputAmigo.value)) {
        alert('El nombre ya está en la lista');
        inputAmigo.value = '';
        return;
    }

    listaAmigos.push(inputAmigo.value);
    NombreAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;
    inputAmigo.value = '';
};

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert('No hay amigos en la lista');
        return;
    }

    let amigoSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    resultado.innerHTML = `<li>Tu amigo secreto es: ${amigoSorteado}</li>`;
}