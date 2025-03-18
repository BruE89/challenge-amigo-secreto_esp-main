// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

// Función para agregar nombres a la lista
function agregarAmigo() {

    // Se obtiene el elemento del HTML, y luego se quitan los espacios en blanco al inicio y al final
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim();

    // Se comprueba que el nombre a agregar no esté vacío, de lo contrario se muestra la alerta
    if (nombreAmigo === "") {
        alert("Por favor, escribe un nombre válido.");
        return;
    }

    // Se agrega el nombre a la lista de amigos
    amigos.push(nombreAmigo);

    // Se limpia el input
    inputAmigo.value = "";

    agregarAmigosALista();
}

function agregarAmigosALista() {

    // Se obtiene el elemento del HTML
    const listaAmigos = document.getElementById("listaAmigos");

    // Se limpia la lista
    listaAmigos.innerHTML = "";

    // Se recorre la lista de amigos y se agregan a la lista del HTML
    for (let i = 0; i < amigos.length; i++) {

        const li = document.createElement("li");

        li.textContent = amigos[i];

        listaAmigos.appendChild(li);
    }
}

function sortearAmigo() {

    // Se comprueba que haya al menos un amigo en la lista, de lo contrario se muestra la alerta
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    // Se obtiene un índice aleatorio para seleccionar un amigo de la lista al azar
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Se obtiene el amigo sorteado pasándole el índice aleatorio
    const amigoSorteado = amigos[indiceAleatorio];

    //  Se muestra el amigo sorteado en el HTML y se crea una lista
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>${amigoSorteado}</li>`;
}

agregarAmigosALista();