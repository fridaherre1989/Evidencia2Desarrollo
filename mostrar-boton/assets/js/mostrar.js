function mostrarOcultar() {
    let imagen = document.getElementById("imgGato");
    let boton = document.querySelector("button");

    if (imagen.style.display === "none") {
        imagen.style.display = "block";
        boton.textContent = "Ocultar Imagen";
    } else {
        imagen.style.display = "none";
        boton.textContent = "Mostrar Imagen";
    }
}
