function sendToCart(productImg, productTitle, productPrice) {
    // Get the image source
    let img = document.getElementById(productImg).src;

    // Get the text content of the title and price
    let title = document.getElementById(productTitle).textContent;
    let price = parseFloat(document.getElementById(productPrice).textContent);


    // Get the cart section
    let cartSection = document.getElementById('shopping-cart');

    // Create a new div for the cart item
    let div = document.createElement('div');

    // Add the HTML structure for the cart item
    div.innerHTML = `
            <div class="flex justify-between items-center my-4">
                                    <img class="lg:w-[70px] w-[50px]" src="${img}" alt="">
                                    <h4 id="shopping-cart-title" class="  text-md ">${title}</h4>
                                    <p id=" shopping-cart-price" class=" text-md ">${price}$</p>
                                </div>
    `;

    // Append the new cart item to the cart section
    cartSection.appendChild(div);

    // subtotal value set  here 
    let sub = document.getElementById('sub-total');
    let floatSubTotal = parseFloat(sub.innerText);
    let subTotal = floatSubTotal += price;
    sub.innerText = subTotal;

    // total value set here
    let total = document.getElementById('total-value');
    let floatTolat = parseFloat(total.innerText);
    let totalValue = floatTolat += price;
    total.innerText = totalValue;


    let checkout = document.getElementById("checkout");
    if (floatTolat > 0) {
        checkout.removeAttribute('disabled')
    }


}
