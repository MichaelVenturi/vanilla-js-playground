const form = document.querySelector(".todo-form");
const todoList = document.getElementById("todo-list-body");
const deleteBtn = document.getElementById("delete-btn");

let numTodos = 1;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  numTodos++;
  const todoText = e.target.elements[0].value;
  const row = document.createElement("tr");
  row.innerHTML = `         
            <td>${todoText}</td>
            <td>${new Date().toLocaleDateString()}</td>
            <td><input type="checkbox" id="${numTodos}" class="todo-checkbox" /></td>
  `;
  todoList.append(row);
  form.reset();
});

deleteBtn.addEventListener("click", () => {
  const selected = document.querySelectorAll('tr:has(input[type="checkbox"]:checked)');
  selected.forEach((item) => {
    item.remove();
    numTodos--;
  });
});
