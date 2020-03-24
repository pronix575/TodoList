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
    backgroundImg: {
      url: 'src/media/imgs/wallpaper-catalina.jpg',
    }
  }
}

const appData = appDataStore.get(appDataStore.key)

if (appData) {

  applicationState.currentRoute = appData.currentRoute

  appData.todos.objects.forEach((item, i) => {
    if (item != null) {
      let obj = new TodoItem(item.title, item.description, item.id, item.state.position, item.state.is_open)
      applicationState.todos.objects.push(obj)
    }
  });

} else {
  appDataStore.set(applicationState)
}
