const todos = new View('.app',
`
  <div class="todos-view">
    <div>
    </div>
    <div class="start column" style="border-radius: 10px 0 0 0">
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
  </div>
`,

'todos-view'
);
