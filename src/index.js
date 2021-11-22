// document.addEventListener("DOMContentLoaded", () => {
//   document.querySelector('form').addEventListener('submit', (e) => {
//     e.preventDefault()
//     console.log(e.target.new_todo.value)
//   })
// });

// function buildToDo(todo) {
//   let p = document.createElement('p')
//   p.textContent = todo
//   document.querySelector('tasks').appendChild(p)

// }

const taskForm = document.querySelector('#create-task-form')
const taskList = document.querySelector("#tasks")

taskForm.addEventListener("submit", function (e){
  e.preventDefault()
  const newTask = document.querySelector('#new-task-description').value
  const taskItem = document.createElement("li")
  // taskItem.innerText = newTask
  taskList.innerHTML += `
    <li> ${newTask} 
    <button data-action="delete">deletion</button>
    </li>
  `
  // taskList.appendChild(taskItem)
  taskForm.reset()
  
})

taskList.addEventListener("click", function (e){
  console.log(e.target)
  if(e.target.dataset.action === "delete") {
    e.target.parentElement.remove()
  }
})