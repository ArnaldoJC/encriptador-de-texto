// Función de encriptación simple
function encriptar() {
    const texto = document.getElementById('texto').value;
    const textoEncriptado = texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    document.getElementById('texto-desencriptado').value = textoEncriptado;
}

// Función de desencriptación simple
function desencriptar() {
    const texto = document.getElementById('texto').value;
    const textoDesencriptado = texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    document.getElementById('texto-desencriptado').value = textoDesencriptado;
}

// Función para copiar el texto desencriptado al portapapeles
function copiar() {
    const texto = document.getElementById('texto-desencriptado');
    texto.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
}
