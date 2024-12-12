
const item = 'To-Do List Item'
const input = document.querySelector('input')
const button = document.querySelector('button')
const todolist = document.querySelector('ul')

const todos = JSON.parse(localStorage.getItem('todo-list')) || []

todolist.innerHTML = ''

const renderTodos = todos.map(( todos ) => {
    const li = document.createElement('li')
    li.textContent = todos.text
    todolist.append(li)

})

button.addEventListener('click', () => {
    todos.push({ text: input.value, completed: false })
    localStorage.setItem('todo-list', JSON.stringify(todos))
    location.reload();
})
