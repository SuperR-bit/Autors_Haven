// Foros
const forumForm = document.getElementById("forum-form");
const forumList = document.getElementById("forum-list");

forumForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.getElementById("forum-title").value;
    const content = document.getElementById("forum-content").value;

    const post = document.createElement("li");
    post.innerHTML = `<strong>${title}</strong><p>${content}</p>`;
    forumList.appendChild(post);

    forumForm.reset();
});

// Imágenes
const imageForm = document.getElementById("image-form");
const imageGallery = document.getElementById("image-gallery");

imageForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const file = document.getElementById("image-upload").files[0];

    if (file) {
        const img = document.createElement("img");
        img.src = URL.createObjectURL(file);
        imageGallery.appendChild(img);
    }
    imageForm.reset();
});

// Chat Privado
const chatForm = document.getElementById("chat-form");
const chatBox = document.getElementById("chat-box");

chatForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const message = document.getElementById("chat-input").value;

    const msgDiv = document.createElement("div");
    msgDiv.textContent = message;
    chatBox.appendChild(msgDiv);

    chatForm.reset();
});
