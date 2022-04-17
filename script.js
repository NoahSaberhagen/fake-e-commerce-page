const API_URL = "https://fakestoreapi.com/products"

const main = async () => {
    const data = await fetch(API_URL);
    const res = await data.json();
    let products = []; 
    products = res; // 1.0 stores all products fetched from the API

    let numberOfProducts = products.length;

    for(i = 0; i < numberOfProducts; i++){ // 2.0 displays product card for products[i], written in HTML order.

        let cardImage = document.createElement("img"); // 2.1 sets var for HTML and retrieves API data
        let prodImage = products[i].image;

        let cardTitle = document.createElement("h3"); 
        let prodTitle = products[i].title; 

        let cardDescription = document.createElement("p"); 
        let prodDescription = products[i].description;

        let cardPrice = document.createElement("p");
        let prodPrice = products[i].price; 

        cardImage.setAttribute("src", prodImage); // 2.2
        cardTitle.textContent = prodTitle;
        cardDescription.textContent = prodDescription;
        cardPrice.textContent = prodPrice;

        cardImage.setAttribute("class", "card-image")
        cardTitle.setAttribute("class", "card-title");
        cardDescription.setAttribute("class", "card-description");
        cardPrice.setAttribute("class", "card-price");

        let placeholder = document.querySelector(".placeholder");
       
        placeholder.appendChild(cardImage);
        placeholder.appendChild(cardTitle);
        placeholder.appendChild(cardDescription);
        placeholder.appendChild(cardPrice);
    }
};

main();

