class TodoVO {
  constructor(id, text, isCompleted = false) {
    this.id = id;
    this.text = text;
    this.isCompleted = isCompleted;
  }
}

export default TodoVO;
