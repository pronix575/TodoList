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

  getDate() {
    let month = (this.createdDate.getMonth().toString().length == 1) ? ('0' + this.createdDate.getMonth().toString()) : this.createdDate.getMonth()

    return `<span style="color: #f8f8f8">${this.createdDate.getHours()}:${this.createdDate.getMinutes()}</span> ${this.createdDate.getDate()}.${month}.${this.createdDate.getFullYear()}`
  }

  render() {
    let container = $(getClassName(this.state.position));
    let template = `
      <div class="todoItem" id="${this.id}">
        <div class="flex short-description" style="align-items: none">
          <div class="title">
            <h3>${this.title}</h3>
          </div>

          <div class="flex left-right-buttons" style="align-items: none; height: 100%;">
            <div class="todo-item-position-changer flex">

                <div class="position-changer-left flex" id="left${this.id}">
                  <i class="fa fa-angle-left fa-lg"></i>
                </div>

                <div class="position-changer-right flex" id="right${this.id}">
                  <i class="fa fa-angle-right fa-lg"></i>
                </div>

            </div>
          </div>
        </div>
        <div class="additional-data" id="additional-data${this.id}">
          <p>${this.description}</p>
          <div class="flex" style="margin: 5px 0 0 0">
            
            <div class="flex">
              <div class="deleteBtn flex" id="deleteBtn${this.id}"><i class="fa fa-trash-o"></i></div>

              <div style="width: 10px"></div>

              <div class="editBtn flex" id="editBtn${this.id}"><i class="fa fa-edit"></i></div>
            </div>
            
            <p class="todoItemDate">
              ${this.getDate()}
            </p>
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

  remove() {
    renderDel(this.id)
  }

  edit() {
    editTodoWindow.render()

    const editTodoSave = () => {
      this.title = $("#editTodoTitle").val();
      this.description = $("#editTodoText").val();

      this.remove()
      this.render()
      this.listen()

      editTodoWindow.remove()
      
      appDataStore.set(applicationState)
    }

    $("#editTodoTitle").val(this.title)
    $("#editTodoText").val(this.description)

    const editTodoSaveBtn = $(getClassName('editTodoSaveBtn')),
      closeEditTodoWindow = $(getClassName('closeEditTodoWindow'));

    closeEditTodoWindow.click(() => {
      $("#editTodoTitle").val(this.title)
      $("#editTodoText").val(this.description)
      addTodoWindow.remove()
    })

    editTodoSaveBtn.click(() => {
      editTodoSave()
    })

    $(".editTodoWindow").keypress(function(eventObject){
      if (eventObject.which == 13){
        editTodoSave()
      }
    });  
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
      areYouShureToDelete.render()

      $(".areYouShureFormYesBtn").click(() => {
        this.delete()
        areYouShureToDelete.remove()
      })
      
      $(".areYouShureFormNoBtn").click(() => {
        areYouShureToDelete.remove()
      })

    })

    $(`#editBtn${this.id}`).click(() => {
      this.edit()
    })

    $(`#left${this.id}`).click(() => {
      this.to_left()
    })

    $(`#right${this.id}`).click(() => {
      this.to_right()
    })
  }
}
