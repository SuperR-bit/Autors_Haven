// Lista de contenido del libro (pueden ser texto o imágenes)
const bookPages = [
    "En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo...",
    "No había en toda la casa más que un gato y una olla con algo más vacíos que llenos.",
    "images/page1.jpg", "imagenes/page2.jpg",
    "Así pasaba el tiempo nuestro hidalgo, dando vueltas en su cabeza sobre cómo hacerse caballero...","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam aperiam vel tempora velit sunt est, modi consequatur error beatae possimus esse sint ad animi. Recusandae voluptatum delectus tenetur deserunt quod!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam aperiam vel tempora velit sunt est, modi consequatur error beatae possimus esse sint ad animi. Recusandae voluptatum delectus tenetur deserunt quod!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam aperiam vel tempora velit sunt est, modi consequatur error beatae possimus esse sint ad animi. Recusandae voluptatum delectus tenetur deserunt quod!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam aperiam vel tempora velit sunt est, modi consequatur error beatae possimus esse sint ad animi. Recusandae voluptatum delectus tenetur deserunt quod!", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam aperiam vel tempora velit sunt est, modi consequatur error beatae possimus esse sint ad animi. Recusandae voluptatum delectus tenetur deserunt quod!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam aperiam vel tempora velit sunt est, modi consequatur error beatae possimus esse sint ad animi. Recusandae voluptatum delectus tenetur deserunt quod!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam aperiam vel tempora velit sunt est, modi consequatur error beatae possimus esse sint ad animi. Recusandae voluptatum delectus tenetur deserunt quod!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam aperiam vel tempora velit sunt est, modi consequatur error beatae possimus esse sint ad animi. Recusandae voluptatum delectus tenetur deserunt quod!", ""
  ];
  
  // Referencias al DOM
  const bookContent = document.getElementById("book-content");
  const toTopButton = document.getElementById("to-top");
  
  // Función para cargar las páginas del libro
  function loadBookPages() {
    bookPages.forEach((page) => {
      const pageElement = document.createElement(typeof page === "string" && page.endsWith(".jpg") ? "img" : "div");
  
      if (pageElement.tagName === "IMG") {
        pageElement.src = page;
        pageElement.alt = "Página del libro";
      } else {
        pageElement.textContent = page;
      }
  
      bookContent.appendChild(pageElement);
    });
  }
  
  // Evento para regresar al inicio del libro
  toTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  
  // Inicializar contenido del libro
  loadBookPages();