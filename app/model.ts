export class Model {
  user;
  items;

  constructor(){
    this.user="Nader";
    this.items=[new TodoItem("Buy Suit", false),
    new TodoItem("Get a Haircut", false),
    new TodoItem("Buy Groceries",true),
    new TodoItem("Call Accountant", false)]
  }
}

export class TodoItem {
  action;
  done;

  constructor(action, done) {
    this.action=action;
    this.done=done;
  }
}
