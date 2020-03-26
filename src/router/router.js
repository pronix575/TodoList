const router = {

  renderSettingsView() {
    applicationState.currentRoute = 'settings'

    applicationState.changeRoute('settings')

    settings.render()

    $(getIdName(applicationState.settings.backgroundColor.link)).attr({
      "class": "colorChangerCircle colorChangerCircle-active"
    })

    listenSettingsChangeMainColor()
    listenChangeBackgroundImg()

    $(`#wallpaper-${applicationState.settings.backgroundImg.link}`).attr({
      "class": "wallpaperChangerItem wallpaperChangerItem-active"
    })

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
