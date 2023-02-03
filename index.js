import { menuArray } from "./data.js";
const menuEl = document.getElementById("menu");
const orderEl = document.getElementById("order");
const completeEl = document.getElementById("complete-order");
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
    console.log(e);
    orderArray.push(menuArray[e.target.dataset.add]);
    allPrices.push(menuArray[e.target.dataset.add].price);
    showOrder(orderArray);
    showTotalPrice(allPrices);
    completeOrder();
  }
});

function showOrder(arr) {
  let orderHtml = "";

  arr.forEach(function (item) {
    orderHtml += `
    <div class= "order-list">
        <p class="order-name">${item.name}</p>
        <button class="remove">remove</button>
        <p class="order-price">$${item.price}</p>
    </div>
    `;
  });

  orderEl.innerHTML = orderHtml;
}

function showTotalPrice(arr) {
  let totalPriceHtml = "";
  let total = arr.reduce((a, b) => a + b, 0);
  totalPriceHtml = `
  <div class= "order-list total-price">
    <p>Total Price</p>
    <p>$${total}</p>
  </div>
  `;
  orderEl.innerHTML += totalPriceHtml;
}

function completeOrder() {
  completeEl.innerHTML = `
  <button class="complete-btn">Complete Order</button>`;
}
