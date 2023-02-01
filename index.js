import { menuArray } from "./data.js";

function getFeedHtml() {
  let feedHtml = "";

  menuArray.forEach(function (menu) {
    feedHtml += `<div>
        <div>
            ${menu.emoji}
        </div>
        <div>
            <h2>${menu.name}<h2>
            <p>${menu.ingredients}</p>
            <p>$${menu.price}</p>
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
