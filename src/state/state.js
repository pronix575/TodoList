const applicationState = {
  currentRoute: '',

  todos: {
    objects: [],
    renderAll() {
      applicationState.todos.objects.forEach((item, i) => {
        item.render()
        item.listen()
      });
    },
    removeObj(id) {
      applicationState.todos.objects.forEach((item, i) => {
        if (item.id == id) {
          delete applicationState.todos.objects[i]
        }
      });
    }
  },

  changeRoute() {
    settings.remove()
    todos.remove()
    dashboard.remove()
  },

  settings: {
    backgroundImg: {
      url: 'src/media/imgs/wallpaper-catalina.jpg',
    }
  }
}
