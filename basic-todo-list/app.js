var text = prompt("What do you want to do");
var list = [];
while(text !== "quit") {
  if(text === "new") {
    var todo = prompt("Add a new todo!");
    list.push(todo);
    console.log("A NEW TODO ADDED TO THE LIST!");
  } else if(text === "list") {
    console.log("**********");
    console.log(list);
    console.log("**********");
  } else if(text === "delete") {
    var num = prompt("Enter the number of the todo you wish to delete.");
    list.splice(num-1,1);
  }
var text = prompt("What do you want to do");
}
console.log("You quit the app!");