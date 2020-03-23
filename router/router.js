const router = {
  routes: [
    'todos',
    'settings',
    'analitics',
  ],

  renderSettingsView() {
    applicationState.currentRoute = 'Settings'

    applicationState.changeRoute()

    settings.render()
  },

  renderTodosView() {
    applicationState.currentRoute = 'Todos'

    applicationState.changeRoute()

    todos.render()
    listenTodos()
    
    applicationState.todos.renderAll()
  }
}
