const domInputTodoText = document.querySelector("#inputTodo");
const domBtnCreateTodo = document.querySelector("#btnCreate");
const domListOfTodos = document.querySelector("#listOfTodos");

domBtnCreateTodo.addEventListener("click", onBtnCreateTodoClick);
domInputTodoText.addEventListener("keyup", onTodoTextInputKeyUp);

// For testing purpose
domInputTodoText.value = "123";

checkStringValueAndDisableEnableButton(
  domInputTodoText.value,
  domBtnCreateTodo
);

class TodoVO {
  constructor(id, text, isCompleted = false) {
    this.id = id;
    this.text = text;
    this.isCompleted = isCompleted;
  }
}

class TodoSimpleView {
  constructor(index, todoVO) {
    this.index = index;
    this.todoVO = todoVO;
  }
  get template() {
    return ["<br>", "1_index", ". ", "3_text"];
  }
  render() {
    const todoDomItemTemplate = this.template;
    todoDomItemTemplate[1] = this.index + 1;
    todoDomItemTemplate[3] = this.todoVO.text;
    return todoDomItemTemplate.join("");
  }
}

class TodoSimpleWithDateOfCreationView {
  constructor(index, todoVO) {
    this.index = index;
    this.todoVO = todoVO;
  }
  get template() {
    return ["<br>", "1_index", ". ", "3_text", "(", "5_dateOfCration", ")"];
  }
  render() {
    const todoDomItemTemplate = this.template;
    todoDomItemTemplate[1] = this.index + 1;
    todoDomItemTemplate[3] = this.todoVO.text;
    return todoDomItemTemplate.join("");
  }
}

const listOfTodo = [];

function onBtnCreateTodoClick(event) {
  let todoInputTextValue = domInputTodoText.value;
  console.log("> onBtnCreateTodoClick -> input value =", todoInputTextValue);

  const todoVO = new TodoVO(Date.now, todoInputTextValue, false);

  listOfTodo.push(todoVO);

  console.log(
    "> onBtnCreateTodoClick -> todo added, listOfTodo.lenght:",
    listOfTodo.length,
    listOfTodo
  );

  renderTodoListInDom(listOfTodo, domListOfTodos, TodoSimpleView);
}

function renderTodoListInDom(listOfTodo, dom, RenderClass) {
  let output = "Number of Todos: " + listOfTodo.length;
  listOfTodo.forEach((todoVO, index) => {
    output += new RenderClass(index, todoVO).render();
  });
  dom.innerHTML = output;
}

function onTodoTextInputKeyUp() {
  let todoInputTextValue = domInputTodoText.value;
  console.log(
    "> domInputTodoText -> onTodoTextInputKeyUp: input value =",
    todoInputTextValue
  );
  checkStringValueAndDisableEnableButton(todoInputTextValue, domBtnCreateTodo);
}

function checkStringValueAndDisableEnableButton(value, button) {
  if (!!value && value.length > 0) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
}
