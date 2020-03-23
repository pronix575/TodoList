const applicationState = {
  currentRoute: '',

  todos: {
    objects: []
  },

  changeRoute() {
    settings.remove()
    todos.remove()
  }
}
