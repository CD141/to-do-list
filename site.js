
const item = 'To-Do List Item'
const input = document.querySelector('input')
const button = document.querySelector('button')

const todos = JSON.parse(localStorage.getItem('todo-list')) || []

const renderTodos = todos.map(( input ) => {

    const li = document.createElement('li')
    li.innerHTML = ''
    li.textContent = todos.text
    input.append(li)
})

button.addEventListener('click', () => {
    todos.push({ text: input.value, completed: false })
    localStorage.setItem('todo-list', JSON.stringify(todos))

})

    
    

    