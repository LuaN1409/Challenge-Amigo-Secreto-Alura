let listaAmigos = [];
const inputAmigo = document.getElementById('amigo');
const NombreAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

function agregarAmigo() {
// Casos de error
    if (inputAmigo.value === '') {
        alert('Debes ingresar un nombre válido');
        inputAmigo.value = '';
        return;
    }
    else if (listaAmigos.includes(inputAmigo.value)) {
        alert('Tu amigo ya fue agregado antes');
        inputAmigo.value = '';
        return;
    }
// Actualizamos la lista de amigos y limpiar espacio de input
    listaAmigos.push(inputAmigo.value);
    NombreAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;
    inputAmigo.value = '';
};

function sortearAmigo() {
// Casos de error
    if (listaAmigos.length === 0) {
        alert('No hay amigos agregados');
        return;
    }
    else if (listaAmigos.length === 1) {
        alert('No hay suficientes amigos agregados');
        return;
    }

// Sorteamos los amigos y mostramos el resultado 
    let amigoSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    resultado.innerHTML = `<li>Tu amigo secreto es: ${amigoSorteado}</li>`;
    document.getElementById('reiniciar').removeAttribute('disabled');
}

function reiniciarSorteo() {

// Condiciones iniciales
    inputAmigo.value = '';
    listaAmigos = [];
    NombreAmigos.innerHTML = '';
    resultado.innerHTML = '';

// Deshabilitamos el botón de reiniciar
    document.getElementById('reiniciar').setAttribute('disabled','true');
}