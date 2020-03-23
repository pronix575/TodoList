const init = (url) => {
  $.getScript(url);
}

// initializer -> router -> view -> components <-> interactor

const scripts = [
  //render engine
  'scripts/render.js',

  //state
  'state/state.js',

  //interactors
  'interactors/todos/createTodo.js',

  //views
  'views/view.js',
  'views/todos.js',
  'views/settings.js',

  //components
  'components/todo.js',
  'components/addTodoWindow.js',
  'components/menu.js',

  //routes
  'router/router.js',

  //presentor
  'presentor/presentor.js',
]

scripts.forEach((item, i) => {
  init(item)
});
