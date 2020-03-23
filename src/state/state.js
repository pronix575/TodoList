const applicationState = {
  currentRoute: '',

  todos: {
    objects: [],
    renderAll() {
      applicationState.todos.objects.forEach((item, i) => {
        item.render()
        item.listen()
      });
    }
  },

  changeRoute() {
    settings.remove()
    todos.remove()
  }
}
