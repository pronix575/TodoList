class TodoItem {
  constructor(title, description, id, position, is_open, date) {
    this.id = id || Date.now();
    this.title = title;
    this.description = description;
    this.state = {
      position: position || 'start',
      is_open: is_open || false,
    };

    let createdDate = (new Date(date) == 'Invalid Date') ? (false) : new Date(date)

    this.createdDate = createdDate || new Date();
  }

  render() {
    let container = $(getClassName(this.state.position));

    let template = `
      <div class="todoItem" id="${this.id}">
        <div class="flex" style="align-items: none">
          <h3>${this.title}</h3>

          <div class="flex" style="align-items: none; height: 100%;">
            <div class="todo-item-position-changer flex">

                <div class="position-changer-left flex">
                  <i class="fa fa-angle-left fa-lg" id="left${this.id}"></i>
                </div>

                <div class="position-changer-right flex">
                  <i class="fa fa-angle-right fa-lg" id="right${this.id}"></i>
                </div>

            </div>
          </div>

        </div>
        <div class="additional-data" id="additional-data${this.id}">
          <p>${this.description}</p>
          <div class="flex" style="margin: 5px 0 0 0">
            <div class="deleteBtn flex" id="deleteBtn${this.id}"><i class="fa fa-trash-o"></i></div>
            <p class="todoItemDate">${this.createdDate.toDateString()}</p>
          </div>
        </div>
      </div>
    `
    container.append(template)

    let display_prop = (this.state.is_open) ? 'block' : 'none';

    $(`#additional-data${this.id}`).css({
      'display': display_prop
    })
  }

  to_right() {
    this.state.position = (this.state.position == 'start') ? 'in-progress' : 'done';
    renderDel(this.id)
    this.render()
    this.listen()

    appDataStore.set(applicationState)
  }

  to_left() {
    this.state.position = (this.state.position == 'done') ? 'in-progress' : 'start';
    renderDel(this.id)
    this.render()
    this.listen()

    appDataStore.set(applicationState)
  }

  delete() {
    applicationState.todos.removeObj(this.id)
    renderDel(this.id)
  }

  interact() {
    let display_prop = (this.state.is_open) ? 'none' : 'block';

    $(`#additional-data${this.id}`).css({
      'display': display_prop
    })

    this.state.is_open = (this.state.is_open) ? false : true;

    appDataStore.set(applicationState)
  }

  listen() {
    //interact
    $(`#${this.id}`).click(() => {
      this.interact()
    })

    //deleting
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
