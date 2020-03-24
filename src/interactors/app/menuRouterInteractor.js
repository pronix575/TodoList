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

const changeActiveRouterLink = (link) => {
  switch (link) {
    case 'todos':
      $('.routerLink-dashboard').attr({"class": "routerLink flex routerLink-dashboard"})
      $('.routerLink-settings').attr({"class": "routerLink routerLink-settings"})
      $('.routerLink-todos').attr({"class": "routerLink routerLink-active routerLink-todos"})
      break;
    case 'settings':
      $('.routerLink-dashboard').attr({"class": "routerLink flex routerLink-dashboard"})
      $('.routerLink-todos').attr({"class": "routerLink routerLink-todos"})
      $('.routerLink-settings').attr("class", "routerLink routerLink-active routerLink-settings")
      break;
    case 'dashboard':
      $('.routerLink-dashboard').attr({"class": "routerLink flex routerLink-dashboard routerLink-active"})
      $('.routerLink-settings').attr({"class": "routerLink routerLink-settings"})
      $('.routerLink-todos').attr({"class": "routerLink routerLink-todos"})
      break;
    // default:
  }
}
