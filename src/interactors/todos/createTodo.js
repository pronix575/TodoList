const saveTodoItemEvent = () => {
  let title = $(getIdName('addTodoTitle')),
      text = $(getIdName('addTodoText'));

  const todoItem = new TodoItem(title.val(), text.val())
  applicationState.todos.objects.push(todoItem)

  appDataStore.set(applicationState)

  todoItem.render()
  addTodoWindow.remove()
  todoItem.listen()
}

const listenTodoCreateBtn = () => {
  $(".add-todo").click(() => {

    addTodoWindow.render()

    $(".addTodoWindow").keypress(function(eventObject){
      if (eventObject.which == 13){
        saveTodoItemEvent()
      }
    }); 

    const addTodoSaveBtn = $(getClassName('addTodoSaveBtn')),
          closeAddTodoWindow = $(getClassName('closeAddTodoWindow'));
          
    closeAddTodoWindow.click(() => {
      addTodoWindow.remove()
    })

    addTodoSaveBtn.click(() => {
      saveTodoItemEvent()
    }) 
  });  

}
