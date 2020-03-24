const init = (url) => {
  $.getScript(url);
}

// initializer -> router -> view -> components <-> interactor

const scripts = [
  //render engine
  'scripts/render.js',

  //dataStore
  'dataStore/store.js',

  //views
  'views/view.js',
  'views/todos.js',
  'views/settings.js',
  'views/dashboard.js',

  //routes
  'router/router.js',

  //components
  'components/addTodoWindow.js',
  'components/todo.js',
  'components/menu.js',
  'components/backgroundImage.js',

  //state
  'state/state.js',

  //interactors
  'interactors/todos/createTodo.js',
  'interactors/menuRouterInteractor.js',

  //presentor
  'presentor/presentor.js',
]

scripts.forEach((item, i) => {
  init('src/' + item)
});
