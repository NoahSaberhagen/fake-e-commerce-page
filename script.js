const API_URL = "https://fakestoreapi.com/products"

const main = async () => {
    let products = [];

    const data = await fetch(API_URL);
    const res = await data.json();
    products = res;

    let numberOfProducts = products.length;

    for(i = 0; i < numberOfProducts; i++){
        let cardTitle = document.createElement("h3");
        let prodTitle = products[i].title;

        let cardDescription = document.createElement("p");
        let prodDescription = products[i].description;

        cardTitle.textContent = prodTitle;
        cardDescription.textContent = prodDescription;
        cardTitle.setAttribute("class", "card-title");
        cardDescription.setAttribute("class", "card-title2");

        let placeholder = document.querySelector(".placeholder");
       
        placeholder.appendChild(cardTitle);
        placeholder.appendChild(cardDescription);
    }
};

main();

