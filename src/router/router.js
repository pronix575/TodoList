const router = {
  routes: [
    'todos',
    'settings',
    'analitics',
  ],

  renderSettingsView() {
    applicationState.currentRoute = 'Settings'

    changeActiveRouterLink('settings')

    applicationState.changeRoute()

    settings.render()
  },

  renderTodosView() {
    applicationState.currentRoute = 'Todos'

    changeActiveRouterLink('todos')

    applicationState.changeRoute()

    todos.render()
    listenTodoCreateBtn()

    applicationState.todos.renderAll()
  },

  renderDashboardView() {
    applicationState.currentRoute = 'Dashboard'

    changeActiveRouterLink('dashboard')

    applicationState.changeRoute()

    dashboard.render()
  }
}
