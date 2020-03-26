const init = (url) => {
  $.getScript(url);
}

// initializer -> router -> view -> components <-> interactor

const scripts = [
  //render engine
  'scripts/scripts',

  //dataStore
  'dataStore/store',

  //views
  'views/view',
  'views/todos',
  'views/settings',
  'views/dashboard',

  //routes
  'router/router',

  //components
  'components/todos/addTodoWindow',
  'components/todos/todoItem',
  'components/editTodo',
  'components/app/menu',
  'components/app/backgroundImage',
  'components/app/startWindow',

  //state
  'state/state',
  'state/appStateInitialize',

  //interactors
  'interactors/todos/createTodo',
  'interactors/app/menuRouterInteractor',
  'interactors/settings/colorChanger',
  'interactors/settings/wallpaperChanger',

  //presentor
  'presentor/presentor',
]

scripts.forEach((item, i) => {
  init(`src/${item}.js`)
});
