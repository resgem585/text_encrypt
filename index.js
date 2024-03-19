function encryptText() {
    var inputText = document.getElementById("inputText").value;
    var sanitizedText = sanitizeText(inputText);
    var encryptedText = encrypt(sanitizedText); // Usando un desplazamiento de 3 para el cifrado César
    document.getElementById("inputText").value = encryptedText;
    document.getElementById("messageTitle").innerText = "Texto Encriptado";
    document.getElementById("messageText").innerText = "Texto encriptado: " + encryptedText;
}

function decryptText() {
    var inputText = document.getElementById("inputText").value;
    var decryptedText = decrypt(inputText); // Deshaciendo el cifrado César con un desplazamiento de 3
    document.getElementById("inputText").value = decryptedText;
    document.getElementById("messageTitle").innerText = "Texto Desencriptado";
    document.getElementById("messageText").innerText = "Texto desencriptado: " + decryptedText;
}

function encrypt(text) {
    var result = '';
    for (var i = 0; i < text.length; i++) {
        var charCode = text.charCodeAt(i);
        var encryptedCharCode = charCode + 1;
        if (encryptedCharCode > 122) {
            encryptedCharCode = 97; // Wrap around if it goes beyond 'z'
        }
        result += String.fromCharCode(encryptedCharCode);
    }
    return result;
}

function decrypt(text) {
    var result = '';
    for (var i = 0; i < text.length; i++) {
        var charCode = text.charCodeAt(i);
        var decryptedCharCode = charCode - 1;
        if (decryptedCharCode < 97) {
            decryptedCharCode = 122; // Wrap around if it goes below 'a'
        }
        result += String.fromCharCode(decryptedCharCode);
    }
    return result;
}

function sanitizeText(text) {
    // Remover caracteres no permitidos (acentos, caracteres especiales, etc.) y convertir a minúsculas
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z]/g, '');
}
