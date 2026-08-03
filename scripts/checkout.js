/* jshint esversion: 6 */



function clearCart(){
    localStorage.clear('cart');
    //refresh page
    loadCheckout();
}

async function loadCheckout() {
    const checkoutMount = document.getElementById("checkout");

    if (!checkoutMount) {
        return;
    }

    checkoutMount.innerHTML = `
        <h2>Checkout</h2>
        <div id="loader">
            <div class="spinner"></div>
            <p>Loading<span>.</span><span>.</span><span>.</span></p>
            </div>
        <table id='checkout-table' aria-label="Checkout table with items, quantities, and prices">
        <thead>
            <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
            </tr>
        </thead>

        <tbody>
        </tbody>

        <tfoot>    

        </tfoot>

        </table>
    `;

    const loader = document.getElementById('loader');

    try {


    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    //console.log(cart);

    //fetch items
    const breakfastsRes = await fetch('assets/menus/breakfasts.json');
    const drinksRes = await fetch('assets/menus/drinks.json');
    const treatsRes = await fetch('assets/menus/treats.json');

    //parse json
    const breakfastsData = await breakfastsRes.json();
    const drinksData = await drinksRes.json();
    const treatsData = await treatsRes.json();


    //combine all items into single array
    const data = [
        ...breakfastsData.breakfasts, 
        ...drinksData.drinks, 
        ...treatsData.treats];

        //loop through cart and display items
    let arr = [];
    if(cart.length === 0){
        const tableBody = document.querySelector('#checkout-table tbody');//get tbody
        const row = document.createElement('tr');//create row
        row.innerHTML = `
            <td colspan="3">Your cart is empty</td>
            `;
            tableBody.appendChild(row);//append row to tbody
            return;
            }else{
            //console.log(data);  
                    for (let i = 0; i < cart.length; i++) {//loop through cart
                
                        const itemId = cart[i];//id in cart
                        for (let j = 0; j < data.length; j++) {//loop through data
                    
                        if (itemId == data[j].id && !arr.includes(itemId)) {//check if item is in data and not already in arr
                            const menuItem = data[j];//set menuItem to data item
                            //console.log(menuItem.name);
                            //console.log(menuItem.price);
                        
                            arr.push(itemId);//push item to arr for checking duplicate items
                            //console.log(arr);
                            let quantity = cart.reduce((count, x) => (x === itemId ? count + 1 : count), 0);                        
                            const tableBody = document.querySelector('#checkout-table tbody');//get tbody
                            const row = document.createElement('tr');//create row
                            row.innerHTML = `
                                <td>${menuItem.name}</td>
                                <td><button aria-label="Remove one ${menuItem.name} from cart" class="minus" onclick="removeFromCart(${itemId})">-</button> <span aria-label="Quantity of ${menuItem.name} in cart">${quantity}</span> <button aria-label="Add one ${menuItem.name} to cart" class="plus" onclick="addToCart(${itemId})">+</button></td>
                                <td>${menuItem.price}</td>
                                `;
                            row.dataset.quantity = quantity;//set quantity in dataset for total calculation
                            tableBody.appendChild(row);//append row to tbody
                        }}
                    }
                }
            

    //totals
    const totals = document.querySelector('#checkout-table tfoot');//get tfoot
    const totalsRow = document.createElement('tr');//create row
    totalsRow.innerHTML = `
        <td colspan="2">Total</td>
        <td></td>

        `;
    totals.appendChild(totalsRow);//append row to tfoot
        
    //totals row
    function total() {
            let total = 0;
            const tBody = document.querySelector('#checkout-table tbody');//get tbody
            for (let i = 0; i < tBody.rows.length; i++) {//loop through rows
                
                const row = tBody.rows[i];//get row
                const quantity = parseInt(row.dataset.quantity) || 1;//get quantity
                const price = parseFloat(row.cells[2].innerText.replace('$', ''));//get price
                total += quantity * price;  // multiply!
            }
            totalsRow.cells[1].innerText = '$' + total.toFixed(2);//set total in totals row
            }
    total();


    //paymemnt row
    const paymentRow = document.createElement('tr');//create row
    paymentRow.innerHTML = `
    <td></td>
    <td></td>
    <td><button class="checkout-button" onclick="clearCart();alert('Checkout Complete')" style="font-size:1em">Checkout</button></td>

    `;
    totals.appendChild(paymentRow);//append row to tfoot

    } catch (error) {
        console.error('Checkout load failed:', error);
    } finally {
        if (loader) {
            loader.style.display = 'none';
        }
    }


    }

function removeFromCart(itemId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const index = cart.indexOf(itemId);
    if (index > -1) {
        cart.splice(index, 1);  // Remove only one instance
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log(itemId);
    loadCheckout();
}

function addToCart(itemId){
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(itemId);
    localStorage.setItem('cart', JSON.stringify(cart));
        
    console.log(itemId);
    loadCheckout();
}






loadCheckout();