const form = document.querySelector(".add");
const ul = document.querySelector(".todos");
const del = document.querySelector(".delete");
const form2 = document.querySelector(".search input");
const formSearch = document.querySelector(".search");

const addingTodo = (enteringTodo) => {
    if(enteringTodo.length > 0) {
        let newTodo = document.createElement("li");
        newTodo.innerHTML = `${enteringTodo} <i class="far fa-trash-alt delete"></i>`;
        newTodo.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
        ul.append(newTodo);
       form.reset();
   }
}

form.addEventListener("submit", e => {
    e.preventDefault();
    let enteringTodo = form.add.value.trim();
    addingTodo(enteringTodo);
    form.reset()
});


ul.addEventListener("click", e => {
    if(e.target.tagName === "I") {
        e.target.parentElement.remove();
    }

});

const searchFunc = (searchText => {
    Array.from(ul.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(searchText))
    .forEach(todo => todo.classList.add("filtered"));

    Array.from(ul.children)
    .filter(todo => todo.textContent.toLowerCase().includes(searchText))
    .forEach(todo => todo.classList.remove("filtered"));
});

form2.addEventListener("keyup", e => {
    let searchText = form2.value.toLowerCase().trim();
    searchFunc(searchText);
});

formSearch.addEventListener("submit", event => {
    event.preventDefault();
});
