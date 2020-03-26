const initializeApplication = () => {

  startWindow.render()

  setTimeout(() => {
    startWindow.remove()
  }, 2000)

  backgroundImg.render()

  $(".backgroundImg-content").css({
	   "background-image": applicationState.settings.backgroundImg.url,
  })

  $("body").css({
    "--main-block-background": applicationState.settings.backgroundColor.color
  })

  console.log(`#wallpaper-${applicationState.settings.backgroundImg.link}`)

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
