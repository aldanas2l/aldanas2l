
    (function(){
        var formulario = document.getElementsByName('form-registro')[0],   //[0] Primer elemento, el formulario en si mismo.
            elementos = formulario.elements,                            // Elementos del form, no lo usamos en este script.
            boton = document.getElementById('btn');                     // Elemento id="boton"

});
var validarNombre = function(e){
if (formulario.nombre.value == 0){     // Si el valor del campo id="nombre" del form está vacio...
    alert("Completa el campo nombre");
    e.preventDefault();
}
}
formulario.addEventListener("submit", validar);
