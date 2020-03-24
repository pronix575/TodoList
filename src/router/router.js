const router = {

  renderSettingsView() {
    applicationState.currentRoute = 'settings'

    applicationState.changeRoute('settings')

    settings.render()

    appDataStore.set(applicationState)
  },

  renderTodosView() {
    applicationState.currentRoute = 'todos'

    applicationState.changeRoute('todos')

    todos.render()
    listenTodoCreateBtn()

    applicationState.todos.renderAll()

    appDataStore.set(applicationState)
  },

  renderDashboardView() {
    applicationState.currentRoute = 'dashboard'

    applicationState.changeRoute('dashboard')

    dashboard.render()

    appDataStore.set(applicationState)
  }
}
