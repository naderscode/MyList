export class Model {
  user;
  items;

  constructor(){
    this.user="Nader";
    this.items=[new ToDoItem("Buy Suit", false),
    new ToDoItem("Get a Haircut", false),
    new ToDoItem("Buy Groceries",true),
    new ToDoItem("Call Accountant", false)]
  }
}

export class ToDoItem {
  action;
  done;

  constructor(action, done) {
    this.action=action;
    this.done=done;
  }
}
