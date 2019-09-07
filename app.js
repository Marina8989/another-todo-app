const todoInputEl = document.querySelector(".todo__input");
const todoListEl = document.querySelector(".todo__list");
const todoItemEl = document.querySelector(".todo__item");

function addListItem() {
  todoInputEl.addEventListener("keypress", function(event) {
    if (event.keyCode === 13) {
      let newList = createListItem(todoInputEl.value);
      todoListEl.appendChild(newList);
      todoListEl.insertBefore(newList, todoListEl.childNodes[0]);
      todoInputEl.value = "";
    }
  });
}

function toggleDone() {
  todoListEl.addEventListener("click", function(event) {
    if (event.target.classList.contains("todo__item")) {
      event.target.classList.toggle("done");
    }
  });
}

function createListItem(text) {
  let newListEl = document.createElement("li");
  newListEl.textContent = text;
  newListEl.setAttribute("class", "todo__item");
  return newListEl;
}

toggleDone();
addListItem();
