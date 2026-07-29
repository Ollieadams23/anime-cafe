

async function loadCheckout() {
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
        </tbody>

        <tfoot>    
        </tfoot>

        </table>
    `;


    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    //console.log(cart);
const breakfastsRes = await fetch('assets/menus/breakfasts.json');
const drinksRes = await fetch('assets/menus/drinks.json');
const treatsRes = await fetch('assets/menus/treats.json');

const breakfastsData = await breakfastsRes.json();
const drinksData = await drinksRes.json();
const treatsData = await treatsRes.json();

const data = [
    ...breakfastsData.breakfasts, 
    ...drinksData.drinks, 
    ...treatsData.treats];

        
            let arr = [];
            //console.log(data);  
            for (let i = 0; i < cart.length; i++) {
                
                const itemId = cart[i];//id in cart
                for (let j = 0; j < data.length; j++) {
                    
                    if (itemId == data[j].id && !arr.includes(itemId)) {
                        const menuItem = data[j];
                        //console.log(menuItem.name);
                        //console.log(menuItem.price);
                        
                        arr.push(itemId);
                        //console.log(arr);
                        let quantity = cart.reduce((count, x) => (x === itemId ? count + 1 : count), 0);                        
                        const tableBody = document.querySelector('#checkout-table tbody');
                        const row = document.createElement('tr');
                        row.innerHTML = `
                            <td>${menuItem.name}</td>
                            <td>${quantity}</td>
                            <td>${menuItem.price}</td>
                        `;
                    tableBody.appendChild(row);
                }}
            }
        

        //totals
        const totals = document.querySelector('#checkout-table tfoot');
        const totalsRow = document.createElement('tr');
        totalsRow.innerHTML = `
            <td>Total</td>
            <td></td>
            <td></td>
        `;
        totals.appendChild(totalsRow);
        
        //totals row
        let total = 0;
        const tBody = document.querySelector('#checkout-table tbody');//get tbody
        for (let i = 0; i < tBody.rows.length; i++) {//loop through rows
            const row = tBody.rows[i];//get row
            const quantity = parseInt(row.cells[1].innerText);
            const price = parseFloat(row.cells[2].innerText.replace('$', ''));//get price
            total += quantity * price;  // multiply!
        }
        totalsRow.cells[2].innerText = total.toFixed(2);//set total in totals row


    }


loadCheckout();