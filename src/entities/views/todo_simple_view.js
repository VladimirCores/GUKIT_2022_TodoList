class TodoSimpleView {
  constructor(index, todoVO) {
    this.index = index;
    this.todoVO = todoVO;
  }
  get template() {
    return ['<br>', '1_index', '. ', '3_text'];
  }
  render() {
    const todoDomItemTemplate = this.template;
    todoDomItemTemplate[1] = this.index + 1;
    todoDomItemTemplate[3] = this.todoVO.text;
    return todoDomItemTemplate.join('');
  }
}

export default TodoSimpleView;
