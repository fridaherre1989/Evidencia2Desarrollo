// === CAMBIAR TAMAÑO DEL TEXTO AL HACER CLIC ===

// Crear el párrafo dinámicamente
const parrafo = document.createElement("p");
parrafo.textContent = "Haz clic en este texto para cambiar su tamaño.";
parrafo.style.fontSize = "18px";
parrafo.style.cursor = "pointer";
parrafo.style.transition = "all 0.3s ease";
document.body.appendChild(parrafo);

// Agregar evento para cambiar tamaño
parrafo.addEventListener("click", function() {
  if (parrafo.style.fontSize === "32px") {
    parrafo.style.fontSize = "18px";
  } else {
    parrafo.style.fontSize = "32px";
  }
});