const API_URL = "https://fakestoreapi.com/products"

const main = async () => {
    const data = await fetch(API_URL);
    const res = await data.json();
    let products = []; 
    products = res; // stores all products fetched from the API

    let numberOfProducts = products.length;

    for(i = 0; i < numberOfProducts; i++){ // displays product card for products[i], written in HTML order.

        let cardImage = document.createElement("img"); // creates HTML elements and retrieves API data
        let prodImage = products[i].image;

        let cardTitle = document.createElement("h3"); 
        let prodTitle = products[i].title; 

        let cardDescription = document.createElement("p"); 
        let prodDescription = products[i].description;

        let cardPrice = document.createElement("p");
        let prodPrice = products[i].price; 

        cardImage.setAttribute("src", prodImage); // places API data into corresponding HTML elements
        cardTitle.textContent = prodTitle;
        cardDescription.textContent = prodDescription;
        cardPrice.textContent = prodPrice;

        cardImage.setAttribute("class", "card-image") // adds classes to each HTML element
        cardTitle.setAttribute("class", "card-title");
        cardDescription.setAttribute("class", "card-description");
        cardPrice.setAttribute("class", "card-price");

        let placeholder = document.querySelector(".placeholder");
       
        placeholder.appendChild(cardImage); // places HTML elements in the body
        placeholder.appendChild(cardTitle);
        placeholder.appendChild(cardDescription);
        placeholder.appendChild(cardPrice);
    }
};

main();

