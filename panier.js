

function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    if (!cartItemsContainer) return; 

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');

        const itemImage = document.createElement('img');
        itemImage.src = item.image; 
        itemImage.style.width = '50px'; 
        cartItem.appendChild(itemImage);

        const itemText = document.createElement('span');
        itemText.textContent = `${item.name} - ${item.price}€`;
        cartItem.appendChild(itemText);

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Supprimer';
        removeButton.addEventListener('click', () => removeFromCart(index));

        cartItem.appendChild(removeButton);
        cartItemsContainer.appendChild(cartItem);
    });
}

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    location.reload();
}

function addToCart(pokemon) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({
        name: pokemon.name,
        price: pokemon.price,
        image: pokemon.sprites.front_default, 
    });
    localStorage.setItem('cart', JSON.stringify(cart));
}

displayCartItems();

