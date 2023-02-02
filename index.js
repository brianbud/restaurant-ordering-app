import { menuArray } from "./data.js";
const menuEl = document.getElementById("menu");

// Menu options
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
