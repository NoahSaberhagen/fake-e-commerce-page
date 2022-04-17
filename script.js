const API_URL = "https://fakestoreapi.com/products"

const main = async () => {
    let products = [];

    const data = await fetch(API_URL);
    const res = await data.json();
    products = res;

    let numberOfProducts = products.length;

    for(i = 0; i < numberOfProducts; i++){
        let cardImage = document.createElement("img");
        let prodImage = products[i].image;

        let cardTitle = document.createElement("h3");
        let prodTitle = products[i].title;

        let cardDescription = document.createElement("p");
        let prodDescription = products[i].description;

        let cardPrice = document.createElement("p");
        let prodPrice = products[i].price;

        cardImage.setAttribute("src", prodImage);
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

