const initializeApplication = () => {

  backgroundImg.render()

  $(".backgroundImg-content").css({
	   "background-image": `url(${applicationState.settings.backgroundImg.url})`,
  })

  $("body").css({
    "--main-block-background": applicationState.settings.backgroundColor.color
  })

  changeThemeColor(applicationState.settings.backgroundColor.theme)

  menu.render()
  menu.listenMenu()

  switch (applicationState.currentRoute) {
    case 'todos':
      router.renderTodosView()
      break;
    case 'settings':
      router.renderSettingsView()
      break;
    case 'dashboard':
      router.renderDashboardView()
      break;
    default:
      router.renderTodosView()
  }
}

initializeApplication()
