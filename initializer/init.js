const init = (url) => {
  $.getScript(url);
}

// initializer -> router -> view -> components <-> interactor

const scripts = [
  //render engine
  'scripts/render.js',

  //components
  'components/todo.js',
  'components/addTodoWindow.js',

  //views
  'views/view.js',
  'views/todos.js',

  //routes
  'router/router.js',

  //interactors
  'interactors/todos/createTodo.js',
]

scripts.forEach((item, i) => {
  init(item)
});
