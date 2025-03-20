// Función para regresar a la página principal
function goBack() {
    window.location.href = "../index.html";
}

// Función para abrir imagen en pantalla completa
function openFullscreen(img) {
    const modal = document.createElement("div");
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    modal.style.display = "flex";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";
    modal.style.zIndex = "1000";

    const fullImg = document.createElement("img");
    fullImg.src = img.src;
    fullImg.style.maxWidth = "90%";
    fullImg.style.maxHeight = "90%";
    fullImg.style.boxShadow = "0 4px 8px rgba(255, 255, 255, 0.2)";
    fullImg.style.borderRadius = "10px";

    modal.appendChild(fullImg);
    document.body.appendChild(modal);

    // Cerrar modal al hacer clic
    modal.onclick = function () {
        document.body.removeChild(modal);
    };
}