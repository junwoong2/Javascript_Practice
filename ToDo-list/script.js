const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

const createTodo = function () {
  const newLi = document.createElement("li");
  const newSpan = document.createElement("li");
  const newBtn = document.createElement("button");

  newBtn.addEventListener("click", () => {
    newLi.classList.toggle("complete");
  });

  newLi.addEventListener("dblclick", () => {
    newLi.remove();
  });

  newSpan.textContent = todoInput.value;
  newLi.appendChild(newBtn);
  newLi.appendChild(newSpan);
  todoList.appendChild(newLi);
  todoInput.value = "";
  saveItems();
};

// 항목 입력시 추가되는 코드
const keyCodeCheck = function () {
  // querySelector(태그 id).value는 id태그의 값을 가져온다.
  if (window.event.keyCode === 13 && todoInput.value !== "") {
    createTodo();
  }
};

const deleteAll = function () {
  const liList = document.querySelector("li");
  for (let i = 0; i < liList.clientHeight; i++) {
    liList[i].remove();
  }
};

const saveItems = function () {
  const saveItems = [];
  for (let i = 0; i < todoList.children; i++) {
    const todoObj = {
      contents: todoList.children[i].querySelector("span").textContent,
      complete: todoList.children[i].classList.contains("complete"),
    };
    saveItems.push(todo);
  }
};
