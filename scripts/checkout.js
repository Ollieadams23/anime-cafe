

function loadCheckout() {
    const checkoutMount = document.getElementById("checkout");

    if (!checkoutMount) {
        return;
    }

    checkoutMount.innerHTML = `
        <h2>Checkout</h2>
        <table id='checkout-table'>
        <thead>
            <tr>
                <td>Item</td>
                <td>Quantity</td>
                <td>Price</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Item 1</td>
                <td>1</td>
                <td>$10.00</td>
            </tr>
        </tbody>
        </table>
    `;


    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log(cart);

    fetch('assets/menus/breakfasts.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);  
            for (let i = 0; i < cart.length; i++) {
                const item = cart[i];
                for (let j = 0; j < data.breakfasts.length; j++) {
                    if (item == data.breakfasts[j].id) {
                        const menuItem = data.breakfasts[j];
                        console.log(menuItem.name);
                        console.log(menuItem.price);
                    
                    const tableBody = document.querySelector('#checkout-table tbody');
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${menuItem.name}</td>
                        <td>1</td>
                        <td>$${menuItem.price}</td>
                    `;
                    tableBody.appendChild(row);
                }}
            }
        });


}


loadCheckout();