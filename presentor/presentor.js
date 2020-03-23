const initializeApplication = () => {
  menu.render()
  router.renderTodosView()


  $('.routerLink-todos').click(() => {
    router.renderTodosView()
  })

  $('.routerLink-settings').click(() => {
    router.renderSettingsView()
  })
}

initializeApplication()
