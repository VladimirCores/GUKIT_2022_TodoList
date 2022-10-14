import TodoVO from "./entities/vos/todo_vo";
import TodoSimpleView from "./entities/views/todo_simple_view";
import TodoEditView from "./entities/views/todo_edit_view";

const domInputTodoText = document.getElementById("inputTodoTitle");
const domBtnCreateTodo = document.querySelector("#btnCreate");
const domChbEditTodos = document.querySelector("#checkerEdit");
const domListOfTodos = document.querySelector("#listOfTodos");

domBtnCreateTodo.addEventListener("click", onBtnCreateTodoClick);
domInputTodoText.addEventListener("keyup", onTodoTextInputKeyUp);
domChbEditTodos.addEventListener("change", onChbEditTodoChange);
domListOfTodos.addEventListener("change", onTodoCompleteChanged);

const LOCAL_KEY__USER_INPUT_TODO = "todoUserInput";
const LOCAL_KEY__LIST_OF_TODOS = "listOfTodo";

domInputTodoText.value = localStorage[LOCAL_KEY__USER_INPUT_TODO] || "";

const listOfTodo = JSON.parse(
  localStorage.getItem(LOCAL_KEY__LIST_OF_TODOS) || "[]"
).map((obj) => {
  return new TodoVO(obj.id, obj.text, obj.isCompleted);
});

console.log("> listOfTodo", listOfTodo);

checkStringValueAndDisableEnableButton(
  domInputTodoText.value,
  domBtnCreateTodo
);

renderTodoListInDom(listOfTodo, domListOfTodos, TodoSimpleView);

function onTodoCompleteChanged(e) {
  console.log(
    "> onTodoCompleteChanged: e.target =",
    e.target.checked,
    e.target.id
  );
  const todoId = parseInt(e.target.id, 10);
  const todoVO = listOfTodo.find((item) => {
    console.log("> \t item.id:", item.id, todoId);
    return item.id === todoId;
  });
  console.log("> onTodoCompleteChanged: todoVO =", todoVO);
  if (todoVO != null) {
    todoVO.isCompleted = e.target.checked;
    saveLocalState();
  }
}

function onBtnCreateTodoClick(event) {
  let todoInputTextValue = localStorage[LOCAL_KEY__USER_INPUT_TODO];
  console.log("> onBtnCreateTodoClick -> input value =", todoInputTextValue);

  if (isInputValueNumber(todoInputTextValue)) return;

  const todoVO = new TodoVO(Date.now(), todoInputTextValue, false);

  listOfTodo.push(todoVO);

  console.log(
    "> onBtnCreateTodoClick -> todo added, listOfTodo.lenght:",
    listOfTodo.length,
    listOfTodo
  );

  saveLocalState();
  renderTodoListInDom(listOfTodo, domListOfTodos, TodoSimpleView);
  clearInputValue();
}

function onTodoTextInputKeyUp() {
  const todoInputTextValue = domInputTodoText.value;
  console.log(
    "> domInputTodoText -> onTodoTextInputKeyUp: input value =",
    todoInputTextValue
  );
  localStorage[LOCAL_KEY__USER_INPUT_TODO] = todoInputTextValue;
  checkStringValueAndDisableEnableButton(todoInputTextValue, domBtnCreateTodo);
}

function onChbEditTodoChange(event) {
  let chbEditTodosValue = domChbEditTodos.checked;
  console.log(
    "> domChbEditTodos -> onChbEditTodoChange: change value =",
    chbEditTodosValue
  );

  if (chbEditTodosValue) {
  }
}

function renderTodoListInDom(listOfTodo, dom, RenderClass) {
  let output = "Number of Todos: " + listOfTodo.length;
  listOfTodo.forEach((todoVO, index) => {
    output += new RenderClass(index, todoVO).render();
  });
  dom.innerHTML = output;
}

function isInputValueNumber(input) {
  const parsedToInt = parseInt(input, 10);
  const result = !isNaN(parsedToInt);
  console.log("> isInputValueNumber:", input, result);
  if (result) alert("Number is not allowed");
  return result;
}

function checkStringValueAndDisableEnableButton(value, button) {
  if (!!value && value.length > 0) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
}

function clearInputValue() {
  localStorage[LOCAL_KEY__USER_INPUT_TODO] = "";
  domInputTodoText.value = "";
}

function saveLocalState() {
  localStorage[LOCAL_KEY__LIST_OF_TODOS] = JSON.stringify(listOfTodo);
  console.log("> saveLocalState", localStorage[LOCAL_KEY__LIST_OF_TODOS]);
}
