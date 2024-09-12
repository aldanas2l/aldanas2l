// Horarios disponibles
const horarios = ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM"];
const horariosDiv = document.getElementById('horarios-disponibles');

// Generar botones de horarios
horarios.forEach(horario => {
    let btn = document.createElement('button');
    btn.classList.add('horario');
    btn.innerText = horario;
    btn.addEventListener('click', seleccionarHorario);
    horariosDiv.appendChild(btn);
});

let horarioSeleccionado = null;

// Función para seleccionar horario
function seleccionarHorario(event) {
    const botones = document.querySelectorAll('.horario');
    botones.forEach(btn => btn.classList.remove('seleccionado'));
    event.target.classList.add('seleccionado');
    horarioSeleccionado = event.target.innerText;
}

// Acción al reservar
document.getElementById('reservar').addEventListener('click', () => {
    const fecha = document.getElementById('fecha').value;

    if (!fecha || !horarioSeleccionado) {
        alert('Por favor selecciona una fecha y un horario.');
    } else {
        // Guardar datos en localStorage
        localStorage.setItem('fechaReserva', fecha);
        localStorage.setItem('horarioReserva', horarioSeleccionado);

        // Redirigir a turnos.html
        window.location.href = 'turnoscejasyperfilados.html';
    }
});

