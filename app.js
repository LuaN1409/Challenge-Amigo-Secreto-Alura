let listaAmigos = [];
const inputAmigo = document.getElementById('amigo');
const NombreAmigos = document.getElementById('listaAmigos');

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