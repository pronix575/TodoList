const router = {
  routes: [
    'todos',
    'settings',
    'analitics',
  ],

  renderSettingsView() {
    applicationState.currentRoute = 'Settings'

    $('.routerLink-todos').attr({"class": "routerLink routerLink-todos"})
    $('.routerLink-settings').attr("class", "routerLink routerLink-active routerLink-settings")

    applicationState.changeRoute()

    settings.render()
  },

  renderTodosView() {
    applicationState.currentRoute = 'Todos'

    $('.routerLink-settings').attr({"class": "routerLink routerLink-settings"})
    $('.routerLink-todos').attr({"class": "routerLink routerLink-active routerLink-todos"})

    applicationState.changeRoute()

    todos.render()
    listenTodoCreateBtn()

    applicationState.todos.renderAll()
  }
}
