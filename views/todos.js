let root = 'app'
let template = `
  <div class="menu column">
  </div>
  <div class="start column">
    <div style="display: -webkit-flex;display: -ms-flex;display: flex; justify-content: space-between; -ms-align-items: center;align-items: center;">
      Todos
    </div>
    <div class="add-todo">
      + add
    </div>
  </div>
  <div class="in-progress column">
    <div style="display: -webkit-flex;display: -ms-flex;display: flex; justify-content: space-between; -ms-align-items: center;align-items: center;">
      In Progress
    </div>
  </div>
  <div class="done column">
    <div style="display: -webkit-flex;display: -ms-flex;display: flex; justify-content: space-between; -ms-align-items: center;align-items: center;">
      Done
    </div>
  </div>
`

const todos = new View(root, template)
