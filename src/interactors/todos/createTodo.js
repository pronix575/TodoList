const listenTodoCreateBtn = () => {
  $(".add-todo").click(() => {

    addTodoWindow.render()

    const addTodoSaveBtn = $(getClassName('addTodoSaveBtn')),
          closeAddTodoWindow = $(getClassName('closeAddTodoWindow'));

    closeAddTodoWindow.click(() => {
      addTodoWindow.remove()
    })

    addTodoSaveBtn.click(() => {

      let title = $(getIdName('addTodoTitle')),
          text = $(getIdName('addTodoText'));

      const todoItem = new TodoItem(title.val(), text.val())
      applicationState.todos.objects.push(todoItem)

      appDataStore.set(applicationState)

      todoItem.render()
      addTodoWindow.remove()
      todoItem.listen()
    })
  })
}
