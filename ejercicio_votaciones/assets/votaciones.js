// === CONTADOR DE VOTOS ===

// Elemento donde se mostrará el resultado
const contenedor = document.createElement("div");
document.body.appendChild(contenedor);

let votosHiram = 0;
let votosAngel = 0;
let votosOmar = 0;
let votosNulos = 0;
let voto;

// Mensaje inicial (único con alert/prompt)
alert("Bienvenido al sistema de votación.\n\nCandidatos:\n1. Hiram\n2. Ángel\n3. Omar\n\nIngrese 0 para finalizar.");

do {
  voto = parseInt(prompt("Ingrese el número del candidato (1, 2 o 3) o 0 para terminar:"));

  if (voto > 0) {
    switch (voto) {
      case 1:
        votosHiram++;
        break;
      case 2:
        votosAngel++;
        break;
      case 3:
        votosOmar++;
        break;
      default:
        votosNulos++;
    }
  } else if (voto < 0 || isNaN(voto)) {
    alert("Por favor, ingrese un valor válido y positivo.");
  }
} while (voto !== 0);

// Calcular totales
let totalVotos = votosHiram + votosAngel + votosOmar + votosNulos;
let maxVotos = Math.max(votosHiram, votosAngel, votosOmar);

// Comprobar empate
let candidatosEmpatados = [];
if (votosHiram === maxVotos) candidatosEmpatados.push("Hiram");
if (votosAngel === maxVotos) candidatosEmpatados.push("Ángel");
if (votosOmar === maxVotos) candidatosEmpatados.push("Omar");

// Si hay empate
if (candidatosEmpatados.length > 1) {
  alert("⚖️ Empate entre: " + candidatosEmpatados.join(" y "));
  let votoExtra = parseInt(prompt("Voto adicional para desempatar (1. Hiram / 2. Ángel / 3. Omar):"));
  switch (votoExtra) {
    case 1:
      votosHiram++;
      break;
    case 2:
      votosAngel++;
      break;
    case 3:
      votosOmar++;
      break;
    default:
      votosNulos++;
  }
}

// Determinar ganador
let ganador = "";
if (votosHiram > votosAngel && votosHiram > votosOmar) ganador = "Hiram";
else if (votosAngel > votosHiram && votosAngel > votosOmar) ganador = "Ángel";
else if (votosOmar > votosHiram && votosOmar > votosAngel) ganador = "Omar";

// Porcentaje
let votosGanador = Math.max(votosHiram, votosAngel, votosOmar);
let porcentaje = ((votosGanador / totalVotos) * 100).toFixed(2);

// Mostrar resultados en la página
contenedor.innerHTML = `
  <h2>📊 Resultados de la Votación</h2>
  <p><b>Hiram:</b> ${votosHiram} votos</p>
  <p><b>Ángel:</b> ${votosAngel} votos</p>
  <p><b>Omar:</b> ${votosOmar} votos</p>
  <p><b>Votos nulos:</b> ${votosNulos}</p>
  <p><b>Total de votos:</b> ${totalVotos}</p>
  <h3>🏆 Ganador: ${ganador}</h3>
  <p><b>Porcentaje de aceptación:</b> ${porcentaje}%</p>
`;
