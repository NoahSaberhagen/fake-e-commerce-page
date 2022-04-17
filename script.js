const API_URL = "https://fakestoreapi.com/products"
let products = [] // creates object to store all products
let numberOfProducts = products.length;

const main = async () => {
    const data = await fetch(API_URL);
    const res = await data.json();
    products = res;
    console.log(products);
};

main(); // calls data from fake store api

console.log(products [0]);

for(i = 0; i <= numberOfProducts; i++){
    const placeholder = document.querySelector(".placeholder");

    let prodContainer = document.createElement("div");
    let prodText = document.createElement("div");
    let prodTitleHTML = document.createElement("h2");
    let prodTitle = products[i].title;
    let prodDescriptionHTML = document.createElement("p");
    let prodDescription = products[i].description;
    let prodPriceHTML = document.createElement("p");
    let prodPrice = products[i].price;

    
    document.body.insertBefore(prodContainer, placeholder);
    prodContainer.appendChild(prodText);
    prodText.appendChild(prodTitleHTML, prodDescriptionHTML, prodPriceHTML);
}