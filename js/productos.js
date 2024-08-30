var cards = document.querySelectorAll('.product-box');
[...cards].forEach(card =>{
   card.addEventListener('mouseover',function(){
card.classList.add('is-hover');
   } )
   card.addEventListener('mouseleave',function(){
card.classList.remove('is-hover');
} )
});
// Inicializar contador
let count = 0;

// Obtener el elemento del corazón
const heart = document.getElementById('heart');

// Añadir evento mouseover
heart.addEventListener('mouseover', () => {
    count++;
    console.log(`El corazón ha sido pasado por encima ${count} veces.`);
    
    // Aquí puedes hacer una llamada AJAX para guardar el conteo en la base de datos
    // Ejemplo con fetch:
    fetch('guardar_conteo.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ count: count })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Conteo guardado:', data);
    })
    .catch(error => {
        console.error('Error al guardar el conteo:', error);
    });
});
