const init = (url) => {
  $.getScript(url);
}

// initializer -> router -> view -> components <-> interactor

const scripts = [
  //render engine
  'scripts/render.js',

  //state
  'state/state.js',

  //views
  'views/view.js',
  'views/todos.js',
  'views/settings.js',

  //routes
  'router/router.js',

  //components
  'components/addTodoWindow.js',
  'components/todo.js',
  'components/menu.js',

  //interactors
  'interactors/todos/createTodo.js',

  //presentor
  'presentor/presentor.js',
]

scripts.forEach((item, i) => {
  init(item)
});
