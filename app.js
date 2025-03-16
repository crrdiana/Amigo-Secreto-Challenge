
// Declaramos un array para almacenar los nombres de los amigos
let amigos = [];

// agregamos la función para agregar amigos
function agregarAmigo() {
    let input = document.getElementById("nombreAmigo");
    let nombre = input.value.trim();
    
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
    
    amigos.push(nombre);
    input.value = ""; // Limpiar el campo de entrada
    mostrarLista(); // Actualizar la lista en la página
}

// creamos la función para mostrar la lista de amigos
function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar
    
    for (let amigo of amigos) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    }
}

// usamos la función para seleccionar un amigo al azar
function seleccionarAmigoAzar() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }
    
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSeleccionado = amigos[indiceAleatorio];
    
    document.getElementById("amigoSorteado").innerHTML = `Amigo seleccionado: <strong>${amigoSeleccionado}</strong>`;
}
