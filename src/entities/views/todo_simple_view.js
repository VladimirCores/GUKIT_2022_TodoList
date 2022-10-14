class TodoSimpleView {
  constructor(index, todoVO) {
    this.index = index;
    this.todoVO = todoVO;
  }
  get template() {
    const checked = this.todoVO.isCompleted ? "checked" : "";
    console.log("> TodoSimpleView -> template: isCompleted", checked);
    const checkbox = `<input id="${this.todoVO.id}" type="checkbox" ${checked}/>`;
    return ["<br>", "1_index", ". ", checkbox, "4_text"];
  }
  render() {
    const todoDomItemTemplate = this.template;
    todoDomItemTemplate[1] = this.index + 1;
    todoDomItemTemplate[4] = this.todoVO.text;
    return todoDomItemTemplate.join("");
  }
}

export default TodoSimpleView;
