class TodoEditView {
  constructor(index, todoVO) {
    this.index = index;
    this.todoVO = todoVO;
  }
  get template() {
    return [
      "<br>",
      "1_index",
      ". ",
      "3_button_edit",
      "4_button_delete",
      "5_text"
    ];
  }
  render() {
    const todoDomItemTemplate = this.template;
    todoDomItemTemplate[1] = this.index + 1;
    todoDomItemTemplate[5] = this.todoVO.text;
    return todoDomItemTemplate.join("");
  }
}

export default TodoEditView;
