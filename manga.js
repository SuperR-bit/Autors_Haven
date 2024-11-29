const comicPages = [
  "imagenes/page1.jpg",
  "imagenes/page2.jpg",
  "imagenes/page3.jpg",
  "imagenes/page4.jpg"
];

let currentPage = 0;
let zoomLevel = 1;

// Referencias a elementos del DOM
const comicImg = document.getElementById("comic-page");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const zoomInButton = document.getElementById("zoom-in");
const zoomOutButton = document.getElementById("zoom-out");
const commentInput = document.getElementById("comment-input");
const commentsList = document.getElementById("comments-list");
const submitComment = document.getElementById("submit-comment");

// Actualizar página del cómic
function updateComicPage() {
  comicImg.src = comicPages[currentPage];
  comicImg.style.transform = `scale(${zoomLevel})`;
}

// Eventos para navegación
prevBtn.addEventListener("click", () => {
  if (currentPage > 0) {
      currentPage--;
      updateComicPage();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentPage < comicPages.length - 1) {
      currentPage++;
      updateComicPage();
  }
});

// Eventos de zoom
zoomInButton.addEventListener("click", () => {
  zoomLevel = Math.min(zoomLevel + 0.1, 2);
  updateComicPage();
});

zoomOutButton.addEventListener("click", () => {
  zoomLevel = Math.max(zoomLevel - 0.1, 0.5);
  updateComicPage();
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

// Inicialización
updateComicPage();
