function cifrarmensaje() {
    const textoOriginal = document.getElementById("textoOriginal").value;
    const desplazamiento = parseInt(document.getElementById("desplazamiento").value);

    let textoCifrado = "";

    for (let i = 0; i < desplazamiento; i++) {
        for (let j = i; j < textoOriginal.length; j += desplazamiento) {
            textoCifrado += textoOriginal[j];
        }
    }

    document.getElementById("textoCifrado").textContent = textoCifrado;
}

function descifrarmensaje() {
    const textoOriginal = document.getElementById("textoOriginal").value;
    const desplazamiento = parseInt(document.getElementById("desplazamiento").value);

    const filas = Math.ceil(textoOriginal.length / desplazamiento);
    const textodecifrado = new Array(filas).fill("");

    let index = 0;
    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < desplazamiento; j++) {
            if (index < textoOriginal.length) {
                textodecifrado[i] += textoOriginal[index];
                index++;
            }
        }
    }

    document.getElementById("textoDescifrado").textContent = textodecifrado.join("");
}