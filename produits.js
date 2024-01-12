// Sélectionnez l'élément où vous voulez afficher les produits
const productsContainer = document.getElementById('produits');

function addToCart(pokemon) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(pokemon);
    localStorage.setItem('cart', JSON.stringify(cart));
}
function addToCart(pokemon) {
    // Ajoutez une propriété price à chaque Pokémon
    pokemon.price = Math.floor(Math.random() * 100) + 1; // Génère un prix aléatoire entre 1 et 100

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(pokemon);
    localStorage.setItem('cart', JSON.stringify(cart));
}
// Faites une requête à l'API Pokémon
fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
    .then(response => response.json())
    .then(data => {
        // Parcourez la liste des Pokémon
        data.results.forEach(pokemon => {
            // Faites une autre requête pour obtenir plus d'informations sur chaque Pokémon
            fetch(pokemon.url)
                .then(response => response.json())
                .then(pokemonData => {
                    const product = document.createElement('div');
                    product.classList.add('product');

                    const productName = document.createElement('h2');
                    productName.textContent = pokemonData.name;

                    const productImage = document.createElement('img');
                    productImage.src = pokemonData.sprites.front_default;

                    const productDescription = document.createElement('p');
                    productDescription.textContent = `Hauteur: ${pokemonData.height} , Poids: ${pokemonData.weight}kg `;

                    product.appendChild(productName);
                    product.appendChild(productImage);
                    product.appendChild(productDescription);
                    productsContainer.appendChild(product);

                    // Ajoutez un bouton pour ajouter le produit au panier  
                    const addToCartButton = document.createElement('button');
                    addToCartButton.textContent = 'Ajouter au panier';
                    addToCartButton.addEventListener('click', () => addToCart(pokemonData));
                    product.appendChild(addToCartButton);


                });
        });
    })
    .catch(error => console.error('Error:', error));