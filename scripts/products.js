

function addToCart(itemId) {
    localStorage.setItem('cartItem', itemId);
    console.log(itemId);
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

                productMount.innerHTML += `
                    <article class="${menuToLoad}-item">
                        <h3>${ItemName}</h3>
                        <img src="${ItemImage}" alt="${ItemName}">
                        <p>${ItemDescription}</p>
                        <p>${ItemPrice}</p>
                        <button class="add-to-cart" onclick="addToCart(${ItemId})">Add to Cart</button>
                    </article>
                `;
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
});