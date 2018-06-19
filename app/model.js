"use strict";
var Model = (function () {
    function Model() {
        this.user = "Nader";
        this.items = [new TodoItem("Buy Suit", false),
            new TodoItem("Get a Haircut", false),
            new TodoItem("Buy Groceries", true),
            new TodoItem("Call Accountant", false)];
    }
    return Model;
}());
exports.Model = Model;
var TodoItem = (function () {
    function TodoItem(action, done) {
        this.action = action;
        this.done = done;
    }
    return TodoItem;
}());
exports.TodoItem = TodoItem;
