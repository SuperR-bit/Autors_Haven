const chapters = [
    { number: 1, title: "Introducción" },
    { number: 2, title: "El misterio comienza" },
    { number: 3, title: "La gran revelación" },
    { number: 4, title: "El clímax" },
    { number: 5, title: "El desenlace" }
];

const chapterList = document.getElementById("chapter-list");
const mainMenuButton = document.getElementById("main-menu");

// Almacenar capítulos leídos y guardados en localStorage
const readChapters = JSON.parse(localStorage.getItem("readChapters")) || [];
const savedChapters = JSON.parse(localStorage.getItem("savedChapters")) || [];

// Generar la lista de capítulos
function renderChapters() {
    chapterList.innerHTML = "";

    chapters.forEach(chapter => {
        const listItem = document.createElement("li");
        listItem.className = readChapters.includes(chapter.number) ? "read" : "";

        const titleSpan = document.createElement("span");
        titleSpan.textContent = `Capítulo ${chapter.number}: ${chapter.title}`;
        listItem.appendChild(titleSpan);

        const buttonsDiv = document.createElement("div");

        // Botón para marcar como leído
        const readButton = document.createElement("button");
        readButton.textContent = "Marcar como leído";
        readButton.onclick = () => markAsRead(chapter.number);
        buttonsDiv.appendChild(readButton);

        // Botón para guardar capítulo
        const saveButton = document.createElement("button");
        saveButton.textContent = savedChapters.includes(chapter.number)
            ? "Guardado"
            : "Guardar";
        saveButton.disabled = savedChapters.includes(chapter.number);
        saveButton.onclick = () => saveChapter(chapter.number, saveButton);
        buttonsDiv.appendChild(saveButton);

        // Botón para entrar al capítulo
        const enterButton = document.createElement("button");
        enterButton.textContent = "Leer";
        enterButton.onclick = () => enterChapter(chapter.number);
        buttonsDiv.appendChild(enterButton);

        listItem.appendChild(buttonsDiv);
        chapterList.appendChild(listItem);
    });
}

// Marcar un capítulo como leído
function markAsRead(chapterNumber) {
    if (!readChapters.includes(chapterNumber)) {
        readChapters.push(chapterNumber);
        localStorage.setItem("readChapters", JSON.stringify(readChapters));
        renderChapters();
    }
}

// Guardar un capítulo
function saveChapter(chapterNumber, button) {
    if (!savedChapters.includes(chapterNumber)) {
        savedChapters.push(chapterNumber);
        localStorage.setItem("savedChapters", JSON.stringify(savedChapters));
        button.textContent = "Guardado";
        button.disabled = true;
    }
}

// Navegar al capítulo
function enterChapter(chapterNumber) {
    alert(`Entrando al capítulo ${chapterNumber}...`);
    // Redirigir a la página del capítulo
    // Cambia la URL por la ruta de la página de capítulos
    //window.location.href = `comic.html?chapter=${chapterNumber}`;
    window.location.href = `manga.html?chapter=${chapterNumber}`;
    window.location.href = `Manhuaw.html?chapter=${chapterNumber}`;
    window.location.href = `libro.html?chapter=${chapterNumber}`;
}

// Regresar al menú principal
mainMenuButton.addEventListener("click", () => {
    window.location.href = "index_l.html"; // Cambia por la URL principal
});

// Inicializar la lista de capítulos
renderChapters();