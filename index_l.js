

function setupLoadMore(buttonId, containerClass, initialItems = 4, increment = 4) {
    const loadMoreBtn = document.querySelector(buttonId);
    const container = document.querySelector(containerClass);

    if (!loadMoreBtn || !container) {
        console.error(`Botón o contenedor no encontrado para: ${buttonId}, ${containerClass}`);
        return;
    }

    let isExpanded = false; // Para rastrear si está expandido o no
    let currentItem = initialItems;

    // Inicializar mostrando solo los primeros elementos
    const boxes = [...container.querySelectorAll(".box-1, .box-2 , .box-3")];
    boxes.forEach((box, index) => {
        box.style.display = index < initialItems ? "inline-block" : "none";
    });

    // Controlador del botón
    loadMoreBtn.onclick = () => {
        if (!isExpanded) {
            // Mostrar más elementos
            for (let i = currentItem; i < currentItem + increment; i++) {
                if (boxes[i]) {
                    boxes[i].style.display = "inline-block";
                }
            }
            currentItem += increment;

            if (currentItem >= boxes.length) {
                loadMoreBtn.innerText = "Ocultar"; // Cambiar texto del botón
                isExpanded = true;
            }
        } else {
            // Ocultar todos menos los iniciales
            boxes.forEach((box, index) => {
                box.style.display = index < initialItems ? "inline-block" : "none";
            });
            loadMoreBtn.innerText = "Cargar más"; // Restablecer texto del botón
            currentItem = initialItems;
            isExpanded = false;
        }
    };
}

// Configura para las secciones específicas
setupLoadMore('#load-more-1', '.box-container-1');
setupLoadMore('#load-more-2', '.box-container-2');
setupLoadMore('#load-more-3', '.box-container-3');
