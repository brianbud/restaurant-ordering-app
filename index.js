import { menuArray } from "./data.js";

function getFeedHtml() {
  let feedHtml = "";

  menuArray.forEach(function (menu) {
    feedHtml += `<div class="menu">
        <div>
            <div class="emoji">${menu.emoji}</div>
        </div>
        <div class="info">
            <p class= "item-name">${menu.name}</p>
            <p class= "ingredients">${menu.ingredients}</p>
            <p class= "price">$${menu.price}</p>
        </div>
        <div>
            <button>+</button>
        </div>
    </div>`;
  });

  return feedHtml;
}

function render() {
  document.getElementById("feed").innerHTML = getFeedHtml();
}

render();
