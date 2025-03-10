function sendToCart(productImg, productTitle, ProductPrice) {
    let title = document.getElementById(productTitle).innerText;
    console.log(title);
    let price = document.getElementById(ProductPrice).innerText;
    console.log(price);
    let img = document.getElementById(productImg).src;
    console.log(img);
}