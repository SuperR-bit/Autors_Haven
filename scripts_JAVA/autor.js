// Archivos
const uploadForm = document.getElementById("upload-form");
const fileList = document.getElementById("file-list");

uploadForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const file = document.getElementById("file-upload").files[0];
    if (file) {
        const listItem = document.createElement("li");
        listItem.textContent = file.name;
        fileList.appendChild(listItem);
    }
});

// Editor de texto
document.getElementById("save-text").addEventListener("click", () => {
    const text = document.getElementById("text-editor").value;
    const blob = new Blob([text], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "texto.txt";
    link.click();
});

// Dibujo
const canvas = document.getElementById("drawing-canvas");
const ctx = canvas.getContext("2d");
let drawing = false;

canvas.addEventListener("mousedown", () => drawing = true);
canvas.addEventListener("mouseup", () => drawing = false);
canvas.addEventListener("mousemove", (e) => {
    if (!drawing) return;
    ctx.fillStyle = "#fff";
    ctx.fillRect(e.offsetX, e.offsetY, 2, 2);
});

// Botón para redirigir al dibujo avanzado
document.getElementById("advanced-drawing").addEventListener("click", () => {
    window.location.href = "../dibujo.html"; // Cambia la ruta si es necesario
});


document.getElementById("clear-drawing").addEventListener("click", () => ctx.clearRect(0, 0, canvas.width, canvas.height));
