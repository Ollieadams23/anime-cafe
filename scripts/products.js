

function addToCart(itemId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(itemId);
    localStorage.setItem('cart', JSON.stringify(cart));
    showCartAmount();
    console.log(itemId);
}

function getCartItems() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    return cart;
}


function showCartAmount() {
    const productsCart = document.querySelector('.products_cart');
    const cartamount = getCartItems().length;
    productsCart.innerHTML = `
    <button class='productCartButton' onclick="window.location.href = window.location.origin + '/checkout.html';">Cart (${cartamount})</button>

    `;
}


function toggleImageEnlarge(event) {
    const img = event.target;
    
    // Create modal overlay
    const modal = document.createElement('div');
    modal.className = 'enlarged-image';
    
    // Create enlarged image inside modal
    const enlargedImg = document.createElement('img');
    enlargedImg.src = img.src;
    enlargedImg.alt = img.alt;
    enlargedImg.style.maxWidth = '90vw';
    enlargedImg.style.maxHeight = '90vh';
    enlargedImg.style.objectFit = 'contain';
    
    modal.appendChild(enlargedImg);
    document.body.appendChild(modal);
    
    // Close modal when clicked
    modal.addEventListener('click', () => {
        modal.remove();
    });
}

function loadMenu(menuToLoad) {
    const productMount = document.getElementById(`${menuToLoad}`);

    if (!productMount) {
        return;
    }

    productMount.innerHTML = `
        <h2>${menuToLoad.charAt(0).toUpperCase() + menuToLoad.slice(1)}</h2>
    `;
    //load json file function
    fetch(`assets/menus/${menuToLoad}.json`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const menu = data[menuToLoad];
            const ItemAmount = menu.length;
            
            for (let i = 0; i < ItemAmount; i++) {
                const Item = menu[i];//get item
                const ItemName = Item.name;//get item name
                const ItemImage = Item.image;//get item image
                const ItemDescription = Item.description;//get item description
                const ItemPrice = Item.price;//get item price
                const ItemId = Item.id;//get item id

                const articleElement = document.createElement('article');
                articleElement.className = `${menuToLoad}-item`;
                articleElement.innerHTML = `
                    <h3>${ItemName}</h3>
                    <img src="${ItemImage}" alt="${ItemName}">
                    <p>${ItemDescription}</p>
                    <p>${ItemPrice}</p>
                    <button class="add-to-cart" onclick="addToCart(${ItemId})">Add to Cart</button>
                `;
                productMount.appendChild(articleElement);

                // Add event listener to the image
                const imageElement = articleElement.querySelector('img');
                imageElement.addEventListener('click', toggleImageEnlarge);
            }
        })
        .catch(error => {
            console.error(error);
        })
        .finally(() => {
            console.log("menu loaded.");
        });
}

document.addEventListener("DOMContentLoaded", () => {
    loadMenu('breakfasts');
    loadMenu('drinks');
    loadMenu('treats');
    showCartAmount();
});