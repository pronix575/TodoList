class TodoItem {
  constructor(title, description) {
    this.id = Date.now();
    this.title = title;
    this.description = description;
    this.state = {
      position: 'start',
      is_active: true,
    }
  }

  render() {
    const container = $(getClassName(this.state.position));

    const template = `
      <div class="todoItem" id="${this.id}">
        <div class="flex">
          <h3 style="margin: 7px 0 0 0">${this.title}</h3>

          <div class="todo-item-position-changer flex">
            <div class="position-changer-left flex">
              <i class="fa fa-angle-left fa-lg" id="left${this.id}"></i>
            </div>

            <div class="position-changer-left flex">
              <i class="fa fa-angle-right fa-lg" id="right${this.id}"></i>
            </div>
          </div>

        </div>
        <div class="additional-data">
          <p>${this.id}</p>
          <div class="deleteBtn" id="deleteBtn${this.id}">delete</div>
        </div>
      </div>
    `
    container.append(template)
  }

  to_right() {
    this.state.position = (this.state.position == 'start') ? 'in-progress' : 'done';
    renderDel(this.id)
    this.render()
    this.listen()
  }

  to_left() {
    this.state.position = (this.state.position == 'done') ? 'in-progress' : 'start';
    renderDel(this.id)
    this.render()
    this.listen()
  }

  delete() {
    renderDel(this.id)
  }

  listen() {
    $(`#deleteBtn${this.id}`).click(() => {
      this.delete()
    })

    $(`#left${this.id}`).click(() => {
      this.to_left()
    })

    $(`#right${this.id}`).click(() => {
      this.to_right()
    })
  }
}
