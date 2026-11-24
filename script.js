function calcularPromedio() {

    // Obtener información del estudiante

    const nombre = document.getElementById("nombre").value.trim();
    const curso = document.getElementById("curso").value.trim();

    // Validar información

    const mensaje = document.getElementById("mensaje");
    mensaje.textContent = "";

    if (nombre === "" || curso === "") {
        mensaje.textContent = "⚠️ Completa el nombre y el curso.";
        return;
    }

    // Obtener las cinco notas

    let notas = [];

    for (let i = 1; i <= 5; i++) {

        const valor = document.getElementById("nota" + i).value;

        if (valor === "") {
            mensaje.textContent = "⚠️ Debes ingresar las cinco notas.";
            return;
        }

        const nota = Number(valor);

        if (!Number.isFinite(nota) || nota < 0 || nota > 5) {
            mensaje.textContent = "⚠️ Las notas deben estar entre 0 y 5.";
            return;
        }

        notas.push(nota);
    }

    // Calcular promedio

    const suma = notas.reduce((total, nota) => total + nota, 0);

    const promedio = suma / 5;

    // Determinar estado

    let estado;
    let clase;
    let icono;

    if (promedio >= 3.5) {

        estado = "APROBADO";
        clase = "aprobado";
        icono = "✅";

    } else {

        estado = "REPROBADO";
        clase = "reprobado";
        icono = "❌";

    }

    // Mostrar resultados

    document.getElementById("resultadoNombre").textContent = nombre;

    document.getElementById("resultadoCurso").textContent = curso;

    document.getElementById("promedio").textContent =
        promedio.toFixed(2);

    const estadoElemento = document.getElementById("estado");

    estadoElemento.textContent = estado;
    estadoElemento.className = "status " + clase;

    document.getElementById("estadoIcono").textContent = icono;

    // Mostrar detalle de notas

    const detalle = document.getElementById("detalleNotas");

    detalle.innerHTML = "";

    notas.forEach((nota, index) => {

        detalle.innerHTML += `
            <div class="note-row">
                <span>Nota ${index + 1}</span>
                <strong>${nota.toFixed(1)}</strong>
            </div>
        `;

    });

    // Mostrar tarjeta de resultados

    document.getElementById("resultado").classList.remove("hidden");

    mensaje.textContent = "";

    document.getElementById("resultado").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

// Reiniciar formulario

function reiniciar() {

    document.getElementById("nombre").value = "";
    document.getElementById("curso").value = "";

    for (let i = 1; i <= 5; i++) {
        document.getElementById("nota" + i).value = "";
    }

    document.getElementById("resultado").classList.add("hidden");

    document.getElementById("mensaje").textContent = "";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}