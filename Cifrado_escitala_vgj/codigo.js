function cifrarMensaje() {
    const mensaje = document.getElementById("mensaje").value;
    const clave = parseInt(document.getElementById("clave").value);

    const mensajeCifrado = cifrarEscitala(mensaje, clave);

    document.getElementById("resultado1").textContent = mensajeCifrado;
}

function descifrarMensaje() {
    const mensaje = document.getElementById("mensaje").value;
    const clave = parseInt(document.getElementById("clave").value);

    const mensajeDescifrado = descifrarEscitala(mensaje, clave);

    document.getElementById("resultado2").textContent = mensajeDescifrado;
}

function cifrarEscitala(mensaje, clave) {
    const filas = Math.ceil(mensaje.length / clave);
    let matriz = Array.from({ length: filas }, () => Array(clave).fill(" "));

    let index = 0;
    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < clave; j++) {
            if (index < mensaje.length) {
                matriz[i][j] = mensaje[index];
                index++;
            }
        }
    }

    let mensajeCifrado = "";
    for (let j = 0; j < clave; j++) {
        for (let i = 0; i < filas; i++) {
            mensajeCifrado += matriz[i][j];
        }
    }

    return mensajeCifrado;
}

function descifrarEscitala(mensaje, clave) {
    const filas = Math.ceil(mensaje.length / clave);
    let matriz = Array.from({ length: filas }, () => Array(clave).fill(" "));

    let index = 0;
    for (let j = 0; j < clave; j++) {
        for (let i = 0; i < filas; i++) {
            if (index < mensaje.length) {
                matriz[i][j] = mensaje[index];
                index++;
            }
        }
    }

    let mensajeDescifrado = "";
    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < clave; j++) {
            mensajeDescifrado += matriz[i][j];
        }
    }

    return mensajeDescifrado.trim();
}
