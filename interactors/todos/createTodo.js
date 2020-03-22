$(".add-todo").click(() => {
  const addTodoWindow = new AddTodoWindow();
  addTodoWindow.render()

  const addTodoSaveBtn = $(getClassName('addTodoSaveBtn'))

  addTodoSaveBtn.click(() => {

    let title = $(getIdName('addTodoTitle')),
        text = $(getIdName('addTodoText'));

    const todoItem = new TodoItem(title.val(), text.val())

    todoItem.render()
    addTodoWindow.remove()

    todoItem.listen()
  })
})
