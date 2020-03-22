const root = $('.app')
const template = `
  <div class="menu column">
  </div>
  <div class="start column">
    <div style="display: -webkit-flex;display: -ms-flex;display: flex; justify-content: space-between; -ms-align-items: center;align-items: center;">
      Todos
      <div class="add-todo">
        + add
      </div>
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

root.html(template)
