const initializeApplication = () => {
  backgroundImg.render()
  menu.render()
  menu.listenMenu()
  router.renderTodosView()
}

initializeApplication()
