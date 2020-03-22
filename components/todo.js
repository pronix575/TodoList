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
        <h3>${this.title}</h3>
        <p>${this.id}</p>
        <div class="deleteBtn" id="deleteBtn${this.id}">delete</div>
      </div>
    `
    container.append(template)
  }

  to_right() {
    this.state.position = (this.state.position == 'start') ? 'in-progress' : 'done';
    renderDel(this.id)
    this.render()
  }

  to_left() {
    this.state.position = (this.state.position == 'done') ? 'in-progress' : 'start';
    renderDel(this.id)
    this.render()
  }

  delete() {
    renderDel(this.id)
  }

  listen() {
    $(`#deleteBtn${this.id}`).click(() => {
      this.delete()
    })
  }
}
