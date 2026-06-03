// 1. Captura de elementos de la interfaz (DOM)
const formulario = document.getElementById("form-invertir");
const inputTexto = document.getElementById("input-texto");
const contenedorResultado = document.getElementById("contenedor-resultado");
const textoResultado = document.getElementById("texto-resultado");

// 2. Función flecha pura encargada de voltear la cadena de caracteres
const invertirCadena = (texto) => texto.split("").reverse().join("");

// 3. Escuchador de eventos (Event Listener) asignado al formulario
formulario.addEventListener("submit", (evento) => {
    // Evita el comportamiento nativo de refrescar la página
    evento.preventDefault(); 

    // Capturar el valor introducido por el usuario
    const cadenaOriginal = inputTexto.value;

    // Ejecutar la función flecha de procesamiento
    const cadenaInvertida = invertirCadena(cadenaOriginal);

    // Renderizar el resultado en el documento HTML
    textoResultado.textContent = cadenaInvertida;

    // Hacer visible el contenedor de resultados aplicando clases de Tailwind de forma progresiva
    contenedorResultado.classList.remove("hidden");
    
    // Pequeño retardo asíncrono para que el navegador ejecute la transición visual
    setTimeout(() => {
        contenedorResultado.classList.remove("opacity-0", "translate-y-2");
        contenedorResultado.classList.add("opacity-100", "translate-y-0");
    }, 10);
});

