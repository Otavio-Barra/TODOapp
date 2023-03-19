//thema
const img = document.querySelector(".switch-theme");
const body = document.querySelector("body");
const btn = document.querySelector(".add-task");

const input = document.querySelector("#text");
const containerList = document.querySelector(".container-list");
let imgAtual = 0;

img.addEventListener("click", switchTheme);

function switchTheme() {
  if (imgAtual == 0) {
    img.src = "./images/icon-sun.svg";
    body.classList.toggle("dark");
    input.classList.toggle("dark");
    containerList.classList.toggle("dark");
    imgAtual = 1;
  } else if ((imgAtual = 1)) {
    imgAtual = 0;

    img.src = "./images/icon-moon.svg";
    body.classList.toggle("dark");
    input.classList.toggle("dark");
    containerList.classList.toggle("dark");
  }
}

//add taask
btn.addEventListener("click", (event) => {
  if (input.value.length > 0) {
    addItems(input.value);
    input.value = "";
  }
});

input.addEventListener("keypress", (event) => {
  if (event.charCode === 13 && input.value.length > 0) {
    addItems(input.value);
    input.value = "";
  }
});

function updateCount(num) {
  itemCount.innerText = +itemCount.innerText + num;
}

const warpper = document.querySelector(".warpper");
let numberTask = document.querySelector(".number-task");
const itemID = document.querySelector('.filters input[type="radio"]:checked');

numberTask.innerText = document.querySelectorAll(".task").length;

function addItems(text) {
  const item = document.createElement("li");
  item.classList.add("task");
  item.innerHTML = `
  <div>
    <input type="checkbox" name="check" class="check">
    <p>${text}</p>
  </div>
  <img src="./images/icon-cross.svg" alt="check-icon" class="remove">
`;
  warpper.append(item);

  numberTask.innerText = document.querySelectorAll(".task").length;
  if (itemID.id === "completed") {
    item.classList.add("hidden");
  }
}

//remove

warpper.addEventListener("click", (event) => {
  if (event.target.classList.contains("remove")) {
    removeItems(event.target.parentElement);
    numberTask.innerText = document.querySelectorAll(".task").length;
  }
});
function removeItems(item) {
  item.remove();
}

//
document.querySelectorAll(".filters label input").forEach((radio) => {
  radio.addEventListener("click", (event) => {
    filterTodo(event.target.id);
  });
});

function filterTodo(id) {
  const allItems = document.querySelectorAll("li");

  switch (id) {
    case "all":
      allItems.forEach((item) => {
        item.classList.remove("hidden");
      });
      break;
    case "active":
      allItems.forEach((item) => {
        if (item.querySelector("input").checked) {
          item.classList.add("hidden");
        } else {
          item.classList.remove("hidden");
        }
      });
      break;
    default:
      allItems.forEach((item) => {
        if (item.querySelector("input").checked) {
          item.classList.remove("hidden");
        } else {
          item.classList.add("hidden");
        }
      });
  }
}

const clear = document.querySelector(".clear");

clear.addEventListener("click", () => {
  let list = document.querySelectorAll(".task");
  list.forEach((item) => {
    removeItems(item.closest("li"));
    numberTask.innerText = document.querySelectorAll(".task").length;
  });
});
