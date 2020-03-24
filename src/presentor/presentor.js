const initializeApplication = () => {
  backgroundImg.render()

  $(".backgroundImg-content").css({
	"background-image": `url(${applicationState.settings.backgroundImg.url})`,
  })

  menu.render()
  menu.listenMenu()
  router.renderTodosView()
}

initializeApplication()
