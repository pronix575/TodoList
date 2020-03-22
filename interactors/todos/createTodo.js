const todoItems = []

$(".add-todo").click(() => {
  const todoItem = new TodoItem('hello', 'world')

  todoItems.push(todoItem)

  todoItem.render()
  todoItem.listen()
})
