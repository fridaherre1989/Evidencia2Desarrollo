function convertirDecimalABinario() {
    // Obtener el valor del input
    let decimal = parseInt(document.getElementById('txtDecimal').value); 
    let binario = "";

    // Validar y manejar el caso 0.
    if (isNaN(decimal) || decimal < 0) {
        // Usa alert() para errores
        alert("Por favor, ingrese un número decimal entero positivo."); 
        document.getElementById('txtBinario').value = "Error";
        return;
    }

    if (decimal === 0) {
        binario = "0";
    } else {
        // divisiones sucesivas. Usando un while.
        let cociente = decimal;
        while (cociente > 0) {
            let residuo = cociente % 2;
            binario = residuo + binario;
            cociente = Math.floor(cociente / 2);
        }
    }

    // Imprimir el resultado en el input
    document.getElementById('txtBinario').value = binario;
}