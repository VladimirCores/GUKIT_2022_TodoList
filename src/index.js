import TodoVO from "./entities/vos/todo_vo";
import TodoSimpleView from "./entities/views/todo_simple_view";
import TodoEditView from "./entities/views/todo_edit_view";

const domInputTodoText = document.querySelector("#inputTodo");
const domBtnCreateTodo = document.querySelector("#btnCreate");
const domChbEditTodos = document.querySelector("#checkerEdit");
const domListOfTodos = document.querySelector("#listOfTodos");

domBtnCreateTodo.addEventListener("click", onBtnCreateTodoClick);
domInputTodoText.addEventListener("keyup", onTodoTextInputKeyUp);
domChbEditTodos.addEventListener("change", onChbEditTodoChange);

checkStringValueAndDisableEnableButton(
  domInputTodoText.value,
  domBtnCreateTodo
);

const LOCAL_KEY__USER_INPUT_TODO = "todoUserInput";

const listOfTodo = [];
domInputTodoText.value = localStorage[LOCAL_KEY__USER_INPUT_TODO] || "";

function onBtnCreateTodoClick(event) {
  let todoInputTextValue = localStorage[LOCAL_KEY__USER_INPUT_TODO];
  console.log("> onBtnCreateTodoClick -> input value =", todoInputTextValue);

  if (isInputValueNumber(todoInputTextValue)) return;

  const todoVO = new TodoVO(Date.now, todoInputTextValue, false);

  listOfTodo.push(todoVO);

  console.log(
    "> onBtnCreateTodoClick -> todo added, listOfTodo.lenght:",
    listOfTodo.length,
    listOfTodo
  );

  renderTodoListInDom(listOfTodo, domListOfTodos, TodoSimpleView);
}

function onTodoTextInputKeyUp() {
  let todoInputTextValue = domInputTodoText.value;
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
  if (!isNaN(parsedToInt)) {
    alert("Number is not allowed");
    return true;
  } else return false;
}

function checkStringValueAndDisableEnableButton(value, button) {
  if (!!value && value.length > 0) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
}
