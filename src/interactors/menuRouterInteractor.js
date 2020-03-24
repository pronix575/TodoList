menu.listenMenu = () => {
  $('.routerLink-todos').click(() => {
    router.renderTodosView()
  })

  $('.routerLink-settings').click(() => {
    router.renderSettingsView()
  })

  $('.routerLink-dashboard').click(() => {
    router.renderDashboardView()
  })
}
