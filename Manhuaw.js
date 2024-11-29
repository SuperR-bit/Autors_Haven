// Lista de imágenes del manhwa
const manhwaPages = [
  "imagenes/page1.jpg",
  "imagenes/page2.jpg",
  "imagenes/page3.jpg",
  "imagenes/page4.jpg"
];

const manhwaContent = document.getElementById("manhwa-content");
const zoomInButton = document.getElementById("zoom-in");
const zoomOutButton = document.getElementById("zoom-out");
const commentsList = document.getElementById("comments-list");
const commentInput = document.getElementById("comment-input");
const submitComment = document.getElementById("submit-comment");

let zoomLevel = 1;

// Cargar páginas del manhwa
function loadManhwaPages() {
manhwaContent.innerHTML = ""; // Limpia contenido previo
manhwaPages.forEach((pageSrc) => {
  const img = document.createElement("img");
  img.src = pageSrc;
  img.alt = "Página del manhwa";
  img.style.transform = `scale(${zoomLevel})`;
  manhwaContent.appendChild(img);
});
}

// Ajustar zoom
zoomInButton.addEventListener("click", () => {
zoomLevel = Math.min(zoomLevel + 0.1, 2);
loadManhwaPages();
});

zoomOutButton.addEventListener("click", () => {
zoomLevel = Math.max(zoomLevel - 0.1, 0.5);
loadManhwaPages();
});

// Enviar comentario
submitComment.addEventListener("click", () => {
const comment = commentInput.value.trim();
if (comment) {
  const commentElement = document.createElement("p");
  commentElement.textContent = comment;
  commentsList.appendChild(commentElement);
  commentInput.value = ""; // Limpia el input
}
});

// Navegación entre capítulos
document.getElementById("prev-chapter").addEventListener("click", () => {
alert("Cargando capítulo anterior...");
// Aquí podrías cargar un nuevo set de páginas
});

document.getElementById("next-chapter").addEventListener("click", () => {
alert("Cargando capítulo siguiente...");
// Aquí podrías cargar un nuevo set de páginas
});

document.getElementById("main-page").addEventListener("click", () => {
window.location.href = "index.html"; // Cambiar por la URL principal
});

// Inicializa el contenido
loadManhwaPages();
