
const item = 'To-Do List Item'
const input = document.querySelector('input')
const button = document.querySelector('button')

const todos = JSON.parse(localStorage.getItem('todo-list')) || []

const renderTodos = 

button.addEventListener('click', () => {
    todos.push({ text: input.value, completed: false })
    p.textContent = input.value
})

[
    { "text": "Buy milk", "completed": false },
    { "text": "Walk the dog", "completed": false },
    { "text": "Do homework", "completed": false }
]

