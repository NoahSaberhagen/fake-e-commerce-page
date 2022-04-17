const API_URL = "https://fakestoreapi.com/products/1"

const main = async () => {
    const data = await fetch(API_URL);
    const res = await data.json();
    console.log(res);
    console.log(typeof res);

    const productTitle = document.querySelector(".product-title");
    const productDesc = document.querySelector(".product-description");
    const productPrice = document.querySelector(".product-price");
    const productImg = document.querySelector(".product-img");

    productTitle.textContent = res.title;
    productDesc.textContent = res.description;
    productPrice.textContent = "$" + res.price;
    productImg.setAttribute("src", res.image);

};

main();