export default class TodoList {
  constructor() {
    this.STORE_KEY = 'TodoData';
    this.todoList = this.todos;
  }

  showWord() {
    console.log('hello kool');
  }

  static init() {
    const todolist = new TodoList();

    todolist.showWord();

    return todolist;
  }
}
