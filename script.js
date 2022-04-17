const API_URL = "https://fakestoreapi.com/products"

const main = async () => {
    let products = [];

    const data = await fetch(API_URL);
    const res = await data.json();
    products = res;

    let numberOfProducts = products.length;

    for(i = 0; i < numberOfProducts; i++){
        let cardTitle = document.createElement("p");
        let prodTitle = products[i].title;

        let placeholder = document.querySelector(".placeholder");
        placeholder.appendChild(cardTitle);

        cardTitle.textContent = prodTitle;
        cardTitle.setAttribute("class", "card-title");
    }
};

main();

