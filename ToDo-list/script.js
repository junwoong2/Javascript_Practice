const todoInput = document.querySelector("#todo-input");

const createTodo = function () {
  const todoList = document.querySelector("#todo-list");
  const newLi = document.createElement("li");
  const newSpan = document.createElement("li");
  const newBtn = document.createElement("button");

  newBtn.addEventListener("click", () => {
    newLi.classList.toggle("complete");
  });

  newSpan.textContent = todoInput.value;
  newLi.appendChild(newBtn);
  newLi.appendChild(newSpan);
  todoList.appendChild(newLi);
  todoInput.value = "";
};

// 항목 입력시 추가되는 코드
const keyCodeCheck = function () {
  // querySelector(태그 id).value는 id태그의 값을 가져온다.
  if (window.event.keyCode === 13 && todoInput.value !== "") {
    createTodo();
  }
};
