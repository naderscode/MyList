export class Model {
  user;
  items;

  constructor(){
    this.user="Nader";
    this.items=[]
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
