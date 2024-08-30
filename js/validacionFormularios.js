

// run with `node server.mjs`
var formulario = document.getElementById('formulario');
var inputs = document.querySelectorAll('#formulario input');

var expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    telefono: /^[\d\+\-\(\)\s]{7,20}$/,
    edad: /^\d{1,3}$/
};

var campos = {
    nombre: false,
    apellido: false,
    edad: false,
    telefono: false
};

var validarFormulario = function(e) {
    switch (e.target.name) {
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');
            break;
        case "apellido":
            validarCampo(expresiones.apellido, e.target, 'apellido');
            break;
        case "edad":
            validarCampo(expresiones.edad, e.target, 'edad');
            break;
        case "telefono":
            validarCampo(expresiones.telefono, e.target, 'telefono');
            break;
    }
};

var validarCampo = function(expresion, input, campo) {
    if (expresion.test(input.value)) {
        document.getElementById('grupo__' + campo).classList.remove('formulario__grupo-incorrecto');
        document.getElementById('grupo__' + campo).classList.add('formulario__grupo-correcto');
        document.querySelector('#grupo__' + campo + ' i').classList.add('fa-check-circle');
        document.querySelector('#grupo__' + campo + ' i').classList.remove('fa-times-circle');
        document.querySelector('#grupo__' + campo + ' .formulario__input-error').classList.remove('formulario__input-error-activo');
        campos[campo] = true;
    } else {
        document.getElementById('grupo__' + campo).classList.add('formulario__grupo-incorrecto');
        document.getElementById('grupo__' + campo).classList.remove('formulario__grupo-correcto');
        document.querySelector('#grupo__' + campo + ' i').classList.add('fa-times-circle');
        document.querySelector('#grupo__' + campo + ' i').classList.remove('fa-check-circle');
        document.querySelector('#grupo__' + campo + ' .formulario__input-error').classList.add('formulario__input-error-activo');
        campos[campo] = false;
    }
};

inputs.forEach(function(input) {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

document.getElementById('formulario').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevenir el envío estándar del formulario

    var terminos = document.getElementById('terminos');

    if (campos.nombre && campos.apellido && campos.edad && campos.telefono && terminos.checked) {
        // Crear un objeto FormData con los datos del formulario
        var formData = new FormData(document.getElementById('formulario'));

    } else {
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
    }
});
