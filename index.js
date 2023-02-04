import { menuArray } from "./data.js";

const menuEl = document.getElementById("menu");
const orderEl = document.getElementById("order");
const totalEl = document.getElementById("total");
const completeEl = document.getElementById("complete-order");
const creditCardForm = document.getElementById("credit-card-form");

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
    showOrder(orderArray);
    showTotalPrice(allPrices);
    completeOrder();
  } else if (e.target.dataset.remove) {
    let removedItem = e.target.dataset.remove;
    console.log("removed item:", removedItem);
    let itemIndex = orderArray.findIndex((item) => item.id == removedItem);
    orderArray.splice(itemIndex, 1);
    allPrices = allPrices.filter((price, index) => index != itemIndex);
    e.target.parentNode.remove();
    showTotalPrice(allPrices);
  }
});

function showOrder(arr) {
  let orderHtml = "";

  arr.forEach(function (item) {
    orderHtml += `
    <div class= "order-list">
        <p class="order-name">${item.name}</p>
        <button class="remove" data-remove= "${item.id}">remove</button>
        <p class="order-price">$${item.price}</p>
    </div>
    `;
  });

  orderEl.innerHTML = orderHtml;
}

function showTotalPrice(arr) {
  console.log(arr);
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
  const statusEl = document.getElementById("delivery-status");
  statusEl.style.display = "block";
  statusEl.innerHTML = `Thanks, ${name}! Your order is on its way!`;
}
