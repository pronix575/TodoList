const applicationState = {
  currentRoute: 'todos',

  todos: {
    objects: [],

    renderItem(id) {
      applicationState.todos.objects.forEach((item, i) => {
        if (item.id == id) {
          applicationState.todos.objects[i].render()
        }
      });
    },

    renderAll() {
      applicationState.todos.objects.forEach((item, i) => {
        item.render()
        item.listen()

        appDataStore.set(applicationState)
      });
    },

    removeObj(id) {
      applicationState.todos.objects.forEach((item, i) => {
        if (item.id == id) {
          delete applicationState.todos.objects[i]
        }
      });

      appDataStore.set(applicationState)
    }
  },

  changeRoute(route) {
    applicationState.currentRoute = route

    settings.remove()
    todos.remove()
    dashboard.remove()

    changeActiveRouterLink(route)

    appDataStore.set(applicationState)
  },

  settings: {
    backgroundColor: {
      link: 'colorChangerCircle-deepBlue',
      color: '#0055ff',
      theme: 'white',
    },
    backgroundImg: {
      link: 'catalina',
      url: 'url(src/media/imgs/wallpaper-catalina.jpg)',
    }
  }
}
