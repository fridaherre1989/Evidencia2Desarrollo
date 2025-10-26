function dividirNumeros() {
   // Declaracion de variables
                    let numero1, numero2, resultado;

                    // Obtener los valores y asignarlos a las variables
                    numero1 = parseFloat(document.getElementById('txtNumero1').value);
                    numero2 = parseFloat(document.getElementById('txtNumero2').value);
                    resultado = numero1 / numero2;

                   // Imprimir el resultado
                   alert('El resultado es: ' + resultado); 
}