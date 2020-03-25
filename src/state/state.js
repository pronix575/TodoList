const applicationState = {
  currentRoute: 'todos',

  todos: {
    objects: [],
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
      url: 'src/media/imgs/wallpaper-catalina.jpg',
    }
  }
}
