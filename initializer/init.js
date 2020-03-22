const init = (url) => {
  $.getScript(url);
}

const scripts = [
  'scripts/render.js',
  'router/todos.js',
  'components/todo.js',
  'interactors/todos/createTodo.js'
]

scripts.forEach((item, i) => {
  init(item)
});
