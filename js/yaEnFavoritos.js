document.addEventListener('DOMContentLoaded', () => {//funcion flech
    const retrievedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    console.log('Favoritos recuperados:', retrievedFavorites); // recuperar fav?: correctamente

    const favoriteList = document.getElementById('favorite-list');

    retrievedFavorites.forEach(product => {
        const productHTML = `
        <div class="col-lg-3 col-md-4 mb-3">
            <div class="product-box">
                <div class="product-inner-box position-relative">
                    <div class="icons position-absolute">
                        <!-- Aquí podrías añadir el ícono de favorito si lo necesitas -->
                    </div>
                    <div class="onsale">
                        <span class="badge rounded-0"><i class="fa-solid fa-arrow-down"></i>29%</span>
                    </div>
                    <img class="img-fluid" src="${product.image}" alt="${product.name}">
                    <div class="cart-btn">
                        <button class="btn btn-white shadow-sm rounded-pill">
                            <i class="fa-solid fa-cart-shopping"></i> Añadir al carrito
                        </button>
                    </div>
                </div>
                <div class="product-info">
                    <div class="product-name">
                        <h3>${product.name}</h3>
                    </div>
                    <div class="product-price">
                        $<span>${product.price}</span>
                    </div>
                </div>
            </div>
        </div>
        `;
        favoriteList.innerHTML += productHTML;
    });
});

