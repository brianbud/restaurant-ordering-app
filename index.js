import { menuArray } from "./data.js";

const menuEl = document.getElementById("menu");
const orderEl = document.getElementById("order");
const totalEl = document.getElementById("total");
const completeEl = document.getElementById("complete-order");
const creditCardForm = document.getElementById("credit-card-form");
const statusEl = document.getElementById("delivery-status");

let orderArray = [];
let allPrices = [];

// Display Menu Options
menuArray.forEach(function ({ emoji, name, ingredients, price, id }) {
  menuEl.innerHTML += `<div class="menu">
        <div>
            <div class="emoji">${emoji}</div>
        </div>
        <div class="info">
            <p class= "item-name">${name}</p>
            <p class= "ingredients">${ingredients}</p>
            <p class= "price">$${price}</p>
        </div>
        <div>
            <button class="addBtn" data-add="${id}">+</button>
        </div>
    </div>`;
});

//Event Listeners

document.addEventListener("click", function (e) {
  if ((statusEl.style.display = "block")) {
    statusEl.style.display = "none";
  }
  if (e.target.dataset.add) {
    orderArray.push(menuArray[e.target.dataset.add]);
    allPrices.push(menuArray[e.target.dataset.add].price);
    showOrder(orderArray);
    showTotalPrice(allPrices);
    completeOrder();
  } else if (e.target.dataset.remove) {
    let removedItem = e.target.dataset.remove;
    let itemIndex = orderArray.findIndex((item) => item.id == removedItem);
    orderArray.splice(itemIndex, 1);
    allPrices = allPrices.filter((price, index) => index != itemIndex);
    e.target.parentNode.remove();
    showTotalPrice(allPrices);
  }
});

function showOrder(arr) {
  let orderHtml = "";

  arr.forEach(function ({ name, id, price }) {
    orderHtml += `
    <div class= "order-list">
        <p class="order-name">${name}</p>
        <button class="remove" data-remove= "${id}">remove</button>
        <p class="order-price">$${price}</p>
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
  totalEl.innerHTML = totalPriceHtml;
}

function completeOrder() {
  completeEl.innerHTML = `
  <button class="complete-btn">Complete Order</button>`;
}

completeEl.addEventListener("click", function () {
  document.getElementById("card").classList.toggle("hidden");
});

creditCardForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const creditCardFormData = new FormData(creditCardForm);
  const fullName = creditCardFormData.get("name");

  document.getElementById("card").classList.toggle("hidden");
  showDeliveryStatus(fullName);
});

function showDeliveryStatus(name) {
  orderEl.innerHTML = "";
  completeEl.innerHTML = "";
  totalEl.innerHTML = "";
  statusEl.style.display = "block";
  statusEl.innerHTML = `Thanks, ${name}! Your order is on its way!`;
  resetOrder();
}

function resetOrder() {
  orderArray = [];
  allPrices = [];
  console.log("new item");
}
