const API_URL = "https://fakestoreapi.com/products"

const main = async () => {
    const data = await fetch(API_URL);
    const res = await data.json();
    let products = []; 
    products = res; // stores all products fetched from the API

    let numberOfProducts = products.length;

    for(i = 0; i < numberOfProducts; i++){ // displays product card for products[i]

        let card = document.createElement("div"); // creates card wrappers HTML
        let cardText = document.createElement("div");

        let cardImage = document.createElement("img"); // creates HTML elements and retrieves API data
        let prodImage = products[i].image;

        let cardTitle = document.createElement("h3"); 
        let prodTitle = products[i].title; 

        let cardDescription = document.createElement("p"); 
        let prodDescription = products[i].description;

        let cardPrice = document.createElement("p");
        let prodPrice = "$" + products[i].price; 

        cardImage.setAttribute("src", prodImage); // places API data into corresponding HTML elements
        cardTitle.textContent = prodTitle;
        cardDescription.textContent = prodDescription;
        cardPrice.textContent = prodPrice;

        card.setAttribute("class", "product-card"); // adds classes to each HTML element
        cardText.setAttribute("class", "card-text")
        cardImage.setAttribute("class", "card-image"); 
        cardTitle.setAttribute("class", "card-title");
        cardDescription.setAttribute("class", "card-description");
        cardPrice.setAttribute("class", "card-price");

        let placeholder = document.querySelector(".placeholder");

        placeholder.appendChild(card); // places HTML elements in the body
        card.appendChild(cardImage); 
        card.appendChild(cardText);
        cardText.appendChild(cardTitle);
        cardText.appendChild(cardDescription);
        cardText.appendChild(cardPrice);
    }
};

main();

