function loadTodos() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((data) => displayTodos(data));
}

function displayTodos(todos) {
  // grt the container
  const todoContainer = document.getElementById("todo-container");
  for (const todo of todos) {
    // create the element
    const todoDiv = document.createElement("div");
    todoDiv.innerHTML = `
        <p>user: ${todo.id}</p>
        <h3>titlel: ${todo.title}</h3>
        `;
    todoContainer.appendChild(todoDiv);
  }
}

loadTodos();
