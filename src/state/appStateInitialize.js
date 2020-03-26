const appData = appDataStore.get(appDataStore.key)

if (appData) {

  applicationState.currentRoute = appData.currentRoute

  appData.todos.objects.forEach((item, i) => {
    if (item != null) {
      let obj = new TodoItem(item.title, item.description, item.id, item.state.position, item.state.is_open, item.createdDate)
      applicationState.todos.objects.push(obj)
    }
  });

  applicationState.settings.backgroundColor = appData.settings.backgroundColor
  applicationState.settings.backgroundImg.url = appData.settings.backgroundImg.url
  applicationState.settings.backgroundImg.link = appData.settings.backgroundImg.link

} else {
  appDataStore.set(applicationState)
}
