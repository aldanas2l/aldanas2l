document.addEventListener('DOMContentLoaded', () => {
    // Click en el botón de favoritos
    document.querySelectorAll('.favorite-btn').forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();

            const productName = this.closest('.product-box').querySelector('.product-name h3').textContent;
            const productPrice = this.closest('.product-box').querySelector('.product-price span').textContent;
            const productImage = this.closest('.product-box').querySelector('img').src; //url

            const product = { name: productName, price: productPrice, image: productImage };

            //  localStorage
            let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

            // Verificar si esta en favoritos
            const isAlreadyFavorite = favorites.some(fav => fav.name === productName);

            if (isAlreadyFavorite) {
                alert('El producto ya está en favoritos');
            } else {
                // Añadir
                favorites.push(product);

                // Guardar en el localStorage
                localStorage.setItem('favorites', JSON.stringify(favorites));

                alert('Producto añadido a favoritos');
            }
        });
    });
});



