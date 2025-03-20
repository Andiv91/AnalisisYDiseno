// Función para volver a la página anterior
function goBack() {
    window.location.href = "../index.html"; // Ajusta la ruta si es necesario
}

// Función para abrir imagen en pantalla completa
function openFullscreen(img) {
    // Crear el modal
    const modal = document.createElement('div');
    modal.className = 'fullscreen-modal';
    
    // Crear la imagen ampliada
    const fullImg = document.createElement('img');
    fullImg.src = img.src;
    fullImg.alt = img.alt;
    
    // Agregar la imagen al modal
    modal.appendChild(fullImg);
    
    // Agregar el modal al body
    document.body.appendChild(modal);
    
    // Prevenir scroll del body
    document.body.style.overflow = 'hidden';
    
    // Añadir evento de cierre
    modal.addEventListener('click', function() {
        document.body.removeChild(modal);
        document.body.style.overflow = 'auto';
    });
    
    // Permitir cerrar con tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (document.querySelector('.fullscreen-modal')) {
                document.body.removeChild(modal);
                document.body.style.overflow = 'auto';
            }
        }
    });
}