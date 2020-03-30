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

    chart = new ChartsEngine('dashboardActivityStatistic')
    // chart.initValues([231.5, 231.6, 236.7, 250, 251, 256.12, 240.12, 243.21, 223.31, 240, 234, 225, 219, 225, 230, 280, 250, 260, 278, 281, 270, 279, 291, 286, 279, 272, 270, 278])
    chart.initValues([1, 2, 1, 0, 2, 3, 2, 1, 2, 1, 0,0,0,0,2,2,4,2,1,5,7,6])
    chart.render()

    appDataStore.set(applicationState)
  }
}
