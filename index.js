import { menuArray } from "./data.js";
const menuEl = document.getElementById("menu");
const orderEl = document.getElementById("order");
let orderArray = [];
let allPrices = [];

// Display Menu Options
menuArray.forEach(function (item) {
  menuEl.innerHTML += `<div class="menu">
        <div>
            <div class="emoji">${item.emoji}</div>
        </div>
        <div class="info">
            <p class= "item-name">${item.name}</p>
            <p class= "ingredients">${item.ingredients}</p>
            <p class= "price">$${item.price}</p>
        </div>
        <div>
            <button class="addBtn" data-add="${item.id}">+</button>
        </div>
    </div>`;
});

//Event Listeners
document.addEventListener("click", function (e) {
  if (e.target.dataset.add) {
    orderArray.push(menuArray[e.target.dataset.add]);
    allPrices.push(menuArray[e.target.dataset.add].price);
  }

  showOrder(orderArray);
  showTotalPrice(allPrices);
});

function showOrder(arr) {
  let orderHtml = "";

  arr.forEach(function (item) {
    orderHtml += `
    <div class= "order-list">
        <p>${item.name}</p>
        <button class="remove">remove</button>
        <p>$${item.price}</p>
    </div>
    `;
  });

  orderEl.innerHTML = orderHtml;
}

function showTotalPrice(arr) {
  console.log("line 51");
  console.log(arr);
}
