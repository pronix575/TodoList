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
