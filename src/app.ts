type Product = {
    "id": number;
    "title": string,
    "description": string,
    "price":number,
    "discountPercentage":number,
    "rating":number,
    "stock":number,
    "brand": string,
    "category": string
}

const xhttp = new XMLHttpRequest();
let products : Product[];
let table = document.getElementById("table-body") as HTMLElement;
xhttp.onload = function () {
    products = (JSON.parse(this.responseText)).products;
    products.forEach(element => {
        table.innerHTML += `
            <tr>
                <td>${element.id}</td>
                <td>${element.title}</td>
                <td>${element.description}</td>
                <td>${element.price}</td>
                <td>${element.discountPercentage}</td>
                <td>${element.rating}</td>
                <td>${element.stock}</td>
                <td>${element.brand}</td>
                <td>${element.category}</td>
            </tr>
        `
        console.log(element)
    });
}
xhttp.open("GET", "https://dummyjson.com/products");
xhttp.send();