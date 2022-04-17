const API_URL = "https://fakestoreapi.com/products"

const main = async () => {
    let products = [];

    const data = await fetch(API_URL);
    const res = await data.json();
    products = res;

    let numberOfProducts = products.length;

    console.log(products);

    for(i = 0; i < numberOfProducts; i++){
        let para = document.createElement("p");
        let prodTitle = products[i].title;

        let placeholder = document.querySelector(".placeholder");
        placeholder.appendChild(para);

        para.textContent = prodTitle;
        console.log(prodTitle);
    }
};

main();

