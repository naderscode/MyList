"use strict";
var Model = (function () {
    function Model() {
        this.user = "Nader";
        this.items = [new ToDoItem("Buy Suit", false),
            new ToDoItem("Get a Haircut", false),
            new ToDoItem("Buy Groceries", true),
            new ToDoItem("Call Accountant", false)];
    }
    return Model;
}());
exports.Model = Model;
var ToDoItem = (function () {
    function ToDoItem(action, done) {
        this.action = action;
        this.done = done;
    }
    return ToDoItem;
}());
exports.ToDoItem = ToDoItem;
