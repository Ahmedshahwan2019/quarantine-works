let answer = prompt("What would like to do?");
const list = [];

while(answer !== "quit") {
    if(answer === "new") {
        addTodo();
    } else if(answer === "list") {
        listTodos();
    } else if (answer === "delete") {
        deleteTodo();
    }
    answer = prompt("What would like to do?");
}
console.log("YOU QUIT THE APP!");

//function decleration is hoisted
function addTodo() {
    const newTodo = prompt("Enter a new todo.")
    list.push(newTodo);
    console.log(newTodo + " added to the list.")
}

function listTodos() {
    console.log("********");
        list.forEach(function(item,index) {
            console.log(`${index} : ${item}`)
        })
        console.log("********");
}

function deleteTodo() {
    const num = prompt("Enter the index number of the todo to be deleted.")
    list.splice(num,1);
    console.log("Todo removed!")
}