const router = {
  renderSettingsView() {
   todos.remove()
   settings.remove()
   settings.render()
 },

 renderTodosView() {
   settings.remove()
   todos.remove()
   todos.render()
   listenTodos()
 }
}
