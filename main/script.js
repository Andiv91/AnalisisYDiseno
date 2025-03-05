function mostrarContenido(seccion) {
    const contenido = {
        ciclo: "El ciclo de vida del software es el conjunto de etapas por las que pasa un producto de software.",
        requerimientos: "Los requerimientos y casos de uso definen las necesidades del usuario y cómo interactuará con el sistema.",
        mockups: "Los usuarios pueden ser administradores, clientes y desarrolladores con diferentes roles dentro del sistema."
    };

    document.getElementById('contenido').innerHTML = `<p>${contenido[seccion]}</p>`;
}

// Redirigir a la página del ciclo de vida cuando se hace clic en el botón correspondiente
document.addEventListener("DOMContentLoaded", function () {
    const cicloBtn = document.getElementById("btnCiclo");

    if (cicloBtn) {
        cicloBtn.addEventListener("click", function () {
            window.location.href = "../ciclo/ciclo.html";
        });
    }
});
