const router = {

  renderSettingsView() {
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
    applicationState.changeRoute('todos')

    todos.render()
    listenTodoCreateBtn()

    applicationState.todos.renderAll()

    appDataStore.set(applicationState)
  },

  renderDashboardView() {
    applicationState.changeRoute('dashboard')

    dashboard.render()

    appDataStore.set(applicationState)
  }
}
