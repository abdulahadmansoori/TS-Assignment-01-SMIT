"use strict";
const xhttp = new XMLHttpRequest();
let products;
let table = document.getElementById("table-body");
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
        `;
    });
};
xhttp.open("GET", "https://dummyjson.com/products");
xhttp.send();
//# sourceMappingURL=app.js.map