class AddTodoWindow {
  render() {
    const body = $(getClassName('app'));

    const template = `
      <div class="addTodoWindow">
        <form class="addTodoForm flex">
          <div style="width: 100%">
            <h3>Add todo</h3>
            <input type="text" placeholder="title" id="addTodoTitle">
            <input type="text" placeholder="description" id="addTodoText">

            <div class="flex" style="width: 100%; justify-content: center">
              <div class="addTodoSaveBtn">Save</div>
            </div>
          </div>
        </form>
      </div>
    `

    body.append(template)
  }

  remove() {
    let win = 'addTodoWindow';

    renderDelClass(win)
  }
}
